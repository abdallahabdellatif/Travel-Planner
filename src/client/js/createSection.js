// import venice from './../media/florence-venice.jpg'
let sections=1
function newSection(city,depDate,left,spent,incomingData) {
    //do some stuff
    const newSec=document.createElement('section');
    //mode resembles current or predicted temp
    let temprature=23
    let snow=0
    if(left>15){
        temprature=incomingData.data[0].temp
        snow=incomingData.data[0].snow
        document.getElementById('errors').innerHTML='Forecast predicts a max of 16 days, so temprature and snow of last trip are of today'
    }else {
        temprature=incomingData.data[left].temp
        snow=incomingData.data[left].snow
        document.getElementById('errors').innerHTML=''
    }
    newSec.innerHTML=`<div class="city"></div>
            <div class="text-card">
                <h3>${city.substring(0,1).toUpperCase()+city.substring(1).toLowerCase()}</h3>
                <p>Departure Date: ${depDate}</p>
                <p>Days Left for Trip: ${left}</p>
                <p><strong>Days to be spent in trip </strong>: ${spent}</p>
                <p>Temprature: ${temprature} &#176C</p>
                <p>Snow: ${snow} mm high</p>
                <input type="submit" value="Remove" id="del${sections}">
            </div>`
    newSec.id='trip'+sections
    newSec.className='card'

    //image
    var myImg=new Image();
    myImg.src=incomingData.hits[0].largeImageURL
    myImg.alt=city
    myImg.className="city-img"
    //add the image
    newSec.querySelector('.city').appendChild(myImg)
    //check if page is empty to remove message
    if(document.querySelector('.card')===null){
        document.querySelector('.empty').innerHTML=''
    }
    //append whole section
    document.body.querySelector('.all-trips').appendChild(newSec)
    sections++;
    // console.log(sections)
}
export{
    newSection,
    sections
}