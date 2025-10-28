"use client"

import { scrollToSection } from "@/lib/utils"
import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import { Logo } from "../../../public/Logo"

const navigation = {
  product: [
    { name: "Metodologia", href: "metodologia", external: false },
    { name: "Serviços", href: "servicos", external: false },
    { name: "Clientes", href: "clientes", external: false },
  ],
  resources: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/softtor.ds/",
      external: true,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGMVANTDG10LQAAAZor3WkQzn0hOxQe6IEdTtzqEX8tqSVbJcmQZVapvZBQfxhrvoqoZqugBwIBtDfsHF6_47rP1f-0_ZAZmQIYU8bKNOQnlYFng992fHrEvJoWPb9XJajpFM4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsofttor",
      external: true,
    },
    {
      name: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=5561996105046",
      external: true,
    },
  ],
}

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <Logo className="w-32 sm:w-40" />
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Criamos soluções digitais que conectam eficiência e inovação,
              ajudando empresas a crescer com tecnologia confiável e segura.
            </p>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-1 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Sessões
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <button
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        onClick={() => scrollToSection(item.href)}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Redes Sociais
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Resources"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:flex-row">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SOFTTOR TODOS OS DIREITOS
            RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  )
}
