-- Add UrbanEdge Hoods Sweatshirts and Hoodies Collection to Supabase
-- 5 Premium 400 GSM Cotton Hoodies and Sweatshirts

-- Create or update the sweatshirts-hoodies category
INSERT INTO categories (name, slug, description, featured, sort_order) VALUES
('Sweatshirts & Hoodies', 'sweatshirts-hoodies', 'Premium 400 GSM cotton fleece hoodies and sweatshirts. Oversized fits with stone-washed finish for ultimate comfort and street style.', true, 3)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  featured = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order;

-- Add the 5 hoodie and sweatshirt products
INSERT INTO products (
  title, description, short_description, price, compare_price, category, 
  slug, featured, trending, new_arrival, sizes, colors, materials, 
  care_instructions, stock_quantity, tags, seo_title, seo_description
) VALUES

-- Product 1: Black Oversized Hoodie
(
  'Essential Black Oversized Hoodie',
  'Master the art of effortless street style with the Essential Black Oversized Hoodie by UrbanEdge Hoods. This timeless piece represents the foundation of any serious streetwear collection – a perfect blend of comfort, style, and versatility that works for every occasion and season.

Crafted from premium 400 GSM cotton fleece with our signature stone-washed finish, this hoodie delivers unmatched softness and durability. The oversized silhouette provides the relaxed, contemporary fit that defines modern streetwear, while the classic black colorway ensures maximum versatility and easy styling.

The spacious kangaroo pocket provides practical storage and hand-warming comfort, while the adjustable drawstring hood offers customizable coverage and style. The ribbed cuffs and hem maintain the hoodie''s shape while providing a secure, comfortable fit that moves with you throughout your day.

This hoodie is designed for the streetwear purist who understands that sometimes the most powerful statement comes from classic simplicity. It''s the kind of piece that works equally well for lazy Sunday mornings, late-night studio sessions, or elevated street style looks.

Built to last with reinforced seams and premium construction techniques, this hoodie will become softer and more comfortable with each wash while maintaining its perfect fit and rich black color. The stone-washed finish gives it an authentic, lived-in feel from day one.

Styling Tips:
• Layer over a white tee with black jeans for classic monochrome style
• Pair with grey joggers and white sneakers for ultimate comfort
• Add a denim jacket over the hoodie for layered street style
• Style with cargo pants and boots for an urban utility look
• Perfect for gym sessions, casual hangouts, and cozy indoor days

The Essential Black Oversized Hoodie is where comfort meets style, creating a piece that''s both foundational and fashionable.',
  'Premium 400 GSM black oversized hoodie with stone-washed finish and classic streetwear fit',
  1.00, 3499.00, 'sweatshirts-hoodies', 'essential-black-oversized-hoodie', 
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "Charcoal"]', 
  '["400 GSM Cotton Fleece", "Stone-Washed Finish", "Premium Construction"]',
  'Machine wash cold, tumble dry low, do not bleach, iron on low heat', 40,
  '["hoodie", "oversized", "black", "streetwear", "400 GSM", "cotton fleece"]',
  'Essential Black Oversized Hoodie - UrbanEdge Hoods',
  'Premium 400 GSM black oversized hoodie. Stone-washed cotton fleece, perfect streetwear fit. Shop UrbanEdge Hoods.'
),

-- Product 2: "The Sun Goes Down" Graphic Sweatshirt
(
  'The Sun Goes Down Graphic Sweatshirt',
  'Embrace the poetry of twilight with The Sun Goes Down Graphic Sweatshirt by UrbanEdge Hoods. This artistic piece features a stunning photographic print that captures the serene beauty of sunset over water, combined with bold typography that speaks to the contemplative moments when day transitions to night.

The centerpiece graphic showcases a breathtaking sunset scene with warm orange and pink hues reflecting off calm waters, creating a sense of peace and introspection. The "THE SUN GOES DOWN" text adds a poetic element that resonates with anyone who appreciates life''s quiet, beautiful moments.

Made from premium 400 GSM cotton fleece that provides exceptional warmth and comfort. The crewneck design offers a clean, sophisticated silhouette that''s perfect for those who prefer the classic sweatshirt style without a hood. The oversized fit ensures contemporary street style appeal while maintaining comfort.

This sweatshirt is designed for dreamers, artists, and anyone who finds beauty in everyday moments. It''s perfect for those golden hour walks, creative sessions, or any time you want to carry a piece of sunset serenity with you.

The high-quality graphic printing ensures the beautiful sunset image and typography remain vibrant wash after wash. The stone-washed cotton fleece becomes softer with each wear, making this piece a long-term wardrobe favorite.

Styling Tips:
• Pair with light wash jeans and canvas sneakers for a relaxed artistic vibe
• Layer under a denim jacket to let the graphic peek through
• Style with neutral-toned joggers for comfortable creative sessions
• Add warm-toned accessories that complement the sunset colors
• Perfect for art galleries, coffee shops, and contemplative moments

The Sun Goes Down Graphic Sweatshirt is where art meets comfort, creating a piece that''s both visually stunning and emotionally resonant.',
  'Artistic crewneck sweatshirt featuring beautiful sunset photography and poetic typography',
  1.00, 3299.00, 'sweatshirts-hoodies', 'the-sun-goes-down-graphic-sweatshirt',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "Charcoal"]',
  '["400 GSM Cotton Fleece", "High-Quality Graphic Print", "Stone-Washed Finish"]',
  'Machine wash cold, tumble dry low, do not bleach, iron on low heat avoiding print', 35,
  '["sweatshirt", "graphic", "sunset", "artistic", "crewneck", "400 GSM"]',
  'The Sun Goes Down Graphic Sweatshirt - UrbanEdge Hoods',
  'Artistic graphic sweatshirt with sunset photography. Premium 400 GSM cotton fleece. Shop UrbanEdge Hoods.'
),

