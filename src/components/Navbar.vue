<template>
  <header>
    <div class="bg-gray-900">
      <div
        class="
          px-4
          py-5
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
        "
      >
        <div class="relative flex items-center justify-between flex-col  md:flex-row">
          <a
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
          <img class="object-scale-down h-10 w-10" src="../assets/cupcake.png" alt="Logo de Pastelería Rosetta">
            <span
              class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
              >Pastelería Rosetta</span
            >
          </a>
          <ul class="flex items-center space-x-8 lg:flex">
            <li>
              <a
                @click="goto('cakes')"
                aria-label="Sabores"
                title="Sabores"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-pink-400
                "
                >Sabores</a
              >
            </li>
            <li>
              <a
                @click="goto('topper')"
                aria-label="Toppers"
                title="Toppers"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-pink-400
                "
                >Toppers</a
              >
            </li>
            <li>
              <a
                @click="goto('order')"
                aria-label="Pedido"
                title="Pedido"
                class="
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-200
                  hover:text-pink-400
                "
                >Pedido</a
              >
            </li>
          </ul>
          <ul class="flex items-center space-x-8 lg:flex">
            <li>
              <BtnNavNormal v-if="isHome" btnText="Pastelero" routeName="/baker"/>
              <BtnNavNormal v-else btnText="Cliente" routeName="/"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import BtnNavNormal from "@/components/Navbar-button.vue"

export default {
  name: "Navbar",
  components: {
    BtnNavNormal,
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    },
  },
  methods: {
    goto(refName) {
      let element = this.$refs[refName];

      let top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },
};
</script>