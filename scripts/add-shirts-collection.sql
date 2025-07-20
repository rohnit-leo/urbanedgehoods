-- Add UrbanEdge Hoods Shirts Collection to Supabase
-- 10 Premium Cuban Collar Shirts with unique patterns

-- Update the shirts category to be featured
UPDATE categories SET 
  name = 'Cuban Collar Shirts',
  slug = 'shirts',
  description = 'Premium Cuban collar shirts perfect for parties, casual outings, and street fashion. Gender-neutral designs with breathable fabrics.',
  featured = true,
  sort_order = 2
WHERE slug = 'shirts';

-- Add the 10 shirt products
INSERT INTO products (
  title, description, short_description, price, compare_price, category, 
  slug, featured, trending, new_arrival, sizes, colors, materials, 
  care_instructions, stock_quantity, tags, seo_title, seo_description
) VALUES

-- Product 1: Blue Purple Flame Pattern Shirt
(
  'Inferno Flame Cuban Collar Shirt',
  'Ignite your style with the Inferno Flame Cuban Collar Shirt by UrbanEdge Hoods. This electrifying piece features mesmerizing blue and purple flame patterns that dance across premium fabric, creating a visual spectacle that commands attention. The flowing flame design represents passion, energy, and the untamed spirit of street fashion.

The Cuban collar design offers a relaxed, open-neck silhouette that''s perfect for both casual hangouts and elevated party looks. The vibrant flame patterns in electric blue and deep purple create a stunning contrast that works beautifully under both natural and artificial lighting, making this shirt perfect for day-to-night transitions.

Crafted from premium breathable cotton blend that feels soft against the skin while maintaining its shape and color vibrancy wash after wash. The relaxed fit ensures comfort while the bold pattern ensures you''ll be the center of attention at any gathering.

This shirt is designed for the bold and fearless – those who aren''t afraid to express their fiery personality through fashion. Whether you''re hitting the club, attending a music festival, or just want to add some heat to your everyday look, this piece delivers unmatched style.

Styling Tips:
• Pair with black jeans and white sneakers to let the flames take center stage
• Layer over a black tank top for a layered street look
• Add silver chain accessories to complement the cool-toned flames
• Style with dark wash denim and boots for an edgy night-out ensemble
• Perfect for music festivals, parties, and creative events

The Inferno Flame Cuban Collar Shirt is where art meets fashion, delivering a piece that''s as dynamic and passionate as your lifestyle.',
  'Electrifying Cuban collar shirt with mesmerizing blue and purple flame patterns',
  1.00, 2999.00, 'shirts', 'inferno-flame-cuban-collar-shirt', 
  true, true, true,
  '["S", "M", "L", "XL", "XXL"]', '["Blue", "Purple", "Multi-Color"]', 
  '["Premium Cotton Blend", "Breathable Fabric", "Color-Fast Printing"]',
  'Machine wash cold, hang dry recommended, iron on medium heat', 30,
  '["cuban collar", "flame pattern", "party shirt", "street fashion", "premium cotton"]',
  'Inferno Flame Cuban Collar Shirt - UrbanEdge Hoods',
  'Premium Cuban collar shirt with blue and purple flame patterns. Perfect for parties and street fashion. Shop UrbanEdge Hoods.'
),

-- Product 2: Zebra Stripe Pattern Shirt
(
  'Wild Zebra Cuban Collar Shirt',
  'Unleash your wild side with the Wild Zebra Cuban Collar Shirt by UrbanEdge Hoods. This bold statement piece features striking black and white zebra stripes that create a powerful visual impact, embodying the untamed spirit of both nature and urban fashion. The classic animal print gets a modern streetwear twist with our signature Cuban collar design.

The high-contrast zebra pattern is both timeless and contemporary, making this shirt a versatile addition to any wardrobe. The flowing stripes create visual movement and energy, while the monochromatic palette ensures easy styling with virtually any color combination.

Made from premium cotton blend fabric that offers superior comfort and breathability. The Cuban collar provides a relaxed, sophisticated silhouette that works equally well for casual daywear and elevated evening looks. The quality construction ensures the bold pattern maintains its crisp contrast wash after wash.

Perfect for fashion-forward individuals who appreciate classic patterns with a modern twist. This shirt bridges the gap between wild animal magnetism and refined street style, making it ideal for those who want to make a statement without saying a word.

Styling Tips:
• Create a monochromatic look with black jeans and white sneakers
• Add pops of color with bright accessories like red caps or yellow chains
• Layer under a solid black bomber jacket for contrast
• Pair with khaki chinos for a sophisticated casual look
• Perfect for art galleries, creative meetups, and fashion-forward events

The Wild Zebra Cuban Collar Shirt is where nature''s boldest patterns meet urban sophistication, creating a piece that''s both wild and refined.',
  'Bold Cuban collar shirt with striking black and white zebra stripe patterns',
  1.00, 2799.00, 'shirts', 'wild-zebra-cuban-collar-shirt',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "White", "Zebra Print"]',
  '["Premium Cotton Blend", "Breathable Fabric", "High-Contrast Printing"]',
  'Machine wash cold, hang dry recommended, iron on medium heat', 25,
  '["cuban collar", "zebra print", "animal pattern", "monochrome", "statement shirt"]',
  'Wild Zebra Cuban Collar Shirt - UrbanEdge Hoods',
  'Bold Cuban collar shirt with zebra stripe patterns. Classic animal print meets modern streetwear. Shop UrbanEdge Hoods.'
),

