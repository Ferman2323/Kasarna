// (Max - min ) + min;




let container = document.querySelector('.container');
let cloud = document.querySelector('.cloud');

function createSoldier(name){
    this.name = name;
    this.weapon = ['gun','rifle','sniper'][Math.floor(Math.random()* 3)];
    this.hp = Math.floor(Math.random() * (1000 - 500) + 500);
}

let kasarna = [];
localStorage.kasarna = kasarna;

makeSoldiers(1000);
displaySoldiers();

function makeSoldiers(number){
    for (let i = 0; i < number; i++) {
        let s1 = new createSoldier(`Soldier${i}`);
        kasarna.push(s1)
    };  
}


function displaySoldiers(){
    let text = '';
    for (let i = 0; i < kasarna.length; i++) {
            let currentSoldier = kasarna[i];
            text += `
            <div class="box ${currentSoldier.weapon}" id="${i}"></div>
            `
    }
    container.innerHTML = text;
}

let boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover',displayInfo);
    boxes[i].addEventListener('mouseleave',hideInfo);
    
}


function displayInfo(e){
    cloud.style.display = 'block';
    let indexPosition = this.id;
    let currentSoldier = kasarna[indexPosition];
    cloud.style.top = (e.y + 20) + 'px';
    cloud.style.left = (e.x + 20) + 'px';
    cloud.innerHTML = `<p class ="para">${currentSoldier.name}</p>`
    cloud.innerHTML += `<p class ="para">${currentSoldier.weapon}</p>`
}

function hideInfo(){
    cloud.style.display = 'none';
}

