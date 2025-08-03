import type React from "react"
import  { FiArrowRight } from "react-icons/fi"

interface CtaButtonProps {
  text?: string
  href?: string
  gradientStartColor?: string
  gradientMiddleColor?: string
  gradientEndColor?: string
  textColor?: string
  bgColor?: string
  size?: "normal" | "big" | "bigger"
}

export function CtaButton({
  text = "Get Started",
  href = "#",
  bgColor = "bg-white",
  textColor = "text-black",
  gradientStartColor = "#E2CBFF",
  gradientMiddleColor = "#393BB2",
  gradientEndColor = "#E2CBFF",
  size = "normal",
}: CtaButtonProps) {

  const sizeClasses = {
    normal: {
      button: "h-12",
      padding: "p-[4px]",
      text: "text-sm",
      innerPadding: "px-8 py-1",
    },
    big: {
      button: "h-14",
      padding: "p-[5px]",
      text: "text-base",
      innerPadding: "px-10 py-2",
    },
    bigger: {
      button: "h-16",
      padding: "p-[6px]",
      text: "text-lg",
      innerPadding: "px-12 py-3",
    },
  }

  const currentSize = sizeClasses[size]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex ${currentSize.button} overflow-hidden rounded-full ${currentSize.padding} focus:outline-none`}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--gradient-start)_0%,var(--gradient-middle)_50%,var(--gradient-end)_100%)]"
        style={
          {
            "--gradient-start": gradientStartColor,
            "--gradient-middle": gradientMiddleColor,
            "--gradient-end": gradientEndColor,
          } as React.CSSProperties
        }
      />
      <span className={`inline-flex h-full w-full gap-[8px] hover:gap-[20px] cursor-pointer items-center justify-center rounded-full ${bgColor} ${currentSize.innerPadding} ${currentSize.text} font-medium ${textColor} backdrop-blur-3xl transition-all duration-300 group`}>
        {text}
        <FiArrowRight className="text-[20px]" />
      </span>
    </a>
  )
}