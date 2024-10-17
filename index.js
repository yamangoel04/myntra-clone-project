 let bagitems;

//  document.addEventListener('DOMContentLoaded', onLoad);
 onLoad();
 
 function onLoad(){
 
 let bagitemsstr=localStorage.getItem('bagitems');
 bagitems=bagitemsstr?JSON.parse(bagitemsstr):[];
  displayitemsonhomepage();
 displaybagicon();
 
 }
 function addtobag(itemId) {
  if (!bagitems.includes(itemId)) {
    bagitems.push(itemId);
    localStorage.setItem('bagitems', JSON.stringify(bagitems));
    displaybagicon();
  }}
  
 

//  function addtobag(itemId){
// bagitems.push(itemId);

// localStorage.setItem('bagitems',JSON.stringify(bagitems));
// displaybagicon();
//  }




 
 function displaybagicon(){
let bagitemcountElement=document.querySelector('.bagitemcount');
if(bagitems.length>0){
  bagitemcountElement.style.visibility='visible';
  bagitemcountElement.innerText=bagitems.length;
}else{
  bagitemcountElement.style.visibility='hidden';
}

 };



function displayitemsonhomepage(){
 let itemscontainerelement=document.querySelector('.itemscontainer');
 if(itemscontainerelement==undefined){
  return;
 };
 let innerHTML='';
 items.forEach(item =>{

  innerHTML+=`<div class="itemcontainer">
  <img class="image"    src="${item.image}"alt="LOADING">
  <div class="rating">${item.rating.stars}⭐|${item.rating.noofreview}</div>
  <div class="companyname">${item.companyname}</div>
  <div class="itemname">${item.itemname}  </div>
  <div class="price">
    <span class="currentprice">${item.currentprice}</span>
    <span class="originalprice">${item.originalprice}</span>
    <span class="discount">${item.discount}%off</span>
  </div>
  <button class="btnaddtobag" onclick="addtobag(${item.id})">Add To Bag</button>
   
</div>`
 });
 








 



 

 itemscontainerelement.innerHTML=innerHTML;
};

