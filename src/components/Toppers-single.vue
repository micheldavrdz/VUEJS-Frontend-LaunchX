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
        :src="require(`@/assets/img/toppers/${imgTopper}`)"
        class="object-cover w-full h-full rounded-t"
        :alt="`Topper de ${titleTopper}`"
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
        <div class="text-lg font-semibold">{{titleTopper}}</div>
        <p class="text-sm text-gray-900">
          {{textTopper}}
        </p>
        <div class="mt-4 mb-2 mr-1 text-3xl font-bold sm:text-3xl text-pink-600">{{priceTopper}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'TopperSingle',
    props: {
      imgTopper: {
        type: String,
        required: true
      },
      titleTopper: {
        type: String,
        required: true
      },
      textTopper: {
        type: String,
        required: true
      },
      priceTopper: {
        type: String,
        required: true
      }
    }
    }
</script>