let applications = [];

function addApplication() {
    let company = document.getElementById("company").value.trim();
    let role = document.getElementById("role").value.trim();
    let status = document.getElementById("status").value;

    if (company === "" || role === "") {
        document.getElementById("result").innerHTML =
            "Please enter the company name and job role.";
    }
    else {
        let application = {
            company: company,
            role: role,
            status: status
        };

        applications.push(application);
        showApplications(applications);

        document.getElementById("result").innerHTML =
            "Job application added successfully.";

        document.getElementById("company").value = "";
        document.getElementById("role").value = "";
        document.getElementById("status").value = "Applied";
    }
}

function showApplications(list) {
    let output = document.getElementById("applicationList");
    output.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let originalIndex = applications.indexOf(list[i]);

        output.innerHTML += "<li>" +
            "Company: " + list[i].company +
            " | Role: " + list[i].role +
            " | Status: " + list[i].status +
            " <button onclick='updateStatus(" + originalIndex + ")'>Update Status</button>" +
            " <button onclick='deleteApplication(" + originalIndex + ")'>Delete</button>" +
            "</li><br>";
    }
}

function searchApplications() {
    let searchText = document.getElementById("search").value.toLowerCase();
    let foundApplications = [];

    for (let i = 0; i < applications.length; i++) {
        if (applications[i].company.toLowerCase().includes(searchText)) {
            foundApplications.push(applications[i]);
        }
    }

    showApplications(foundApplications);
}

function updateStatus(index) {
    let newStatus = prompt(
        "Enter new status: Applied, Assessment, Interview, Selected, Rejected"
    );

    if (newStatus !== null && newStatus.trim() !== "") {
        newStatus = newStatus.trim().toLowerCase();
        let validStatus = false;
        let statusOptions = ["applied", "assessment", "interview", "selected", "rejected"];

        for (let i = 0; i < statusOptions.length; i++) {
            if (newStatus === statusOptions[i]) {
                validStatus = true;
            }
        }

        if (validStatus) {
            applications[index].status =
                newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
            searchApplications();
            document.getElementById("result").innerHTML =
                "Application status updated.";
        }
        else {
            document.getElementById("result").innerHTML =
                "Invalid status. Please enter a status from the list.";
        }
    }
}

function deleteApplication(index) {
    applications.splice(index, 1);
    searchApplications();
    document.getElementById("result").innerHTML =
        "Application deleted successfully.";
}
