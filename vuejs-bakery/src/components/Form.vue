<template>
  <section role="region" id="order" ref="order">
    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <h2
          class="
            max-w-lg
            mb-6
            font-sans
            text-3xl
            font-bold
            leading-none
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:mx-auto
          "
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="
                absolute
                top-0
                left-0
                z-0
                hidden
                w-32
                -mt-8
                -ml-20
                text-pink-100
                lg:w-32 lg:-ml-28 lg:-mt-10
                sm:block
              "
            >
              <defs>
                <pattern
                  id="bc9273ce-29bb-4565-959b-714607d4d027"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative">Realiza</span>
          </span>
          tu <span class="text-pink-accent-200">pedido</span> y nos pondremos en
          contacto.
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Escribenos lo que buscas en tu pastel y nos pondremos en contacto
          contigo para hacer tu idea realidad.
          <br class="hidden md:block" />
          <span class="text-pink-accent-200"
            >¡Añadelo a tu pedido y cuentanos tu idea!</span
          >
        </p>
      </div>
      <div
        class="
          grid
          max-w-md
          gap-10
          row-gap-8
          lg:max-w-screen-lg
          sm:row-gap-10
          lg:grid-cols-1
          xl:max-w-screen-lg
          sm:mx-auto
        "
      >
        <form
          novalidate=""
          action=""
          class="
            container
            flex flex-col
            mx-auto
            space-y-12
            ng-untouched ng-pristine ng-valid
          "
        >
          <fieldset
            class="
              grid grid-cols-1
              gap-6
              p-6
              rounded-md
              shadow-sm
              dark:bg-coolGray-900
            "
          >
            <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div class="col-span-full sm:col-span-3">
                <label
                  for="name"
                  class="text-sm font-bold text-pink-400 uppercase"
                  >Nombre</label
                >
                <input
                  id="name"
                  v-model="m_name"
                  type="text"
                  placeholder="Nombre"
                  class="
                    w-full
                    rounded-md
                    focus:ring focus:ring-opacity-75 focus:ring-pink-200
                    dark:border-coolGray-700 dark:text-coolGray-900
                  "
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label
                  for="email"
                  class="text-sm font-bold text-pink-400 uppercase"
                  >Correo Electronico</label
                >
                <input
                  id="email"
                  v-model="m_email"
                  type="email"
                  placeholder="Email"
                  class="
                    w-full
                    rounded-md
                    focus:ring focus:ring-opacity-75 focus:ring-pink-200
                    dark:border-coolGray-700 dark:text-coolGray-900
                  "
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label
                  for="sabores"
                  class="text-sm font-bold text-pink-400 uppercase"
                  >Sabores (Max. 2)</label
                >
                <Multiselect
                  id="sabores"
                  v-model="m_sabores"
                  mode="tags"
                  placeholder="Selecciona tus sabores"
                  :options="sabores"
                  class="multiselect-pink"
                />
              </div>
              <div class="col-span-full sm:col-span-3">
                <label
                  for="sabores"
                  class="text-sm font-bold text-pink-400 uppercase"
                  >Toppers</label
                >
                <Multiselect
                  id="sabores"
                  v-model="m_toppers"
                  mode="tags"
                  placeholder="Selecciona tus toppers"
                  :options="toppers"
                  class="multiselect-pink"
                />
              </div>
              <div class="col-span-full">
                <label
                  for="descripcion"
                  class="text-sm font-bold text-pink-400 uppercase"
                  >Platicanos como necesitas tu pastel</label
                >
                <textarea
                  id="descripcion"
                  v-model="m_message"
                  placeholder="Explicanos tu idea con lujo de detalles"
                  class="
                    w-full
                    rounded-md
                    focus:ring focus:ring-opacity-75 focus:ring-pink-200
                    dark:border-coolGray-700 dark:text-coolGray-900
                  "
                ></textarea>
              </div>
              <div class="col-span-full">
                <a
                  href="#"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    h-12
                    px-16
                    font-medium
                    tracking-wide
                    text-white
                    transition
                    duration-200
                    rounded
                    shadow-md
                    bg-pink-400
                    hover:bg-pink-accent-200
                    focus:shadow-outline focus:outline-none
                  "
                  aria-label="Botón de envio"
                  title="Enviar Pedido"
                >
                  Enviar Pedido
                </a>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";

export default {
  name: "Form",
  components: { Multiselect },
  data() {
    return {
      value: null,
      sabores: [
        "Chocolate",
        "Dulce de Leche",
        "Maracuya",
        "Oreo",
        "Red Velvet",
        "Zanahoria",
      ],
      toppers: [
        "Nombre",
        "Edad (letras)",
        "Edad (números)",
        "Graduación",
        "Evento Especial",
        "Evento Religioso",
      ],
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.multiselect-pink {
  --ms-tag-bg: #ff4081;
  --ms-tag-color: #fff;
  --ms-ring-color: #f48fb1;
  --ms-border-color: #9e9e9e;
  --ms-radius: 6px;
  --ms-py: 0.55rem;
}
</style>