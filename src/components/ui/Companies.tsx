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
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
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
    <section className="my-20 flex w-full justify-center">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1
            className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-6xl md:text-7xl"
            style={{ animationDuration: "700ms" }}
          >
            Nossos Clientes
          </h1>
          <p
            className="mt-6 animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
            style={{ animationDuration: "900ms" }}
          >
            Parceiros de sucesso que confiam em nossas soluções tecnológicas
            para impulsionar seus negócios e alcançar resultados
            extraordinários.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          {/* <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div> */}
          <div className="flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
        <div className="py-10">
          <h2 className="text-center text-3xl font-bold">
            Empresas que confiam em nós
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div>
        </div>
        <AnimatedTestimonials />
      </div>
    </section>
  )
}

export default Companies
