const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const search=document.getElementById("search");
const buttons=document.querySelectorAll(".filters button");
const cards=[...document.querySelectorAll(".service-card")];
const noResults=document.getElementById("noResults");
let filter="all";

function render(){
  const q=search.value.toLowerCase().trim();
  let count=0;
  cards.forEach(card=>{
    const okFilter=filter==="all"||card.dataset.cat===filter;
    const okSearch=!q||card.dataset.search.toLowerCase().includes(q)||card.textContent.toLowerCase().includes(q);
    const show=okFilter&&okSearch;
    card.style.display=show?"block":"none";
    if(show) count++;
  });
  noResults.style.display=count?"none":"block";
}
buttons.forEach(btn=>btn.addEventListener("click",()=>{
  buttons.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  filter=btn.dataset.filter;
  render();
}));
search.addEventListener("input",render);

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{topBtn.style.display=scrollY>450?"grid":"none"});
topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();
