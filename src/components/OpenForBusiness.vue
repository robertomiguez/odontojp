<template>
  <div :class="[status() === 'Aberto' ? 'blue--text' : 'red--text']"><v-icon>query_builder</v-icon> {{ status() }} </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    status () {
      let hour = new Date().getHours()
      let dayOfWeek = new Date().getDay()
      // 9am to 18pm monday to friday or 9am to 13pm on Saturday
      return (hour > 8 && hour < 19 && dayOfWeek > 0 && dayOfWeek < 6) || (hour > 8 && hour < 14 && dayOfWeek === 6) ? 'Aberto'
        : 'Fechado'
    }
  }
}
</script>
