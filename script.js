let product = [];
let customor = [];
let productname, productprice, customorname;
let productobj;
let count = 1;
// let quantity =1;
let orderedlist=[];

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
   secondbody.innerHTML = ''
   console.log(selectrow);
   let latestproduct = product.filter(function (value){
    return value.id == id
   })

//    let neworderedlist = orderedlist.filter(function (value){
//     return value.id == id
//    })
//    console.log("new orderd list is : ",neworderedlist);

   let entry = {
    id: latestproduct[0].id,
    name:latestproduct[0].name,
    price:latestproduct[0].price,
    quantity: 1,
    amount: latestproduct[0].price
   }
   orderedlist.push(entry)
   

for(let i=0; i<orderedlist.length; i++){
    let secondrow = document.createElement("tr")
   secondrow.className = "table-primary"
   secondrow.id = id
   secondrow.innerHTML = `
   <td scope="row">${orderedlist[i].name}</td>
   <td>${orderedlist[i].price}</td>
   <td>${orderedlist[i].quantity}</td>
   <td>${orderedlist[i].amount}</td>
   <td><button>Delete</button></td>
   `
   secondbody.appendChild(secondrow)
}  
}