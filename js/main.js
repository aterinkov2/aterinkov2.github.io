document.querySelector(".is__true").addEventListener("click", function(){
    prompt("ny dolbayob, chi ne?") == "da" ? alert("ny i poshol naxyi") : alert("dashe misli normalno virasit' ne moshes'");

});

let texts = document.querySelectorAll(".text");
let p = 0;

let message = "mamky tvoy ebal sychonish syka blyat eshe sobaky ebal i tebya toshe ebal";
let arMes = message.split(" ");
console.log(arMes);

setInterval(() => {
    texts.forEach((item) => {
        item.innerHTML = `${arMes[p]}`;   
        
    });
    p++; 
}, 10000);


