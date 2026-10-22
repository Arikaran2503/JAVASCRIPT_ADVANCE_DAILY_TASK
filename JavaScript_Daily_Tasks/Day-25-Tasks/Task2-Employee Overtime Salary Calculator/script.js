function calculateSalary() {
    let name = document.getElementById("name").value;
    let hours = Number(document.getElementById("hours").value);
    let overtime = Number(document.getElementById("overtime").value);
    let salary = Number(document.getElementById("salary").value);

    let normalPay = 0;
    let overtimePay = 0;
    let totalSalary = 0;

    if (name === "" || hours < 0 || overtime < 0 || salary <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid employee details.";
    }
    else {
        normalPay = hours * salary;
        overtimePay = overtime * salary * 1.5;
        totalSalary = normalPay + overtimePay;

        document.getElementById("result").innerHTML =
            "Employee Name: " + name + "<br>" +
            "Normal Salary: Rs. " + normalPay + "<br>" +
            "Overtime Salary: Rs. " + overtimePay + "<br>" +
            "Total Salary: Rs. " + totalSalary;
    }
}
