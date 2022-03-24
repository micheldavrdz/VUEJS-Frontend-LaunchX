<template>
  <section role="region" id="hero">
    <div class="relative">
      <img src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" class="absolute inset-0 object-cover w-full h-full" alt="" />
      <div class="relative bg-gray-900 bg-opacity-75">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-center xl:flex-row">
            <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Pasteles deliciosos<br class="hidden md:block" />
                hechos con <span class="text-pink-accent-200">cariño</span> desde nuestra cocina.
              </h2>
              <p class="max-w-xl mb-4 text-base text-gray-300 md:text-lg">
                Trabajamos todos los dias para mejorar nuestros sabores y ofrecerte la experiencia culinaria que mereces.
              </p>
              <a v-if="isHome" href="#Pedido" aria-label="Realice su pedido" class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-pink-accent-200 hover:text-pink-accent-400">
                Realice su pedido ahora
                <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
    name: 'Header',
    computed: {
      isHome() {
        return this.$route.name === 'home';
      },
    },
    }
</script>