import Companies from "@/components/ui/Companies"
import Hero from "@/components/ui/Hero"
import Methodology from "@/components/ui/Methodology"
import Services from "@/components/ui/Services"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <Methodology />
      <Services />
      <Companies />
      {/* <LogoCloud />
      <GlobalDatabase />
      <CodeExample />
      <Features />
      <Cta /> */}
    </main>
  )
}
