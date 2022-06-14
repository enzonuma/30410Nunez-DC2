let welcome = alert("Welcome to Xclusive Shoes!")
let myShoes = []

function crearId() {
    return parseInt(Math.random() * 100)
}

function congrats() {
    congratstext = prompt("Your shoes were added! Do you want to add another ones? (Y / N to close")
}

function addShoes() {
    class Producto {
        constructor(sku, shoesName, minBid) {
            this.sku = sku
            this.shoesName = shoesName
            this.minBid = parseInt(minBid)
        }
    }

    shoesName = prompt("Enter the shoes Model/Name:")
    minBid = prompt("Enter the min. $Bid:")
    sku = crearId()
    myShoes.push(new Producto(sku, shoesName, minBid))
}

addShoes()

congrats()

while (congratstext != "N") {

    switch (congratstext) {
        case "Y" :
            addShoes();
            congrats();
            break;

        default :
            alert("Please enter an option");
            congrats = prompt("Your shoes were added. Do you want to add another ones? (Y / N to close");
            addShoes();
            break;
    }

} 

let thankYou = alert("Thank you for visit us! Here are your Shoes, good luck!")
console.table(myShoes)