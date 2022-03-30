<template>
  <section role="region" id="topper" ref="topper">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded-full bg-pink-accent-400">
            ¡Personalizados para tu evento!
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-pink-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="bc9273ce-29bb-4565-959b-714607d4d027" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)" width="52" height="24"></rect>
            </svg>
            <span class="relative">Toppers</span>
          </span>
          para darle a tu evento un toque <span class="text-pink-accent-200">especial</span>.
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Creamos toppers especiales para tu pastel, queremos que tu evento sea una experiencia inolvidable.
          <br class="hidden md:block" />
          <span class="text-pink-accent-200">¡Añadelo a tu pedido y cuentanos tu idea!</span>
        </p>
      </div>
      <div class="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <TopperSingle imgTopper='Numeros.webp' titleTopper='Edad (Número)' textTopper='Topper con la edad que nos indiques en forma de números para tu evento' priceTopper='$ 120.00 MXN' />
        <TopperSingle imgTopper='Letras.webp' titleTopper='Edad (Letras)' textTopper='Topper con la edad que nos indiques en forma de letras para tu evento' priceTopper='$ 150.00 MXN' />
        <TopperSingle imgTopper='Nombres.webp' titleTopper='Nombre' textTopper='Topper con el nombre de la persona que nos indiques para personalizar tu evento' priceTopper='$ 150.00 MXN' />
        <TopperSingle imgTopper='Graduaciones.webp' titleTopper='Graduaciones' textTopper='Topper con diseño personalizado para tu fiesta de graduación' priceTopper='$ 180.00 MXN' />
        <TopperSingle imgTopper='Especial.webp' titleTopper='Eventos Especiales' textTopper='Topper con diseño personalizado para tus eventos especiales' priceTopper='$ 200.00 MXN' />
        <TopperSingle imgTopper='Religiosos.webp' titleTopper='Eventos Religiosos' textTopper='Topper con diseños personalizados para eventos religiosos de cualquier doctrina' priceTopper='$ 180.00 MXN' />
      </div>
    </div>
  </section>
</template>

<script>
import TopperSingle from "@/components/Toppers-single.vue"

    export default {
    name: 'Toppers',
    components: {
    TopperSingle
  }
    }
</script>