-- Product 3: Multi-Color Geometric Patchwork Shirt
(
  'Mosaic Fusion Cuban Collar Shirt',
  'Express your multifaceted personality with the Mosaic Fusion Cuban Collar Shirt by UrbanEdge Hoods. This artistic masterpiece features a stunning patchwork of geometric patterns in vibrant blues, pinks, greys, and various textures that come together to create a harmonious symphony of color and design.

Each section of this shirt tells a different story – from bold geometric shapes to subtle textural elements, creating a wearable piece of contemporary art. The thoughtful color palette combines cool blues with warm pinks and neutral greys, making this shirt surprisingly versatile despite its bold appearance.

Crafted from premium cotton blend that ensures comfort throughout the day while maintaining the vibrancy of each individual pattern section. The Cuban collar design adds a touch of relaxed sophistication, making this artistic piece suitable for both creative environments and social gatherings.

This shirt is designed for creative souls, artists, and anyone who sees fashion as a form of self-expression. It''s perfect for those who refuse to be put in a box and want their clothing to reflect their diverse interests and dynamic personality.

Styling Tips:
• Keep accessories minimal to let the shirt''s artistry shine
• Pair with solid-colored bottoms in navy, black, or grey
• Add one accent piece that picks up a color from the patchwork
• Layer under a solid blazer for smart-casual occasions
• Perfect for art openings, creative workshops, and cultural events

The Mosaic Fusion Cuban Collar Shirt is where multiple artistic visions converge, creating a piece that''s as complex and interesting as you are.',
  'Artistic Cuban collar shirt with multi-color geometric patchwork design',
  1.00, 3299.00, 'shirts', 'mosaic-fusion-cuban-collar-shirt',
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Multi-Color", "Blue", "Pink", "Grey"]',
  '["Premium Cotton Blend", "Artistic Print", "Breathable Fabric"]',
  'Machine wash cold, hang dry recommended, iron on low heat', 20,
  '["cuban collar", "geometric", "patchwork", "artistic", "multi-color"]',
  'Mosaic Fusion Cuban Collar Shirt - UrbanEdge Hoods',
  'Artistic Cuban collar shirt with geometric patchwork design. Wearable art meets streetwear fashion. Shop UrbanEdge Hoods.'
),

