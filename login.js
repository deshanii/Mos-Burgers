openMainWindow=()=>{
    window.open("index.html","_self")
}

openHomePage=()=>{
    window.open("homePage.html","_self")
}

openEmpSignup=()=>{
    window.open("signup.html","_self")
}



document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    console.log(`Username: ${username}, Password: ${password}`);

    
});
