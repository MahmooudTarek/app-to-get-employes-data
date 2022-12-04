import { createApp } from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css';

loadFonts()


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBroom,  faCheckCircle,  faFileExport,  faPenSquare,  faPersonDressBurst, faTrash, faTrashAlt, faUser, faUserSecret, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faUser,faBroom,faPersonDressBurst,faCheckCircle,faXmark,faPenSquare,faTrashAlt, faFileExport)

createApp(App)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  // .use(router)
  .mount('#app')
  
  