-- Product 4: Grey Yellow Black Geometric Shirt
(
  'Urban Grid Cuban Collar Shirt',
  'Navigate the urban landscape in style with the Urban Grid Cuban Collar Shirt by UrbanEdge Hoods. This sophisticated piece features angular geometric patterns in grey, yellow, and black that create a modern architectural aesthetic. The design is inspired by city skylines and urban planning, making it perfect for the metropolitan fashion enthusiast.

The strategic use of yellow accents against the grey and black base creates visual interest without being overwhelming. The geometric patterns flow across the shirt like a well-planned city grid, representing order, progress, and modern sophistication.

Made from premium cotton blend fabric that offers excellent breathability and comfort. The Cuban collar provides a relaxed yet polished look that transitions seamlessly from business casual to weekend leisure. The quality construction ensures the geometric patterns maintain their sharp lines and vibrant colors.

This shirt is designed for the modern urban professional who appreciates clean lines, architectural beauty, and sophisticated design. It''s perfect for those who want to showcase their appreciation for modern art and urban aesthetics.

Styling Tips:
• Pair with charcoal grey chinos for a sophisticated monochromatic look
• Add yellow accessories to echo the shirt''s accent color
• Layer under a black blazer for business casual occasions
• Style with dark jeans and minimalist sneakers for weekend wear
• Perfect for design conferences, urban exploration, and modern art events

The Urban Grid Cuban Collar Shirt is where architectural precision meets wearable fashion, creating a piece that''s both structured and stylish.',
  'Sophisticated Cuban collar shirt with grey, yellow, and black geometric patterns',
  1.00, 2899.00, 'shirts', 'urban-grid-cuban-collar-shirt',
  true, false, false,
  '["S", "M", "L", "XL", "XXL"]', '["Grey", "Yellow", "Black"]',
  '["Premium Cotton Blend", "Geometric Print", "Breathable Fabric"]',
  'Machine wash cold, hang dry recommended, iron on medium heat', 28,
  '["cuban collar", "geometric", "urban", "architectural", "modern design"]',
  'Urban Grid Cuban Collar Shirt - UrbanEdge Hoods',
  'Modern Cuban collar shirt with architectural geometric patterns. Urban sophistication meets streetwear. Shop UrbanEdge Hoods.'
),

-- Product 5: White Blue Black Geometric Lines Shirt
(
  'Linear Dynamics Cuban Collar Shirt',
  'Master the art of minimalist sophistication with the Linear Dynamics Cuban Collar Shirt by UrbanEdge Hoods. This clean, contemporary piece features precise geometric line patterns in blue and black against a crisp white base, creating a design that''s both modern and timeless.

The intersecting lines create a sense of movement and energy while maintaining an overall sense of order and sophistication. The blue and black lines against the white background offer a fresh take on geometric fashion, making this shirt perfect for those who appreciate subtle complexity.

Crafted from premium cotton blend that feels crisp and comfortable against the skin. The Cuban collar design provides a relaxed elegance that works beautifully for both professional and casual settings. The quality fabric ensures the sharp line patterns maintain their precision wash after wash.

This shirt is designed for the modern minimalist who appreciates clean design and geometric precision. It''s perfect for those who want to make a sophisticated statement without overwhelming patterns or colors.

Styling Tips:
• Create a clean look with white jeans and blue sneakers
• Add a navy blazer for business casual sophistication
• Pair with black chinos for a sharp monochromatic ensemble
• Style with grey joggers for elevated casual wear
• Perfect for design meetings, gallery openings, and sophisticated social events

The Linear Dynamics Cuban Collar Shirt is where mathematical precision meets fashion elegance, creating a piece that''s both intellectual and stylish.',
  'Clean Cuban collar shirt with blue and black geometric line patterns on white',
  1.00, 2699.00, 'shirts', 'linear-dynamics-cuban-collar-shirt',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["White", "Blue", "Black"]',
  '["Premium Cotton Blend", "Geometric Print", "Crisp Fabric"]',
  'Machine wash cold, hang dry recommended, iron on medium heat', 35,
  '["cuban collar", "geometric lines", "minimalist", "clean design", "sophisticated"]',
  'Linear Dynamics Cuban Collar Shirt - UrbanEdge Hoods',
  'Clean Cuban collar shirt with geometric line patterns. Minimalist sophistication meets modern design. Shop UrbanEdge Hoods.'
),

