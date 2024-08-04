const inputPassword = document.getElementById("password-input");
const passwordStrengthBar = document.getElementById("strength-fill");
const result = document.getElementById("strength-text");
// The ^ ensures the match starts at the beginning of the string, .{8,} matches any character (except newline) 8 or more times, and $ ensures the match extends to the end of the string.
const minLengthRegex = /^.{8,}$/;

inputPassword.addEventListener("input", function () {
    let width = 0;

    const password = document.getElementById('password-input').value;
    if (minLengthRegex.test(password)) {
        width += 15;
        // passwordStrengthBar.style.backgroundColor = 'green';
    } else {
        console.log('Password is too short');
    }

    if (/[a-zA-Z]/.test(inputPassword.value)) {
        width += 12;
    }

    if (/[0-9]/.test(inputPassword.value)) {
        width += 12;
    }
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputPassword.value)) {
        width += 20;
    }


    const colorCheck = () => {
        if (width >= 0 && width <= 20) {
            passwordStrengthBar.style.backgroundColor = 'red';
            result.textContent = 'Weak password';
        } else if (width >= 20 && width <= 50) {
            passwordStrengthBar.style.backgroundColor = 'yellow';
            result.textContent = 'Fair password';
        } else if (width > 50) {
            passwordStrengthBar.style.backgroundColor = 'green';
            result.textContent = 'Good to go!';
        }
    }
    colorCheck();

    passwordStrengthBar.style.width = width + '%';
})

