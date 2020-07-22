export async function handleInputs(e){
    let city=document.getElementById('city').value
    let depDate=document.getElementById('departure').value
    let endDate=document.getElementById('end').value
    console.log(city+" "+depDate+" "+endDate)
    console.log(Client.getToday())
    if(city.length===0||depDate.length==0||endDate.length==0){
        //display that all data must be provided
        document.getElementById('errors').innerHTML='There are missing info'
        return
    }
    let date1=new Date(depDate)
    let date2=new Date(endDate)
    let today=new Date(Client.getToday())
    if(date1.getTime()>=date2.getTime()){
        //give error that end must be > departure
        document.getElementById('errors').innerHTML='End date cannot preceed departure date'
    }else if (date1.getTime()<today.getTime()){
        //departure cannot be in old date
        document.getElementById('errors').innerHTML='Departure date cannot preceed today'
    }else{
        //use data to do the missing stuff
        let daysLeft=Math.floor((date1.getTime()-today.getTime())/(1000*3600*24))
        let daysToSpend=Math.floor((date2.getTime()-date1.getTime())/(1000*3600*24))
        // console.log("DaysLeft: "+daysLeft+", DaysToSpend: "+daysToSpend)
        let temprature=23
        if(daysLeft<7){
            //current weather
            Client.newSection(depDate,daysLeft,daysToSpend,"Current")
        }else{
            //future weather prediction
            Client.newSection(depDate,daysLeft,daysToSpend,"Predicted")
        }
    }
}