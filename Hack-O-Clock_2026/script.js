document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const teamName = form.querySelector("input[type='text']").value.trim();
        const leaderName = form.querySelectorAll("input[type='text']")[1].value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const college = form.querySelectorAll("input[type='text']")[2].value.trim();
        const teamSize = form.querySelector("select").value;
        const projectIdea = form.querySelector("textarea").value.trim();

        if (!teamName || !leaderName || !email || !college) {
            alert("Please fill all required fields!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        const registrationData = {
            teamName,
            leaderName,
            email,
            college,
            teamSize,
            projectIdea
        };

        localStorage.setItem("hackathonRegistration", JSON.stringify(registrationData));

        alert("🎉 Registration Successful!");

        form.reset();
    });

    function validateEmail(email) {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return pattern.test(email.toLowerCase());
    }

});