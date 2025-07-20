-- Clear existing demo products and add real UE Hoods Bomber Jackets

-- Delete existing demo products
DELETE FROM order_items;
DELETE FROM product_images;
DELETE FROM products;

-- Update categories to match real collection
UPDATE categories SET 
  name = 'UE Hoods Bomber Jackets',
  slug = 'ue-hoods-bomber-jackets',
  description = 'Premium triple-layered bomber jackets with exclusive vector art designs. In-house manufactured with soft cushioning layer and waterproof outer fabric.',
  featured = true,
  sort_order = 1
WHERE slug = 'jackets';

-- Add real bomber jacket products
INSERT INTO products (
  title, description, short_description, price, compare_price, category, 
  slug, featured, trending, new_arrival, sizes, colors, materials, 
  care_instructions, stock_quantity, tags, seo_title, seo_description
) VALUES

-- Product 1: Turquoise Vector Art Bomber
(
  'Cyber Luxe Turquoise Bomber Jacket',
  'Step into the future of streetwear with the Cyber Luxe Turquoise Bomber Jacket by UrbanEdge Hoods. This stunning piece features an electrifying turquoise base adorned with intricate vector art patterns and futuristic typography that screams innovation. The baggy-fit silhouette provides ultimate comfort while making a bold fashion statement that sets you apart from the crowd.

Crafted with UrbanEdge Hoods'' signature triple-layer construction, this bomber jacket features a waterproof outer shell with premium vector art printing, a soft cushioning middle layer for superior insulation, and a luxurious microfiber inner lining that feels like a gentle embrace. The unique geometric patterns and tech-inspired graphics make this piece a true work of wearable art.

Perfect for the digital generation who values both style and substance, this jacket transitions seamlessly from casual street looks to elevated urban fashion. The vibrant turquoise color combined with contrasting black accents creates a visual impact that''s impossible to ignore.

Styling Tips:
• Pair with black skinny jeans and white sneakers for a striking contrast
• Layer over a black hoodie to let the turquoise pop
• Add silver accessories to complement the futuristic aesthetic
• Style with dark wash denim and combat boots for an edgy street look

The Cyber Luxe Turquoise Bomber is where technology meets fashion, delivering unmatched quality and cutting-edge style that defines the future of streetwear.',
  'Electrifying turquoise bomber with futuristic vector art patterns and triple-layer construction',
  1.00, 4999.00, 'ue-hoods-bomber-jackets', 'cyber-luxe-turquoise-bomber-jacket', 
  true, true, true,
  '["S", "M", "L", "XL", "XXL"]', '["Turquoise", "Black"]', 
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 25,
  '["bomber jacket", "vector art", "turquoise", "waterproof", "triple layer"]',
  'Cyber Luxe Turquoise Bomber Jacket - UrbanEdge Hoods',
  'Premium turquoise bomber jacket with vector art patterns. Triple-layered construction, waterproof, and ultra-comfortable. Shop UrbanEdge Hoods.'
),

