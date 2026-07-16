import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import colors from 'vuetify/util/colors'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import GithubComponent from '../Icons/GithubComponent.vue'
import VirusComponent from '../Icons/VirusComponent.vue'
import TwitterComponent from '../Icons/TwitterComponent.vue'
import LinkedinComponent from '../Icons/LinkedinComponent.vue'
import CoronaVirusComponent from '../Icons/CoronaVirusComponent.vue'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      github: GithubComponent,
      virus: VirusComponent,
      twitter: TwitterComponent,
      linkedin: LinkedinComponent,
      corona: CoronaVirusComponent
    },
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#00ADBC'
        }
      },
      dark: {
        colors: {
          primary: colors.grey.darken4
        }
      }
    }
  }
})
