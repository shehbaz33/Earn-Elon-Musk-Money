let Anesthesiologists = document.getElementById('Anesthesiologists');
let Surgeon = document.getElementById('Surgeon');
let Gynecologists = document.getElementById('Gynecologists');
let Orthodontists = document.getElementById('Orthodontists');
let ChiefExecutives = document.getElementById('Chief-Executives');
let AirlinePilots = document.getElementById('Airline-Pilots');
let SystemsManagers = document.getElementById('Systems-Managers');
let Architect = document.getElementById('Architect');
let PetroleumEngineers = document.getElementById('Petroleum-Engineers');
let pressed = false;
let counter = 0


Anesthesiologists.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
            let btnid = e.target.id;
            let totalDays = checkDays(btnid);
            Anesthesiologists.innerHTML = `${totalDays} Years`
    }
})

Surgeon.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
            let btnid = e.target.id;
            let totalDays = checkDays(btnid);
            Surgeon.innerHTML = `${totalDays} Years`
    }
})

Gynecologists.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        Gynecologists.innerHTML = `${totalDays} Years`
    }
})

Orthodontists.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        Orthodontists.innerHTML = `${totalDays} Years`
    }
})

ChiefExecutives.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        ChiefExecutives.innerHTML = `${totalDays} Years`
    }
})

AirlinePilots.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        AirlinePilots.innerHTML = `${totalDays} Years`
    }
})

SystemsManagers.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        SystemsManagers.innerHTML = `${totalDays} Years`
    }
})

Architect.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        Architect.innerHTML = `${totalDays} Years`
    }
})

PetroleumEngineers.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON'){
        let btnid = e.target.id;
        let totalDays = checkDays(btnid);
        PetroleumEngineers.innerHTML = `${totalDays} Years`
    }
})



function checkDays(_id){
    if(_id === 'Anesthesiologists'){
        let totalDays = Math.floor((214000000000/261730)*0.002738);
        return totalDays;
        console.log(totalDays);
    } else if(_id === 'Surgeon'){
        let totalDays = Math.floor((214000000000/252040)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Gynecologists'){
        let totalDays = Math.floor((214000000000/233610)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Orthodontists'){
        let totalDays = Math.floor((214000000000/230830)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Chief-Executives'){
        let totalDays = Math.floor((214000000000/193850)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Airline-Pilots'){
        let totalDays = Math.floor((214000000000/147220)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Systems-Managers'){
        let totalDays = Math.floor((214000000000/146360)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Architect'){
        let totalDays = Math.floor((214000000000/144830)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } else if(_id === 'Petroleum-Engineers'){
        let totalDays = Math.floor((214000000000/137720)*0.002738);
        return(totalDays)
        console.log(totalDays)
    } 
}

