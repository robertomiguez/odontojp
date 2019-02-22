export const mixin = {
  methods: {
    whatsapp (message, via) {
      // api or web
      return '//' + this.deviceDetected() + '.whatsapp.com/send?phone=5521965746454&text=' + message
    },
    deviceDetected () {
      // return true
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return 'api'
      } else {
        return 'web'
      }
    },
    partOfTheDay () {
      let hour = new Date().getHours()
      return hour < 12 ? 'Bom dia '
        : hour < 18 ? 'Boa tarde '
          : 'Boa noite '
    },
    appointmentMessage () {
      return this.partOfTheDay() + 'Dr. João Paulo, gostaria de marcar uma consulta.'
    },
    helloMessage () {
      return this.partOfTheDay() + 'Dr. João Paulo.'
    }
  }
}