-- Product 2: Abstract Collage Bomber
(
  'Artistic Fusion Abstract Bomber Jacket',
  'Unleash your creative spirit with the Artistic Fusion Abstract Bomber Jacket by UrbanEdge Hoods. This masterpiece showcases a stunning collage of abstract patterns, vibrant colors, and artistic elements that transform outerwear into wearable art. The dynamic mix of pink, blue, orange, and black creates a visual symphony that celebrates individuality and creative expression.

This isn''t just a jacket – it''s a canvas of creativity. Each abstract element has been carefully placed to create a harmonious yet bold design that speaks to the artist within. The baggy-fit construction ensures comfort while the eye-catching patterns guarantee you''ll be the center of attention wherever you go.

Built with UrbanEdge Hoods'' premium triple-layer technology, featuring a waterproof artistic outer shell, plush cushioning middle layer, and silky-smooth microfiber interior. The abstract patterns are printed using advanced techniques that ensure longevity and vibrant color retention.

Perfect for creative souls, art enthusiasts, and anyone who dares to be different. This jacket is your statement piece that says you''re not afraid to stand out and express your unique personality through fashion.

Styling Tips:
• Keep the rest of your outfit minimal to let the jacket be the star
• Pair with black jeans and white sneakers for balance
• Add colorful accessories that pick up the jacket''s accent colors
• Layer over a plain white tee to highlight the artistic patterns

The Artistic Fusion Abstract Bomber is where creativity meets craftsmanship, delivering a one-of-a-kind piece that''s as unique as you are.',
  'Bold abstract bomber with artistic collage patterns in vibrant multi-colors',
  1.00, 5499.00, 'ue-hoods-bomber-jackets', 'artistic-fusion-abstract-bomber-jacket',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["Multi-Color", "Abstract"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 20,
  '["bomber jacket", "abstract art", "multi-color", "artistic", "unique design"]',
  'Artistic Fusion Abstract Bomber Jacket - UrbanEdge Hoods',
  'Unique abstract bomber jacket with artistic collage patterns. Premium triple-layer construction. Express your creativity with UrbanEdge Hoods.'
),

-- Product 3: Turquoise Vector Detailed Bomber
(
  'Digital Wave Turquoise Bomber Jacket',
  'Ride the digital wave with the Digital Wave Turquoise Bomber Jacket by UrbanEdge Hoods. This sophisticated piece features the same stunning turquoise base as our Cyber Luxe model but with enhanced vector art detailing that showcases intricate geometric patterns and digital-inspired graphics. The design represents the perfect fusion of technology and street fashion.

The detailed vector artwork tells a story of digital evolution, with each pattern carefully crafted to create depth and visual interest. The turquoise color palette evokes feelings of innovation and forward-thinking, making this jacket perfect for trendsetters and tech enthusiasts who want their fashion to reflect their lifestyle.

Constructed with our signature triple-layer system: waterproof outer shell with high-definition vector printing, temperature-regulating cushioning layer, and ultra-soft microfiber interior that provides all-day comfort. The baggy fit ensures freedom of movement while maintaining that coveted streetwear silhouette.

This jacket is designed for the modern urban explorer who appreciates both form and function. Whether you''re navigating city streets or attending creative events, this piece ensures you look effortlessly cool while staying comfortable.

Styling Tips:
• Create a monochromatic look with different shades of blue and teal
• Pair with charcoal grey joggers and fresh white sneakers
• Add tech accessories like smartwatches or wireless earbuds
• Layer over a fitted black turtleneck for a sleek, modern aesthetic

The Digital Wave Turquoise Bomber is your gateway to the future of fashion, where technology and style converge in perfect harmony.',
  'Sophisticated turquoise bomber with enhanced digital vector art patterns',
  1.00, 4799.00, 'ue-hoods-bomber-jackets', 'digital-wave-turquoise-bomber-jacket',
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Turquoise", "Digital Blue"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 30,
  '["bomber jacket", "digital art", "turquoise", "vector graphics", "tech fashion"]',
  'Digital Wave Turquoise Bomber Jacket - UrbanEdge Hoods',
  'Premium turquoise bomber with digital vector art. Triple-layered, waterproof, perfect for tech-savvy fashion lovers. UrbanEdge Hoods.'
),

-- Product 4: Orange Wheel Pattern Bomber
(
  'Velocity Orange Bomber Jacket',
  'Accelerate your style with the Velocity Orange Bomber Jacket by UrbanEdge Hoods. This high-energy piece features dynamic wheel and gear-inspired graphics in bold orange and black, creating a design that embodies speed, power, and mechanical precision. Perfect for those who live life in the fast lane and want their fashion to match their energy.

The striking orange base is adorned with intricate circular patterns, gear motifs, and velocity-inspired graphics that create a sense of movement even when you''re standing still. This jacket speaks to automotive enthusiasts, adrenaline junkies, and anyone who appreciates bold, statement-making fashion.

Built with UrbanEdge Hoods'' advanced triple-layer construction featuring a waterproof outer shell with fade-resistant printing, insulating cushioning layer for optimal temperature control, and premium microfiber interior that feels incredible against the skin. The baggy fit provides comfort without compromising the sharp, urban aesthetic.

This jacket is designed for individuals who aren''t afraid to make a statement. Whether you''re at a car meet, music festival, or just cruising the city, this piece ensures you''ll turn heads and start conversations.

Styling Tips:
• Pair with black cargo pants and orange-accented sneakers for a coordinated look
• Layer over a white graphic tee to let the orange patterns pop
• Add black accessories with orange details to tie the look together
• Style with dark denim and work boots for an industrial-inspired outfit

The Velocity Orange Bomber is where automotive inspiration meets street fashion, delivering a piece that''s as dynamic as your lifestyle.',
  'High-energy orange bomber with dynamic wheel and gear-inspired graphics',
  1.00, 4899.00, 'ue-hoods-bomber-jackets', 'velocity-orange-bomber-jacket',
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Orange", "Black"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 22,
  '["bomber jacket", "orange", "automotive", "gear graphics", "high energy"]',
  'Velocity Orange Bomber Jacket - UrbanEdge Hoods',
  'Bold orange bomber with automotive-inspired graphics. Premium construction, waterproof, perfect for high-energy lifestyles. UrbanEdge Hoods.'
),

-- Product 5: Brand Text Pattern Bomber
(
  'Signature White Text Bomber Jacket',
  'Make your mark with the Signature White Text Bomber Jacket by UrbanEdge Hoods. This clean, sophisticated piece features our brand name artistically repeated across a pristine white base, creating a pattern that''s both subtle and striking. It''s the perfect representation of brand pride and minimalist luxury combined.

The all-over "URBANEDGE HOODS" text pattern creates a unique texture and visual interest while maintaining the clean, premium aesthetic that defines luxury streetwear. This jacket is for those who appreciate understated elegance with a contemporary twist – it''s loud enough to make a statement but refined enough for any occasion.

Crafted with our signature triple-layer technology: waterproof white outer shell with precision text printing, temperature-regulating cushioning layer, and ultra-luxurious microfiber interior. The baggy fit ensures comfort while the monochromatic design offers versatility that works with any wardrobe.

This piece is perfect for brand enthusiasts, minimalism lovers, and anyone who wants to represent UrbanEdge Hoods in style. It''s the kind of jacket that works equally well at a gallery opening or a casual weekend outing.

Styling Tips:
• Create a clean monochromatic look with white and cream tones
• Pair with black jeans for classic contrast
• Add silver or white gold accessories for a premium touch
• Layer over colored hoodies to create interesting color combinations

The Signature White Text Bomber is where brand identity meets fashion excellence, creating a piece that''s both personal and universally appealing.',
  'Clean white bomber featuring artistic URBANEDGE HOODS text pattern throughout',
  1.00, 4599.00, 'ue-hoods-bomber-jackets', 'signature-white-text-bomber-jacket',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["White", "Black Text"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 35,
  '["bomber jacket", "white", "brand text", "minimalist", "signature design"]',
  'Signature White Text Bomber Jacket - UrbanEdge Hoods',
  'Premium white bomber with URBANEDGE HOODS text pattern. Minimalist luxury meets streetwear. Triple-layered construction.'
),

-- Product 6: Blue Geometric Bomber
(
  'Arctic Blue Geometric Bomber Jacket',
  'Embrace the cool sophistication of the Arctic Blue Geometric Bomber Jacket by UrbanEdge Hoods. This striking piece features a mesmerizing blend of blue and white geometric patterns that create a sense of depth and movement. The design is inspired by arctic landscapes and digital architecture, resulting in a jacket that''s both natural and futuristic.

The intricate geometric patterns flow across the jacket like digital snow, creating visual texture that changes as you move. The blue and white color palette evokes feelings of calm confidence and cool sophistication, making this jacket perfect for those who want to make a statement without being too loud.

Built with UrbanEdge Hoods'' premium triple-layer system: waterproof outer shell with high-definition geometric printing, insulating cushioning layer for optimal comfort, and silky microfiber interior that feels amazing against the skin. The relaxed fit ensures all-day comfort while maintaining that coveted streetwear aesthetic.

This jacket is designed for individuals who appreciate geometric art, architectural design, and cool-toned fashion. It''s perfect for creative professionals, design enthusiasts, and anyone who wants to add a touch of sophisticated edge to their wardrobe.

Styling Tips:
• Pair with white jeans and blue sneakers for a tonal look
• Layer over a navy hoodie to create depth
• Add silver accessories to complement the cool tones
• Style with grey joggers and white trainers for a relaxed vibe

The Arctic Blue Geometric Bomber is where mathematical precision meets artistic expression, creating a piece that''s both intellectually appealing and visually stunning.',
  'Sophisticated blue bomber with mesmerizing geometric patterns in blue and white',
  1.00, 4699.00, 'ue-hoods-bomber-jackets', 'arctic-blue-geometric-bomber-jacket',
  true, false, false,
  '["S", "M", "L", "XL", "XXL"]', '["Arctic Blue", "White"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 28,
  '["bomber jacket", "geometric", "blue", "arctic", "sophisticated design"]',
  'Arctic Blue Geometric Bomber Jacket - UrbanEdge Hoods',
  'Premium blue bomber with geometric patterns. Cool sophistication meets streetwear. Triple-layered, waterproof construction.'
),

-- Product 7: Rainbow Abstract Bomber
(
  'Spectrum Burst Multi-Color Bomber Jacket',
  'Explode with color in the Spectrum Burst Multi-Color Bomber Jacket by UrbanEdge Hoods. This vibrant masterpiece features an explosion of colors including electric pink, cyan blue, sunshine yellow, and deep purples, creating a kaleidoscope effect that celebrates the full spectrum of creativity and self-expression.

This jacket is pure energy in wearable form. The dynamic color combinations and abstract patterns create a piece that''s impossible to ignore – it''s for those who live boldly and aren''t afraid to show their colorful personality to the world. Each color flows into the next, creating a harmonious chaos that represents the beautiful complexity of modern life.

Constructed with our advanced triple-layer technology: waterproof outer shell with vibrant, fade-resistant printing, temperature-regulating cushioning layer, and ultra-soft microfiber interior. The baggy fit ensures comfort while the explosive colors ensure you''ll be the most memorable person in any room.

Perfect for festival-goers, artists, performers, and anyone who believes life is too short for boring clothes. This jacket is your ticket to standing out in a world of monotone fashion.

Styling Tips:
• Keep everything else neutral to let the jacket be the star
• Pair with black jeans and white sneakers for balance
• Add one colorful accessory that matches a color in the jacket
• Layer over a black hoodie to ground the bright colors

The Spectrum Burst Multi-Color Bomber is where rainbow dreams meet reality, creating a piece that''s as vibrant and unique as your personality.',
  'Explosive multi-color bomber with vibrant abstract patterns in full spectrum colors',
  1.00, 5299.00, 'ue-hoods-bomber-jackets', 'spectrum-burst-multi-color-bomber-jacket',
  true, true, true,
  '["S", "M", "L", "XL", "XXL"]', '["Multi-Color", "Rainbow"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 18,
  '["bomber jacket", "multi-color", "rainbow", "vibrant", "festival fashion"]',
  'Spectrum Burst Multi-Color Bomber Jacket - UrbanEdge Hoods',
  'Vibrant multi-color bomber with rainbow abstract patterns. Festival-ready, premium construction. Express yourself with UrbanEdge Hoods.'
),

-- Product 8: Golden Geometric Bomber
(
  'Golden Circuit Luxury Bomber Jacket',
  'Elevate your status with the Golden Circuit Luxury Bomber Jacket by UrbanEdge Hoods. This premium piece features sophisticated golden and black geometric patterns that evoke luxury electronics and high-end technology. The design represents the intersection of wealth, technology, and street fashion, creating a jacket that''s both aspirational and accessible.

The golden geometric patterns flow across the black base like precious metal circuitry, creating a design that''s both futuristic and timeless. This jacket speaks to success, ambition, and the pursuit of excellence – it''s for those who have arrived or are on their way to greatness.

Crafted with our signature triple-layer construction: waterproof outer shell with metallic golden printing that catches light beautifully, premium cushioning layer for superior comfort, and luxurious microfiber interior that feels like silk. The relaxed fit ensures comfort while the golden accents ensure you''ll shine in any setting.

Perfect for entrepreneurs, luxury enthusiasts, and anyone who wants to add a touch of golden glamour to their streetwear collection. This jacket works equally well at upscale events or casual luxury settings.

Styling Tips:
• Pair with black jeans and golden-accented sneakers for coordination
• Layer over a black turtleneck for sophisticated elegance
• Add gold accessories like chains or watches to amplify the luxury feel
• Style with dark wash denim and leather boots for refined street style

The Golden Circuit Luxury Bomber is where technology meets luxury, creating a piece that represents success and sophisticated taste.',
  'Luxurious golden bomber with sophisticated geometric circuit patterns',
  1.00, 5799.00, 'ue-hoods-bomber-jackets', 'golden-circuit-luxury-bomber-jacket',
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Golden", "Black"]',
  '["Waterproof Outer Shell", "Soft Cushioning Layer", "Microfiber Inner Lining"]',
  'Machine wash cold, hang dry recommended, do not bleach, iron on low heat', 15,
  '["bomber jacket", "golden", "luxury", "geometric", "premium design"]',
  'Golden Circuit Luxury Bomber Jacket - UrbanEdge Hoods',
  'Premium golden bomber with luxury geometric patterns. Triple-layered construction, waterproof. Elevate your style with UrbanEdge Hoods.'
);

-- Add product images for each bomber jacket
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-1.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'cyber-luxe-turquoise-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-2.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'artistic-fusion-abstract-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-3.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'digital-wave-turquoise-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-4.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'velocity-orange-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-5.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'signature-white-text-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-6.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'arctic-blue-geometric-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-7.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'spectrum-burst-multi-color-bomber-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/bomber-jacket-8.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'golden-circuit-luxury-bomber-jacket';