-- Product 3: Clean White Oversized Hoodie
(
  'Pure White Oversized Hoodie',
  'Embrace minimalist perfection with the Pure White Oversized Hoodie by UrbanEdge Hoods. This clean, sophisticated piece represents the power of simplicity in streetwear – a blank canvas that allows your personal style to shine while providing unmatched comfort and versatility.

The pristine white colorway offers endless styling possibilities and works beautifully across all seasons. This hoodie embodies the minimalist aesthetic that''s become synonymous with contemporary street fashion, proving that sometimes the most impactful pieces are the simplest ones.

Crafted from premium 400 GSM cotton fleece with our signature stone-washed treatment that gives the white fabric a soft, lived-in feel without compromising its clean appearance. The oversized silhouette provides the relaxed, modern fit that defines current streetwear trends.

The spacious kangaroo pocket and adjustable drawstring hood offer both functionality and style, while the ribbed cuffs and hem ensure a comfortable, secure fit. The quality construction means this hoodie will maintain its shape and pristine appearance wash after wash.

This hoodie is designed for the minimalist who appreciates quality over quantity and understands that true style comes from confidence, not complexity. It''s the perfect foundation piece that works with everything in your wardrobe.

The clean white color makes this hoodie perfect for customization – whether you want to add patches, embroidery, or simply let it speak for itself. It''s a piece that grows with your style and adapts to your creative vision.

Styling Tips:
• Create a clean monochrome look with white jeans and white sneakers
• Pair with black joggers for classic contrast
• Layer under colorful jackets to let them pop
• Add minimal silver jewelry for subtle sophistication
• Perfect for creative work, casual luxury, and minimalist aesthetics

The Pure White Oversized Hoodie is where simplicity meets sophistication, creating a piece that''s both timeless and contemporary.',
  'Clean white oversized hoodie in premium 400 GSM cotton fleece with minimalist design',
  1.00, 3199.00, 'sweatshirts-hoodies', 'pure-white-oversized-hoodie',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["White", "Off-White", "Cream"]',
  '["400 GSM Cotton Fleece", "Stone-Washed Finish", "Minimalist Design"]',
  'Machine wash cold, tumble dry low, do not bleach, iron on low heat', 45,
  '["hoodie", "white", "oversized", "minimalist", "clean", "400 GSM"]',
  'Pure White Oversized Hoodie - UrbanEdge Hoods',
  'Clean white oversized hoodie in premium cotton fleece. Minimalist streetwear perfection. Shop UrbanEdge Hoods.'
),

-- Product 4: Forest Green Hoodie
(
  'Forest Green Oversized Hoodie',
  'Connect with nature''s tranquility through the Forest Green Oversized Hoodie by UrbanEdge Hoods. This earthy, sophisticated piece brings the calming essence of deep forests to urban streetwear, offering a refreshing alternative to traditional black and white hoodies.

The rich forest green colorway evokes feelings of growth, harmony, and natural sophistication. This color works beautifully across all seasons – from autumn''s changing leaves to spring''s fresh growth – making it a versatile addition to any streetwear collection.

Constructed from premium 400 GSM cotton fleece with our signature stone-washed finish that enhances the natural, organic feel of the forest green color. The oversized fit provides contemporary street style appeal while ensuring maximum comfort for all-day wear.

The classic hoodie features include a spacious kangaroo pocket for essentials and hand warming, plus an adjustable drawstring hood for customizable coverage and style. The ribbed cuffs and hem provide structure while maintaining the relaxed, comfortable fit.

This hoodie is designed for the nature-conscious individual who wants to bring elements of the outdoors into their urban lifestyle. It''s perfect for those who appreciate earth tones and want to stand out from the sea of black and grey streetwear.

The forest green color pairs beautifully with both neutral and earth-toned pieces, making it surprisingly versatile despite its distinctive hue. The premium construction ensures this hoodie will maintain its rich color and comfortable fit through countless wears and washes.

Styling Tips:
• Pair with khaki or tan joggers for an earthy, cohesive look
• Style with black jeans for sophisticated contrast
• Layer under a denim jacket for casual outdoor vibes
• Add brown leather accessories to complement the natural aesthetic
• Perfect for outdoor activities, casual hangouts, and nature-inspired looks

The Forest Green Oversized Hoodie is where natural beauty meets urban comfort, creating a piece that''s both grounding and stylish.',
  'Rich forest green oversized hoodie in premium 400 GSM cotton fleece with natural aesthetic',
  1.00, 3399.00, 'sweatshirts-hoodies', 'forest-green-oversized-hoodie',
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Forest Green", "Sage Green", "Olive"]',
  '["400 GSM Cotton Fleece", "Stone-Washed Finish", "Natural Color"]',
  'Machine wash cold, tumble dry low, do not bleach, iron on low heat', 30,
  '["hoodie", "forest green", "oversized", "natural", "earth tones", "400 GSM"]',
  'Forest Green Oversized Hoodie - UrbanEdge Hoods',
  'Rich forest green oversized hoodie. Premium 400 GSM cotton fleece with natural aesthetic. Shop UrbanEdge Hoods.'
),

