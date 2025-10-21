"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/use-scroll"
import { cx } from "@/lib/utils"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"
import { Logo } from "../../../public/Logo"

export function Navigation() {
  const scrolled = useScroll(15)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-72" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-5xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="font-chakra w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Softtor</span>
            <Logo className="h-min max-h-[50px] w-28 md:w-32" />
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="[&>a:hover]:text-primary [&>a:hover]:border-primary flex items-center gap-10 font-medium [&>a:hover]:border-b">
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.about}
              >
                Metodologia
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.pricing}
              >
                Serviços
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.changelog}
              >
                Tecnologias
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.changelog}
              >
                Clientes
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 dark:text-gray-50"
                href={siteConfig.baseLinks.changelog}
              >
                Consultoria
              </Link>
            </div>
          </nav>
          <Button className="!bg-secondary hidden h-10 font-semibold md:flex">
            Contate-nos
          </Button>
          <div className="flex gap-x-2 md:hidden">
            <Button className="!bg-secondary">Contate-nos</Button>
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-2"
            >
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about}>Metodologia</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.pricing}>Serviços</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog}>Tecnologias</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog}>Clientes</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.changelog}>Consultoria</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
