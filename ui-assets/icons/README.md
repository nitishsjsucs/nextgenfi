# Icon Library

This folder contains all the icons used in the Finance Dashboard UI Kit. Icons are organized by format and category.

## Folder Structure

```
icons/
├── svg/              # Scalable vector icons
│   ├── navigation/   # Navigation icons (menu, home, etc.)
│   ├── actions/      # Action icons (edit, delete, save, etc.)
│   ├── finance/      # Finance-specific icons (money, chart, etc.)
│   ├── status/       # Status icons (success, warning, error, etc.)
│   └── interface/    # UI interface icons (search, filter, etc.)
├── png/              # Raster icons for specific use cases
│   ├── 16x16/        # Small icons
│   ├── 24x24/        # Medium icons
│   └── 32x32/        # Large icons
└── icon-font/        # Icon font files (if available)
```

## Usage

### SVG Icons
```html
<!-- Inline SVG -->
<img src="icons/svg/actions/edit.svg" alt="Edit" class="icon-md" />

<!-- As background image -->
<div class="icon-button" style="background-image: url('icons/svg/actions/edit.svg');"></div>
```

### CSS Classes
```css
/* Icon size utilities are defined in design-tokens/spacing.css */
.icon-xs { width: 9px; height: 9px; }
.icon-sm { width: 13px; height: 13px; }
.icon-md { width: 16px; height: 16px; }
.icon-lg { width: 24px; height: 24px; }
.icon-xl { width: 32px; height: 32px; }
```

### Icon Font (if available)
```html
<!-- Using icon font -->
<i class="icon-font icon-edit"></i>
<i class="icon-font icon-chart"></i>
```

## Icon Categories

### Navigation Icons
- `menu.svg` - Hamburger menu icon
- `home.svg` - Home/dashboard icon
- `arrow-left.svg` - Left arrow navigation
- `arrow-right.svg` - Right arrow navigation
- `chevron-down.svg` - Dropdown indicator
- `chevron-up.svg` - Collapse indicator

### Action Icons
- `edit.svg` - Edit pencil icon
- `delete.svg` - Delete/trash icon
- `save.svg` - Save/floppy disk icon
- `download.svg` - Download icon
- `upload.svg` - Upload icon
- `search.svg` - Search magnifying glass
- `filter.svg` - Filter/settings icon

### Finance Icons
- `money.svg` - Money/dollar icon
- `chart-line.svg` - Line chart icon
- `chart-bar.svg` - Bar chart icon
- `chart-pie.svg` - Pie chart icon
- `wallet.svg` - Wallet icon
- `credit-card.svg` - Credit card icon
- `bank.svg` - Bank building icon
- `trending-up.svg` - Upward trend arrow
- `trending-down.svg` - Downward trend arrow

### Status Icons
- `success.svg` - Checkmark/success icon
- `warning.svg` - Warning triangle icon
- `error.svg` - Error/X icon
- `info.svg` - Information circle icon
- `loading.svg` - Loading spinner icon

### Interface Icons
- `settings.svg` - Settings gear icon
- `user.svg` - User profile icon
- `notifications.svg` - Bell notification icon
- `calendar.svg` - Calendar icon
- `clock.svg` - Clock/time icon
- `location.svg` - Location pin icon
- `phone.svg` - Phone icon
- `email.svg` - Email/envelope icon

## Color Guidelines

Icons should use the following colors based on context:

- **Default**: `var(--text-secondary)` (#737B8B)
- **Primary**: `var(--primary-orange)` (#FD6F41)
- **Success**: `var(--success)` (#FD6F41)
- **Warning**: `var(--warning)` (#FD6F41)
- **Error**: `var(--error)` (#FD6F41)
- **Interactive**: `var(--text-primary)` (#121212) on hover

## Accessibility

All icons should include:
- Proper `alt` attributes for images
- `aria-label` for decorative icons
- Sufficient color contrast
- Appropriate sizing for touch targets (minimum 44px)

## Creating New Icons

When adding new icons:
1. Use SVG format for scalability
2. Follow the 24x24px base grid system
3. Use 2px stroke width for outline icons
4. Maintain consistent visual style
5. Export in both filled and outline variants when applicable
6. Include proper naming conventions
