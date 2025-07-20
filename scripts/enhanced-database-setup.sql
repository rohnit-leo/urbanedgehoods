-- Enhanced database setup with all necessary tables and features

-- Drop existing tables if they exist (to recreate with better structure)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS product_images CASCADE;
DROP TABLE IF EXISTS product_variants CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
DROP TABLE IF EXISTS customer_profiles CASCADE;
DROP TABLE IF EXISTS wishlist CASCADE;
DROP TABLE IF EXISTS cart CASCADE;
DROP TABLE IF EXISTS product_reviews CASCADE;
DROP TABLE IF EXISTS coupons CASCADE;

-- Enhanced products table with more features
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  short_description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_price DECIMAL(10,2), -- Original price for discounts
  category VARCHAR(100) NOT NULL,
  subcategory VARCHAR(100),
  brand VARCHAR(100) DEFAULT 'UrbanEdge Hoods',
  sku VARCHAR(100) UNIQUE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  featured BOOLEAN DEFAULT false,
  trending BOOLEAN DEFAULT false,
  new_arrival BOOLEAN DEFAULT false,
  status VARCHAR(20) DEFAULT 'active',
  sizes JSONB DEFAULT '["S", "M", "L", "XL", "XXL"]',
  colors JSONB DEFAULT '["Black", "White"]',
  materials JSONB DEFAULT '["Cotton"]',
  care_instructions TEXT,
  stock_quantity INTEGER DEFAULT 0,
  weight DECIMAL(8,2), -- in grams
  dimensions JSONB, -- length, width, height
  tags JSONB DEFAULT '[]',
  seo_title VARCHAR(255),
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product images table (multiple images per product)
CREATE TABLE product_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text VARCHAR(255),
  sort_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product variants table (for different size/color combinations)
