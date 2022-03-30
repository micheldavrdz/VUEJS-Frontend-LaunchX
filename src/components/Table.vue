<template>
<div class="overflow-x-auto">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
            <span class="relative">Esta</span>
          </span>
          es la lista de tus <span class="text-pink-accent-200">pedidos</span> pendientes.
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Aqui puedes encontrar la los pedidos que han realizado los clientes para poder contactarlos.
        </p>
      </div>
            <div class="w-full">
                <div class="bg-white shadow-md my-6">
                    <table class="min-w-max w-full table-auto rounded">
                        <thead class="rounded">
                            <tr class="bg-pink-400 text-gray-100 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Nombre</th>
                                <th class="py-3 px-6 text-left">Email</th>
                                <th class="py-3 px-6 text-center">Sabores</th>
                                <th class="py-3 px-6 text-center">Toppers</th>
                                <th class="py-3 px-6 text-center">Mensaje</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <tr v-for="order in $store.getters.getOrders" :key="order.id" class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left whitespace-nowrap">
                                    <div class="flex items-center">
                                        {{ order.Name }}
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        {{ order.Email }}
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        {{ order.Sabores.toString().split(',').join(', ') }}
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    {{ order.Toppers.toString().split(',').join(', ') }}
                                </td>
                                <td class="py-3 px-6 text-center">
                                    {{ order.Descripcion }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: "Table",
};
</script>