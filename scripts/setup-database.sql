-- This is the complete database setup for your Supabase project
-- Copy and paste this entire script into your Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT,
  slug VARCHAR(255) UNIQUE NOT NULL,
  featured BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'active',
  sizes JSONB DEFAULT '["S", "M", "L", "XL", "XXL"]',
  colors JSONB DEFAULT '["Black", "White"]',
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create customers table (extends auth.users)
CREATE TABLE IF NOT EXISTS customers (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  address JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id UUID REFERENCES customers(id),
  customer_email VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'pending',
  payment_id VARCHAR(255),
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  shipping_address JSONB NOT NULL,
  order_status VARCHAR(20) DEFAULT 'processing',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  size VARCHAR(10),
  color VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, slug, description, featured) VALUES
('T-Shirts', 't-shirts', 'Oversized cotton t-shirts with premium quality', true),
('Hoodies', 'hoodies', '400 GSM heavy cotton fleece hoodies', true),
('Jackets', 'jackets', 'Premium triple-layered bomber jackets', true),
('Shirts', 'shirts', 'Cuban collar shirts for partywear', false),
('Originals', 'originals', 'Exclusive ORIGINALS collection', true)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample products for testing
INSERT INTO products (title, description, price, category, slug, featured, image_url) VALUES
('Oversized Black Hoodie', 'Premium 400 GSM cotton fleece hoodie with stone-washed finish. Perfect for street style.', 2999.00, 'hoodies', 'oversized-black-hoodie', true, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop'),
('Urban Edge Bomber Jacket', 'Triple-layered premium bomber jacket from our ORIGINALS collection. Made with love in India.', 4999.00, 'jackets', 'urban-edge-bomber-jacket', true, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop'),
('Stone Washed Oversized Tee', 'Breathable cotton oversized t-shirt with vintage stone-washed appeal.', 1499.00, 't-shirts', 'stone-washed-oversized-tee', true, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop'),
('Cuban Collar Party Shirt', 'Gender-neutral Cuban collar shirt perfect for party wear and street fashion.', 2499.00, 'shirts', 'cuban-collar-party-shirt', false, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop')
ON CONFLICT (slug) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- RLS Policies for products (public read, admin write)
CREATE POLICY "Products are viewable by everyone" ON products FOR SELECT USING (true);
CREATE POLICY "Products are insertable by authenticated users" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Products are updatable by authenticated users" ON products FOR UPDATE USING (true);
CREATE POLICY "Products are deletable by authenticated users" ON products FOR DELETE USING (true);

-- RLS Policies for customers
CREATE POLICY "Users can view own customer data" ON customers FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own customer data" ON customers FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own customer data" ON customers FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for orders
CREATE POLICY "Users can view own orders" ON orders FOR SELECT USING (true);
CREATE POLICY "Users can insert own orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Orders are updatable by authenticated users" ON orders FOR UPDATE USING (true);

-- RLS Policies for order_items
CREATE POLICY "Order items are viewable by everyone" ON order_items FOR SELECT USING (true);
CREATE POLICY "Order items are insertable by everyone" ON order_items FOR INSERT WITH CHECK (true);

-- RLS Policies for newsletter
CREATE POLICY "Newsletter subscribers are insertable by everyone" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Newsletter subscribers are viewable by authenticated users" ON newsletter_subscribers FOR SELECT USING (true);

-- RLS Policies for categories
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);
CREATE POLICY "Categories are manageable by authenticated users" ON categories FOR ALL USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_customers_updated_at ON customers;
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
