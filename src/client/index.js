import './styles/styles.scss'
import './styles/responsivness.scss'

import {handleInputs } from './js/inputsHandle'
import {getToday} from './js/helpers'
import {newSection,sections} from './js/createSection'
import {removeSection} from './js/removeTrip'
// import venice from './media/florence-venice.jpg'
export{
    handleInputs,
    getToday,
    newSection,
    removeSection
}

document.getElementById('add-a-trip').addEventListener('click',handleInputs)
document.querySelector('.all-trips').addEventListener('click',removeSection)

//collapsible
// var coll = document.getElementsByClassName("collapse");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }