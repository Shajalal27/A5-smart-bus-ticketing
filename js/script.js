
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
    h2.style.marginLeft = '20px';
    h2.innerText =  title;
    setContainer.appendChild(h2);

    const classContainer = document.getElementById('class-container');
    // console.log(classContainer);
    const h3 = document.createElement("h3");
    h3.style.marginLeft = '120px';
    h3.innerText =  'Economoy ';
    classContainer.appendChild(h3);

    const priceContainer = document.getElementById('price-container');
    const p = document.createElement("p");
    p.style.marginLeft = '130px';
    p.innerText = price;
    priceContainer.appendChild(p);

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
    grandTotal.innerText = totalPrice;
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

// Input filed section
const passenger = document.getElementById("passenger");
passenger.addEventListener("change", function(e){
    console.log("change", e.target.value);
})

passenger.addEventListener("input", function(e){
    console.log("input", e.target.value)
})





