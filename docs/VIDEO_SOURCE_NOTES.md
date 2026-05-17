# Zephyr AI Studio — Temporary Stock Video Source Notes

Private implementation note. These clips are used only until original Zephyr-owned videos are produced.

All selected clips are from Mixkit free stock video pages and were chosen for cinematic, premium, dark/elegant, beauty/fashion/product/luxury/food relevance. Public website copy must not refer to Mixkit, temporary videos, or placeholders.

## Selected clips

| Local asset | Website use | Source page | Local notes |
|---|---|---|---|
| `public/video/zephyr-hero.mp4` | Hero desktop background | https://mixkit.co/free-stock-video/beautiful-indian-model-posing-101456/ | Elegant Indian fashion/model visual, suitable for premium creative studio first impression. |
| `public/video/cinematic-fashion-campaign-preview.mp4` | Showreel desktop preview | https://mixkit.co/free-stock-video/conceptual-fashion-model-posing-100684/ | Modern fashion/editorial motion, strong fit for cinematic campaign preview. |
| `public/video/portfolio/portfolio-skincare.mp4` | Skincare card desktop motion | https://mixkit.co/free-stock-video/a-young-woman-with-a-towel-robe-applying-skincare-product-51187/ | Skincare/self-care product-ad fit. |
| `public/video/portfolio/portfolio-cosmetics.mp4` | Cosmetics card desktop motion | https://mixkit.co/free-stock-video/woman-opening-a-bag-with-makeup-39907/ | Makeup/cosmetic product context. |
| `public/video/portfolio/portfolio-jewellery.mp4` | Jewellery card desktop motion | https://mixkit.co/free-stock-video/jewels-with-red-stones-2865/ | Close luxury jewellery/product detail. |
| `public/video/portfolio/portfolio-fashion.mp4` | Fashion and boutique cards desktop motion | https://mixkit.co/free-stock-video/winter-fashion-model-39861/ | Beauty/fashion model close-up with polished campaign feel. |
| `public/video/portfolio/portfolio-cafe.mp4` | Food/ecommerce-style card desktop motion | https://mixkit.co/free-stock-video/pouring-coffee-in-a-cup-43941/ | Premium cafe/product-style food and beverage visual. |
| `public/video/portfolio/portfolio-restaurant.mp4` | Cafes/restaurants card desktop motion | https://mixkit.co/free-stock-video/empty-restaurant-with-nice-lighting-29050/ | Elegant restaurant ambience. |
| `public/video/portfolio/portfolio-luxury-product.mp4` | Perfume/luxury/ecommerce cards desktop motion | https://mixkit.co/free-stock-video/detailed-wrist-watch-while-working-3649/ | Dark luxury product/detail mood. |
| `public/video/portfolio/portfolio-neon-brand.mp4` | Creators/startup/premium brand cards desktop motion | https://mixkit.co/free-stock-video/dark-corridor-between-blocks-with-blue-neon-lights-34349/ | Dark cinematic neon atmosphere without office/SaaS feel. |
| `public/video/portfolio/portfolio-fitness.mp4` | Gyms & Fitness Studios card desktop motion | https://mixkit.co/free-stock-video/lightweight-boxer-practicing-in-a-dark-boxing-ring-45874/ | Dark boxing-ring atmosphere with strong cinematic fitness energy; avoids generic corporate gym stock look. |

## Performance choices

- Hero and showreel use desktop video with mobile poster/fallback imagery.
- Portfolio videos use 360p files, desktop-only sources via media queries, and `preload="none"`.
- Mobile cards use poster images only to protect mobile performance.
- All public playback is muted, looped, and `playsInline`.
