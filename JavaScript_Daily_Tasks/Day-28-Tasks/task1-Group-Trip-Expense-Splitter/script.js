let expenses = [];

function addExpense() {
    let name = document.getElementById("friendName").value.trim();
    let amountInput = document.getElementById("expenseAmount").value;
    let amount = Number(amountInput);

    if (name === "" || amountInput === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Enter a valid friend name and expense amount.");
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    displayExpenses();

    document.getElementById("friendName").value = "";
    document.getElementById("expenseAmount").value = "";
}

function displayExpenses() {
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        let item = document.createElement("li");
        item.textContent = expenses[i].name + " - ₹" + expenses[i].amount.toFixed(2);
        list.appendChild(item);
    }
}

function calculateExpenses() {
    let result = document.getElementById("result");
    result.innerHTML = "";

    if (expenses.length === 0) {
        result.textContent = "Please add at least one expense.";
        return;
    }

    let total = 0;
    let friendTotals = {};

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;

        let name = expenses[i].name;

        if (friendTotals[name] === undefined) {
            friendTotals[name] = 0;
        }

        friendTotals[name] += expenses[i].amount;
    }

    let friends = Object.keys(friendTotals);
    let share = total / friends.length;

    let heading = document.createElement("h3");
    heading.textContent = "Trip Summary";
    result.appendChild(heading);

    let totalText = document.createElement("p");
    totalText.textContent = "Total Expense: ₹" + total.toFixed(2);
    result.appendChild(totalText);

    let shareText = document.createElement("p");
    shareText.textContent = "Each Person's Share: ₹" + share.toFixed(2);
    result.appendChild(shareText);

    let list = document.createElement("ul");

    for (let i = 0; i < friends.length; i++) {
        let name = friends[i];
        let paid = friendTotals[name];
        let balance = paid - share;
        let message;

        if (balance > 0.005) {
            message = name + " should receive ₹" + balance.toFixed(2);
        } else if (balance < -0.005) {
            message = name + " should pay ₹" + Math.abs(balance).toFixed(2);
        } else {
            message = name + " has settled their share";
        }

        let item = document.createElement("li");
        item.textContent = name + " | Paid: ₹" + paid.toFixed(2) + " | " + message;
        list.appendChild(item);
    }

    result.appendChild(list);
}
