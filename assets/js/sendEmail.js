function sendMail(contactForm) {
    emailjs.send("gmail","template_bzza74t", {
       "from_name": contactForm.name.value,
       "email": contactForm.email.value,
        "message": contactForm.message.value   
    }).then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
var num = 123;
let boxbit = document.getElementById("bitnum")
document.getElementById("conbitnum").addEventListener("click", fetchbitnum);

function fetchbitnum() {
    /*boxbit.innerHTML = num*/
    document.getElementById("message").value = "123"

}