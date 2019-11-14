import {lostrabajadores} from './01_datos.js';
let trabajadores=lostrabajadores;
let cuerpotabla=document.getElementById("cuerpotabla");
console.log(trabajadores);
let eliminarporid=(idtrabajador)=>{
    trabajadores=trabajadores.filter((trabajador, i)=>{
        if(trabajador.id !=idtrabajador){
            return trabajador;
        }
    })
    console.log(trabajadores);
    cuerpotabla.innerText="";
    dibujartabla();
}
let dibujartabla=()=>{
    trabajadores.forEach((trabajador,i)=>{
        let tr=document.createElement("tr");
        tr.ondblclick=()=>{
            console.log(trabajador.nombre);
            
        }
        
        let tdid=document.createElement("td");
        tdid.innerText=trabajador.id;
        tr.appendChild(tdid);
        
        let tdnombre=document.createElement("td");
        tdnombre.innerText=trabajador.nombre
        tr.appendChild(tdnombre);
        
        let tdapellido=document.createElement("td");
        tdapellido.innerText=trabajador.apellido
        tr.appendChild(tdapellido);
        
        let tdcargo=document.createElement("td");
        tdcargo.innerText=trabajador.cargo
        tr.appendChild(tdcargo);
        
        let tdsalario=document.createElement("td");
        tdsalario.innerText=trabajador.salario
        tr.appendChild(tdsalario);

        let tdimagen=document.createElement("td");
        tdimagen.innerHTML=`<img src="${trabajador.imagen}" width="100"/>`;
        tr.appendChild(tdimagen);

        let tdacciones=document.createElement("td");
        let btneliminar=document.createElement("button");
        btneliminar.innerText="Eliminar";
        btneliminar.onclick=()=>{
            console.log(trabajador.id);
            eliminarporid(trabajador.id);
            
        }
        tdacciones.appendChild(btneliminar);
        tr.appendChild(tdacciones);

        cuerpotabla.appendChild(tr);
    });    
}
dibujartabla();