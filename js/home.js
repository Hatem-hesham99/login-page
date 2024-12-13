
let homeMss = document.querySelector('#homeMss');
let btnlogOut = document.querySelector('#btnlogOut');


const logOut = function(){
  homeMss.innerHTML = "we logout after 2s" 
    setTimeout(()=>{
       location.href = "login.html"
    },2000)
    localStorage.removeItem('userName');
}

if(localStorage.getItem('userName') !== null){
  const users =   localStorage.getItem('userName');
  console.log(users);
  homeMss.innerHTML = `Welcome <span>${users}</span> `
}
else
{
  logOut(); 
    homeMss.innerHTML = "you shoud login frist" 
    /* setTimeout(()=>{
       location.href = "login.html"
    },2000)
    localStorage.removeItem('userName'); */
    
    
}

btnlogOut.addEventListener('click',logOut)