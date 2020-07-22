import './styles/styles.scss'
import './styles/responsivness.scss'
import { handleInputs } from './js/inputsHandle'

export{
    handleInputs
}

document.getElementById('add-a-trip').addEventListener('click',handleInputs)