-- Product 6: Black White Tropical Leaf Pattern Shirt
(
  'Monochrome Tropics Cuban Collar Shirt',
  'Bring tropical vibes to urban streets with the Monochrome Tropics Cuban Collar Shirt by UrbanEdge Hoods. This sophisticated take on the classic Hawaiian shirt features bold tropical leaf patterns in striking black and white, creating a piece that''s both vacation-ready and city-appropriate.

The large-scale leaf patterns create visual drama while the monochromatic palette keeps the design sophisticated and versatile. This shirt captures the essence of tropical paradise while maintaining the edge and sophistication that defines urban streetwear.

Made from premium lightweight cotton blend that''s perfect for warm weather and layering. The Cuban collar provides the classic relaxed fit that''s synonymous with tropical style, while the quality construction ensures this shirt will be a wardrobe staple for years to come.

Perfect for those who want to bring vacation vibes to their everyday wardrobe. This shirt works equally well for beach parties, summer festivals, casual Fridays, and weekend adventures. It''s for those who believe that life''s too short for boring clothes.

Styling Tips:
• Pair with white shorts and canvas sneakers for a classic summer look
• Layer over a black tank top for added depth
• Style with black jeans for an urban tropical vibe
• Add white accessories to complement the monochromatic theme
• Perfect for beach parties, summer festivals, and vacation wear

The Monochrome Tropics Cuban Collar Shirt is where island paradise meets city sophistication, creating a piece that brings good vibes wherever you go.',
  'Sophisticated Cuban collar shirt with black and white tropical leaf patterns',
  1.00, 2599.00, 'shirts', 'monochrome-tropics-cuban-collar-shirt',
  true, true, false,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "White", "Tropical Print"]',
  '["Lightweight Cotton Blend", "Tropical Print", "Breathable Fabric"]',
  'Machine wash cold, hang dry recommended, iron on low heat', 32,
  '["cuban collar", "tropical", "hawaiian", "monochrome", "vacation wear"]',
  'Monochrome Tropics Cuban Collar Shirt - UrbanEdge Hoods',
  'Sophisticated Cuban collar shirt with tropical leaf patterns. Island vibes meet urban style. Shop UrbanEdge Hoods.'
),

-- Product 7: Solid Burgundy Shirt
(
  'Classic Burgundy Cuban Collar Shirt',
  'Embrace timeless elegance with the Classic Burgundy Cuban Collar Shirt by UrbanEdge Hoods. This sophisticated solid-color piece represents the perfect balance between classic menswear and contemporary street fashion. The rich burgundy color exudes confidence, maturity, and refined taste.

The deep burgundy hue is universally flattering and works beautifully across all seasons. This color represents luxury, sophistication, and a touch of rebellion – making it perfect for those who appreciate classic style with a modern edge. The solid color design ensures maximum versatility and easy styling.

Crafted from premium cotton blend that offers superior comfort and a refined drape. The Cuban collar provides a relaxed yet polished silhouette that works equally well for business casual environments and social gatherings. The quality construction ensures this shirt maintains its rich color and perfect fit wash after wash.

This shirt is designed for the sophisticated individual who understands that sometimes the most powerful statement is made through understated elegance. It''s perfect for those who appreciate quality over quantity and timeless style over fleeting trends.

Styling Tips:
• Pair with navy chinos and brown leather shoes for classic sophistication
• Style with black jeans and white sneakers for casual elegance
• Layer under a grey blazer for business casual perfection
• Add gold accessories to complement the warm burgundy tone
• Perfect for dinner dates, business meetings, and sophisticated social events

The Classic Burgundy Cuban Collar Shirt is where timeless elegance meets contemporary comfort, creating a piece that''s both classic and current.',
  'Sophisticated solid burgundy Cuban collar shirt in premium cotton blend',
  1.00, 2399.00, 'shirts', 'classic-burgundy-cuban-collar-shirt',
  true, false, false,
  '["S", "M", "L", "XL", "XXL"]', '["Burgundy", "Wine", "Deep Red"]',
  '["Premium Cotton Blend", "Solid Color", "Refined Drape"]',
  'Machine wash cold, hang dry recommended, iron on medium heat', 40,
  '["cuban collar", "solid color", "burgundy", "classic", "sophisticated"]',
  'Classic Burgundy Cuban Collar Shirt - UrbanEdge Hoods',
  'Premium solid burgundy Cuban collar shirt. Timeless elegance meets contemporary style. Shop UrbanEdge Hoods.'
),

