let product = [];
let customor = [];
let productname, productprice, customorname;
let productobj;
let count = 1;
let quantity =1;

document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    let row = document.getElementById("tablebody");
    row.innerHTML = ''
    productname = document.getElementById("productname").value;
    productprice = document.getElementById("productprice").value;
    productobj = {
        id: `id${count}`,
        name: productname,
        price: productprice
    }
    product.push(productobj)
    console.log(product)
    event.target.reset();
    for (let i = 0; i < product.length; i++) {
        let newrow = document.createElement("tr")
        newrow.id = "createrow"
        newrow.className = "table-primary"
        newrow.innerHTML = `
            <td scope="row">${product[i].name}</td>
            <td>${product[i].price}</td>
            <td><button id="${product[i].id}" onclick="order('${product[i].id}')">Order</button></td>
        `
        row.appendChild(newrow)
    }
    count++
})

document.getElementById("myformsecond").addEventListener("submit", function (event) {
    event.preventDefault();
    customorname = document.getElementById("customorname").value;
    let container = document.getElementById("optionname");
    container.innerHTML = ''
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


function order(id) {
   let selectrow = document.getElementById(id);
   let secondbody = document.getElementById("secondtablebody");
   console.log(selectrow);
   let latestproduct = product.filter(function (value){
    return value.id == id
   })
   
   console.log(latestproduct);
   let secondrow = document.createElement("tr")
   secondrow.className = "table-primary"
   secondrow.id = id

   let amount = quantity*latestproduct[0].price
   secondrow.innerHTML = `
   <td scope="row">${latestproduct[0].name}</td>
   <td>${latestproduct[0].price}</td>
   <td>${quantity}</td>
   <td>${amount}</td>
   <td><button>Delete</button></td>
   `
   quantity++
   secondbody.appendChild(secondrow)
}