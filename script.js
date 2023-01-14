// Generating Password
const getPassword=()=>{
    let chars = "0123456789zxcvbnmlkjhgfdsaqwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*()_+?><:{}[]";
    let passwordLength = document.getElementById("range").value-1;
    console.log(passwordLength)
    let password ="";
    // document.getElementById("range_value").innerText=passwordLength;
    console.log(passwordLength)

    for(let i = 0; i<=passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }

    document.getElementById("password").value = password;
}

// Range value change
const changeRange = (value) =>{
    let passwordLength = value;
    document.getElementById("range_value").innerText=passwordLength;
}

// Clear Generated Password
const clearPassword =()=>{
    document.getElementById("password").value = "";
    document.getElementById("digit_number").value = "";
    document.getElementById("range").value = 0;
    document.getElementById("range_value").innerText=0;
}

// Copy Generated Password
const copyPassword =()=>{
    let input = document.getElementById("password");
    input.select();
    document.execCommand("copy");
    alert("Password Copied");
}