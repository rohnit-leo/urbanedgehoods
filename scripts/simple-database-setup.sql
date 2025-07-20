-- Simple database setup for UrbanEdge Hoods (No permissions needed)

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

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_email VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'pending',
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
('Oversized Black Hoodie', 'Premium 400 GSM cotton fleece hoodie with stone-washed finish. Perfect for street style and urban fashion.', 2999.00, 'hoodies', 'oversized-black-hoodie', true, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop'),
('Urban Edge Bomber Jacket', 'Triple-layered premium bomber jacket from our ORIGINALS collection. Made with love in India for the streets.', 4999.00, 'jackets', 'urban-edge-bomber-jacket', true, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop'),
('Stone Washed Oversized Tee', 'Breathable cotton oversized t-shirt with vintage stone-washed appeal. Gen Z streetwear essential.', 1499.00, 't-shirts', 'stone-washed-oversized-tee', true, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop'),
('Cuban Collar Party Shirt', 'Gender-neutral Cuban collar shirt perfect for party wear and street fashion. Premium quality fabric.', 2499.00, 'shirts', 'cuban-collar-party-shirt', false, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop'),
('Premium White Hoodie', 'Clean white oversized hoodie with premium cotton blend. Minimalist design for maximum impact.', 3299.00, 'hoodies', 'premium-white-hoodie', true, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop'),
('Streetwear Cargo Pants', 'Utility cargo pants with multiple pockets. Perfect for street style and urban adventures.', 3499.00, 't-shirts', 'streetwear-cargo-pants', false, 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop')
ON CONFLICT (slug) DO NOTHING;
