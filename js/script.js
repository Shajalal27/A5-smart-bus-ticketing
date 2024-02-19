
const sitElement = document.querySelectorAll(".sit");

// console.log(sitElement);
 let setCount = 1;

 let minusSetCount = 8

 let totalPrice = 0;

for(let index = 0; index <sitElement.length; index++){
    const element = sitElement[index];
    // console.log(element);
    element.addEventListener("click", function(){
        // console.log('Clicked');

    const sitCountValue = document.getElementById('set-value');``
    sitCountValue.innerText =setCount;
    setCount++;
    
    const minusSetValue = document.getElementById('selected-sit');
    minusSetValue.innerText = minusSetCount;
    minusSetCount--;
    //get the site title
    const title = element.querySelector("h3").innerText;
    const price = parseFloat(document.querySelector("span").innerText.split(" ")[0]);
    // console.log(price);
    
     

    // console.log(priceValue, title);

    const setContainer = document.getElementById('sit-container');
    // console.log(setContainer);

    const h2 = document.createElement("h2");
    h2.innerText =  title;
    setContainer.appendChild(h2);

    // Ticket Price Calculate
        totalPrice += price;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    
    })
}
    // New 15 Coponcode
    const btn = document.getElementById('apply-btn');
    btn.addEventListener("click", function(){

    //get the value input filed
    const couponElement = document.getElementById('input-filed').value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);
    if(couponCode === "NEW15"){
        const grandTotal = document.getElementById('grand-total');
        const discoundPrice = totalPrice * 0.15 ;
        grandTotal.innerText = totalPrice - discoundPrice;
    
    } 
    else if(couponCode === "COUPLE20"){
        const grandTotal = document.getElementById('grand-total');
        const discoundPrice = totalPrice * 0.2 ;
        grandTotal.innerText = totalPrice - discoundPrice;
    }
    else{
        alert("Invalid Coupon");
    }
    
})

