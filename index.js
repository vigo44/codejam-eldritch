const azathoth = [[1,2,1],[2,3,1],[2,4,0]];
const cthulhu = [[0,2,2],[1,3,0],[3,4,0]];
const iogSothoth = [[0,2,1],[2,3,1],[3,4,0]];
const shubNiggurath = [[1,2,1],[3,2,1],[2,4,0]];
const ancientsData = [azathoth, cthulhu, iogSothoth, shubNiggurath];
let ancientData=[]; // выбранный герой
let cardsResult=[]; // конечная колода
// необходимое количество карт в колоде
let necessaryBlue;
let necessaryBrown;
let necessaryGreen;
// колоды собранные под уровень сложности
let greenCardsLevel = []; 
let brownCardsLevel = [];
let blueCardsLevel = [];
// колоды со случайными картами нормализованные под количество карт героя
let greenCardsNormalized = [];
let brownCardsNormalized = [];
let blueCardsNormalized = [];
// колоды этапов
let stage1Cards =[];
let stage2Cards =[];
let stage3Cards =[];

const dots = document.querySelectorAll('.dot');
const ancients = document.querySelectorAll('.ancient');
const levels = document.querySelectorAll('.level');
const start = document.querySelector('.start');
const cardFace = document.querySelector('.cards-face');
const cardDown = document.querySelector('.cards-down');


