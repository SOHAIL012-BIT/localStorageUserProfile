//Storing USer data
function storeData(){
    var user= {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        contact: document.getElementById('contact').value
    }
    localStorage.setItem("userData",JSON.stringify(user));
}
function displayData(){
    var user=JSON.parse(localStorage.getItem("userData"));
    console.log(user);
    var display=document.getElementById("display");
    display.innerHTML= user;
}