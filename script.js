function enviarTextoEncriptar(){
    var texto_entrada = document.getElementById("texto-entrada").value;
    if (tiene_letras(texto_entrada) == 1){
        var sec_oculto = document.getElementById("texto-oculto");
        sec_oculto.classList.remove('texto-oculto');
        var texto_salida = document.getElementById("texto-salida");
        texto_salida.innerHTML = encriptar(texto_entrada);
        document.getElementById("alarma").style.display = "none";
        document.getElementById("muñeco").style.display = "none";
    } else{
        var sec_oculto = document.getElementById("mensaje");
        sec_oculto.classList.remove('texto-oculto');
        sec_oculto.classList.add('mensaje');
    }
}
function enviarTextoDesencriptar(){
    var texto_entrada = document.getElementById("texto-entrada").value;
    if (tiene_letras(texto_entrada) == 1){
        var sec_oculto = document.getElementById("texto-oculto");
        sec_oculto.classList.remove('texto-oculto');
        var texto_salida = document.getElementById("texto-salida");
        texto_salida.innerHTML = desencriptar(texto_entrada);
        document.getElementById("alarma").style.display = "none";
        document.getElementById("muñeco").style.display = "none";
    } else{
        var sec_oculto = document.getElementById("mensaje");
        sec_oculto.classList.remove('texto-oculto');
        sec_oculto.classList.add('mensaje');
    }
}
function soloLetras(texto) {
    var key = texto.keyCode || texto.which,
    tecla = String.fromCharCode(key),
    letras = " abcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;
    
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function encriptar(texto){
    texto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return texto;
}

function desencriptar(texto){
    texto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return texto;
}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

function tiene_letras(texto){
    var letras="abcdefghyjklmnñopqrstuvwxyz";
    for(i=0; i<texto.length; i++){
    if (letras.indexOf(texto.charAt(i))!=-1){
        return 1;
    }
    }
    return 0;
}  
        