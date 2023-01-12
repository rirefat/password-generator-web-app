// Generating Password
const getPassword=()=>{
    let chars = "0123456789zxcvbnmlkjhgfdsaqwertyuiopQWERTYUIOPLKJHGFDSAZXCVBNM!@#$%^&*()_+?><:{}[]";
    let passwordLength = 16;
    let password ="";

    for(let i = 0; i<=passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }

    document.getElementById("password").value = password;
}

// Clear Generated Password
const clearPassword =()=>{
    document.getElementById("password").value = "";
}

// Copy Generated Password
const copyPassword =()=>{
    // let input = document.getElementById("password");
    // input.select();
    // document.execCommand("copy");

}