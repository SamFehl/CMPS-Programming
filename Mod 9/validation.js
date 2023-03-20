function val() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value.length < 8) {
        alert("Username must be longer.");
        return false;
    }
    else if (password.value.length < 12) {
        alert("Password must be longer.");
        return false;
    }
    else {
        window.location.href = "http://127.0.0.1:5500/section2.html";
        alert("Login Successful");
    }
}


function val2() {
    var first  = document.getElementById("first");
    var last = document.getElementById("last");
    var add1 = document.getElementById("add1");
    var add2 = document.getElementById("add2");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");

    /*Using indexOf for every digit doesn't seem like the most effective way to ensure no numbers are included in the form, 
    but everything else I tried let numbers slip through when accompanied by letters, or would havae required I use reqular expressions, 
    which the book specifically said not to do yet. This seemed to work, even though it isn't pretty.*/
    //First Name
    var firstEnt  = document.getElementById("first").value;
    if (firstEnt.indexOf("1") !== -1 || firstEnt.indexOf("2") !== -1 || firstEnt.indexOf("3") !== -1 || 
        firstEnt.indexOf("4") !== -1 || firstEnt.indexOf("5") !== -1 || firstEnt.indexOf("6") !== -1 || 
        firstEnt.indexOf("7") !== -1 || firstEnt.indexOf("8") !== -1 || firstEnt.indexOf("9") !== -1 || firstEnt.indexOf("0") !== -1) {
        alert("First name must be letters only.");
            return false;
            first.focus();
    }
    //Last Name
    var lastEnt  = document.getElementById("last").value;
    if (lastEnt.indexOf("1") !== -1 || lastEnt.indexOf("2") !== -1 || lastEnt.indexOf("3") !== -1 || 
        lastEnt.indexOf("4") !== -1 || lastEnt.indexOf("5") !== -1 || lastEnt.indexOf("6") !== -1 || 
        lastEnt.indexOf("7") !== -1 || lastEnt.indexOf("8") !== -1 || lastEnt.indexOf("9") !== -1 || lastEnt.indexOf("0") !== -1) {
        alert("Last name must be letters only.");
            return false;
            last.focus();
    }
    //Address 1
    if (add1.value.length === 0) {
        add1.style.background = "pink";
        return false;
        add1.focus();
    }
    //Address 2
    if (add2.value.length === 0) {
        add2.style.background = "pink";
        return false;
        add2.focus();
    }
    //City
    var cityEnt  = document.getElementById("city").value;
    if (cityEnt.indexOf("1") !== -1 || cityEnt.indexOf("2") !== -1 || cityEnt.indexOf("3") !== -1 || 
        cityEnt.indexOf("4") !== -1 || cityEnt.indexOf("5") !== -1 || cityEnt.indexOf("6") !== -1 || 
        cityEnt.indexOf("7") !== -1 || cityEnt.indexOf("8") !== -1 || cityEnt.indexOf("9") !== -1 || cityEnt.indexOf("0") !== -1) {
        alert("City must be letters only.");
            return false;
            city.focus();
    }
    //State
    var stateEnt  = document.getElementById("state").value;
    if (stateEnt.indexOf("1") !== -1 || stateEnt.indexOf("2") !== -1 || stateEnt.indexOf("3") !== -1 || 
        stateEnt.indexOf("4") !== -1 || stateEnt.indexOf("5") !== -1 || stateEnt.indexOf("6") !== -1 || 
        stateEnt.indexOf("7") !== -1 || stateEnt.indexOf("8") !== -1 || stateEnt.indexOf("9") !== -1 || 
        stateEnt.indexOf("0") !== -1 || stateEnt.length !== 2) {
        alert("State must be two letters only.");
            return false;
            state.focus();
    }
    //ZipCode
    var zipEnt = zip.value;
    for (var e = 0; e <= 4; e++) {
        var zipChar = parseInt(zipEnt[e]);
        if (isNaN(zipChar)) {
            alert("ZipCode must be numbers only.");
            return false;
            zip.focus();
        }
    }
    //Question 1
    if (q1.value.length === 0) {
        q1.style.background = "yellow";
        return false;
        q1.focus();
    }
    else {
        q1.style.background = "white";
    }
    //Question 2
    if (q2.value.length === 0) {
        q2.style.background = "yellow";
        return false;
        q2.focus();
    }
    else {
        q2.style.background = "white";
    }
    //Question 3
    if (q3.value.length === 0) {
        q3.style.background = "yellow";
        return false;
        q3.focus();
    }
    else {
        q3.style.background = "white";
    }
}