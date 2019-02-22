<template>
  <v-container grid-list-xl>
  <v-layout>
     <v-flex xs12 sm6 offset-sm3>
       <v-card>
         <v-card-title class="primary white--text">
           <div :class="[{'subheading' : $vuetify.breakpoint.xs, 'headline' : $vuetify.breakpoint.smAndUp}, 'mb-0'] ">{{ title }}</div>
           <v-btn
            icon
            absolute
            fab
            center
            right>
             <font-awesome-icon
              :icon="{ prefix: 'fab', iconName: 'whatsapp' }"
              :class="{'fa-3x' : $vuetify.breakpoint.xs, 'fa-4x' : $vuetify.breakpoint.smAndUp}"
              style="color:#FFFFFF"/>
           </v-btn>
         </v-card-title>

         <v-card-text style="height: 140px" class="grey lighten-5">
           <v-divider></v-divider>
           <v-textarea
                  box
                  v-model="message"
                  label="message"
                  counter
                  maxlength="120"
                  full-width
                  single-line
           ></v-textarea>
           <v-divider></v-divider>
         </v-card-text>
         <v-card-text style="height: 70px; position: relative" class="grey lighten-5">
         <v-btn
              icon
              right
              center
              fab
              absolute
              :href="`${whatsapp(`${message}`)}`"
            >
              <font-awesome-icon icon="arrow-circle-right" class="fa-3x" style="color: #34af23"/>
            </v-btn>
         </v-card-text>

       </v-card>
       <div><OpeningTimes/> <OpenForBusiness/> </div>

       <v-flex xs12 text-xs-center>
         <v-btn to="/Localizacao" round color="primary" dark>Localização</v-btn>
       </v-flex>

     </v-flex>
   </v-layout>

  </v-container>
</template>

<script>
import { mixin } from '../mixins/mixin'
import OpeningTimes from '../components/OpeningTimes'
import OpenForBusiness from '../components/OpenForBusiness'
export default {
  mixins: [mixin],
  components: {
    OpeningTimes,
    OpenForBusiness
  },
  data: () => ({
    title: 'Marque a sua consulta.',
    message: ''
  }),
  mounted () {
    this.message = this.appointmentMessage()
  }

}
</script>

<style>
</style>
