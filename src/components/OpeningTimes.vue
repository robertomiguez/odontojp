<template>
    <div>
    <div class="body-1 mb-0"> {{ weekdays }} </div>
    <div class="body-1 mb-0"> {{ weekends }} </div>
    <div class="font-weight-light font-italic mb-0"> {{ ps }} </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    weekdays: 'Segunda a Sexta de 8h às 17h',
    weekends: 'Sábado de 8h às 12h',
    ps: '* Atendimento somente com hora marcada.'
  }),
  methods: {
  }
}
</script>
