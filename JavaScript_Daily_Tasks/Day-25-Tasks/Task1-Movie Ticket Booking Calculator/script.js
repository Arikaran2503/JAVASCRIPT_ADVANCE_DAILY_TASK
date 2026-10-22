function calculateBill() {
    let tickets = Number(document.getElementById("tickets").value);
    let age = Number(document.getElementById("age").value);
    let ticketPrice = 150;
    let discount = 0;
    let total = 0;

    if (tickets <= 0 || age <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid ticket count and age.";
    }
    else {
        total = tickets * ticketPrice;

        if (age < 12) {
            discount = total * 0.20;
        }
        else if (age >= 60) {
            discount = total * 0.10;
        }

        total = total - discount;

        document.getElementById("result").innerHTML =
            "Number of Tickets: " + tickets + "<br>" +
            "Ticket Price: Rs. " + ticketPrice + "<br>" +
            "Discount: Rs. " + discount + "<br>" +
            "Total Bill: Rs. " + total;
    }
}
