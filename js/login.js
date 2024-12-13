// Dom Selctor
const userEmail = document.querySelector('#userEmail');
const userPass = document.querySelector('#userPass');
const btnLogin = document.querySelector('#btnLogin');
const form = document.querySelector('form')
const successMsg = document.getElementById('successMsg');
const erroMsg = document.getElementById('erroMsg');
const icon = document.getElementById('icon')
const icon2 = document.getElementById('icon2')


let userArr = [];
if (localStorage.getItem('data') !== null) {
    userArr = JSON.parse(localStorage.getItem('data'));
}


const validationLogin = (input) => {

    const regex = {
        userEmail: /^[A-Za-z0-9-_]{3,}@(gmail|yahoo|outlook|msn)\.com$/,
        userPass: /^[A-Z][a-z0-9@#$%&*-_]{2,10}$/,
    }
    if (regex[input.id].test(input.value)) {   
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else if (input.value =='') {
       
        input.classList.remove('is-invalid');
        return false;
    }
    else {
       
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
}


const loginUser = function () {
    /* const x =userArr.find((e)=> e.emil == userEmail.emil && e.pass===userPass.pass)
    console.log(x);
        if(x)
        {
            window.location.href = 'home.html'
        }else{
            console.log('errrrrrrrrrrrrrro')
        }
     */

    if (validationLogin(userEmail) && validationLogin(userPass)) {
        {
            erroMsg.classList.replace('d-blok', 'd-none')
            for (let i = 0; i < userArr.length; i++) {
                if (userArr[i].email === userEmail.value && userArr[i].pass === userPass.value) {
                    successMsg.classList.replace('d-none', 'd-blok')
                    localStorage.setItem('userName', userArr[i].name)
                    setTimeout(() => {
                        location.href = 'home.html'
                    }, 2000);
                    return;
                }
            }
            erroMsg.classList.replace('d-none', 'd-blok')
        }
    }
    }
    // Event
    btnLogin.addEventListener('click', loginUser)
    form.addEventListener('submit', function (eventInfo) {
        eventInfo.preventDefault()
        console.log(eventInfo);
    })
    icon.addEventListener('click', () => {
        userPass.setAttribute('type', 'text')
        icon.classList.add('d-none')
        icon2.classList.remove('d-none')
    })
    icon2.addEventListener('click', () => {
        userPass.setAttribute('type', 'password')
        icon2.classList.add('d-none')
        icon.classList.remove('d-none')
    })
    userEmail.addEventListener('blur', function (eventInfo){
        validationLogin(eventInfo.target)

    })
    userPass.addEventListener('input', function (eventInfo) {

        validationLogin(eventInfo.target)
    })

    