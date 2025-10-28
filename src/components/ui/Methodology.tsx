import { Timeline } from "./timeline"

export default function Methodology() {
  return (
    <Timeline
      data={[
        {
          title: "Análise & Planejamento",
          content: (
            <div>
              <p
                className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
                style={{ animationDuration: "900ms" }}
              >
                Compreendemos profundamente seu negócio, objetivos e desafios
                para criar uma estratégia tecnológica personalizada.
              </p>
              {/* <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="https://assets.aceternity.com/templates/startup-1.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <Image
                    src="https://assets.aceternity.com/templates/startup-2.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <Image
                    src="https://assets.aceternity.com/templates/startup-3.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                  <Image
                    src="https://assets.aceternity.com/templates/startup-4.webp"
                    alt="startup template"
                    width={500}
                    height={500}
                    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                  />
                </div> */}
            </div>
          ),
        },
        {
          title: "Arquitetura & Design",
          content: (
            <div>
              <p
                className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
                style={{ animationDuration: "900ms" }}
              >
                Desenvolvemos a arquitetura técnica e design da solução,
                priorizando escalabilidade, segurança e performance.
              </p>
            </div>
          ),
        },
        {
          title: "Ágil",
          content: (
            <div>
              <p
                className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
                style={{ animationDuration: "900ms" }}
              >
                Implementamos a solução utilizando metodologias ágeis,
                garantindo entregas incrementais e feedback contínuo.
              </p>
            </div>
          ),
        },
        {
          title: "Testes & Qualidade",
          content: (
            <div>
              <p
                className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
                style={{ animationDuration: "900ms" }}
              >
                Realizamos testes rigorosos e controle de qualidade para
                assegurar a excelência e confiabilidade da solução.
              </p>
            </div>
          ),
        },
        {
          title: "Deploy & Suporte",
          content: (
            <div>
              <p
                className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
                style={{ animationDuration: "900ms" }}
              >
                Implementamos a solução em produção e oferecemos suporte
                contínuo para garantir o sucesso do seu projeto.
              </p>
            </div>
          ),
        },
      ]}
    />
  )
}
