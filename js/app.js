// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


// Event Listeners

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate Fields
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}

// Functions
function appInit(){
    sendBtn.disabled = true;
}

function sendEmail(e){
    
    e.preventDefault();

    // Show Spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // Show Image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';
    

    setTimeout(function(){
        spinner.style.display = 'none';
        document.querySelector('#loaders').appendChild(sendEmailImg);

        setTimeout(function(){
            resetForm();
            sendEmailImg.remove();
        }, 5000);
    }, 3000);
}

function validateField(){
    let errors;
    validateLength(this);

    if(this.type === 'email'){
        validateEmail(this);
    }

    errors = document.querySelectorAll('.error');
    // Check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== ''){
        if(errors.length === 0){
            sendBtn.disabled = false;
        }
    }
}

function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field){
    let emailText = field.value;
    
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function resetForm(){
    sendEmailForm.reset();
}