-- Product 8: Black White Abstract Distressed Shirt
(
  'Distressed Abstract Cuban Collar Shirt',
  'Make an artistic statement with the Distressed Abstract Cuban Collar Shirt by UrbanEdge Hoods. This avant-garde piece features bold black and white abstract patterns with a distressed, grunge-inspired aesthetic that speaks to the rebellious spirit of street art and underground culture.

The abstract patterns create a sense of organized chaos, with distressed elements that give the shirt a lived-in, authentic feel. The high-contrast black and white design ensures maximum visual impact while the abstract nature of the patterns makes each shirt a unique piece of wearable art.

Made from premium cotton blend with special distressed printing techniques that create texture and depth. The Cuban collar provides a relaxed fit that complements the shirt''s rebellious aesthetic, while the quality construction ensures durability despite the distressed appearance.

This shirt is designed for creative rebels, artists, and anyone who sees fashion as a form of artistic expression. It''s perfect for those who want to showcase their appreciation for street art, underground culture, and alternative fashion.

Styling Tips:
• Pair with ripped black jeans and combat boots for full grunge aesthetic
• Layer under a leather jacket for rock-inspired style
• Style with dark wash denim and high-top sneakers for street art vibes
• Add silver accessories to complement the monochromatic theme
• Perfect for music venues, art galleries, and alternative fashion events

The Distressed Abstract Cuban Collar Shirt is where street art meets wearable fashion, creating a piece that''s both rebellious and refined.',
  'Avant-garde Cuban collar shirt with black and white abstract distressed patterns',
  1.00, 2999.00, 'shirts', 'distressed-abstract-cuban-collar-shirt',
  true, true, true,
  '["S", "M", "L", "XL", "XXL"]', '["Black", "White", "Abstract"]',
  '["Premium Cotton Blend", "Distressed Print", "Textured Fabric"]',
  'Machine wash cold, hang dry recommended, iron on low heat', 22,
  '["cuban collar", "abstract", "distressed", "grunge", "street art"]',
  'Distressed Abstract Cuban Collar Shirt - UrbanEdge Hoods',
  'Avant-garde Cuban collar shirt with abstract distressed patterns. Street art meets wearable fashion. Shop UrbanEdge Hoods.'
),

-- Product 9: Tribal Aztec Pattern Shirt
(
  'Aztec Heritage Cuban Collar Shirt',
  'Honor ancient artistry with the Aztec Heritage Cuban Collar Shirt by UrbanEdge Hoods. This culturally-inspired piece features intricate tribal and Aztec patterns in grey, white, and yellow that pay homage to indigenous art while bringing these timeless designs into contemporary streetwear.

The geometric tribal patterns tell stories of ancient civilizations while the modern color palette makes these traditional designs relevant for today''s fashion landscape. The yellow accents add warmth and energy to the sophisticated grey and white base, creating a piece that''s both respectful and contemporary.

Crafted from premium cotton blend that ensures comfort and breathability. The Cuban collar design provides a relaxed fit that complements the shirt''s cultural aesthetic, while the quality construction ensures these beautiful patterns maintain their integrity and vibrancy.

This shirt is designed for those who appreciate cultural heritage, traditional artistry, and the stories that patterns can tell. It''s perfect for individuals who want to honor the past while embracing contemporary fashion.

Styling Tips:
• Pair with earth-toned chinos and leather accessories for cultural authenticity
• Style with dark jeans and boots for modern tribal vibes
• Add turquoise or silver jewelry to complement the southwestern aesthetic
• Layer under a denim jacket for casual cultural fusion
• Perfect for cultural events, music festivals, and heritage celebrations

The Aztec Heritage Cuban Collar Shirt is where ancient artistry meets modern fashion, creating a piece that honors tradition while embracing contemporary style.',
  'Cultural Cuban collar shirt with intricate Aztec tribal patterns in grey, white, and yellow',
  1.00, 3199.00, 'shirts', 'aztec-heritage-cuban-collar-shirt',
  true, false, true,
  '["S", "M", "L", "XL", "XXL"]', '["Grey", "White", "Yellow", "Tribal"]',
  '["Premium Cotton Blend", "Cultural Print", "Heritage Design"]',
  'Machine wash cold, hang dry recommended, iron on medium heat', 18,
  '["cuban collar", "aztec", "tribal", "heritage", "cultural"]',
  'Aztec Heritage Cuban Collar Shirt - UrbanEdge Hoods',
  'Cultural Cuban collar shirt with Aztec tribal patterns. Ancient artistry meets modern streetwear. Shop UrbanEdge Hoods.'
);

-- Add product images for each shirt
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-1.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'inferno-flame-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-2.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'wild-zebra-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-3.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'mosaic-fusion-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-4.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'urban-grid-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-5.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'linear-dynamics-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-6.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'monochrome-tropics-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-7.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'classic-burgundy-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-8.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'distressed-abstract-cuban-collar-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT 
  p.id,
  '/products/shirt-9.webp',
  p.title || ' - Main Image',
  0,
  true
FROM products p WHERE p.slug = 'aztec-heritage-cuban-collar-shirt';

-- Verify the shirts have been added
SELECT 
  'Shirts Added' as status,
  COUNT(*) as shirt_count
FROM products 
WHERE category = 'shirts';

-- Show all shirts with their details
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
WHERE p.category = 'shirts'
ORDER BY p.created_at DESC;
