import Image from "next/image"
import { AnimatedTestimonials } from "../animated-testimonials"

interface About3Props {
  mainImage?: {
    src: string
    alt: string
  }
  secondaryImage?: {
    src: string
    alt: string
  }
  breakout?: {
    src: string
    alt: string
    title?: string
    description?: string
    buttonText?: string
    buttonUrl?: string
  }
  companiesTitle?: string
  companies?: Array<{
    src: string
    alt: string
  }>
  achievementsTitle?: string
  achievementsDescription?: string
  achievements?: Array<{
    label: string
    value: string
  }>
}

const defaultCompanies = [
  {
    src: "/images/ww.png",
    alt: "WW",
  },
  {
    src: "/images/estofaria-xingu.png",
    alt: "Estofaria Xingu",
  },
  {
    src: "/images/mineraliza.png",
    alt: "Mineraliza",
  },
  {
    src: "/images/lexxen.png",
    alt: "Lexxen",
  },
]

const defaultAchievements = [
  { label: "Empresas Atendidas", value: "20+" },
  { label: "Projetos Entregues", value: "30+" },
  { label: "Satisfação", value: "100%" },
  { label: "Valor Gerado", value: "3+Mi" },
]

const Companies = ({
  companies = defaultCompanies,
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section id="clientes" className="flex w-full justify-center pt-32">
      <div className="container flex flex-col gap-10">
        <div className="mb-14 flex flex-col gap-4 text-center">
          <h1
            className="inline-block max-w-2xl animate-slide-up-fade py-2 text-center text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-left md:text-7xl"
            style={{ animationDuration: "700ms" }}
          >
            Nossos Clientes
          </h1>
          <p
            className="max-w-2xl animate-slide-up-fade text-center text-lg text-gray-400 md:text-left"
            style={{ animationDuration: "900ms" }}
          >
            Parceiros de sucesso que confiam em nossas soluções tecnológicas
            para impulsionar seus negócios e alcançar resultados
            extraordinários.
          </p>
        </div>
        <div className="relative flex flex-col gap-20 overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="grid grid-cols-2 flex-wrap justify-between gap-10 text-center md:flex">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="text-lg text-white">{item.label}</p>
                <span className="text-4xl font-semibold text-primary md:text-6xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
          <div className="flex flex-col items-center justify-center py-10">
            <h2 className="text-center text-3xl font-bold text-white">
              Empresas que confiam em nós
            </h2>
            <div className="mt-8 grid max-w-[1100px] place-items-center gap-14 sm:grid-cols-3 md:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
              {companies.map((company, idx) => (
                <div
                  key={company.src + idx}
                  className="flex items-center justify-center p-4"
                >
                  <div className="relative h-12 w-[200px] sm:h-24">
                    <Image
                      src={company.src}
                      alt={company.alt}
                      fill
                      className="object-contain opacity-80 transition-opacity hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimatedTestimonials
          title="O que Nossos Clientes Dizem"
          subtitle="Depoimentos reais de quem já experimentou a excelência da Softtor"
          badgeText="Destaque em confiança"
          testimonials={[
            {
              id: 1,
              name: "Estofaria Xingu",
              role: "Cliente desde 2025",
              company: "",
              content:
                "Empresa séria e comprometida com o resultado do cliente. A Softtor está participando do crescimento da nossa empresa nos ajudando nas nossas soluções de sistema. Tem sido uma jornada de grandes melhorias e a SOFTTOR têm sido essencial nesse processo",
              rating: 5,
              avatar: "images/estofaria-xingu.png",
            },
            {
              id: 2,
              name: "Mineraliza",
              role: "Cliente desde 2024",
              company: "",
              content:
                "Empresa com bastante expertise técnica, comprometida com o resultado do cliente.",
              rating: 5,
              avatar: "images/mineraliza.png",
            },
            {
              id: 3,
              name: "WW Marketing",
              role: "Cliente desde 2023",
              company: "",
              content:
                "Empresa fantástica, desde o modo que trata o cliente quanto na entrega do serviço solicitado. Falando um pouco sobre o João, um rapaz muito bem educado, responsável e muito atencioso com a prestação de serviço. Muito obrigado por fazer parte desse projeto, espero está com você em vários outros. Sensacional!!!!",
              rating: 5,
              avatar: "images/ww.png",
            },
          ]}
        />
      </div>
    </section>
  )
}

export default Companies