CREATE TABLE product_variants (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  size VARCHAR(10),
  color VARCHAR(50),
  sku VARCHAR(100) UNIQUE,
  price DECIMAL(10,2),
  stock_quantity INTEGER DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enhanced categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  banner_image_url TEXT,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  seo_title VARCHAR(255),
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer profiles table
CREATE TABLE customer_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  date_of_birth DATE,
  gender VARCHAR(20),
  address_line1 TEXT,
  address_line2 TEXT,
  city VARCHAR(100),
  state VARCHAR(100),
  pincode VARCHAR(10),
  country VARCHAR(100) DEFAULT 'India',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enhanced orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  customer_id UUID REFERENCES customer_profiles(id),
  customer_email VARCHAR(255) NOT NULL,
  customer_name VARCHAR(255),
  customer_phone VARCHAR(20),
  total_amount DECIMAL(10,2) NOT NULL,
  discount_amount DECIMAL(10,2) DEFAULT 0,
  shipping_amount DECIMAL(10,2) DEFAULT 0,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  payment_status VARCHAR(20) DEFAULT 'pending',
  payment_method VARCHAR(50),
  razorpay_order_id VARCHAR(255),
  razorpay_payment_id VARCHAR(255),
  razorpay_signature VARCHAR(255),
  shipping_address JSONB NOT NULL,
  billing_address JSONB,
  order_status VARCHAR(20) DEFAULT 'processing',
  tracking_number VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enhanced order items table
CREATE TABLE order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  variant_id UUID REFERENCES product_variants(id),
  product_title VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  size VARCHAR(10),
  color VARCHAR(50),
  product_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Wishlist table
CREATE TABLE wishlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Shopping cart table
CREATE TABLE cart (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES product_variants(id),
  quantity INTEGER DEFAULT 1,
  size VARCHAR(10),
  color VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product reviews table
CREATE TABLE product_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  order_id UUID REFERENCES orders(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  review_text TEXT,
  verified_purchase BOOLEAN DEFAULT false,
  helpful_count INTEGER DEFAULT 0,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coupons table
CREATE TABLE coupons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255),
  description TEXT,
  discount_type VARCHAR(20) DEFAULT 'percentage',
  discount_value DECIMAL(10,2) NOT NULL,
  min_order_amount DECIMAL(10,2) DEFAULT 0,
  max_discount_amount DECIMAL(10,2),
  max_uses INTEGER,
  used_count INTEGER DEFAULT 0,
  valid_from TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  valid_until TIMESTAMP WITH TIME ZONE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  status VARCHAR(20) DEFAULT 'active',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Insert enhanced categories
INSERT INTO categories (name, slug, description, featured, sort_order) VALUES
('T-Shirts', 't-shirts', 'Oversized cotton t-shirts with premium quality and street-style appeal', true, 1),
('Hoodies', 'hoodies', '400 GSM heavy cotton fleece hoodies for ultimate comfort and style', true, 2),
('Jackets', 'jackets', 'Premium triple-layered bomber jackets and outerwear', true, 3),
('Shirts', 'shirts', 'Cuban collar shirts perfect for partywear and casual occasions', false, 4),
('Originals', 'originals', 'Exclusive ORIGINALS collection - Limited edition premium pieces', true, 5),
('Cargo Pants', 'cargo-pants', 'Utility cargo pants and stylish coordinates for street fashion', false, 6),
('Women', 'women', 'Premium full-length and crop tops designed for women', false, 7),
('Custom Orders', 'custom-orders', 'Customized sportswear and bulk orders for teams and colleges', false, 8)
ON CONFLICT (slug) DO NOTHING;

-- Insert sample products with enhanced data
INSERT INTO products (
  title, description, short_description, price, compare_price, category, 
  slug, featured, trending, new_arrival, sizes, colors, materials, 
  care_instructions, stock_quantity, tags, seo_title, seo_description
) VALUES
(
  'Premium Oversized Black Hoodie', 
  'Experience ultimate comfort with our signature oversized hoodie crafted from 400 GSM heavy cotton fleece. This premium piece features a stone-washed finish that gives it a vintage appeal while maintaining the bold, urban aesthetic that defines UrbanEdge Hoods. Perfect for layering or wearing solo, this hoodie embodies the spirit of street culture with its relaxed fit and premium construction. Made in India with attention to every detail, from the reinforced seams to the soft interior lining.',
  'Premium 400 GSM cotton fleece hoodie with stone-washed finish',
  2999.00, 3499.00, 'hoodies', 'premium-oversized-black-hoodie', true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "Charcoal", "Dark Grey"]', '["100% Cotton", "400 GSM Fleece"]',
  'Machine wash cold, tumble dry low, do not bleach', 50,
  '["oversized", "premium", "streetwear", "cotton", "hoodie"]',
  'Premium Oversized Black Hoodie - UrbanEdge Hoods',
  'Shop the premium oversized black hoodie from UrbanEdge Hoods. 400 GSM cotton fleece, stone-washed finish, perfect for street style.'
),
(
  'Urban Edge Bomber Jacket - ORIGINALS', 
  'From our exclusive ORIGINALS collection comes this triple-layered premium bomber jacket that redefines street luxury. Meticulously crafted with attention to every detail, this jacket features a water-resistant outer shell, insulating middle layer, and soft interior lining. The contemporary silhouette combined with functional elements like multiple pockets and adjustable cuffs makes it perfect for the urban explorer. Limited edition piece that represents the pinnacle of UrbanEdge craftsmanship.',
  'Triple-layered premium bomber jacket from ORIGINALS collection',
  4999.00, 5999.00, 'jackets', 'urban-edge-bomber-jacket-originals', true, false, true,
  '["S", "M", "L", "XL"]', '["Black", "Olive Green", "Navy Blue"]', '["Polyester Blend", "Water Resistant"]',
  'Dry clean recommended, or machine wash gentle cycle', 25,
  '["bomber", "originals", "premium", "limited edition", "jacket"]',
  'Urban Edge Bomber Jacket ORIGINALS - Limited Edition',
  'Exclusive ORIGINALS bomber jacket from UrbanEdge Hoods. Triple-layered premium construction, limited edition streetwear.'
),
(
  'Stone Washed Oversized Tee', 
  'Our signature oversized t-shirt showcases the perfect blend of comfort and style. Made from breathable cotton with a unique stone-washing process that gives each piece its distinctive vintage character. The relaxed fit and dropped shoulders create the perfect streetwear silhouette, while the premium cotton ensures all-day comfort. This essential piece works seamlessly with any urban wardrobe, from casual day looks to layered street style ensembles.',
  'Breathable cotton oversized t-shirt with vintage stone-washed appeal',
  1499.00, 1799.00, 't-shirts', 'stone-washed-oversized-tee', true, false, false,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "White", "Grey", "Olive"]', '["100% Cotton", "Stone Washed"]',
  'Machine wash cold, hang dry for best results', 100,
  '["oversized", "cotton", "stone-washed", "tee", "streetwear"]',
  'Stone Washed Oversized Tee - UrbanEdge Hoods',
  'Premium stone-washed oversized t-shirt from UrbanEdge Hoods. Breathable cotton, vintage appeal, perfect for street style.'
),
(
  'Cuban Collar Party Shirt', 
  'Elevate your evening wardrobe with our gender-neutral Cuban collar shirt designed for the modern urban individual. This versatile piece transitions effortlessly from casual daywear to sophisticated evening looks. The relaxed collar and flowing silhouette create a contemporary aesthetic that works for all body types. Crafted from premium fabric with a subtle sheen, this shirt embodies the intersection of street culture and refined fashion.',
  'Gender-neutral Cuban collar shirt perfect for party wear',
  2499.00, 2999.00, 'shirts', 'cuban-collar-party-shirt', false, true, false,
  '["XS", "S", "M", "L", "XL"]', '["Black", "White", "Cream", "Navy"]', '["Premium Cotton Blend"]',
  'Machine wash cold, iron on medium heat', 75,
  '["cuban collar", "party wear", "gender neutral", "shirt"]',
  'Cuban Collar Party Shirt - UrbanEdge Hoods',
  'Gender-neutral Cuban collar party shirt from UrbanEdge Hoods. Premium fabric, versatile style for modern urban fashion.'
),
(
  'Premium White Hoodie', 
  'Clean, minimalist design meets premium construction in this essential white hoodie. The crisp white colorway provides the perfect canvas for your personal style while the oversized fit ensures maximum comfort. Made from our signature cotton blend with reinforced stitching and premium hardware. This piece represents the minimalist side of street fashion - sometimes less truly is more.',
  'Clean white oversized hoodie with premium cotton blend',
  3299.00, 3799.00, 'hoodies', 'premium-white-hoodie', true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["White", "Off-White", "Cream"]', '["Cotton Blend", "Premium Quality"]',
  'Machine wash cold with like colors, tumble dry low', 40,
  '["white", "minimalist", "premium", "hoodie", "clean"]',
  'Premium White Hoodie - UrbanEdge Hoods',
  'Premium white oversized hoodie from UrbanEdge Hoods. Clean minimalist design, premium cotton blend construction.'
),
(
  'Streetwear Cargo Pants', 
  'Functionality meets street style in these utility cargo pants designed for the urban adventurer. Multiple pockets provide practical storage while the tapered fit maintains a contemporary silhouette. Constructed from durable cotton twill with reinforced stress points, these pants are built to withstand the demands of city life while keeping you looking sharp. The adjustable waist and cuffs ensure a perfect fit for every body type.',
  'Utility cargo pants with multiple pockets for street fashion',
  3499.00, 3999.00, 'cargo-pants', 'streetwear-cargo-pants', false, true, true,
  '["28", "30", "32", "34", "36", "38"]', '["Black", "Khaki", "Olive", "Grey"]', '["Cotton Twill", "Durable Construction"]',
  'Machine wash cold, hang dry recommended', 60,
  '["cargo", "utility", "streetwear", "pants", "functional"]',
  'Streetwear Cargo Pants - UrbanEdge Hoods',
  'Utility cargo pants from UrbanEdge Hoods. Multiple pockets, durable construction, perfect for street fashion and urban adventures.'
)
ON CONFLICT (slug) DO NOTHING;

-- Insert product images for each product
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'premium-oversized-black-hoodie';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'urban-edge-bomber-jacket-originals';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'stone-washed-oversized-tee';

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_products_trending ON products(trending);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_product_images_product_id ON product_images(product_id);
CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);

-- Create function to generate order numbers
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TEXT AS $$
BEGIN
  RETURN 'UH' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(NEXTVAL('order_number_seq')::TEXT, 4, '0');
END;
$$ LANGUAGE plpgsql;

-- Create sequence for order numbers
CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1;

-- Create trigger to auto-generate order numbers
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL THEN
    NEW.order_number := generate_order_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_order_number
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_order_number();

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_customer_profiles_updated_at BEFORE UPDATE ON customer_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cart_updated_at BEFORE UPDATE ON cart FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
