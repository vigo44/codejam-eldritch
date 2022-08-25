const azathoth = [[1,2,1],[2,3,1],[2,4,0]];
const cthulhu = [[0,2,2],[1,3,0],[3,4,0]];
const iogSothoth = [[0,2,1],[2,3,1],[3,4,0]];
const shubNiggurath = [[1,2,1],[3,2,1],[2,4,0]];
const ancientsData = [azathoth, cthulhu, iogSothoth, shubNiggurath];
let ancientData=[];
let cardsResult=[];



const dots = document.querySelectorAll('.dot');
const ancients = document.querySelectorAll('.ancient');
const levels = document.querySelectorAll('.level');
const start = document.querySelector('.start');
const cardFace = document.querySelector('.cards-face');
const cardDown = document.querySelector('.cards-down');

ancients.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        ancientData= ancientsData[i].flat();
        setDots();
        ancients.forEach((them)=>{
            them.classList.remove('ancient-activ');
        });
        el.classList.add('ancient-activ');
        levels.forEach((them)=>{
            them.classList.add('level-on');
        });
        levels.forEach((them)=>{
            them.classList.remove('level-activ');
        });
        cardDown.classList.remove('cards-down_aktiv');
        cardFace.style.backgroundImage = `url()`;
        start.classList.remove('start-on');
    })
})

levels.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        levels.forEach((them)=>{
            them.classList.remove('level-activ');
        });
        el.classList.add('level-activ');
        start.classList.add('start-on');
    })
})

cardDown.addEventListener('click', openCard);
start.addEventListener('click', shuffleСards);

function shuffleСards (){
    cardDown.classList.add('cards-down_aktiv');
    cardFace.style.backgroundImage = `url()`;


}

function openCard () {

    if (cardsResult.length > 0) {
        let currentCard = cardsResult.shift();
        cardFace.style.backgroundImage = `url(./cards/${currentCard.id}.png)`;
    };    
    if (cardsResult.length == 0){
        cardDown.classList.remove('cards-down_aktiv');
    };
   

}

function setDots () {
    dots.forEach((el,i)=> {
        el.textContent = ancientData[i];
    });
}


cardsResult = [...blueCards];

