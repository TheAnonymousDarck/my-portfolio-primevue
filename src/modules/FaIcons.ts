import { library } from '@fortawesome/fontawesome-svg-core'
import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons'
import { faMusic, faFlask, faMicrochip, faHouseLaptop, faCode, faGamepad, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = library;
icons.add(faMusic, faFlask, faMicrochip, faHouseLaptop, faRaspberryPi, faCode, faGamepad, faMoon, faSun);

export { FontAwesomeIcon, icons }