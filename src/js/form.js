const inputBtn = document.getElementById("btn")


inputBtn.addEventListener("click",(event)=>{
    event.preventDefault()

    const nome = document.getElementById("name")
    const email = document.getElementById("email")
    const telefone = document.getElementById("tel")
    const mensagem = document.getElementById("mensagem")
    const inputClass = document.getElementsByClassName("item")

    
    if(nome.value == ""){
        inputClass[0].classList.remove("sucess")
        inputClass[0].classList.add("error")
    }else{
        inputClass[0].classList.remove("error")
        inputClass[0].classList.add("sucess")
    }
    if(email.value == ""){
        inputClass[1].classList.remove("sucess")
        inputClass[1].classList.add("error")
    }else if(email.value.indexOf("@")==-1 || email.value.indexOf(".")== -1){
        inputClass[1].classList.remove("sucess")
        inputClass[1].classList.add("error")
    }
    else{
        inputClass[1].classList.remove("error")
        inputClass[1].classList.add("sucess")
    }
    if(telefone.value == ""){
        inputClass[2].classList.remove("sucess")
        inputClass[2].classList.add("error")
    }else{
        inputClass[2].classList.remove("error")
        inputClass[2].classList.add("sucess")
    }
    if(mensagem.value == ""){
        inputClass[3].classList.remove("sucess")
        inputClass[3].classList.add("error")
    }else{
        inputClass[3].classList.remove("error")
        inputClass[3].classList.add("sucess")
    }
    
})
