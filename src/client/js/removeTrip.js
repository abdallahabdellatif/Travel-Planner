export function removeSection(e){
    let element=e.target
    let tag=element.tagName
    console.log(tag)
    if(tag!='INPUT'){
        console.log("bas yalla")
        return
    }
    let elementId=element.id
    console.log(elementId)
    let myElem=document.getElementById(elementId)
    myElem.parentNode.parentNode.parentNode.removeChild(myElem.parentNode.parentNode)
    //add no trips message if valid
    if (document.querySelector('.card')===null){
        document.querySelector('.empty').innerHTML='No Trips Yet'
    }
}