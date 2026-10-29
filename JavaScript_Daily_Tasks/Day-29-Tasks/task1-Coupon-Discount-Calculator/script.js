function applyCoupon() {
    let amountInput = document.getElementById("purchaseAmount").value;
    let coupon = document.getElementById("couponCode").value.trim().toUpperCase();
    let amount = Number(amountInput);
    let discount = 0;
    let message = "";

    if (amountInput === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid purchase amount.");
        return;
    }

    if (coupon === "SAVE10") {
        if (amount >= 500) {
            discount = amount * 0.10;
            message = "SAVE10 applied successfully.";
        } else {
            message = "SAVE10 requires a minimum purchase of ₹500.";
        }
    } else if (coupon === "SAVE20") {
        if (amount >= 1000) {
            discount = amount * 0.20;
            message = "SAVE20 applied successfully.";
        } else {
            message = "SAVE20 requires a minimum purchase of ₹1000.";
        }
    } else if (coupon === "FLAT100") {
        if (amount >= 1500) {
            discount = 100;
            message = "FLAT100 applied successfully.";
        } else {
            message = "FLAT100 requires a minimum purchase of ₹1500.";
        }
    } else {
        message = "Invalid coupon code. Please try again.";
    }

    let finalAmount = amount - discount;

    document.getElementById("originalAmount").textContent =
        "Original Amount: ₹" + amount.toFixed(2);
    document.getElementById("discountAmount").textContent =
        "Discount: ₹" + discount.toFixed(2);
    document.getElementById("finalAmount").textContent =
        "Final Amount: ₹" + finalAmount.toFixed(2);
    document.getElementById("message").textContent = message;
}

function clearForm() {
    document.getElementById("purchaseAmount").value = "";
    document.getElementById("couponCode").value = "";
    document.getElementById("originalAmount").textContent = "Original Amount: ₹0.00";
    document.getElementById("discountAmount").textContent = "Discount: ₹0.00";
    document.getElementById("finalAmount").textContent = "Final Amount: ₹0.00";
    document.getElementById("message").textContent = "Enter your purchase details.";
}
