//Dom selctor 
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPass = document.getElementById('userPass');
const btnSign = document.getElementById('btnSign');
const form = document.querySelector('form');
const successMsg = document.getElementById('successMsg');
const erroMsg = document.getElementById('erroMsg');
const icon = document.getElementById('icon')
const icon2 = document.getElementById('icon2')


//Variabl Declarition
let userArr = [];
if (localStorage.getItem('data') !== null) {
    userArr = JSON.parse(localStorage.getItem('data'));
}

// function Declarition
const validationInput = (input,id)=>{
    let errorMsgName = document.getElementById(id)
    const regex = {
        userName:/^[A-Z][a-z]{2,9}$/,
        userEmail:/^[A-Za-z0-9-_]{3,}@(gmail|yahoo|outlook|msn)\.com$/,
        userPass:/^[A-Z][a-z0-9@#$%&*-_]{2,10}$/ ,
    }
  
    if(regex[input.id].test(input.value)){
       errorMsgName.classList.add('d-none')
        input.classList.add('is-valid');
        input.classList.remove('is-invalid'); 
        return true;
    }
    else if(input.value== '')
    {
        errorMsgName.classList.add('d-none')
        input.classList.remove('is-invalid'); 
        return false;
    }
    else
    {
        errorMsgName.classList.remove('d-none')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
}

const getinfo = function () {
   /*  for (let i = 0; i < userArr.length ; i++) {
        if (userArr[i].email === userEmail.value) {
            erroMsg.classList.replace('d-none','d-blok')
            return;
        }
    } */
    // find method Es6
    if(validationInput(userName,'errorMsgName') && validationInput(userEmail,'errorMsgEmail') && validationInput(userPass,'errorMsgPass')){
        erroMsg.classList.replace('d-blok','d-none')
        if(userArr.find((e)=> e.email === userEmail.value )) {
         erroMsg.classList.replace('d-none','d-blok')
         return;
        }
         const userInfo = {
             name: userName.value.trim(),
             email: userEmail.value.trim(),
             pass: userPass.value.trim(),
         }
         userArr.push(userInfo);
         localStorage.setItem('data', JSON.stringify(userArr))
         successMsg.classList.replace('d-none', 'd-blok')
         setTimeout(() => { window.location.href = 'login.html'; }, 2000) 
    } 
   

}
form.addEventListener('submit',function(eventInfo){
    eventInfo.preventDefault()
    
})

// Event Declarition
btnSign.addEventListener('click', getinfo);
userName.addEventListener('input',function(e){
    validationInput(e.target,'errorMsgName')
})
userEmail.addEventListener('input',function(e){
    validationInput(e.target,'errorMsgEmail')
})
userPass.addEventListener('input',function(e){
    
    validationInput(e.target,'errorMsgPass')
})
icon.addEventListener('click',()=>{
    userPass.setAttribute('type','text')
    icon.classList.add('d-none')
    icon2.classList.remove('d-none')
})
icon2.addEventListener('click',()=>{
    userPass.setAttribute('type','password')
    icon2.classList.add('d-none')
    icon.classList.remove('d-none')
})
