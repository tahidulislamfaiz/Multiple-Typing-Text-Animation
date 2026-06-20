
 let secText = document.querySelector('.sec-text');
let textLoad = () => {
    setTimeout(() => {
        secText.textContent='programing';
        secText.style.color='white'
    },0)
    setTimeout(() => {
        secText.textContent='blogger';
        secText.style.color='green'
    },3000)
    setTimeout(() => {
        secText.textContent='You Tuber';
        secText.style.color='black'
    },6000)
    setTimeout(() => {
        secText.textContent='Documentory';
        secText.style.color='gold'
    },9000)



}
textLoad();
setInterval(textLoad,12000)

//-------------------------------------------------------

// let secText = document.querySelector('.sec-text');

// let words = [
//     'programing',
//     'blogger',
//     'You Tuber',
//     'Documentory'
// ];

// let colors = [
//     'white',
//     'green',
//     'black',
//     'gold'
// ];

// let index = 0;

// secText.textContent = words[index];
// secText.style.color = colors[index];

// setInterval(() => {
//     index++;

//     if (index >= words.length) {
//         index = 0;
//     }

//     secText.textContent = words[index];
//     secText.style.color = colors[index];

// }, 3000);

//-------------------------------------------

// let selectText = document.querySelector('.sec-text');

// let texts = [
//     { word: 'programing', color: 'white' },
//     { word: 'bloggin', color: 'green' },
//     { word: 'youtubing', color: 'black' }
// ];

// let index = 0;

// function loadText() {
//     selectText.textContent = texts[index].word;
//     selectText.style.color = texts[index].color;

//     index++;

//     if (index === texts.length) {
//         index = 0;
//     }
// }

// loadText();
// setInterval(loadText, 4000);






