function calculateAge() {
    let dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerHTML =
            "Please select your date of birth";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
        ageMonths--;
    }

    // Adjust years and months
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML =
        "Your Age is " + ageYears + " years and " + ageMonths + " months";
}
