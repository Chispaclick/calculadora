const display = document.getElementById('display');
const items = document.querySelectorAll('.item');
const on__off = document.getElementById("on")
const total = display.textContent.length;





document.querySelectorAll(".item").forEach(boton =>{
    const botonApretado = boton.textContent;

    boton.addEventListener("click",()=>{
        if(boton.id ==="cero" || display.textContent === "Error!"){
            display.textContent = "0";
            return;
        }
        if(boton.id === "delete"){
            if(display.textContent.length === 1){
                display.textContent = "0"
                return;
            }
            else{
            display.textContent = display.textContent.slice(0,-1)
            return;
            }
        }
        if(boton.id === "igualdad"){
            try{
            display.textContent = eval(display.textContent)
            return;
            }
            catch {
                display.textContent = "Error!"; 
            }
            return;
        }
        

        if(display.textContent === "0" || display.textContent === "Error!"){
        display.textContent = botonApretado;
        }
        else {
            display.textContent += botonApretado;
        }
        if(display.textContent === "1234"){
            display.textContent = "Alex la mermelada"
        }


        if(total >= 12){
            display.textContent === "Error!"
            return;
        }
    }) 
})

