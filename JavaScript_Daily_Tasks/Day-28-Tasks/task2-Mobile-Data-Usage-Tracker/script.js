let dailyLimit = 0;
let usageEntries = [];

function addUsage() {
    let limitInput = document.getElementById("dataLimit").value;
    let usedInput = document.getElementById("dataUsed").value;

    let limit = Number(limitInput);
    let used = Number(usedInput);

    if (limitInput === "" || !Number.isFinite(limit) || limit <= 0) {
        alert("Enter a valid daily data limit.");
        return;
    }

    if (usedInput === "" || !Number.isFinite(used) || used < 0) {
        alert("Enter a valid data usage amount.");
        return;
    }

    if (dailyLimit !== 0 && dailyLimit !== limit) {
        alert("Daily limit cannot be changed after adding usage. Reset first.");
        return;
    }

    dailyLimit = limit;
    usageEntries.push(used);

    displayUsage();

    document.getElementById("dataUsed").value = "";
}

function displayUsage() {
    let total = 0;

    for (let i = 0; i < usageEntries.length; i++) {
        total += usageEntries[i];
    }

    let remaining = dailyLimit - total;

    document.getElementById("totalUsage").textContent =
        "Total Used: " + total.toFixed(2) + " GB";

    document.getElementById("remainingData").textContent =
        "Remaining Data: " + Math.max(0, remaining).toFixed(2) + " GB";

    let status = document.getElementById("usageStatus");

    if (total > dailyLimit) {
        status.textContent =
            "Warning: You exceeded your limit by " +
            (total - dailyLimit).toFixed(2) + " GB!";
    } else if (total === dailyLimit) {
        status.textContent = "Status: Daily limit reached.";
    } else {
        status.textContent =
            "Status: " + ((total / dailyLimit) * 100).toFixed(1) +
            "% of your daily data used.";
    }

    let history = document.getElementById("usageHistory");
    history.innerHTML = "";

    for (let i = 0; i < usageEntries.length; i++) {
        let item = document.createElement("li");
        item.textContent =
            "Entry " + (i + 1) + ": " + usageEntries[i].toFixed(2) + " GB";
        history.appendChild(item);
    }
}

function resetUsage() {
    let confirmReset = confirm("Are you sure you want to reset today's usage?");

    if (confirmReset) {
        dailyLimit = 0;
        usageEntries = [];

        document.getElementById("dataLimit").value = "";
        document.getElementById("dataUsed").value = "";

        document.getElementById("totalUsage").textContent = "Total Used: 0 GB";
        document.getElementById("remainingData").textContent = "Remaining Data: 0 GB";
        document.getElementById("usageStatus").textContent = "Status: Not started";
        document.getElementById("usageHistory").innerHTML = "";
    }
}
