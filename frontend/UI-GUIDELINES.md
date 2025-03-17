# IEEE TEMS UI Guidelines

This document outlines the UI guidelines and styling approach for the IEEE TEMS website. It serves as a reference for maintaining consistent design across the application.

## Styling Approach

We use a combination of:

1. **Tailwind CSS** - For utility-based styling
2. **Centralized Style Constants** - Located in `src/utils/styles.js`
3. **Component-Specific Styling** - When needed, using Tailwind's utility classes

## Color Palette

Our color palette is defined in `tailwind.config.js` and includes:

- **Primary**: Blue (#0056b3) - Used for primary actions, links, and emphasis
- **Secondary**: Gray (#6c757d) - Used for secondary elements and text
- **Accent**: Teal (#17a2b8) - Used for accents and highlights
- **Dark**: Dark gray (#343a40) - Used for text and backgrounds
- **Light**: Light gray (#f8f9fa) - Used for backgrounds and subtle elements
- **Success**: Green (#28a745) - Used for success states
- **Danger**: Red (#dc3545) - Used for errors and warnings
- **Warning**: Yellow (#ffc107) - Used for warnings
- **Info**: Blue (#17a2b8) - Used for informational elements

Each color has variants from 50 (lightest) to 900 (darkest), with 500 being the base color.

## Typography

- **Headings**: "Zen Dots" font
- **Body**: "Inter" font
- **Monospace**: "Consolas", "Monaco" font

## Components

### Buttons

```jsx
// Primary button
<button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded transition duration-200">
  Primary Button
</button>

// Secondary button
<button className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded transition duration-200">
  Secondary Button
</button>

// Outline button
<button className="border border-primary-500 text-primary-500 hover:bg-primary-50 font-medium py-2 px-4 rounded transition duration-200">
  Outline Button
</button>

// Text button
<button className="text-primary-500 hover:text-primary-700 font-medium transition duration-200">
  Text Button
</button>
```

### Cards

```jsx
// Basic card
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Card Title</h3>
    <p className="text-gray-700">Card content goes here.</p>
  </div>
</div>

// Interactive card
<div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition duration-200 cursor-pointer">
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
    <p className="text-gray-700">This card has hover effects.</p>
  </div>
</div>
```

### Forms

```jsx
// Input field
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
  <input
    type="email"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
  />
</div>

// Select field
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Country
  </label>
  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>
```

## Responsive Design

We follow a mobile-first approach with the following breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Example:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>
```

## Using the Style Utility

We have a centralized style utility in `src/utils/styles.js` that provides:

1. Predefined style constants
2. A `classNames` utility function for combining classes

Example:

```jsx
import { STYLES, classNames } from '../utils/styles';

function MyComponent({ isActive }) {
  return (
    <div className={STYLES.card.base}>
      <button className={classNames(
        STYLES.button.primary,
        isActive && 'ring-2 ring-primary-300'
      )}>
        Click Me
      </button>
    </div>
  );
}
```

## Animation

We use Framer Motion for complex animations and Tailwind's built-in animation utilities for simple animations.

Example with Tailwind:

```jsx
<div className="animate-fade-in">
  This content will fade in.
</div>

<div className="animate-slide-in">
  This content will slide in from below.
</div>
```

## Best Practices

1. Use the predefined color palette instead of custom colors
2. Maintain consistent spacing using Tailwind's spacing utilities
3. Use the centralized style constants for common components
4. Follow the mobile-first approach for responsive design
5. Use semantic HTML elements
6. Ensure sufficient color contrast for accessibility
7. Use the `classNames` utility for conditional classes 