<template>
    <multiselect :id="`${id}`" v-model="value" :options="options" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect'

    export default {
    name: 'MultiSelect',
    components: {
        Multiselect
    },
    props: {
      id: {
        type: String,
        required: true
      },
    },
    data () {
    return {
      value: [],
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
    }
</script>