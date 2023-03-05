const API_PATH = "https://islomapi.uz/api/present/day?region=Toshkent";

const elBomdodTime = document.querySelector(".bomdod-time");
const elPeshinTime = document.querySelector(".peshin-time");
const elAsrTime = document.querySelector(".asr-time");
const elShomTime = document.querySelector(".shom-time");
const elXuftonTime = document.querySelector(".xufton-time");
const elNamozday = document.querySelector(".js-day");
const elTime = document.querySelector(".day-time");

const x = Date();
elTime.textContent = x.slice(0,-35);


function getTime(API_PATH){
   fetch(API_PATH )
   .then((res)=> res.json())
   .then((data)=>{
   elNamozday.textContent = data.weekday;
   elBomdodTime.textContent = data.times.tong_saharlik;
   elPeshinTime.textContent = data.times.peshin;
   elAsrTime.textContent = data.times.asr;
   elShomTime.textContent = data.times.shom_iftor;
   elXuftonTime.textContent = data.times.hufton;
   })
}
getTime(API_PATH);

