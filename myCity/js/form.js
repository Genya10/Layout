const nameField = document.querySelector('#user-name');
const gmailField = document.querySelector('#user-gmail');
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelector('#form');


submitBtn.addEventListener("click", function(){

    const formData = new FormData(form);
    console.log('Data ready')
    fetch('/',{
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    }).then(function(){
        alert("Успешно")
    }).catch(function(){
        alert('Ошибка')
    })
})

form.addEventListener("submit",function(event){
   event.preventDefault();
})
