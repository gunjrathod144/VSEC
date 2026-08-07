function showProfile()
{

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let college = document.getElementById("college").value;
    let branch = document.getElementById("branch").value;
    let hobby = document.getElementById("hobby").value;
    let dream = document.getElementById("dream").value;

    document.getElementById("result").innerHTML =
    "<h3>My Profile</h3>" +
    "Name : " + name + "<br>" +
    "Age : " + age + "<br>" +
    "College : " + college + "<br>" +
    "Branch : " + branch + "<br>" +
    "Hobby : " + hobby + "<br>" +
    "Dream Job : " + dream + "<br><br>" +
    "Thank you for visiting my profile";
}