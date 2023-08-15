// step-1
document.getElementById('btn-submite').addEventListener('click', function () {


    // step-2
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
   
    // step-3
    const userPasswerd = document.getElementById('user-password');
    const password = userPasswerd.value;
    // step-4
    if (email === 'minar@.com' && password === '123456') {
        window.location.href ='file.html';
    }else{
       alert('please provide a valid Email & password !!!')
    }

})

