function calculateBill() {
    let customer = document.getElementById("customer").value.trim();
    let room = document.getElementById("room").value;
    let days = Number(document.getElementById("days").value);
    let extraBed = document.getElementById("extraBed").value;
    let food = document.getElementById("food").value;
    let result = document.getElementById("result");

    if (customer === "" || room === "" ||
        document.getElementById("days").value === "") {
        result.innerHTML = "Please fill all required fields.";
        return;
    }

    if (days <= 0 || !Number.isInteger(days)) {
        result.innerHTML = "Enter a valid number of days.";
        return;
    }

    let roomRate = 0;

    if (room === "standard") {
        roomRate = 1500;
    } else if (room === "deluxe") {
        roomRate = 2500;
    } else {
        roomRate = 4000;
    }

    let roomCost = roomRate * days;
    let bedCost = extraBed === "yes" ? 500 * days : 0;
    let foodCost = food === "yes" ? 400 * days : 0;

    let subtotal = roomCost + bedCost + foodCost;
    let discount = 0;

    if (days >= 7) {
        discount = roomCost * 0.10;
    }

    let amount = subtotal - discount;
    let tax = amount * 0.12;
    let total = amount + tax;

    result.innerHTML =
        "<b>Booking Bill</b><br>" +
        "Customer: " + customer + "<br>" +
        "Room Cost: ₹" + roomCost.toFixed(2) + "<br>" +
        "Extra Bed: ₹" + bedCost.toFixed(2) + "<br>" +
        "Food Package: ₹" + foodCost.toFixed(2) + "<br>" +
        "Discount: ₹" + discount.toFixed(2) + "<br>" +
        "Tax (12%): ₹" + tax.toFixed(2) + "<br>" +
        "<b>Total Amount: ₹" + total.toFixed(2) + "</b>";
}
