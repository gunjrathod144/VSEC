function calculateAge() {

    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    let months =
        (today.getFullYear() - dob.getFullYear()) * 12
        + (today.getMonth() - dob.getMonth());

    document.getElementById("result").innerHTML =
        "You are " + months + " months old";
}
