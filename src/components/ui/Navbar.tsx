"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/use-scroll"
import { cx, scrollToSection } from "@/lib/utils"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { Logo } from "../../../public/Logo"
import { Button } from "../Button"

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
        "ease-[cubic-bezier(0.16,1,0.3,1.03)] fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-0 transition-all duration-300 will-change-transform",
        open === true ? "h-72" : "h-16",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-5xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="w-full font-chakra text-gray-900 dark:text-white md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Softtor</span>
            <Logo className="h-min max-h-[50px] w-28 md:w-32" />
          </Link>
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium [&>button:hover]:border-b [&>button:hover]:border-primary [&>button:hover]:text-primary">
              <button
                className="px-2 py-1"
                onClick={() => scrollToSection("metodologia")}
              >
                Metodologia
              </button>
              <button
                className="px-2 py-1"
                onClick={() => scrollToSection("servicos")}
              >
                Serviços
              </button>
              <button
                className="px-2 py-1"
                onClick={() => scrollToSection("clientes")}
              >
                Clientes
              </button>
            </div>
          </nav>
          <Link
            href={"https://api.whatsapp.com/send?phone=5561996105046"}
            target="_blank"
          >
            <Button className="hidden h-10 !bg-secondary font-semibold md:flex">
              Contate-nos
            </Button>
          </Link>
          <div className="flex gap-x-2 md:hidden">
            <Link
              href={"https://api.whatsapp.com/send?phone=5561996105046"}
              target="_blank"
            >
              <Button className="!bg-secondary">Contate-nos</Button>
            </Link>
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
              <button onClick={() => scrollToSection("metodologia")}>
                Metodologia
              </button>
            </li>
            <li onClick={() => setOpen(false)}>
              <button onClick={() => scrollToSection("servicos")}>
                Serviços
              </button>
            </li>
            <li onClick={() => setOpen(false)}>
              <button onClick={() => scrollToSection("clientes")}>
                Clientes
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
