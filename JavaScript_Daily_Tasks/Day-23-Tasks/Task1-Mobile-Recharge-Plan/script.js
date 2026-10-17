function selectPlan() {
    let budget = Number(document.getElementById("budget").value);
    let planType = document.getElementById("planType").value;
    let validity = Number(document.getElementById("validity").value);
    let result = document.getElementById("result");

    if (document.getElementById("budget").value === "" ||
        planType === "" ||
        document.getElementById("validity").value === "") {
        result.innerHTML = "Please fill all the fields.";
        return;
    }

    if (budget <= 0) {
        result.innerHTML = "Enter a valid budget.";
        return;
    }

    let planPrice;
    let data;
    let calls;

    if (planType === "data") {
        planPrice = 149;
        data = "2 GB per day";
        calls = "Limited calling";
    } else if (planType === "calling") {
        planPrice = 199;
        data = "1 GB per day";
        calls = "Unlimited calling";
    } else {
        planPrice = 299;
        data = "2 GB per day";
        calls = "Unlimited calling";
    }

    if (validity === 56) {
        planPrice += 150;
    } else if (validity === 84) {
        planPrice += 300;
    }

    if (budget < planPrice) {
        result.innerHTML =
            "Your budget is ₹" + budget +
            ". The selected plan costs ₹" + planPrice +
            ". Please increase your budget.";
        return;
    }

    let remaining = budget - planPrice;

    result.innerHTML =
        "<b>Recharge Plan Details</b><br>" +
        "Plan Type: " + planType.toUpperCase() + "<br>" +
        "Plan Price: ₹" + planPrice + "<br>" +
        "Validity: " + validity + " days<br>" +
        "Data: " + data + "<br>" +
        "Calling: " + calls + "<br>" +
        "Your Budget: ₹" + budget + "<br>" +
        "Remaining Balance: ₹" + remaining;
}
