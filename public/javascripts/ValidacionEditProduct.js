window.addEventListener("load",function(){
    let productform=document.querySelector("form.editpform")
    let camponombre=document.querySelector('input.nombre')
    let campobrevedescripcion=document.querySelector('textarea.breveDescripcion')
    let campoprecio=document.querySelector('input.precio')
    let camporating=document.querySelector('input.rating')
    let campoplataforma=document.querySelector('input[name="plataforma"]:checked')
    let campoconsola=document.querySelector('input[name="consola"]:checked')
    let campocategoria=document.querySelector('select[name="categoria"]')
    let campoimg=document.querySelector('input[name="imagenPrincipal"]')


    let p1=document.querySelector('#error1')
    let p2=document.querySelector('#error2')
    let p3=document.querySelector('#error3')
    let p4=document.querySelector('#error4')
    let p5=document.querySelector('#error5')
    let p6=document.querySelector('#error6')
    let p7=document.querySelector('#error7')
    let p8=document.querySelector('#error8')


    // camponombre.addEventListener('blur', ()=>{
       
    //     if(camponombre.value===""){
    //         p1.innerHTML='Debes poner el nombre del producto'
    //     }else if(camponombre.value.length < 5 ){
    //         p1.innerHTML='Se deben tener por lo menos 5 caracteres'
    //     } else{
    //         p1.innerHTML=null
    //     }
    // })
    campos={
        nombre: false,
        brevedescripcion: false,
        precio: false,
        rating: false,
        plataforma: false,
        consola: false,
        categoria: false,
        img: false
    }
    function validatenombre(){
        if(camponombre.value == ""){
            p1.innerHTML='Debes poner el nombre del producto.'
            camponombre.placeholder = "Campo obligatorio";
            camponombre.style.backgroundColor = "orange"
        }else if(camponombre.value.length < 5 ){
            p1.innerHTML='Se deben tener por lo menos 5 caracteres.'
            camponombre.style.backgroundColor = "orange"
        }else{
            p1.innerHTML=null
            campos['nombre'] = true
            camponombre.style.backgroundColor = "white"
        }
    }
    function validatebrevedescripcion(){
        if(campobrevedescripcion.value == ""){
            p2.innerHTML='Debes poner una descripci??n del producto.'
            campobrevedescripcion.placeholder = "Campo obligatorio";
            campobrevedescripcion.style.backgroundColor = "orange"
        }else if(campobrevedescripcion.value.length < 20 ){
            p2.innerHTML='Se deben tener por lo menos 20 caracteres.'
            campobrevedescripcion.style.backgroundColor = "orange"
        }else{
            p2.innerHTML=null
            campos['brevedescripcion'] = true
            campobrevedescripcion.style.backgroundColor = "white"
        }
    }


    function validateplataforma(){
        if(document.querySelector('input[name="plataforma"]:checked') == null){
            p5.innerHTML='Debes elegir una plataforma.'
        }else{
            p5.innerHTML=null
            campos['plataforma'] = true
            
        }
    }
    function validateconsola(){
        if(document.querySelector('input[name="consola"]:checked') == null){
            p6.innerHTML='Debes elegir una consola.'
        }else{
            p6.innerHTML=null
            campos['consola'] = true
            
        }
    }
    function validatecategoria(){
        if(document.querySelector('select[name="categoria"]').value ==""){
            p7.innerHTML='Debes elegir una categoria.'
        }else{
            p7.innerHTML=null
            campos['categoria'] = true
            console.log(campos)
        }
    }
    function validatefile(){
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(allowedExtensions.exec(('input[name="imagenPrincipal"]').value)){
            p8.innerHTML='Por favor sube aun archivo con las siguientes extensiones .jpeg/.jpg/.png/.gif only.'
        }else{
            p8.innerHTML=null
            campos['img'] = true
            console.log(campos)
        }

    }
    camponombre.addEventListener("blur", function(){ validatenombre(); })
    campobrevedescripcion.addEventListener("blur", function(){ validatebrevedescripcion(); })
 

    

    function validateform(){
        validatenombre()
        validatebrevedescripcion()
        validateplataforma()
        validateconsola()
        validatecategoria()
        validatefile()
    }
    
    productform.addEventListener('submit',(e)=>{
        validateform()
        if(campos.nombre && campos.brevedescripcion && campos.plataforma && campos.consola && campos.categoria){
            console.log('Exito')
        }else{
            e.preventDefault()
        }
    })

    
})