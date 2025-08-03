import React from "react"
import cn from "clsx"

interface InfiniteSliderProps {
  children: React.ReactNode
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
  className?: string
  gap?: string
  pauseOnHover?: boolean
}

export function InfiniteSlider({
  children,
  speed = "normal",
  direction = "left",
  className,
  gap = "gap-8",
  pauseOnHover = true,
}: InfiniteSliderProps) {
  const speedClasses = {
    slow: "animate-scroll-slow",
    normal: "animate-scroll",
    fast: "animate-scroll-fast",
  }

  const directionClass = direction === "right" ? "reverse" : ""

  return (
    <div className={cn("overflow-hidden whitespace-nowrap group", pauseOnHover && "cursor-pointer", className)}>
      <div
        className={cn(
          "inline-flex items-center",
          speedClasses[speed],
          directionClass,
          gap,
          pauseOnHover && "group-hover:animation-play-state-paused",
        )}
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {/* First set of items */}
        {React.Children.map(children, (child, index) => (
          <div key={`first-${index}`} className={`flex ${gap}`}>
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {React.Children.map(children, (child, index) => (
          <div key={`second-${index}`} className={`flex ${gap}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
