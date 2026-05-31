---
name: Cinematic Ethnic Luxury
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#4d4637'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#7e7665'
  outline-variant: '#d0c5b2'
  surface-tint: '#755b00'
  primary: '#755b00'
  on-primary: '#ffffff'
  primary-container: '#c9a84c'
  on-primary-container: '#503d00'
  inverse-primary: '#e6c364'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#8c4b55'
  on-tertiary: '#ffffff'
  tertiary-container: '#e595a0'
  on-tertiary-container: '#672d37'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#e6c364'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffd9dd'
  tertiary-fixed-dim: '#ffb2bc'
  on-tertiary-fixed: '#3a0915'
  on-tertiary-fixed-variant: '#70343e'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
  shimmer-gold: '#E9D8A6'
  deep-rose: '#8E535C'
  surface-white: '#FFFFFF'
  sale-accent: '#E5097F'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system is built for a high-end ethnic jewelry e-commerce experience, drawing inspiration from the opulence of Bollywood cinema and the heritage of Indian craftsmanship. The brand personality is **regal, editorial, and aspirational**, targeting a global audience seeking authentic luxury.

The design style is a blend of **Minimalism and High-Contrast Editorial**. It utilizes expansive ivory whitespace to allow the intricate jewelry details to breathe, while employing bold black and shimmering gold to establish authority and glamour. Motion is a core tenet of the identity—expect smooth, sweeping transitions and "shimmer" states that mimic the play of light on precious stones.

## Colors

The palette is anchored by **Deep Gold**, representing the richness of ethnic jewelry. **Ivory/Cream** serves as the primary canvas, providing a warmer, more sophisticated alternative to clinical white. **Black** is used sparingly for high-contrast typography and structural elements to ensure a modern, cinematic feel. 

**Rose Gold** (Tertiary) acts as a subtle accent for hover states and secondary highlights. We have also included a high-vibrancy **Sale Accent** (inspired by the brand's heritage) to be used exclusively for promotional badges and urgent calls to action.

## Typography

The typographic hierarchy relies on the contrast between the **Playfair Display** (Serif) for storytelling and **Inter** (Sans-Serif) for utility. 

- **Headlines:** Should use generous tracking in uppercase for a more "Vogue-esque" editorial feel, or tight tracking for dramatic large-scale displays.
- **Body Text:** Set in Inter with ample line-height to ensure readability against the ivory backgrounds.
- **Labels:** Use uppercase Inter with increased letter-spacing for category tags, badges, and navigation links.

## Layout & Spacing

The layout follows a **fixed-grid philosophy** for desktop to maintain editorial control over image compositions. On desktop, a 12-column grid with wide 64px margins is used to create a "letterboxed" cinematic effect. 

- **Section Gaps:** Large vertical spacing (120px+) is encouraged between major homepage sections to reinforce a premium feel.
- **Mobile:** Transitions to a 4-column fluid layout with 16px margins. 
- **Mega-Menu:** Spans the full width of the container, utilizing a 4 or 5-column sub-grid for categorized browsing with featured imagery.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Soft Ambient Shadows** rather than harsh borders. 

- **Surfaces:** The base layer is Ivory (#FAF6F0). Floating elements like Quick-View modals and Cart drawers use pure White (#FFFFFF) with a very soft, diffused shadow (15% opacity, 30px blur) to appear as if they are floating in light.
- **Glassmorphism:** Navigation bars and sticky announcement bars should use a `backdrop-filter: blur(12px)` with a semi-transparent ivory fill (85% opacity) to maintain context as the user scrolls through vibrant jewelry photography.

## Shapes

To maintain a sophisticated and architectural look, the design system uses **Soft (0.25rem)** roundedness. 

- **Buttons & Inputs:** Use the base 4px radius for a sharp, tailored appearance.
- **Product Cards:** Should remain perfectly sharp (0px) or use the minimal 4px radius to mimic the look of physical jewelry boxes.
- **Badges:** Sale and "New In" badges may use a full-pill shape (3) to differentiate them from functional UI elements.

## Components

### 1. Product Cards
- **Visuals:** Full-bleed imagery on Ivory backgrounds.
- **Hover State:** Image swaps to a lifestyle "worn" shot. A "Quick-View" bar slides up from the bottom in Black (#0A0A0A) with Gold text.
- **Badges:** Top-left alignment, using the secondary pink accent for "SALE" and Gold for "COLLECTOR'S ITEM."

### 2. Primary Buttons
- **Style:** Solid Black background, Gold text, 4px border-radius.
- **Animation:** On hover, a gold border appears with a subtle "shimmer" light-sweep effect moving across the button face.

### 3. Navigation & Mega-Menu
- **Announcement Bar:** Sticky, Deep Gold background with white scrolling text for "Free International Shipping."
- **Mega-Menu:** Organized by "Collections" (e.g., Temple Jewelry, Kundan, Polki) with high-quality thumbnail images for each category.

### 4. Admin & Dashboard
- **Stat Cards:** Clean white surfaces, subtle 1px Ivory borders.
- **Charts:** Use a monochromatic scale of Gold and Rose Gold for data visualization.
- **Tables:** Minimalist, using Inter for high legibility, with a focus on high-contrast header rows.

### 5. Loading States
- **Shimmer:** Replace traditional spinners with a linear gradient shimmer that mimics the reflection of a diamond moving across skeletons.