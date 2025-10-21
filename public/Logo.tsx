import Image from "next/image"
import * as React from "react"

export const Logo = (props: React.HTMLAttributes<HTMLImageElement>) => (
  <Image {...props} width={1000} height={100} alt="logo" src="/logo.webp" />
)
