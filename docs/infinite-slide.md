# InfiniteSlider Component

A React component that creates a smooth, infinite horizontal scrolling animation for displaying content in a continuous loop.

## Usage

### Basic Example

```tsx
import { InfiniteSlider } from './components/infinite-slider'

function App() {
  return (
    <InfiniteSlider>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </InfiniteSlider>
  )
}
```

### Advanced Example

```tsx
import { InfiniteSlider } from './components/infinite-slider'

function LogoSlider() {
  const logos = [
    { src: '/logo1.png', alt: 'Company 1' },
    { src: '/logo2.png', alt: 'Company 2' },
    { src: '/logo3.png', alt: 'Company 3' },
  ]

  return (
    <InfiniteSlider
      speed="slow"
      direction="right"
      gap="gap-12"
      pauseOnHover={true}
      className="py-8 bg-gray-100"
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
        />
      ))}
    </InfiniteSlider>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | **Required** | The content to be scrolled infinitely |
| `speed` | `"slow" \| "normal" \| "fast"` | `"normal"` | Animation speed of the scrolling |
| `direction` | `"left" \| "right"` | `"left"` | Direction of the scrolling animation |
| `className` | `string` | `undefined` | Additional CSS classes for the container |
| `gap` | `string` | `"gap-8"` | Tailwind CSS gap class for spacing between items |
| `pauseOnHover` | `boolean` | `true` | Whether to pause animation on hover |

## CSS Requirements

This component relies on custom CSS animations that need to be defined in your stylesheet or Tailwind configuration:

```css
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}

.animate-scroll-slow {
  animation: scroll 30s linear infinite;
}

.animate-scroll-fast {
  animation: scroll 10s linear infinite;
}

.group-hover\:animation-play-state-paused:hover {
  animation-play-state: paused;
}
```

### Tailwind CSS Configuration

If using Tailwind CSS, add these animations to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'scroll-slow': 'scroll 30s linear infinite',
        'scroll-fast': 'scroll 10s linear infinite'
      }
    }
  }
}
```

## Common Use Cases

### Logo Carousel
```tsx
<InfiniteSlider speed="slow" gap="gap-16">
  {companyLogos.map(logo => (
    <img src={logo.src} alt={logo.alt} className="h-8" />
  ))}
</InfiniteSlider>
```

### Testimonial Ticker
```tsx
<InfiniteSlider direction="right" speed="normal">
  {testimonials.map(testimonial => (
    <blockquote className="max-w-md">
      "{testimonial.text}" - {testimonial.author}
    </blockquote>
  ))}
</InfiniteSlider>
```

### Skill Tags
```tsx
<InfiniteSlider speed="fast" gap="gap-4">
  {skills.map(skill => (
    <span className="px-3 py-1 bg-blue-100 rounded-full text-sm">
      {skill}
    </span>
  ))}
</InfiniteSlider>
```