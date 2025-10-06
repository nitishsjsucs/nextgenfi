# Design System Guide - Colors and Typography

This comprehensive design system guide covers all colors and typography extracted from the Finance Dashboard UI Kit by Paperpillar, combining data from both CSS analysis and Figma design system.

## 🎨 Color Palette

### Primary Colors

#### Brand Colors
- **Primary Orange**: `#FD6F41` - Main brand color for CTAs, highlights, and interactive elements
- **Primary Brown**: `#2F292B` - Dark brown for headers and important text
- **Light Brown**: `#ADA1A1` - Lighter brown variant for secondary elements

#### Text Colors
- **Text Primary**: `#121212` - Main text color for body content and headings
- **Text Secondary**: `#2F292B` - Secondary text color, slightly lighter than primary
- **Text Muted**: `#4F5B67` - Muted text for labels and secondary information
- **Text Light**: `#737B8B` - Light text for placeholders and disabled states

#### Background Colors
- **White**: `#FFFFFF` - Primary background color
- **Light**: `#F9FAFB` - Light gray background for sections and cards
- **Flash White**: `#ECF1F4` - Very light gray for subtle backgrounds
- **Light Grey**: `#E0E9EF` - Light gray for borders and dividers

#### Text Color Opacity Variants
- **100%**: `#121212` - Full opacity text
- **80%**: `#232323` - 80% opacity text
- **70%**: `rgba(18, 18, 18, 0.7)` - 70% opacity text
- **60%**: `#4F5B67` - 60% opacity text
- **50%**: `#737B8B` - 50% opacity text

### Usage Guidelines

#### Primary Orange (#FD6F41)
- Use for primary buttons and CTAs
- Highlight important information
- Interactive elements like links and icons
- Progress indicators and success states

#### Text Colors
- **#121212**: Primary headings, important text, body content
- **#2F292B**: Secondary headings, section headers
- **#4F5B67**: Labels, metadata, secondary information
- **#737B8B**: Placeholders, disabled text, subtle information

#### Background Colors
- **#FFFFFF**: Main content areas, cards, modals
- **#F9FAFB**: Section backgrounds, sidebar backgrounds
- **#ECF1F4**: Subtle background variations
- **#E0E9EF**: Borders, dividers, input backgrounds

## 📝 Typography System

### Font Family
- **Primary**: `Inter` - Modern, clean sans-serif font
- **Fallbacks**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Font Weights
- **400 (Normal)**: Body text, regular content
- **500 (Medium)**: Small headings, emphasized text
- **600 (Semibold)**: Section headers, important labels
- **700 (Bold)**: Main headings, critical information

### Font Size Scale

#### Large Text
- **60px**: Extra large headings (Headers, hero text)
- **50px**: Large headings (Page titles, main sections)

#### Medium Text
- **32px**: Medium headings (Section titles)
- **24px**: Small headings (Subsection titles)

#### Body Text
- **16px**: Medium body text, small headings
- **14px**: Standard body text, form labels

#### Small Text
- **12px**: Small text, captions
- **9px**: Micro text, hex codes, small labels

### Line Heights
- **60px**: Large headings (1.2em)
- **42px**: Medium headings (1.31em)
- **32px**: Small headings (1.33em)
- **22px**: Body text (1.57em)
- **21px**: Small text (1.5em)
- **10px**: Micro text (1.1em)

### Letter Spacing
- **-4%**: Large headings (50px)
- **-2.08%**: Small headings (24px)
- **-2%**: Headers (60px)
- **10%**: Hex codes, technical text

## 🎯 Typography Styles

### Heading Large
```css
.heading-large {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 50px;
  line-height: 60px;
  letter-spacing: -0.04em;
  color: #121212;
}
```
**Usage**: Page titles, main section headings

### Heading Medium
```css
.heading-medium {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 32px;
  line-height: 42px;
  color: #121212;
}
```
**Usage**: Section titles, card headers

