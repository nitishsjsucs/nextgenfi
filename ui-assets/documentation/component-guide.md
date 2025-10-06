# Component Implementation Guide

This guide provides detailed instructions for implementing the Finance Dashboard UI components in your application.

## Getting Started

1. **Import Design Tokens**: Start by importing the design token CSS files into your project:
   ```css
   @import 'ui-assets/design-tokens/colors.css';
   @import 'ui-assets/design-tokens/typography.css';
   @import 'ui-assets/design-tokens/spacing.css';
   @import 'ui-assets/design-tokens/shadows.css';
   ```

2. **Import Component Styles**: Add the component CSS files you need:
   ```css
   @import 'ui-assets/components/buttons/button.css';
   @import 'ui-assets/components/cards/card.css';
   @import 'ui-assets/components/forms/input.css';
   @import 'ui-assets/components/navigation/sidebar.css';
   @import 'ui-assets/components/charts/chart.css';
   ```

## Button Component

### Basic Usage
```html
<!-- Primary Button -->
<button class="btn btn-primary btn-md">Save Changes</button>

<!-- Secondary Button -->
<button class="btn btn-secondary btn-lg">Cancel</button>

<!-- Outline Button -->
<button class="btn btn-outline btn-sm">Learn More</button>
```

### Button with Icon
```html
<button class="btn btn-primary btn-md">
  <svg class="icon icon-md"><!-- icon content --></svg>
  Save Changes
</button>
```

### Icon Button
```html
<button class="btn btn-ghost btn-icon">
  <svg class="icon icon-md"><!-- icon content --></svg>
</button>
```

### Available Classes
- **Sizes**: `btn-sm`, `btn-md`, `btn-lg`
- **Variants**: `btn-primary`, `btn-secondary`, `btn-outline`, `btn-ghost`
- **Icon**: `btn-icon`

## Card Component

### Basic Card
```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle</p>
  </div>
  <div class="card-body">
    <p class="card-description">Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>
```

### Dashboard Metric Card
```html
<div class="card dashboard-card metric-card">
  <div class="metric-value">$12,345</div>
  <div class="metric-label">Total Revenue</div>
  <div class="metric-change">+2.1% vs last week</div>
</div>
```

### Chart Card
```html
<div class="card chart-card">
  <div class="chart-header">
    <div>
      <h3 class="chart-title">Revenue Chart</h3>
      <p class="chart-subtitle">Last 6 months</p>
    </div>
    <div class="chart-controls">
      <select class="chart-period-selector">
        <option>6M</option>
        <option>1Y</option>
      </select>
    </div>
  </div>
  <div class="chart-content">
    <!-- Chart implementation -->
  </div>
</div>
```

### Available Classes
- **Variants**: `card-elevated`, `card-floating`, `card-interactive`, `card-bordered`
- **Types**: `dashboard-card`, `metric-card`, `chart-card`, `status-card`

## Form Input Component

### Basic Input
```html
<div class="input-group">
  <label class="input-label">Email Address</label>
  <input type="email" class="input-field input-md" placeholder="Enter your email">
  <div class="input-help-text">We'll never share your email.</div>
</div>
```

### Input with Icon
```html
<div class="input-group">
  <label class="input-label">Search</label>
  <div class="input-with-icon">
    <svg class="input-icon icon-md"><!-- search icon --></svg>
    <input type="text" class="input-field input-md" placeholder="Search...">
  </div>
</div>
```

### Input with Error
```html
<div class="input-group">
  <label class="input-label">Password</label>
  <input type="password" class="input-field input-md input-error" placeholder="Enter password">
  <div class="input-error-message">Password must be at least 8 characters.</div>
</div>
```

### Available Classes
- **Sizes**: `input-sm`, `input-md`, `input-lg`
- **States**: `input-error`, `input-success`
- **Types**: `input-with-icon`, `input-with-action`

## Sidebar Navigation

### Basic Sidebar
```html
<nav class="sidebar">
  <div class="sidebar-header">
    <a href="/" class="sidebar-brand">
      <svg class="sidebar-logo"><!-- logo --></svg>
      <span class="brand-text">FinanceApp</span>
    </a>
  </div>
  
  <div class="sidebar-nav">
    <div class="nav-section">
      <h4 class="nav-section-title">Main</h4>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/dashboard" class="nav-link active">
            <svg class="nav-icon"><!-- home icon --></svg>
            <span class="nav-text">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/transactions" class="nav-link">
            <svg class="nav-icon"><!-- chart icon --></svg>
            <span class="nav-text">Transactions</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  <div class="sidebar-footer">
    <div class="user-profile">
      <div class="user-avatar">JD</div>
      <div class="user-info">
        <div class="user-name">John Doe</div>
        <div class="user-role">Admin</div>
      </div>
    </div>
  </div>
</nav>
```

### Available Classes
- **States**: `sidebar.open`, `sidebar.collapsed`
- **Navigation**: `nav-link.active`, `nav-item.has-children.expanded`

## Chart Component

### Basic Chart
```html
<div class="chart-container">
  <div class="chart-header">
    <div>
      <h3 class="chart-title">Revenue Trends</h3>
      <p class="chart-subtitle">Monthly overview</p>
    </div>
    <div class="chart-controls">
      <select class="chart-period-selector">
        <option>6M</option>
        <option>1Y</option>
      </select>
    </div>
  </div>
  
  <div class="chart-content">
    <canvas class="chart-canvas"></canvas>
    <div class="chart-tooltip">
      <div class="tooltip-title">January 2024</div>
      <div class="tooltip-value">$12,345</div>
    </div>
  </div>
  
  <div class="chart-legend">
    <div class="legend-item">
      <div class="legend-color primary"></div>
      <span>Revenue</span>
    </div>
    <div class="legend-item">
      <div class="legend-color secondary"></div>
      <span>Expenses</span>
    </div>
  </div>
</div>
```

## Responsive Design

All components are built with responsive design in mind:

```css
/* Mobile-first approach */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  
  .chart-content {
    height: 250px;
  }
}
```

## Customization

### CSS Custom Properties
Override design tokens to customize the appearance:

```css
:root {
  --primary-orange: #your-color;
  --font-family: 'Your-Font', sans-serif;
  --border-radius: 12px;
}
```

### Component Variants
Create custom variants by extending existing classes:

```css
.btn-custom {
  background: linear-gradient(45deg, var(--primary-orange), #FF6B35);
  border: none;
  color: white;
}
```

## Best Practices

1. **Use Semantic HTML**: Always use appropriate HTML elements
2. **Accessibility**: Include proper ARIA labels and keyboard navigation
3. **Performance**: Optimize images and use CSS efficiently
4. **Consistency**: Follow the design system guidelines
5. **Testing**: Test across different browsers and devices

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Troubleshooting

### Common Issues

1. **Icons not displaying**: Ensure SVG files are properly linked
2. **Colors not applying**: Check if design tokens are imported
3. **Layout issues**: Verify CSS specificity and conflicts
4. **Mobile responsiveness**: Test viewport meta tag

### Getting Help

- Check the component documentation
- Review the design token definitions
- Test in browser developer tools
- Refer to the original Figma design
