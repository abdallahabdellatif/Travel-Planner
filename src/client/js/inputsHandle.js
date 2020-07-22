export async function handleInputs(e){
    //retrieve inputs
    let city=document.getElementById('city-entry').value
    let depDate=document.getElementById('departure').value
    let endDate=document.getElementById('end').value
    // console.log(city+" "+depDate+" "+endDate)
    // console.log(Client.getToday())

    if(city.length===0||depDate.length==0||endDate.length==0){
        //display that all data must be provided
        document.getElementById('errors').innerHTML='There are missing info'
        return
        //terminate method
    }
    //convert the dates
    let date1=new Date(depDate)
    let date2=new Date(endDate)
    let today=new Date(Client.getToday())
    //checking data entered
    if(date1.getTime()>=date2.getTime()){
        //give error that end must be > departure
        document.getElementById('errors').innerHTML='End date cannot preceed departure date'
    }else if (date1.getTime()<today.getTime()){
        //departure cannot be in old date
        document.getElementById('errors').innerHTML='Departure date cannot preceed today'
    }else{
        //all clear
        let daysLeft=Math.floor((date1.getTime()-today.getTime())/(1000*3600*24))
        let daysToSpend=Math.floor((date2.getTime()-date1.getTime())/(1000*3600*24))
        // console.log("DaysLeft: "+daysLeft+", DaysToSpend: "+daysToSpend)
        //img TODO
        console.log('CORRECT DATA')
        const response = await fetch('http://localhost:3000/geo', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        // mode:'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({myCity:city,left:daysLeft})
      });
        let newData={}
        try {
            newData = await response.json();
            console.log(newData)
        }catch(error) {
            console.log("HERE COMES THE ERROR , WOOOOO",error);
        }
        Client.newSection(city,depDate,daysLeft,daysToSpend,newData)
    }
}