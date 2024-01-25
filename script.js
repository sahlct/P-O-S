let product = [];
let customor = [];
let productname, productprice, customorname;
let productobj;

document.getElementById("myform").addEventListener("submit", function (event) {
    productname = document.getElementById("productname").value;
    productprice = document.getElementById("productprice").value;
    // console.log(productname);
    // console.log(productprice);
    productobj = {
        name: productname,
        price: productprice
    }
    product.push(productobj)
    console.log(product)
    event.preventDefault();
    event.target.reset();
})

document.getElementById("myformsecond").addEventListener("submit", function (event) {
    event.preventDefault();
    customorname = document.getElementById("customorname").value;
    let container = document.getElementById("optionname");
    container.innerHTML =''
    customor.push(customorname)
    console.log(customor);
    event.target.reset();
    for (let i = 0; i < customor.length; i++) {
        let newoption = document.createElement("option")
        newoption.id = `option`
        newoption.innerHTML = customor[i]
        container.appendChild(newoption)
    }
    
})