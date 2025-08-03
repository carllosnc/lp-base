# AnimatedNumber Component

A React component that animates numbers with smooth transitions when they come into view. Built on top of the `@number-flow/react` library with intersection observer functionality for viewport-based animations.

## Usage

### Basic Example

```tsx
import { AnimatedNumber } from './animated-number'

function MyComponent() {
  return (
    <div>
      <h2>Total Sales</h2>
      <AnimatedNumber end={1250} />
    </div>
  )
}
```

### Advanced Example

```tsx
import { AnimatedNumber } from './animated-number'

function Dashboard() {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Revenue</h3>
        <AnimatedNumber
          start={0}
          end={95000}
          duration={30}
          className="text-4xl font-bold text-green-600"
        />
      </div>

      <div className="stat-card">
        <h3>Users</h3>
        <AnimatedNumber
          start={100}
          end={2500}
          duration={40}
          className="text-3xl font-semibold"
        />
      </div>
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `start` | `number` | `0` | The starting number for the animation |
| `end` | `number` | `100` | The target number to animate to |
| `duration` | `number` | `50` | Duration in milliseconds between each number increment |
| `delay` | `number` | `0` | Currently unused - reserved for future delay functionality |
| `className` | `string` | `""` | CSS classes to apply to the NumberFlow component |

## Behavior

### Animation Trigger
The animation starts when the component enters the viewport, detected using the Intersection Observer API. This ensures optimal performance by only animating visible elements.

## Styling

The component accepts a `className` prop that is passed directly to the underlying `NumberFlow` component. This allows for complete styling flexibility:

```tsx
<AnimatedNumber
  end={1000}
  className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
/>
```