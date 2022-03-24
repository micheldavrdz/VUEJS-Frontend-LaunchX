<template>
  <section role="region" id="cake" ref="cakes">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-50 uppercase rounded-full bg-pink-accent-400">
            ¡Nuevos sabores!
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
            <span class="relative">Pasteles</span>
          </span>
          de todos los <span class="text-pink-accent-200">sabores</span>, para todos los gustos.
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Nuestros pasteles estan hechos con ingredientes de la mas alta calidad, para paladares refinados como el tuyo.
          <br class="hidden md:block" />
          <span class="text-pink-accent-200">¡Se pueden mezclar mitad/mitad por $50.00 MXN más!</span>
        </p>
      </div>
      <div class="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <CakeSingle imgCake='Chocolate.webp' titleCake='Chocolate' textCake='Pastel de chocolate cubierto de chocolate y relleno de crema chocolatosa con chocochips' priceCake='$ 300.00 MXN' />
        <CakeSingle imgCake='Dulce.webp' titleCake='Dulce de Leche' textCake='Pastel de vainilla cubierto de dulce de leche y relleno de 3 leches' priceCake='$ 300.00 MXN' />
        <CakeSingle imgCake='Oreo.webp' titleCake='Oreo' textCake='Pastel de chocolate cubierto de oreos y relleno de crema mezcla oreo' priceCake='$ 300.00 MXN' />
        <CakeSingle imgCake='Maracuya.webp' titleCake='Maracuya' textCake='Pastel de vainilla cubierto de chocolate blanco y relleno de crema de maracuyá y coco' priceCake='$ 300.00 MXN' />
        <CakeSingle imgCake='Velvet.webp' titleCake='Red Velvet' textCake='Pastel de red velvet relleno de crema de cheesecake y frutos rojos' priceCake='$ 300.00 MXN' />
        <CakeSingle imgCake='Zanahoria.webp' titleCake='Zanahoria' textCake='Pastel de zanahoria, almendras y pasas, relleno de frosting de queso crema y naranja' priceCake='$ 300.00 MXN' />
      </div>
    </div>
  </section>
</template>

<script>
import CakeSingle from "@/components/Cakes-single.vue"

    export default {
    name: 'Cakes',
    components: {
    CakeSingle
  }
    }
</script>