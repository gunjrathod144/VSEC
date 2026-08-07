function calculateGrade(){

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);

    let total = m1 + m2 + m3;

    let percentage = total / 3;

    let grade;

    if(percentage >= 90)
        grade = "A";
    else if(percentage >= 75)
        grade = "B";
    else if(percentage >= 50)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
    "Total = " + total +
    "<br>Percentage = " + percentage.toFixed(2) + "%" +
    "<br>Grade = " + grade;

}