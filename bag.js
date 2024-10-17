const CONVENIENCE_FEES = 99;
let bagitemsobjects=[];
onLoad();



function onLoad(){
  loadbagitemsobjects();
  displaybagitems();
  displayBagsummary();

}
function displayBagsummary()
{
  let bagsummaryElement = document.querySelector('.bagsummary');
 let totalitem=bagitemsobjects.length;
 let totalMRP=0;
 let totaldiscount=0;
 let currentMRP=0;

 bagitemsobjects.forEach(bagitem => {
  totalMRP += bagitem.originalprice;
  totaldiscount += bagitem.originalprice - bagitem.currentprice;
  currentMRP+=bagitem.currentprice;
  
 });

 let finalPayment = totalMRP - totaldiscount ;
 if (bagitemsobjects.length > 0) {
  finalPayment += CONVENIENCE_FEES;
}

 bagsummaryElement.innerHTML=
 `
   <div class="bagdetailscontainer">
    <div class="priceheader">PRICE DETAILS (${totalitem} Items) </div>
    <div class="priceitem">
      <span class="priceitemtag">Total MRP</span>
      <span class="priceitemvalue">₹${totalMRP}</span>
    </div>
    <div class="priceitem">
      <span class="priceitemtag">Discount on MRP</span>
      <span class="priceitemvalue priceDetailbasediscount">₹${totaldiscount}</span>
    </div>
     <div class="priceitem">
      <span class="priceitemtag"> Current MRP</span>
      <span class="priceitemvalue priceDetailbasediscount">₹${currentMRP}</span>
    </div>
    <div class="priceitem">
      <span class="priceitemtag">Convenience Fee</span>
      <span class="priceitemvalue">₹99</span>
    </div>
    <hr>
    <div class="pricefooter">
      <span class="priceitemtag">Total Amount</span>
      <span class="priceitemvalue">₹${finalPayment}</span>
    </div>
   </div>
   <button class="btnplaceorder">
    <div class="css-xjhrni">PLACE ORDER</div>
   </button>
 `;
}

















function loadbagitemsobjects(){
  console.log(bagitems);
 bagitemsobjects= bagitems.map(itemId =>{
    for (let i=0;i<items.length;i++){
      if(itemId==items[i].id){
        return items[i];
      }
    }
  });
  console.log(bagitemsobjects);
}
function displaybagitems(){
 containerElement=document.querySelector('.bagitemscontainer');
  let innerHTML='';
  bagitemsobjects.forEach(bagitem=>{
    innerHTML+=generateitemHtml(bagitem);
  });
  containerElement.innerHTML=innerHTML;
}
function refreshBagView() {
  loadbagitemsobjects();
  displaybagicon();
  displaybagitems();
  displayBagsummary();
}

function removefrombag(itemid) {
  bagitems = bagitems.filter(bagitemid => bagitemid != itemid);
  localStorage.setItem('bagitems', JSON.stringify(bagitems));
  refreshBagView();
}

// function removefrombag(itemid){
// bagitems = bagitems.filter(bagitemid => bagitemid != itemid);
// localStorage.setItem('bagitems',JSON.stringify(bagitems));
// loadbagitemsobjects();
// displaybagicon();
// displaybagitems();
// displayBagsummary();
// }
function generateitemHtml(item){ 
return `<div class="bagitemscontainer">
<div class="itemleftpart">
<img class="bagitemimg" src="${item.image}">
</div>
<div class="itemrightpart">
<div class="company">${item.companyname}</div>
<div class="itemname">${item.itemname}</div>
<div class="pricecontainer">
<span class="currentprice">${item.currentprice}</span>
<span class="originalprice">${item.originalprice}</span>
<span class="discount">${item.discount}%off</span></div>
<div class="returnperiod">
<span class="returnperioddays">${item.returnperiod}days</span>return available
</div>
<div class="deliverydetails">
delivery by
<span class="deliverydetailsdays">${item.deliverydate}</span>
</div>


<div class="removefromcart" onclick="removefrombag(${item.id})">X</div>
</div>
</div>`

;
}



