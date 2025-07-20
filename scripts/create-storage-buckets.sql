-- Create storage buckets for UrbanEdge Hoods

-- Create product images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'product-images',
  'product-images',
  true,
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- Create hero images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'hero-images',
  'hero-images',
  true,
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Create category images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'category-images',
  'category-images',
  true,
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Create brand assets bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'brand-assets',
  'brand-assets',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/png', 'image/svg+xml', 'image/webp']
) ON CONFLICT (id) DO NOTHING;

-- Set up RLS policies for storage buckets

-- Product images policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'product-images');
CREATE POLICY "Authenticated users can upload product images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'product-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update product images" ON storage.objects FOR UPDATE USING (bucket_id = 'product-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete product images" ON storage.objects FOR DELETE USING (bucket_id = 'product-images' AND auth.role() = 'authenticated');

-- Hero images policies
CREATE POLICY "Public Access Hero" ON storage.objects FOR SELECT USING (bucket_id = 'hero-images');
CREATE POLICY "Authenticated users can upload hero images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'hero-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update hero images" ON storage.objects FOR UPDATE USING (bucket_id = 'hero-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete hero images" ON storage.objects FOR DELETE USING (bucket_id = 'hero-images' AND auth.role() = 'authenticated');

-- Category images policies
CREATE POLICY "Public Access Categories" ON storage.objects FOR SELECT USING (bucket_id = 'category-images');
CREATE POLICY "Authenticated users can upload category images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'category-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update category images" ON storage.objects FOR UPDATE USING (bucket_id = 'category-images' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete category images" ON storage.objects FOR DELETE USING (bucket_id = 'category-images' AND auth.role() = 'authenticated');

-- Brand assets policies
CREATE POLICY "Public Access Brand" ON storage.objects FOR SELECT USING (bucket_id = 'brand-assets');
CREATE POLICY "Authenticated users can upload brand assets" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'brand-assets' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can update brand assets" ON storage.objects FOR UPDATE USING (bucket_id = 'brand-assets' AND auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can delete brand assets" ON storage.objects FOR DELETE USING (bucket_id = 'brand-assets' AND auth.role() = 'authenticated');
