function login(){
    //Email:dolanamarvin@gmail.com //Error Message:Your emial is Incorect
    //Password: Admin_123 //Error Message: Your password is incorrect
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("You enter:" + " " + email);
    console.log("You enter:" + " " + password);



    if (email==="dolanamrvin@gmail.com"){
        console.log("Your email is correct");
    }else{
        console.log("Your email is correct ");

    }
    if (password==="12345"){
        console.log("Your password is correct");
    }else{
        console.log("Your password is correct");

    }
    if (email==="dolanamarvin@gmail.com" && password==="12345"){
        console.log("Your email and password are correct");

    }else if (email!=="dolanamrvin@gmail.com" && password!=="12345"){
         console.log("Your email and password are incorrect");
    
    }
    // if (pass!=="12345" && email=="dolanamarvin@gmail.com"){
    //console.log("Your email and password are incorrect");
}