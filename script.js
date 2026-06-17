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
    
    envelope.classList.add("open");
    
    setTimeout(()=>{
    
    letter.classList.add("show");
    
    },700);

}

function revealReason(card){

card.classList.toggle("flip");

}

document
.getElementById("hugResult")
.innerHTML=
"❤️❤️❤️❤️❤️<br>Sending unlimited hugs to Simanis 🤗";

confetti({
particleCount:150,
spread:120
});

}

const reasons = [

"Karena senyummu",
"Karena perhatianmu",
"Karena kamu selalu ada",
"Karena kamu baik",
"Karena kamu lucu",
"Karena kamu cantik",
"Karena kamu sabar",
"Karena kamu tulus",
"Karena kamu kuat",
"Karena kamu hebat",
"Karena kamu spesial",
"Karena kamu unik",
"Karena kamu manis",
"Karena kamu pengertian",
"Karena kamu perhatian",
"Karena kamu bikin nyaman",
"Karena kamu bikin tenang",
"Karena kamu bikin bahagia",
"Karena kamu rumah",
"Karena kamu penyayang",
"Karena kamu pekerja keras",
"Karena kamu pintar",
"Karena kamu peduli",
"Karena kamu menginspirasiku",
"Karena kamu berharga",
"Karena aku bersyukur memilikimu",
"Karena kamu adalah Simanis ❤️"

];

const container =
document.getElementById("reasonContainer");

reasons.forEach((item,index)=>{

const card =
document.createElement("div");

card.className =
"reason-card";

card.innerHTML =
`❤️ Reason #${index+1}`;

card.onclick = () => {
card.innerHTML = item;
};

container.appendChild(card);

});

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