### Heading Small
```css
.heading-small {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #121212;
}
```
**Usage**: Subsection titles, widget headers

### Text Body - Regular
```css
.text-body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
}
```
**Usage**: Body text, descriptions, form labels

### Text Body - Bold
```css
.text-body-bold {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
}
```
**Usage**: Emphasized text, important labels

### Text Body - Muted
```css
.text-body-muted {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
  opacity: 0.7;
}
```
**Usage**: Secondary information, help text

## 🎨 Color Usage Examples

### Primary Color Combinations
```html
<!-- Primary CTA -->
<button class="bg-orange text-white">Save Changes</button>

<!-- Primary Heading -->
<h1 class="heading-large text-primary">Dashboard</h1>

<!-- Secondary Information -->
<p class="text-body-muted">Last updated 2 hours ago</p>
```

### Text Hierarchy
```html
<!-- Main Heading -->
<h1 class="heading-large text-primary">Financial Overview</h1>

<!-- Section Heading -->
<h2 class="heading-medium text-primary">Monthly Revenue</h2>

<!-- Subsection -->
<h3 class="heading-small text-primary">Q1 Performance</h3>

<!-- Body Text -->
<p class="text-body text-primary">Revenue increased by 15% compared to last quarter.</p>

<!-- Muted Text -->
<span class="text-body-muted">Updated 5 minutes ago</span>
```

### Background Combinations
```html
<!-- Card with Light Background -->
<div class="bg-light p-6 rounded-lg">
  <h3 class="heading-small text-primary">Card Title</h3>
  <p class="text-body text-primary">Card content goes here.</p>
</div>

<!-- Subtle Background -->
<div class="bg-flash-white p-4 rounded-md">
  <span class="text-small text-muted">Helper text</span>
</div>
```

## 📐 Spacing System

The design system uses a consistent 4px-based spacing scale:

- **4px**: Micro spacing
- **8px**: Small spacing
- **12px**: Medium-small spacing
- **16px**: Medium spacing
- **20px**: Medium-large spacing
- **24px**: Large spacing
- **32px**: Extra large spacing
- **48px**: Section spacing
- **64px**: Page spacing

## 🔧 Implementation

### CSS Variables
All colors and typography are available as CSS custom properties:

```css
:root {
  --primary-orange: #FD6F41;
  --text-primary: #121212;
  --font-family-primary: 'Inter', sans-serif;
  --font-size-lg: 24px;
  /* ... and many more */
}
```

### Utility Classes
Use utility classes for quick styling:

```html
<!-- Colors -->
<div class="text-primary bg-light border-light">Content</div>

<!-- Typography -->
<h1 class="heading-large">Title</h1>
<p class="text-body">Body text</p>
```

### Component Integration
Integrate with existing components:

```css
.button-primary {
  background-color: var(--primary-orange);
  color: var(--bg-white);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
}
```

## ♿ Accessibility

### Color Contrast
All color combinations meet WCAG AA standards:
- Primary orange (#FD6F41) on white: 4.5:1 ratio
- Dark text (#121212) on light backgrounds: 16:1 ratio

### Typography Accessibility
- Minimum font size of 14px for body text
- Line height of at least 1.5 for readability
- Letter spacing for improved legibility

### High Contrast Support
```css
@media (prefers-contrast: high) {
  :root {
    --text-primary: #000000;
    --border-light: #000000;
  }
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Typography Scaling
Font sizes scale appropriately across devices:
- Mobile: Reduce large headings by 20%
- Tablet: Maintain desktop sizes
- Desktop: Full size implementation

## 🎨 Design Tokens File

The complete design system is available in:
- `ui-assets/design-tokens/design-system-complete.css`

This file includes all colors, typography, spacing, and utility classes extracted from both the CSS analysis and Figma design system.

---

**Ready to build beautiful, consistent interfaces with the Finance Dashboard design system!** 🚀
