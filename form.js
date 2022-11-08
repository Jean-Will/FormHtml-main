function salvar(){
    var nome = document.getElementById("inputNome").value;
    var idade = document.getElementById("inputIdade").value;
    var email = document.getElementById("inputEmail").value;
   
    

    if(nome , idade , email === ""){
        alert(" preenhcer campo obrigatorio! ")
       
    }else if (nome ==""){ 
        alert("prencher o nome")
    }

        else if(idade <18){
        alert("idade invalida")    
    }
    else if (email.indexOf("@") == -1 ){
        alert("email invalido")
    }
    else{
        alert("congratulation proximo passo !")
    }
   
    

    


    }






    // alert(textoNome + nome + textoidade + idade + textoemail + email  )
