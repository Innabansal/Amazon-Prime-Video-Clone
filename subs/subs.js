function AfterSignIn() {
    window.location.href = '/AfterSignIn/afterSignIn.html';
};


function pay(value) {
    if (value === 0) {
        // debit card details
        document.querySelector(".upiOption").style.display = "none";
        document.querySelector(".upi").style.background = "";
        document.querySelector(".netbanking").style.background = "";
        document.querySelector(".netbankingOption").style.display = "none";
        document.querySelector(".debitContainer").style.display = "block";
        document.querySelector(".debit").style.background = "#eff0f3";
    } else if (value === 1) {
        // netbanking details
        document.querySelector(".upiOption").style.display = "none";
        document.querySelector(".upi").style.background = "";
        document.querySelector(".netbanking").style.background = "#fcf5ee";
        document.querySelector(".netbankingOption").style.display = "block";
        document.querySelector(".debitContainer").style.display = "none";
        document.querySelector(".debit").style.background = "";
    } else if (value === 2) {
        // upi details
        document.querySelector(".upiOption").style.display = "block";
        document.querySelector(".upi").style.background = "#eff0f3";
        document.querySelector(".netbanking").style.background = "";
        document.querySelector(".netbankingOption").style.display = "none";
        document.querySelector(".debitContainer").style.display = "none";
        document.querySelector(".debit").style.background = "";
    }
};


document.querySelector("#promoCode").addEventListener("click", function() {
    document.querySelector(".promoInput").style.display = "block";
    document
        .querySelector(".caretDown")
        .setAttribute("class", "fas fa-angle-up caretDown");
});

document.querySelector("#promoCode").addEventListener("dblclick", function() {
    document.querySelector(".promoInput").style.display = "none";
    document
        .querySelector(".caretDown")
        .setAttribute("class", "fas fa-angle-down caretDown");
});

// Enabling continue button after upi verify

document.querySelector("#verify").addEventListener("click", function() {
    var upiID = document.querySelector("#upiID").value;
    if (upiID === "987456321@upi" || upiID === "abcdef01@oksvi") {
        alert(`${upiID} is verified`);
        var continueBtn = document.querySelector(".continueBtn");
        continueBtn.style.opacity = "1";
        continueBtn.style.color = "#fff";
        continueBtn.removeAttribute("disabled");
    } else {
        alert(`${upiID} is invalid`);
    }
});

// Enabling continue button after adding debit/credit cards

document.querySelector("#addDebitCard").addEventListener("click", function() {
    var userName = JSON.parse(localStorage.getItem("userName")) || "";
    var cardName = document.querySelector("#cardName").value;
    var cardNumber = document.querySelector("#cardNumber").value;
    var expiryDate = document.querySelector("#expiryDate").value;

    if (cardNumber === "000000123456" &&
        cardName === "innabansal" &&
        expiryDate === "2024-12") {
        alert(`${userName} your card ${cardNumber} is verified`)
        var continueBtn = document.querySelector(".continueBtn");
        continueBtn.style.opacity = "1";
        continueBtn.style.color = "#fff";
        continueBtn.removeAttribute("disabled");
    } else {
        alert(`${userName} your card ${cardNumber} is invalid`);
    }
});


// promocode check
document.querySelector("#promoCheck").addEventListener("click", function() {
    var promoCodeInput = document.querySelector("#promoCodeInput").value;
    if (promoCodeInput) {
        if (promoCodeInput === "code115") {
            alert(`You'll get 30 Days extra subscription. Complete Your Payment!!!`);
        } else {
            alert(`Promocode is invalid`);
        }
    } else {
        alert(`Enter Promo ode`);
    }
});

// continue button for OTP

function proceed() {
    var userName = JSON.parse(localStorage.getItem("userName")) || "";
    var otp = prompt("Enter Your OTP");
    while (otp !== "7954561230") {
        if (otp === "78945") {
            alert(`Payment is successful!! We have recieved your payment ${userName}, Thank you and enjoy watching amazon prime`);
            window.location.href = "../AfterSubs/mainHome.html";
            break;
        } else if (otp == "null" || otp == "" || null) {
            break;
        } else {
            alert(`Wrong OTP`);
            var otp = prompt("Enter Your OTP");
        }
    }
}