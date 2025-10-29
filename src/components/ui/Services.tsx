import { Code, Cog, PenTool, Shrub } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Desenvolvimento de sistemas",
      description:
        "Oferecemos soluções de desenvolvimento de sistemas que se adaptam perfeitamente às necessidades do seu negócio, garantindo não apenas a implementação de tecnologias avançadas, mas também um acompanhamento constante para assegurar a eficácia e a evolução contínua das soluções entregues. Engajamento total com o crescimento e a eficiência do seu empreendimento.",
      items: [],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Consultoria em Desenvolvimento de software",
      description:
        "Nossa consultoria é projetada para impulsionar a inovação e otimizar processos, oferecendo orientação especializada em todas as etapas do desenvolvimento de software. Com uma abordagem estratégica, garantimos que as soluções tecnológicas se alinhem perfeitamente aos objetivos do seu negócio, maximizando resultados e eficiência. Estamos comprometidos com o avanço e a competitividade da sua empresa no mercado digital.",
      items: [],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Infraestrutura na nuvem",
      description:
        "Oferecemos soluções de infraestrutura na nuvem que proporcionam escalabilidade, segurança e desempenho para sua empresa. Com a implementação de tecnologias de ponta, asseguramos que sua operação esteja sempre disponível e eficiente, adaptando-se dinamicamente às demandas do mercado. Comprometemo-nos com a continuidade e a inovação dos seus processos, garantindo que você permaneça sempre à frente na era digital.",
      items: [],
    },
    {
      icon: <Shrub className="h-6 w-6" />,
      title: "Outsourcing",
      description:
        "Disponibilizamos uma equipe de desenvolvedores experientes para trabalhar diretamente nos projetos dos nossos clientes, como uma extensão do seu time interno.",
      items: [],
    },
  ]

  return (
    <section id="servicos" className="flex w-full justify-center pt-32">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h1
              className="inline-block animate-slide-up-fade p-2 text-4xl font-bold tracking-tighter text-gray-700 dark:text-white sm:text-6xl md:text-7xl"
              style={{ animationDuration: "700ms" }}
            >
              Nossos serviços
            </h1>
            <p
              className="mt-6 animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
              style={{ animationDuration: "900ms" }}
            >
              Somos mais do que fornecedores, somos parceiros dedicados ao seu
              sucesso. Nos aprofundamos no entendimento do seu negócio para
              desenvolver soluções que elevem a competitividade da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-6 rounded-lg border border-border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
