function openGift(){

confetti({
particleCount:250,
spread:180
});

document
.getElementById("hero")
.scrollIntoView({
behavior:"smooth"
});

}

function openLetter(){

const envelope =
document.getElementById("envelope");

const letter =
document.getElementById("letter");

const paper =
document.getElementById("paper");

envelope.classList.add("open");

setTimeout(()=>{

paper.classList.add("show");

},300);

setTimeout(()=>{

letter.classList.add("show");

},1200);

}

function sendHug(){

document
.getElementById("hugResult")
.innerHTML=
"❤️❤️❤️❤️❤️<br>Sending unlimited hugs to Simanis 🤗";

confetti({
particleCount:150,
spread:120
});

}

setInterval(()=>{

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-50px";
heart.style.fontSize="20px";

heart.animate([
{transform:'translateY(0)'},
{transform:'translateY(-120vh)'}
],{
duration:6000
});

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},1200);
