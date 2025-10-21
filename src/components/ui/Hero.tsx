"use client"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 4.7

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1200 * 2,
      height: 1200 * 2,
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
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.03 }, // New York City
        { location: [35.6895, 139.6917], size: 0.03 }, // Tokyo
        { location: [28.7041, 77.1025], size: 0.03 }, // Delhi
      ],
      onRender: (state: { phi?: number }) => {
        state.phi = phi
        phi += 0.002
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-20 flex h-screen flex-col items-center justify-center text-center sm:mt-20"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-gray-50 dark:to-gray-300"
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
        className="container relative mx-auto flex min-h-[50rem] w-full animate-slide-up-fade items-center justify-center sm:ml-auto sm:w-full"
        style={{ animationDuration: "1400ms" }}
      >
        <canvas
          className="absolute z-20 mx-auto aspect-square size-full w-full md:top-[1rem]"
          ref={canvasRef}
          style={{ width: 1200, height: 1200 }}
        />
      </div>
    </section>
  )
}
