function calculateAge() {

    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    let months =
        (today.getFullYear() - dob.getFullYear()) * 12
        + (today.getMonth() - dob.getMonth());

    let years = Math.floor(months / 12);
    let remainingMonths = months % 12;

    document.getElementById("result").innerHTML =
        "You are " + years + " years and " + remainingMonths + " months old";
}
