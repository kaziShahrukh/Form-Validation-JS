const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const successMessage = document.querySelector('#notification');
// const inputs = document.querySelectorAll('.input-control input');

function isEmailValid(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}


// function validateForm() {

//     if (username.value.trim() === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if (userEmail.value.trim() === '') {
//         setError(userEmail, 'Email is required');
//     } else if (!isEmailValid(userEmail.value)) {
//         setError(userEmail, 'Provide a valid email address');
//     } else {
//         setSuccess(userEmail);
//     }


//     if (password.value.trim() === '') {
//         setError(password, 'Password is required');
//     } else if (password.value.length < 8) {
//         setError(password, 'Password must be at least 8 character.');
//     }
//     else {
//         setSuccess(password);
//     }
//     if (password2.value.trim() === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2.value !== password.value) {
//         setError(password2, "Password dosent't match");
//     }
//     else {
//         setSuccess(password2);
//     }


// }






function validateForm() {
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');

    if (username.value.trim() === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (email.value.trim() === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    if (password.value.trim() === '') {
        setError(password, 'Password is required');
    } else {
        setSuccess(password);
    }

    if (password2.value.trim() === '') {
        setError(password2, 'Retype password is required');
    } else if (password2.value !== password.value) {
        setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }
}


form.addEventListener('submit', (event) => {

    validateForm();

    if (!isFormValid()) {
        event.preventDefault();
    } else {
        showNotification();
        event.preventDefault();
    }
});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-control');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}


inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateField(input);
    });
});


function validateField(input) {
    const parent = input.parentElement;
    const errorDiv = parent.querySelector('.error');

    if (input.value.trim() === '') {
        setError(parent, errorDiv, 'This field is required');
    } else {
        setSuccess(parent, errorDiv);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    const errorDiv = parent.querySelector('.error');
    errorDiv.textContent = errorMessage;
    errorDiv.style.display = 'block';
    parent.classList.add('error');
    parent.classList.remove('success');
}




function setSuccess(element) {
    const parent = element.parentElement;
    const errorDiv = parent.querySelector('.error');
    errorDiv.style.display = 'none';
    parent.classList.remove('error');
    parent.classList.add('success');
}

// function showSuccessMessage() {
//     successMessage.style.display = 'block';
// }

function showNotification() {
    const notification = document.querySelector('#notification');
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
