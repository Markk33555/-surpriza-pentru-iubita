const button = document.getElementById("startButton");

button.addEventListener("click", () => {

document.body.style.overflow = "auto";

document.querySelector(".container").innerHTML = `

<h1 style="margin-bottom:40px;">💌 Dragă Geanina...</h1>

<div id="letter" style="
font-size:22px;
line-height:2;
text-align:left;
max-width:700px;
margin:auto;
white-space:pre-line;
"></div>

`;

const text = `

Nu am făcut acest site pentru că este o zi specială...

L-am făcut pentru că TU ești o persoană specială.

În ultima perioadă m-am gândit cât de norocos sunt că te am în viața mea.

Poate nu îți spun suficient de des...

Dar îți mulțumesc.

Îți mulțumesc pentru răbdarea ta.

Îți mulțumesc pentru fiecare zâmbet.

Îți mulțumesc pentru fiecare îmbrățișare.

Îți mulțumesc pentru fiecare moment petrecut împreună.

Îți mulțumesc că mă faci să mă simt iubit.

Îți mulțumesc că mă faci să vreau să fiu un om mai bun.

Poate nu sunt perfect...

Dar un lucru este sigur.

Te iubesc din tot sufletul.

❤️

Cu toată dragostea,

Mark ❤️
`;

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("letter").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();

});