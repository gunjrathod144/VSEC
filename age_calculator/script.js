function calculateAge() 
{

    let dob = document.getElementById("dob").value;

    let birthYear = new Date(dob).getFullYear();

    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;

    document.getElementById("result").innerHTML =
    "Your Age is " + age + " years";

}