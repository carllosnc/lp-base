import NumberFlow from "@number-flow/react"
import React, { useEffect } from "react"

export function AnimatedNumber({
  start = 0,
  end = 100,
  duration = 50,
  delay = 0,
  className=""
}) {
  const [number, setNumber] = React.useState(start)
  const ref = React.useRef<HTMLDivElement>(null)

  function action(){
    const timer = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber === end) {
          clearInterval(timer)
          return end
        }

        return prevNumber + 1
      })
    }, duration)

    return timer
  }

  useEffect(() => {
    if (!ref.current) return

    let timer: any = null

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        action()
      } else {
      }
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [start, end, delay])

  return (
    <div ref={ref}>
      <NumberFlow className={className} value={number} />
    </div>
  )
}
