# Reveal Component

A React component that provides smooth scroll-triggered animations using Framer Motion. Elements animate into view when they enter the viewport, perfect for creating engaging scroll experiences.

## Usage

### Basic Example

```tsx
import { Reveal } from './components/reveal'

function App() {
  return (
    <div>
      <Reveal>
        <h1>This heading will fade in from below</h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p>This paragraph appears after a delay</p>
      </Reveal>
    </div>
  )
}
```

### Advanced Example

```tsx
import { Reveal } from './components/reveal'

function AnimatedSection() {
  return (
    <section className="space-y-8 py-16">
      {/* Slide in from left */}
      <Reveal x={-50} y={0} duration={0.6}>
        <h2 className="text-4xl font-bold">Welcome</h2>
      </Reveal>

      {/* Staggered animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Reveal
            key={feature.id}
            delay={index * 0.1}
            threshold={0.3}
            duration={0.5}
          >
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Custom threshold for early trigger */}
      <Reveal threshold={0.1} y={30}>
        <footer className="text-center text-gray-600">
          This appears when just 10% is visible
        </footer>
      </Reveal>
    </section>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | `undefined` | The content to be animated |
| `duration` | `number` | `0.4` | Animation duration in seconds |
| `threshold` | `number` | `1` | Intersection threshold (0-1) for triggering animation |
| `triggerOnce` | `boolean` | `true` | Whether animation should only trigger once |
| `delay` | `number` | `0` | Delay before animation starts (in seconds) |
| `y` | `number` | `20` | Initial Y offset in pixels |
| `x` | `number` | `0` | Initial X offset in pixels |

## Animation States

The component has two main states:

### Initial State (Before Animation)
- `opacity: 0` (invisible)
- `y: {y prop value}` (offset vertically)
- `x: {x prop value}` (offset horizontally)

### Animated State (When In View)
- `opacity: 1` (fully visible)
- `y: 0` (original position)
- `x: 0` (original position)

## Common Animation Patterns

### Fade In from Bottom (Default)
```tsx
<Reveal>
  <div>Content fades in from below</div>
</Reveal>
```

### Slide In from Left
```tsx
<Reveal x={-50} y={0}>
  <div>Content slides in from the left</div>
</Reveal>
```

### Slide In from Right
```tsx
<Reveal x={50} y={0}>
  <div>Content slides in from the right</div>
</Reveal>
```

### Fade In from Top
```tsx
<Reveal y={-30}>
  <div>Content fades in from above</div>
</Reveal>
```

### Staggered List Animation
```tsx
{items.map((item, index) => (
  <Reveal key={item.id} delay={index * 0.1}>
    <div>{item.content}</div>
  </Reveal>
))}
```

### Early Trigger (Before Fully Visible)
```tsx
<Reveal threshold={0.2}>
  <div>Animates when 20% visible</div>
</Reveal>
```

### Repeat Animation on Scroll
```tsx
<Reveal triggerOnce={false}>
  <div>Animates every time it enters viewport</div>
</Reveal>
```

## Threshold Values

The `threshold` prop controls when the animation triggers:

- `0`: Triggers as soon as any part enters the viewport
- `0.5`: Triggers when 50% of the element is visible
- `1`: Triggers when the entire element is visible (default)

## Troubleshooting

**Animation not triggering**:
- Check if the element is actually entering the viewport
- Adjust the `threshold` value (try `0.1` for early triggering)
- Ensure the parent container has sufficient height

**Animation too fast/slow**:
- Adjust the `duration` prop
- Use `delay` for sequencing multiple animations

**Performance issues**:
- Set `triggerOnce={true}` (default) to prevent repeated animations
- Avoid animating too many elements simultaneously

**Element not visible**:
- Check initial opacity and position values
- Ensure the element has content and dimensions

## Examples in Context

### Hero Section
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <Reveal y={50} duration={0.8}>
      <h1 className="text-6xl font-bold mb-4">Welcome</h1>
    </Reveal>
    <Reveal delay={0.3} y={30}>
      <p className="text-xl text-gray-600">Discover amazing possibilities</p>
    </Reveal>
    <Reveal delay={0.6} y={20}>
      <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg">
        Get Started
      </button>
    </Reveal>
  </div>
</section>
```

### Feature Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <Reveal
      key={feature.id}
      delay={index * 0.15}
      threshold={0.3}
      y={40}
    >
      <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </Reveal>
  ))}
</div>
```