<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >

      <v-flex xs12>
        <div :class="[{'mb-1' : $vuetify.breakpoint.xs, 'mb-4' : $vuetify.breakpoint.smAndUp}, 'display-2 font-italic primary--text']">
          {{ title }}
        </div>
        <div :class="[{'mb-1' : $vuetify.breakpoint.xs, 'mb-4' : $vuetify.breakpoint.smAndUp}, 'display-1 font-weight-thin primary--text']">
          {{ subtitle }}
        </div>

          <div :class="{'mb-1' : $vuetify.breakpoint.xs, 'mb-4' : $vuetify.breakpoint.smAndUp}">
          <v-avatar
            :size="`${getAvatarSize()}`"
            color="grey lighten-4"
          >
            <v-img
              :src="require('@/assets/jpimage1.jpeg')"
            />
          </v-avatar>
        </div>

        <div>
          <v-btn to="/contato" round color="primary" dark>Contato</v-btn>
        </div>
      </v-flex>

      <v-flex xs12>
      </v-flex>
  </v-layout>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'Bemvindo ao Consultório!',
    subtitle: 'Dr. João Paulo'
  }),
  methods: {
    getAvatarSize () {
      if (this.$vuetify.breakpoint.xs)
        return '250'
      else
        return '400'
    }
  }
}
</script>

<style>
</style>