ancients.forEach((el,i)=>{
    el.addEventListener('click',()=>{
        ancientData= ancientsData[i].flat();
        necessaryGreen = ancientsData[i].reduce((sum, current)=> sum + current[0], 0);
        necessaryBrown = ancientsData[i].reduce((sum, current)=> sum + current[1], 0);
        necessaryBlue = ancientsData[i].reduce((sum, current)=> sum + current[2], 0);
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

levels[0].addEventListener('click',()=>{
    greenCardsLevel = [];
    brownCardsLevel = [];
    blueCardsLevel = [];
    //green
    {greenCards.forEach((el)=>{
        if (el.difficulty == 'easy') {greenCardsLevel.push(el)}
    });
    let normalCards = [];
    if (greenCardsLevel.length < necessaryGreen ){
       
       greenCards.forEach((el)=>{
        if (el.difficulty == 'normal') {normalCards.push(el)}
    }); 
    }
    while (greenCardsLevel.length < necessaryGreen ) {
        greenCardsLevel.push(normalCards.splice(randomCard(greenCardsLevel.length),1)[0]);
    }}
    //brown
    {brownCards.forEach((el)=>{
        if (el.difficulty == 'easy') {brownCardsLevel.push(el)}
    });
    let normalCards = [];
    if (brownCardsLevel.length < necessaryBrown ){
       
        brownCards.forEach((el)=>{
        if (el.difficulty == 'normal') {normalCards.push(el)}
    }); 
    }
    while (brownCardsLevel.length < necessaryBrown ) {
        brownCardsLevel.push(normalCards.splice(randomCard(brownCardsLevel.length),1)[0]);
    }}
    //blue
    {blueCards.forEach((el)=>{
        if (el.difficulty == 'easy') {blueCardsLevel.push(el)}
    });
    let normalCards = [];
    if (blueCardsLevel.length < necessaryBlue ){
       
        blueCards.forEach((el)=>{
        if (el.difficulty == 'normal') {normalCards.push(el)}
    }); 
    }
    while (blueCardsLevel.length < necessaryBlue ) {
        blueCardsLevel.push(normalCards.splice(randomCard(blueCardsLevel.length),1)[0]);
    }}



})

levels[1].addEventListener('click',()=>{
    greenCardsLevel = [];
    greenCards.forEach((el)=>{
        if (el.difficulty != 'hard') {greenCardsLevel.push(el)}
    });
    brownCardsLevel = [];
    brownCards.forEach((el)=>{
        if (el.difficulty != 'hard') {brownCardsLevel.push(el)}
    });
    blueCardsLevel = [];
    blueCards.forEach((el)=>{
        if (el.difficulty != 'hard') {blueCardsLevel.push(el)}
    })


})

levels[2].addEventListener('click',()=>{
    greenCardsLevel = [];
    brownCardsLevel = [];
    blueCardsLevel = [];
    greenCardsLevel = [...greenCards];
    brownCardsLevel = [...brownCards];
    blueCardsLevel = [...blueCards]; 
    
})

levels[3].addEventListener('click',()=>{
    greenCardsLevel = [];
    greenCards.forEach((el)=>{
        if (el.difficulty != 'easy') {greenCardsLevel.push(el)}
    });
    brownCardsLevel = [];
    brownCards.forEach((el)=>{
        if (el.difficulty != 'easy') {brownCardsLevel.push(el)}
    });
    blueCardsLevel = [];
    blueCards.forEach((el)=>{
        if (el.difficulty != 'easy') {blueCardsLevel.push(el)}
    })



})

levels[4].addEventListener('click',()=>{
    greenCardsLevel = [];
    brownCardsLevel = [];
    blueCardsLevel = [];
    //green
    {greenCards.forEach((el)=>{
        if (el.difficulty == 'hard') {greenCardsLevel.push(el)}
    });
    let normalCards = [];
    if (greenCardsLevel.length < necessaryGreen ){
       
       greenCards.forEach((el)=>{
        if (el.difficulty == 'normal') {normalCards.push(el)}
    }); 
    }
    while (greenCardsLevel.length < necessaryGreen ) {
        greenCardsLevel.push(normalCards.splice(randomCard(greenCardsLevel.length),1)[0]);
    }}
    //brown
    {brownCards.forEach((el)=>{
        if (el.difficulty == 'hard') {brownCardsLevel.push(el)}
    });
    let normalCards = [];
    if (brownCardsLevel.length < necessaryBrown ){
       
        brownCards.forEach((el)=>{
        if (el.difficulty == 'normal') {normalCards.push(el)}
    }); 
    }
    while (brownCardsLevel.length < necessaryBrown ) {
        brownCardsLevel.push(normalCards.splice(randomCard(brownCardsLevel.length),1)[0]);
    }}
    //blue
    {blueCards.forEach((el)=>{
        if (el.difficulty == 'hard') {blueCardsLevel.push(el)}
    });
    let normalCards = [];
    if (blueCardsLevel.length < necessaryBlue ){
       
        blueCards.forEach((el)=>{
        if (el.difficulty == 'normal') {normalCards.push(el)}
    }); 
    }
    while (blueCardsLevel.length < necessaryBlue ) {
        blueCardsLevel.push(normalCards.splice(randomCard(blueCardsLevel.length),1)[0]);
    }}




})

cardDown.addEventListener('click', openCard);
start.addEventListener('click', shuffleСards);

function shuffleСards (){
    cardDown.classList.add('cards-down_aktiv');
    cardFace.style.backgroundImage = `url()`;
    greenCardsNormalized = normalizationCards (necessaryGreen, greenCardsLevel);
    brownCardsNormalized = normalizationCards (necessaryBrown, brownCardsLevel);
    blueCardsNormalized = normalizationCards (necessaryBlue, blueCardsLevel);
    //stage1
    for (let i= ancientData[0]; i>0; i--){
        stage1Cards.push(greenCardsNormalized.pop());
    }
    for (let i= ancientData[1]; i>0; i--){
        stage1Cards.push(brownCardsNormalized.pop());
    } 
    for (let i= ancientData[2]; i>0; i--){
        stage1Cards.push(blueCardsNormalized.pop());
    }  
    //stage2
    for (let i= ancientData[3]; i>0; i--){
        stage2Cards.push(greenCardsNormalized.pop());
    }
    for (let i= ancientData[4]; i>0; i--){
        stage2Cards.push(brownCardsNormalized.pop());
    } 
    for (let i= ancientData[5]; i>0; i--){
        stage2Cards.push(blueCardsNormalized.pop());
    }
    //stage3
    for (let i= ancientData[6]; i>0; i--){
        stage3Cards.push(greenCardsNormalized.pop());
    }
    for (let i= ancientData[7]; i>0; i--){
        stage3Cards.push(brownCardsNormalized.pop());
    } 
    for (let i= ancientData[8]; i>0; i--){
        stage3Cards.push(blueCardsNormalized.pop());
    }
    // перетасовыввание stage колод и добавлние в общую
    while (stage1Cards.length > 0) {
        cardsResult.push(stage1Cards.splice(randomCard(stage1Cards.length, stage1Cards),1)[0])
    }
    while (stage2Cards.length > 0) {
        cardsResult.push(stage2Cards.splice(randomCard(stage2Cards.length, stage2Cards),1)[0])
    }
    while (stage3Cards.length > 0) {
        cardsResult.push(stage3Cards.splice(randomCard(stage3Cards.length, stage3Cards),1)[0])
    }
    
    start.classList.remove('start-on');
    levels.forEach((them)=>{
        them.classList.remove('level-on');
    });



}

function openCard () {

    if (cardsResult.length > 0) {
        let currentCard = cardsResult.shift();
        cardFace.style.backgroundImage = `url(./cards/${currentCard.id}.png)`;
        tracker(currentCard);
    };    
    if (cardsResult.length == 0){
        cardDown.classList.remove('cards-down_aktiv');
        ancients.forEach((them)=>{
            them.classList.remove('ancient-activ');
        });
        levels.forEach((them)=>{
            them.classList.remove('level-activ');
        });
    };
   

}

function tracker(card) {
    if (card.color =='green'){
        if (ancientData[0]> 0) {
            ancientData[0]--;
        } else {
            if (ancientData[3]>0) {
                ancientData[3]--;
            } else {
                ancientData[6]--;
            }
        }
    }
    if (card.color =='brown'){
        if (ancientData[1]> 0) {
            ancientData[1]--;
        } else {
            if (ancientData[4]>0) {
                ancientData[4]--;
            } else {
                ancientData[7]--;
            }
        }
    }
    if (card.color =='blue'){
        if (ancientData[2]> 0) {
            ancientData[2]--;
        } else {
            if (ancientData[5]>0) {
                ancientData[5]--;
            } else {
                ancientData[8]--;
            }
        }
    }
    setDots();
}


function setDots () {
    dots.forEach((el,i)=> {
        el.textContent = ancientData[i];
    });
}

function randomCard (max) { // случайное число от 0 до мах-1
    let result =  Math.random()*max;  
    return Math.floor(result); 
}

function normalizationCards(needCards, cards){ // массив N-случайных карт из исходного
    let resultCards = [];
    while (resultCards.length < needCards) {
        resultCards.push(cards.splice(randomCard(cards.length),1)[0]);
    }
    return resultCards;
}
