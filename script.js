function sendMail(){
    let parms ={
        name : "Ghost",
        email : "ghostprojectsl@gmail.com",
        subject : document.getElementById("tb1").value,
        message : document.getElementById("tb1").value+document.getElementById("tb2").value,

    }
    emailjs.send("service_i1az62a","template_uowdh4t",parms).then(alert("Your email has be sent"))
}
function al(){
    alert("You have already an account")
}