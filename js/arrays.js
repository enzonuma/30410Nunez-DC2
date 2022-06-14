let welcome = alert("Welcome to Xclusive Shoes!")
let myShoes = []

function addShoes() {
    class Producto {
        constructor(shoesName, minBid) {
            this.shoesName = shoesName
            this.minBid = parseInt(minBid)
        }
    }

    shoesName = prompt("Enter the shoes Model/Name:")
    minBid = prompt("Enter the min. $Bid:")
    myShoes.push(new Producto(shoesName, minBid))
}

addShoes()

let congrats = prompt("Your shoes were added! Do you want to add another ones? (Y / N to close")

while (congrats != "N") {

    switch (congrats) {
        case "Y" :
            addShoes();

        default :
            alert("Please enter an option");
            congrats = prompt("Your shoes were added. Do you want to add another ones? (Y / N to close");
            addShoes();
            break;
    }

} 

let thankYou = alert("Thank you for visit us! Here are your Shoes, good luck!")
console.table(myShoes)

// else {
//     congrats = prompt("Your shoes were added. Do you want to add another ones? (Y / N to close")
// }