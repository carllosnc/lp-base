import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface RevealProps {
  children?: ReactNode
  text?: string
  duration?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  y?: number
  x?: number
}

export function Reveal({
  children,
  duration = 0.4,
  threshold = 1,
  triggerOnce = true,
  delay = 0,
  y = 20,
  x = 0,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: y,
        x: x
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0
      } : {
        opacity: 0,
        y: y,
        x: x
      }}
      transition={{
        duration,
        ease: "easeOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  )
}