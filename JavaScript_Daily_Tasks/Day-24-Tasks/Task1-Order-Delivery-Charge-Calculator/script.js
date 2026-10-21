function calculateFee() {
    let hours = Number(document.getElementById("hours").value);
    let fee = 0;

    if (hours <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid parking hours.";
    }
    else if (hours <= 2) {
        fee = 30;
    }
    else if (hours <= 5) {
        fee = 60;
    }
    else {
        fee = 100;
    }

    if (hours > 0) {
        document.getElementById("result").innerHTML =
            "Total Parking Fee: Rs. " + fee;
    }
}
