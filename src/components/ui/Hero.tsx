"use client"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let globe: any
    let phi = 4.7

    const create = () => {
      if (!canvasRef.current) return

      // Captura tamanho dinâmico do container
      const size =
        canvasRef.current.parentElement?.offsetWidth || window.innerWidth
      const pixelRatio = Math.min(window.devicePixelRatio, 2)

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: pixelRatio,
        width: size * pixelRatio,
        height: size * pixelRatio,
        phi: 0,
        theta: -0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 25000,
        mapBrightness: 13,
        mapBaseBrightness: 0.05,
        baseColor: [0.16, 0.73, 1.77],
        glowColor: [0.84, 2.28, 0.71],
        markerColor: [100, 100, 100],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.03 },
          { location: [35.6895, 139.6917], size: 0.03 },
          { location: [28.7041, 77.1025], size: 0.03 },
        ],
        onRender: (state: { phi?: number }) => {
          state.phi = phi
          phi += 0.002
        },
      })
    }

    // Cria o globo inicial
    create()

    // Reajusta ao redimensionar a janela
    const handleResize = () => {
      if (globe) globe.destroy()
      create()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      if (globe) globe.destroy()
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section
      aria-labelledby="hero-title"
      className="mt-20 flex h-screen max-h-[calc(100vh-5rem)] w-full flex-col items-center justify-start overflow-hidden text-center sm:mt-40 sm:max-h-[calc(100vh-10rem)] sm:overflow-hidden"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-clip-text p-2 text-4xl font-bold tracking-tighter text-gray-700 dark:text-white sm:text-6xl md:text-7xl"
        style={{ animationDuration: "700ms" }}
      >
        Soluções Digitais que
        <br />
        Impulsionam o Seu Negócio
      </h1>

      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 dark:text-gray-400"
        style={{ animationDuration: "900ms" }}
      >
        Desenvolvemos softwares sob medida para transformar desafios em
        resultados reais.
      </p>

      <div
        className="container mx-auto flex w-full animate-slide-up-fade items-center justify-center sm:ml-auto sm:w-full"
        style={{ animationDuration: "1400ms", minHeight: "40rem" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute z-20 mx-auto aspect-square w-[90vw] max-w-[700px]"
        />
      </div>
    </section>
  )
}
