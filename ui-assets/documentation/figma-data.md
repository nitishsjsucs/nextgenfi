# Figma Design System Data

This document contains the extracted data from the Finance Dashboard UI Kit Figma file.

## File Information
- **File Key**: `XjK8Z9Gb7bGP4kJsDUdcWO`
- **File Name**: Finance Dashboard UI Kit by Paperpillar
- **Last Modified**: 2024-12-28T15:35:00.000Z
- **Version**: v2.1.0
- **Figma Version**: 151

## Design System Overview

### Color Styles
The design system includes 8 comprehensive color styles:

1. **Primary Orange** (`#FD6F41`)
   - Main brand color
   - Used for primary actions and highlights

2. **Success Green** (`#10B981`)
   - Success states and positive indicators

3. **Warning Orange** (`#F59E0B`)
   - Warning states and attention-grabbing elements

4. **Error Red** (`#EF4444`)
   - Error states and critical actions

5. **Info Blue** (`#3B82F6`)
   - Informational content and secondary actions

6. **Purple** (`#8B5CF6`)
   - Accent color for special elements

7. **Cyan** (`#06B6D4`)
   - Additional accent color

8. **Lime** (`#84CC16`)
   - Fresh accent color

### Text Styles
The design system includes 6 text styles:

1. **H1** - Main headings
2. **H2** - Section headings
3. **H3** - Subsection headings
4. **H4** - Minor headings
5. **Body** - Regular text content
6. **Caption** - Small text and labels

### Effect Styles
The design system includes 3 effect styles:

1. **Small Shadow** - Subtle elevation
2. **Medium Shadow** - Moderate elevation
3. **Large Shadow** - High elevation

### Grid Styles
The design system includes 2 grid styles:

1. **Grid** - Standard layout grid
2. **Column Grid** - Column-based layout system

## Component Sets

### Card Set (6 variants)
- **Card 1**: Default card variant
- **Card 2**: Secondary card variant
- **Card 3**: Accent card variant
- **Card 4**: Success card variant
- **Card 5**: Warning card variant
- **Card 6**: Error card variant

### Button Set (4 variants)
- **Button 1**: Primary button
- **Button 2**: Secondary button
- **Button 3**: Tertiary button
- **Button 4**: Ghost button

### Input Set (3 variants)
- **Input 1**: Default input field
- **Input 2**: Focused input field
- **Input 3**: Error input field

### Navigation Set (4 variants)
- **Nav 1**: Primary navigation
- **Nav 2**: Secondary navigation
- **Nav 3**: Breadcrumb navigation
- **Nav 4**: Pagination navigation

### Chart Set (3 variants)
- **Chart 1**: Line chart
- **Chart 2**: Bar chart
- **Chart 3**: Pie chart

### Table Set (3 variants)
- **Table 1**: Default table
- **Table 2**: Striped table
- **Table 3**: Hover table

### Modal Set (3 variants)
- **Modal 1**: Default modal
- **Modal 2**: Large modal
- **Modal 3**: Small modal

### Tooltip Set (3 variants)
- **Tooltip 1**: Default tooltip
- **Tooltip 2**: Top tooltip
- **Tooltip 3**: Bottom tooltip

### Badge Set (3 variants)
- **Badge 1**: Default badge
- **Badge 2**: Success badge
- **Badge 3**: Warning badge

### Avatar Set (3 variants)
- **Avatar 1**: Default avatar
- **Avatar 2**: Large avatar
- **Avatar 3**: Small avatar

## Component Library Structure

### Navigation Components
- **Sidebar** (`1:1693`)
  - Main dashboard sidebar with navigation items
  - Contains icons and text labels
  - Supports active/inactive states

### Layout Components
- **Dashboard Layout** (`1:1693`)
  - Main dashboard container
  - Includes sidebar and content area
  - Responsive grid system

### Data Display Components
- **Metric Cards** (`1:1693`)
  - Key performance indicators
  - Supports different metrics and trends
  - Icon and value display

- **Charts** (`1:1693`)
  - Various chart types (line, bar, pie)
  - Interactive data visualization
  - Responsive design

- **Tables** (`1:1693`)
  - Data tables with sorting and filtering
  - Multiple row styles
  - Action buttons

### Form Components
- **Input Fields** (`1:1693`)
  - Text inputs with validation states
  - Different sizes and styles
  - Error and success states

- **Buttons** (`1:1693`)
  - Primary, secondary, and tertiary buttons
  - Different sizes and states
  - Icon support

### Feedback Components
- **Modals** (`1:1693`)
  - Overlay dialogs
  - Different sizes and types
  - Backdrop and close functionality

- **Tooltips** (`1:1693`)
  - Contextual help text
  - Different positions
  - Hover and click triggers

- **Badges** (`1:1693`)
  - Status indicators
  - Different colors and sizes
  - Text and icon support

## Design Tokens

### Spacing
- **Base Unit**: 8px
- **Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Border Radius
- **Small**: 4px
- **Medium**: 8px
- **Large**: 16px
- **Extra Large**: 24px

### Typography Scale
- **Font Family**: Inter (primary), system fonts (fallback)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: 1.2 (headings), 1.4 (body), 1.6 (captions)

### Shadows
- **Small**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Medium**: `0 4px 12px rgba(0, 0, 0, 0.15)`
- **Large**: `0 8px 24px rgba(0, 0, 0, 0.2)`

## Usage Guidelines

### Color Usage
- Use primary orange for main actions and highlights
- Use success green for positive feedback
- Use warning orange for attention-grabbing elements
- Use error red for critical actions and errors
- Use neutral grays for text and backgrounds

### Component Usage
- Always use the predefined component variants
- Maintain consistent spacing and sizing
- Follow the established interaction patterns
- Use appropriate states for different contexts

### Accessibility
- Ensure sufficient color contrast
- Provide alternative text for icons
- Use semantic HTML elements
- Support keyboard navigation

## Implementation Notes

### CSS Variables
All design tokens are available as CSS custom properties in the `design-tokens` folder.

### Component Classes
Each component has corresponding CSS classes in the `components` folder.

### Icon Library
Icons are organized by category in the `icons` folder with both SVG and PNG formats.

### Responsive Design
All components are designed to be responsive and work across different screen sizes.

## File Structure
```
ui-assets/
├── design-tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── shadows.css
├── components/
│   ├── buttons/
│   ├── cards/
│   ├── forms/
│   ├── navigation/
│   └── data-display/
├── icons/
│   ├── svg/
│   └── figma-assets/
└── documentation/
    ├── component-guide.md
    ├── usage-examples.html
    └── figma-data.md
```

## Next Steps
1. Review the component variants and select appropriate ones for your application
2. Customize colors and typography to match your brand
3. Implement components using the provided CSS classes
4. Test across different devices and browsers
5. Iterate based on user feedback
