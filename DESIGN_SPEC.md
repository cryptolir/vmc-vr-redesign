# VMC-VR Website Redesign - Design Specification

## Design Philosophy: Premium Medical Wellness - Modern Minimalism

This redesign embodies a **premium healthcare aesthetic** combined with **modern minimalism**. The design prioritizes:
- **Human-centered storytelling** over technology showcasing
- **Calm, trustworthy atmosphere** with clinical credibility
- **Elegant simplicity** inspired by Apple's design principles
- **Accessibility and clarity** through thoughtful typography and spacing
- **Emotional connection** through carefully curated imagery

### Color Palette (OKLCH Format)
- **Background**: `oklch(1 0 0)` - Pure white
- **Foreground/Text**: `oklch(0.235 0.015 65)` - Deep charcoal
- **Primary Accent**: `oklch(0.623 0.214 259.815)` - Soft blue (for interactive elements)
- **Secondary Accent**: `oklch(0.967 0.001 286.375)` - Pale blue-gray (for cards/sections)
- **Muted Elements**: `oklch(0.552 0.016 285.938)` - Soft gray
- **Borders**: `oklch(0.92 0.004 286.32)` - Very light gray

### Typography System
- **Display Font**: Headings use a premium serif or modern sans-serif for distinction
- **Body Font**: Clean, readable sans-serif (Segoe UI, -apple-system, system-ui)
- **Hebrew Support**: Full RTL support with proper font stacks
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing & Layout
- **Container max-width**: 1280px (lg breakpoint)
- **Responsive padding**: 1rem (mobile), 1.5rem (tablet), 2rem (desktop)
- **Section spacing**: 4-6rem vertical gaps between major sections
- **Card padding**: 1.5rem to 2rem
- **Border radius**: 0.65rem (consistent with design tokens)

### Visual Assets - CDN URLs

#### Hero Background Video
- **URL**: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/vmc-vr-hero-bg_503b6c0d.mp4`
- **Duration**: 21 seconds (seamless loop)
- **Resolution**: 1920x1080 (16:9)
- **Format**: H.264 MP4, optimized for web
- **Characteristics**: Three elegant crossfade shots showing calm patient, abstract light, professional clinician

#### Use Case Images

1. **המתנה לטיפול** (Waiting for Treatment)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/המתנה לטיפול_272b09ab.png`
   - Usage: Primary use case showcase - multiple patients in waiting room with VR

2. **רופאה רגועה באמצע עבודה** (Calm Doctor During Work)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/רופאה רגועה באמצע עבודה_2c853958.png`
   - Usage: Professional/clinical credibility section

3. **לפני זריקה** (Before Injection)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/לפני זריקה_90315631.png`
   - Usage: Before/after transformation narrative

4. **תהליך לפני שינה** (Process Before Sleep)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/תהליך לפני שינה_e1a1d821.png`
   - Usage: Relaxation and wellness use case

5. **המתנה במרפאת שיניים** (Waiting at Dental Clinic)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/המתנה במרפאת שיניים_b8118fac.png`
   - Usage: Dental clinic specific use case

6. **במרפאת שיניים** (At Dental Clinic)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/במרפאת שיניים_e5a357b2.png`
   - Usage: Clinical environment showcase

7. **המתנה לפני טיפול בביח** (Waiting Before Ultrasound)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/המתנה לפני טיפול בביח_3510184d.png`
   - Usage: Pre-procedure waiting scenario

8. **רגיעה באמצע יום עבודה** (Relaxation in Middle of Work Day)
   - URL: `https://d2xsxph8kpxj0f.cloudfront.net/93863331/b3FCUFaHnYZVwQNY6o6vv9/רגיעה באמצע יום עבודה_d20a3285.png`
   - Usage: Professional wellness/stress management

## Section Structure

### 1. Hero Section
- **Background**: Video (CDN URL above) with dark overlay for text readability
- **Content**: Headline, subheadline, CTA button
- **Layout**: Full-width, centered text with generous negative space
- **Animation**: Subtle fade-in on load

### 2. Problem Section
- **Layout**: Two-column or single column responsive
- **Content**: Problem statement + 4 symptoms
- **Visual**: Icons or subtle illustrations
- **Color**: White background with subtle accent borders

### 3. How It Works Section
- **Layout**: Three-column grid (responsive to single column on mobile)
- **Cards**: Each principle with image, title, description
- **Images**: Use project images to illustrate each principle
- **Spacing**: Generous padding and gaps

### 4. Professional Principles Section
- **Layout**: Minimal text-based, possibly with visual hierarchy
- **Content**: 4 core design principles
- **Typography**: Large headings with supporting descriptions
- **Color**: Alternating subtle backgrounds for visual rhythm

### 5. About Section (מי אנחנו?)
- **Layout**: Text + image side-by-side (responsive)
- **Content**: Company story, mission, approach
- **Image**: Professional/clinical environment
- **Tone**: Warm, professional, trustworthy

### 6. FAQ Section
- **Layout**: Accordion-style for clean presentation
- **Content**: 6-7 key questions
- **Styling**: Smooth expand/collapse animations
- **Color**: Subtle background for FAQ container

### 7. Footer
- **Layout**: Minimal, professional
- **Content**: Contact info, social links, legal
- **Color**: Slightly darker background for distinction

## Hebrew RTL Implementation

- **Direction**: `dir="rtl"` on root element
- **Text Alignment**: Right-aligned by default
- **Margins/Padding**: Mirrored for RTL (right becomes left, etc.)
- **Font Stack**: Support Hebrew characters with appropriate fallbacks
- **Navigation**: Menu items flow right-to-left

## Responsive Breakpoints

- **Mobile**: < 640px (full-width, single column)
- **Tablet**: 640px - 1024px (2-column layouts)
- **Desktop**: > 1024px (3-column layouts, full features)

## Animation & Interaction Guidelines

- **Transitions**: Smooth 300-400ms easing (ease-in-out)
- **Hover States**: Subtle color/shadow changes
- **Loading**: Gentle fade-ins for content
- **Video**: Auto-play muted, loop enabled
- **Scroll**: Parallax effects for depth (subtle)

## Accessibility Considerations

- **Color Contrast**: WCAG AA compliant (4.5:1 for text)
- **Focus States**: Visible keyboard navigation
- **Alt Text**: All images have descriptive alt text
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Form Labels**: Associated with inputs
- **ARIA Labels**: For interactive elements

## Performance Optimization

- **Video**: Compressed MP4 (9.3MB for 21s at 1920x1080)
- **Images**: Optimized PNG/JPG with lazy loading
- **CSS**: Tailwind purging unused styles
- **Fonts**: System font stack + optional Google Fonts
- **Loading**: Progressive enhancement, no render-blocking resources