-- Product 5: UrbanEdge Hoods Brand Logo Sweatshirt
(
  'UrbanEdge Hoods Signature Sweatshirt',
  'Represent the brand with pride in the UrbanEdge Hoods Signature Sweatshirt. This exclusive piece features our iconic brand logo in a stunning geometric color-block design that showcases the creative spirit and artistic vision that defines UrbanEdge Hoods.

The centerpiece graphic displays "URBANEDGE HOODS" in bold typography across a vibrant geometric composition featuring warm oranges, cool greys, rich browns, and bright yellows. This artistic interpretation of our brand identity makes this sweatshirt a true collector''s piece for brand enthusiasts.

Crafted from premium 400 GSM cotton fleece that provides exceptional warmth and comfort. The crewneck design offers a clean, sophisticated silhouette that lets the bold graphic take center stage. The oversized fit ensures contemporary streetwear appeal while maintaining all-day comfort.

This sweatshirt is designed for the brand loyalist who wants to showcase their connection to UrbanEdge Hoods while wearing a piece of wearable art. The geometric design represents the intersection of street culture, artistic expression, and premium fashion that defines our brand.

The high-quality screen printing ensures the vibrant colors and sharp details of the logo design remain crisp and bright through countless wears and washes. The stone-washed cotton fleece becomes softer with each wear while maintaining the sweatshirt''s perfect fit.

This piece works as both a statement of brand loyalty and a standalone artistic garment. It''s perfect for brand events, streetwear meetups, or any time you want to represent UrbanEdge Hoods in style.

Styling Tips:
• Keep the rest of your outfit neutral to let the logo design shine
• Pair with black or grey joggers for balanced contrast
• Add accessories that pick up colors from the geometric design
• Layer under a solid-colored jacket for subtle brand representation
• Perfect for brand events, streetwear culture gatherings, and loyal customer wear

The UrbanEdge Hoods Signature Sweatshirt is where brand identity meets artistic expression, creating a piece that''s both personal and universally appealing.',
  'Exclusive brand sweatshirt featuring geometric UrbanEdge Hoods logo in vibrant colors',
  1.00, 3599.00, 'sweatshirts-hoodies', 'urbanedge-hoods-signature-sweatshirt',
  true, true, true,
  '["S", "M", "L", "XL", "XXL"]', '["White", "Cream", "Multi-Color Logo"]',
  '["400 GSM Cotton Fleece", "High-Quality Screen Print", "Brand Signature"]',
  'Machine wash cold, tumble dry low, do not bleach, iron on low heat avoiding print', 25,
  '["sweatshirt", "brand logo", "geometric", "signature", "exclusive", "400 GSM"]',
  'UrbanEdge Hoods Signature Sweatshirt - Brand Logo',
  'Exclusive UrbanEdge Hoods brand sweatshirt with geometric logo design. Premium 400 GSM cotton fleece.'
);

-- Add product images for each hoodie/sweatshirt
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/hoodie-1.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'essential-black-oversized-hoodie';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/hoodie-2.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'the-sun-goes-down-graphic-sweatshirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/hoodie-3.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'pure-white-oversized-hoodie';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/hoodie-4.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'forest-green-oversized-hoodie';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/hoodie-5.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'urbanedge-hoods-signature-sweatshirt';

-- Verify the hoodies/sweatshirts have been added
SELECT 
  'Hoodies & Sweatshirts Added' as status,
  COUNT(*) as product_count
FROM products 
WHERE category = 'sweatshirts-hoodies';

-- Show all hoodies/sweatshirts with their details
SELECT 
  p.title,
  p.price,
  p.category,
  p.featured,
  p.trending,
  p.new_arrival,
  p.stock_quantity,
  pi.image_url
FROM products p
LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.is_primary = true
WHERE p.category = 'sweatshirts-hoodies'
ORDER BY p.created_at DESC;

-- Update collections to show the new category as featured
UPDATE categories SET featured = true WHERE slug = 'sweatshirts-hoodies';
