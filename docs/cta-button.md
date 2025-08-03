# CtaButton Component

A customizable call-to-action button component with an animated gradient border effect and smooth hover animations. Perfect for highlighting primary actions in your application.

## Usage

### Basic Example

```tsx
import { CtaButton } from './cta-button'

function MyComponent() {
  return (
    <CtaButton
      text="Get Started"
      onClick={() => console.log('Button clicked!')}
    />
  )
}
```

### Advanced Examples

```tsx
import { CtaButton } from './cta-button'

function Hero() {
  return (
    <div className="hero-section">
      {/* Large primary CTA */}
      <CtaButton
        text="Start Free Trial"
        size="bigger"
        gradientStartColor="#FF6B6B"
        gradientMiddleColor="#4ECDC4"
        gradientEndColor="#45B7D1"
        onClick={() => window.open('/signup', '_blank')}
      />

      {/* Secondary CTA with dark theme */}
      <CtaButton
        text="Learn More"
        size="big"
        bgColor="bg-gray-900"
        textColor="text-white"
        gradientStartColor="#FFD700"
        gradientMiddleColor="#FF4500"
        gradientEndColor="#FFD700"
        onClick={() => scrollToSection('features')}
      />
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `"Get Started"` | The text displayed on the button |
| `onClick` | `() => void` | `undefined` | Click handler function |
| `bgColor` | `string` | `"bg-white"` | Tailwind CSS background color class for the button content |
| `textColor` | `string` | `"text-black"` | Tailwind CSS text color class |
| `gradientStartColor` | `string` | `"#E2CBFF"` | Hex color for the gradient animation start |
| `gradientMiddleColor` | `string` | `"#393BB2"` | Hex color for the gradient animation middle |
| `gradientEndColor` | `string` | `"#E2CBFF"` | Hex color for the gradient animation end |
| `size` | `"normal" \| "big" \| "bigger"` | `"normal"` | Predefined size variant |

## Size Variants

### Normal (default)
- Height: 48px (h-12)
- Text: Small (text-sm)
- Padding: 32px horizontal, 4px vertical

### Big
- Height: 56px (h-14)
- Text: Base (text-base)
- Padding: 40px horizontal, 8px vertical

### Bigger
- Height: 64px (h-16)
- Text: Large (text-lg)
- Padding: 48px horizontal, 12px vertical

## Styling Customization

### Color Schemes

```tsx
// Brand colors
<CtaButton
  gradientStartColor="#3B82F6"
  gradientMiddleColor="#1D4ED8"
  gradientEndColor="#3B82F6"
  bgColor="bg-blue-50"
  textColor="text-blue-900"
/>

// Success theme
<CtaButton
  gradientStartColor="#10B981"
  gradientMiddleColor="#059669"
  gradientEndColor="#10B981"
  bgColor="bg-green-50"
  textColor="text-green-800"
/>

// Warning theme
<CtaButton
  gradientStartColor="#F59E0B"
  gradientMiddleColor="#D97706"
  gradientEndColor="#F59E0B"
  bgColor="bg-amber-50"
  textColor="text-amber-900"
/>
```

### Dark Mode Support

```tsx
<CtaButton
  text="Dark Mode CTA"
  bgColor="bg-gray-800"
  textColor="text-gray-100"
  gradientStartColor="#374151"
  gradientMiddleColor="#6B7280"
  gradientEndColor="#374151"
/>
```