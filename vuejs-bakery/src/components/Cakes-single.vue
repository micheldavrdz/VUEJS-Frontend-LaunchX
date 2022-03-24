<template>
  <div
    class="
      flex flex-col
      transition
      duration-300
      bg-white
      rounded
      shadow-sm
      hover:shadow
    "
  >
    <div class="relative w-full h-48">
      <img
        :src="require(`@/assets/img/cakes/${imgCake}`)"
        class="object-cover w-full h-full rounded-t"
        :alt="`Pastel de ${titleCake}`"
      />
    </div>
    <div
      class="
        flex flex-col
        justify-between
        flex-grow
        p-8
        border border-t-0
        rounded-b
      "
    >
      <div>
        <div class="text-lg font-semibold">{{titleCake}}</div>
        <p class="text-sm text-gray-900">
          {{textCake}}
        </p>
        <div class="mt-4 mb-2 mr-1 text-3xl font-bold sm:text-3xl text-pink-600">{{priceCake}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'CakeSingle',
    props: {
      imgCake: {
        type: String,
        required: true
      },
      titleCake: {
        type: String,
        required: true
      },
      textCake: {
        type: String,
        required: true
      },
      priceCake: {
        type: String,
        required: true
      }
    }
    }
</script>