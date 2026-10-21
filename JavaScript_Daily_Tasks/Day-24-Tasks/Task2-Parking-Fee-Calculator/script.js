function calculateDelivery() {
    let amount = Number(document.getElementById("amount").value);
    let charge = 0;

    if (amount < 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid order amount.";
    }
    else if (amount === 0) {
        document.getElementById("result").innerHTML =
            "Please enter an order amount.";
    }
    else if (amount >= 1000) {
        charge = 0;
    }
    else if (amount >= 500) {
        charge = 30;
    }
    else {
        charge = 60;
    }

    if (amount > 0) {
        document.getElementById("result").innerHTML =
            "Delivery Charge: Rs. " + charge;
    }
}
