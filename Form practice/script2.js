// // Check required fields

// function checkRequired(inputArr) {
//     inputArr.forEach(function (input) {
//         console.log(input.value);
//         if (input.value.trim() === '') {
//             showError(input, 'is required');
//         } else {
//             showSuccess(input);
//         }
//     });
// }

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Check Email validation

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
        
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
        
    } else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required');
        
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Password2 is required');
        
    } else {
        showSuccess(password2);
    }
});

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, "is required");
        } else {
            showSuccess(input);
        }
    })
}



form.addEventListener('submit', function (e) {

    e.preventDefault();
    checkRequired([username, email, password, password2]);
    
});