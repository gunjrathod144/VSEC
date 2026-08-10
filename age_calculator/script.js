function calculateAge() {
    let dob = document.getElementById("dob").value;

    let birthDate = new Date(dob);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();

    if (today.getDate() < birthDate.getDate()) {
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerHTML =
        "You are " + ageYears + " years and " + ageMonths + " months old";
}
