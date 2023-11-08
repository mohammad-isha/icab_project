



function validate() {
    let fName = document.getElementById("text").value;
    let mail = document.getElementById("email").value;
    let phone = document.getElementById("mobile").value;


    let alphaExp = /^[a-zA-z]+$/;
    let emailExp = /^[a-zA-Z0-9]+$/
    let mobExp = /^[0]?[789]\d{9}$/;
    fStatus = false;
    eStatus = false;
    mStatus = false;

    if (fName == "") {
        document.getElementById("fNote").innerHTML = "please enter name";
        console.log("please enter name");
        fStatus = false;
    } else {
        if (fName.match(alphaExp)) {
            document.getElementById("fNote").innerHTML = "";
            console.log("success");
            fStatus = true;
        } else {
            document.getElementById("fNote").innerHTML = "please write in alphabet";
            console.log("please write in alphabet");
            fStatus = false;

        }
    }

    if (mail == "") {
        document.getElementById("eNote").innerHTML = "please enter email"
        eStatus = false;

    } else {
        if (mail.match(emailExp)) {
            document.getElementById("eNote").innerHTML = ""
            eStatus = true;
        } else {
            document.getElementById("eNote").innerHTML = "please enter in email form"
            eStatus = false;
        }
    }
    if (phone == "") {
        document.getElementById("mNote").innerHTML = "please enter email"
        mStatus = false;

    } else {
        if (phone.match(mobExp)) {
            document.getElementById("mNote").innerHTML = ""
            mStatus = true;
        } else {
            document.getElementById("mNote").innerHTML = "please enter 10 digit number"
            mStatus = false;
        }
    }

    if (fStatus && eStatus && mStatus == true) {
        return true;
    } else {
        return false;
    }

}