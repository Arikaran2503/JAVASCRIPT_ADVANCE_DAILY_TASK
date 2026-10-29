let vaccinations = [];

function addVaccination() {
    let petName = document.getElementById("petName").value.trim();
    let vaccineName = document.getElementById("vaccineName").value.trim();
    let vaccineDate = document.getElementById("vaccineDate").value;

    if (petName === "" || vaccineName === "" || vaccineDate === "") {
        alert("Please fill in all fields.");
        return;
    }

    vaccinations.push({
        petName: petName,
        vaccineName: vaccineName,
        vaccineDate: vaccineDate
    });

    displayVaccinations();

    document.getElementById("petName").value = "";
    document.getElementById("vaccineName").value = "";
    document.getElementById("vaccineDate").value = "";
}

function displayVaccinations() {
    let list = document.getElementById("vaccinationList");
    list.innerHTML = "";

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < vaccinations.length; i++) {
        let vaccination = vaccinations[i];
        let dueDate = new Date(vaccination.vaccineDate + "T00:00:00");
        let difference = dueDate.getTime() - today.getTime();
        let daysLeft = Math.round(difference / (1000 * 60 * 60 * 24));
        let status;

        if (daysLeft < 0) {
            status = "Overdue by " + Math.abs(daysLeft) + " day(s)";
        } else if (daysLeft === 0) {
            status = "Due today";
        } else {
            status = "Due in " + daysLeft + " day(s)";
        }

        let item = document.createElement("li");
        item.textContent = vaccination.petName + " | " +
            vaccination.vaccineName + " | " +
            vaccination.vaccineDate + " | " + status + " ";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteVaccination(i);
        };

        item.appendChild(deleteButton);
        list.appendChild(item);
    }
}

function deleteVaccination(index) {
    vaccinations.splice(index, 1);
    displayVaccinations();
}
