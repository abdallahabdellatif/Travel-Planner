import './styles/styles.scss'
import './styles/responsivness.scss'

import {handleInputs } from './js/inputsHandle'
import {getToday} from './js/helpers'
import {newSection,sections} from './js/createSection'
import {removeSection} from './js/removeTrip'
import venice from './media/florence-venice.jpg'
export{
    handleInputs,
    getToday,
    newSection,
    removeSection
}

document.getElementById('add-a-trip').addEventListener('click',handleInputs)
document.querySelector('.all-trips').addEventListener('click',removeSection)

//loading image
var myImg=new Image();
myImg.src=venice
myImg.alt="Venice"
myImg.id="city-img"
document.getElementById('city').appendChild(myImg)