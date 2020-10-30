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