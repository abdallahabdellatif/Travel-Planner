import venice from './../media/florence-venice.jpg'
let sections=2
function newSection(city,depDate,left,spent,temprature,img,mode) {
    //do some stuff
    const newSec=document.createElement('section');
    //mode resembles current or predicted temp
    newSec.innerHTML=`<div class="city"></div>
            <div class="text-card">
                <h3>${city.substring(0,1).toUpperCase()+city.substring(1)}</h3>
                <p>Departure Date: ${depDate}</p>
                <p>Days Left for Trip: ${left}</p>
                <p><strong>Days to be spent in trip </strong>: ${spent}</p>
                <p>${mode} Temprature: ${temprature} &#176C</p>
                <input type="submit" value="Remove" id="del${sections}">
            </div>`
    newSec.id='trip'+sections
    newSec.className='card'

    //image
    var myImg=new Image();
    myImg.src=venice
    myImg.alt="Venice"
    myImg.id="city-img"
    //add the image
    newSec.querySelector('.city').appendChild(myImg)
    //append whole section
    document.body.querySelector('.all-trips').appendChild(newSec)
    sections++;
    // console.log(sections)
}
export{
    newSection,
    sections
}