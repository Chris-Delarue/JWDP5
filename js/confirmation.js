let ordered = JSON.parse(sessionStorage.getItem("order"));
sessionStorage.setItem("order", JSON.stringify("ordered"));
console.log(ordered);
//GET INFO TO SEND TO CONFIRM PAGE


returnOrder = ()=> {
    if(sessionStorage.getItem("order") != null){
        let ordered = JSON.parse(sessionStorage.getItem("order"));// GET STORED PRODUCTS
        document.getElementById("last__Name").innerHTML = ordered.contact.lastName; //GET THE NAME FROM CONTACT
        document.getElementById("orderId").innerHTML = ordered.orderId;
        console.log(ordered);
        sessionStorage.removeItem("order");
    }
    
    else{
       
       window.location = "index.html";
     
    }
};


// ARRAY RECAP OF ORDER INTO CONFIRMATION PAGE

confirmRecap = () => {
// CREATE ARRAY

let confirmRecap = document.createElement("table");
let confirmLine = document.createElement("tr");
let confirmImage = document.createElement("th");
let confirmLastName = document.createElement("th");
let confirmUnitPrice = document.createElement("th");
let confirmTotal = document.createElement("tr");
let confirmTotalColumn = document.createElement("th");
let confirmTotalPaid = document.createElement("td");

// HTML STUCTURE

let confirmCart = document.getElementById("confirm__recap");
confirmCart.appendChild(confirmRecap);
confirmRecap.appendChild(confirmLine);
confirmLine.appendChild(confirmImage);
confirmLine.appendChild(confirmLastName);
confirmLine.appendChild(confirmUnitPrice);

// HEADER ARRAY

confirmImage.textContent = "Article";
confirmLastName.textContent = "Nom";
confirmUnitPrice.textContent = "prix";

// GET ID FOR EACH PRODUCTS

let i = 0;
let order = JSON.parse(sessionStorage.getitem('order'));

order.products.forEach((orderProduct) =>{
//CREATE LINE
let confirmProductLine = document.createElement("tr");
confirmProductLine.setAttribute("id", "product" + i);
let confirmImageProduct = document.createElement("img");
confirmImageProduct.setAttribute("class", product__image);
confirmImageProduct.setAttribute("src", orderProduct.imageUrl);
confirmImageProduct.setAttribute("alt", "image de l'article acheté");
let confirmLastNameProduct= document.createElement("td");
let confirmUnitPriceProduct = document.createElement("td");

//INSERT IN HTML

confirmRecap.appendChild(confirmProductLine);
confirmProductLine.appendChild(confirmImageproduct);
confirmProductLine.appendChild(confirmLastNameProduct);
confirmProductLine.appendChild(confirmUnitPriceProduct);


//TEXT CONTENT

confirmLastNameProduct.textContent = orderProduct.name;
confirmUnitPriceProduct.textContent = orderProduct.price / 100 + ",00" + "€";

});

//LAST LINE OF THE ARRAY


confirmRecap.appendChild(confirmTotal);
confirmTotal.appendChild(confirmTotalColumn);
confirmTotal.setAttribute("id", sumLine);
confirmTotalColumn.textContent = "Total payé";
confirmTotal.appendChild(confirmTotalPaid);

confirmTotalPaid.setAttribute("id", 'sum__ConfirmTotal');
confirmTotalPaid.setAttribute("colspan", "4");//The colspan attribute defines the number of columns a cell should span.
confirmTotalColumn.setAttribute("id", 'column__ConfirmTotal');

// CALCULATE ALL

let sumConfirmTotal = 0;
order.products.forEach((orderProduct) => {
    sumConfirmTotal += orderProduct.price /100;
})


}




returnOrder();
confirmRecap();
