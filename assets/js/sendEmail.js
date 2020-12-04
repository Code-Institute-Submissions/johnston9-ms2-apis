
function sendMail(contactForm) {

    emailjs.send("gmail","template_bzza74t", {
       "from_name": contactForm.name.value,
       "email": contactForm.email.value,
        "message": contactForm.message.value   
    }).then(
        function(response) {
            console.log("SUCCESS", response);
            datadiv = document.getElementById("success");
            datadiv.innerHTML = "Message sent";
        },
        function(error) {
            console.log("FAILED", error);
            datadiv = document.getElementById("success");
            datadiv.innerHTML = "Error - Please Resend";
        }
    );
    return false;  
}

/*$("#winner").html(`<p id="message">BITMATCH WINTIME: ${localStorage.getItem('wintime')} BITMATCH WINNER NUMBER: ${localStorage.getItem('winnum')}</p>`)*/

/*document.getElementById("message").innerHTML =`BITMATCH WINTIME: ${localStorage.getItem('wintime')} BITMATCH WINNER NUMBER: ${localStorage.getItem('winnum')}`*/

document.getElementById("conbitnum").addEventListener("click", fetchbitnum);

function fetchbitnum() {
    document.getElementById("message").innerHTML = `BITMATCH WINTIME: ${localStorage.getItem('wintime')} BITMATCH WINNER NUMBER: ${localStorage.getItem('winnum')}`
    
}

