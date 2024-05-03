


function error()
{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let result =  document.getElementById("output").innerHTML

    if(email===""&&password==="")
    {
        // console.log("email and password")
        alert("Please Enter your Email address and Password")
    }
   else  if(email===""){
        // result ="Please Enter your Email address"
        alert("Please Enter your Email address")
    }
    else if(password==="")
    {
        // result ="Please Enter your Password address"
        alert("Please Enter your password")
    }

 
}

function errorMassage()
{
    let FName= document.getElementById("firstName").value
    let LName =document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let result =  document.getElementById("output").innerHTML

    if(email===""&&password==="" &&FName===''&&LName==="")
    {
        // console.log("email and password")
        alert("Please Fill The Form")
    }
   else  if(email===""){
        // result ="Please Enter your Email address"
        alert("Please Enter your Email address")
    }
    else if(password==="")
    {
        // result ="Please Enter your Password address"
        alert("Please Enter your password")
    }
    else if(FName==="")
    {
        // result ="Please Enter your Password address"
        alert("Please Enter your First Name")
    }

    else if(LName==="")
    {
        // result ="Please Enter your Password address"
        alert("Please Enter your Last Name")
    }
}
