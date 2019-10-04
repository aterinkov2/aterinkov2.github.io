let message = "mamky tvoy ebal sychonish syka blyat eshe sobaky ebal i tebya toshe ebal";

document.querySelector(".is__true").addEventListener("click", function(){
    prompt("ny dolbayob, chi ne?") == "da" ? alert("ny i poshol naxyi") : alert("dashe misli normalno virasit' ne moshes'");

});

let texts = document.querySelectorAll(".text");
let p = 0;

let arMes = message.split(" ");
console.log(arMes);

setInterval(() => {
    texts.forEach((item) => {
        if(p>=arMes.length)
            p=0;
        item.innerHTML = `${arMes[p]}`;   
        console.log(p);
    });
    ++p; 
}, 10000);


