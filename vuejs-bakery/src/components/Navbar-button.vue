<template>
<router-link :to="`${routeName}`">
  <a
    href="/"
    class="
      inline-flex
      items-center
      justify-center
      h-12
      px-6
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
    aria-label="{{btnText}}"
    title="{{btnText}}"
  >
    {{btnText}}
  </a>
</router-link>
</template>

<script>
    export default {
        name: 'BtnNavNormal',
        props: {
            btnText: String,
            routeName: String
        }
    };
</script>

