<template>
  <v-container grid-list-xl>
  <v-layout>
     <v-flex sm6 offset-sm3>
       <v-card>
         <v-img
           :src="require('../assets/westoffice.jpg')"
           aspect-ratio="3.00"
         />

         <v-card-title primary-title>
           <div>
             <div class="headline mb-0">{{ title }}</div>
             <div class="body-1 mb-0">{{ address }}</div>
             <div><OpeningTimes/> <OpenForBusiness/> </div>
             <div><a :href="`mailto:${email}`">{{email}}</a></div>
           </div>
         </v-card-title>

         <v-card-actions>
           <v-spacer></v-spacer>
            <v-btn icon v-show="deviceDetected() == 'api'" :href="`${mobile}`">
              <font-awesome-icon icon="phone" class="fa-2x" style="color: #dd4b39"/>
            </v-btn>
           <v-btn icon :href="`${whatsapp(`${helloMessage()}`)}`">
             <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" class="fa-2x" style="color:#34af23"/>
           </v-btn>
           <v-btn icon @click="openurl(facebook)" class="mr-3">
             <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="fa-2x" style="color:#3b5998"/>
           </v-btn>
         </v-card-actions>
       </v-card>
       <v-flex xs12 text-xs-center>
         <v-btn to="/Agendamento" round color="primary" dark>Agendamento</v-btn>
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
    title: 'Clinica Dentária Dr. João Paulo Carvalho Vieira',
    address: 'Estrada do Mendanha, 789 - sala 234 - Campo Grande - RJ, CEP: 23087-286',
    facebook: '//www.facebook.com/consutorio.jpcvieira.5',
    email: 'consultoriojpcvieira@gmail.com',
    mobile: 'tel:41090660'
  }),
  methods: {
    openurl (url) {
      window.open(url, '_blank', 'location=yes, scrollbars=yes, status=yes')
    }
  }
}
</script>

<style>
</style>
