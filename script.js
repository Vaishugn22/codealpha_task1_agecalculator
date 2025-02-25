document.getElementById("date").setAttribute("max", new Date().toISOString().split("T")[0]);

function calculateAge() {
    let birthDate = new Date(document.getElementById("date").value);
    
    if (isNaN(birthDate)) {
        document.getElementById("result").innerHTML = "Please select a valid date!";
        return;
    }

    let today = new Date();
    
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1;
    let birthDay = birthDate.getDate();
    
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();
    
    let yearDiff = currentYear - birthYear;
    let monthDiff = currentMonth - birthMonth;
    let dayDiff = currentDay - birthDay;

    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    document.getElementById("result").innerHTML = `You are <span>${yearDiff}</span> years, <span>${monthDiff}</span> months, and <span>${dayDiff}</span> days old.`;
}
