
        var texto;

        function criptografar(){
            texto = document.getElementById('recebetexto').value;
            var novotexto = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
            document.getElementById('input').style.display="block";
            document.getElementById('input').value = novotexto;
            document.getElementById("img").style.display ="none";
            document.getElementById("msg").style.display ="none";
            document.getElementById("sub").style.display ="none";
            document.getElementById("copiar").style.display = "block";
           

  }

  function descriptografar(){
    texto = document.getElementById('recebetexto').value;
    var novotexto = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    document.getElementById('input').style.display="block";
    document.getElementById('input').value = novotexto;
    document.getElementById("img").style.display ="none";
    document.getElementById("msg").style.display ="none";
    document.getElementById("sub").style.display ="none";
    document.getElementById("copiar").style.display = "block";
  }

  function copiar(){
   novotexto = document.getElementById('input').value;
   navigator.clipboard.writeText(novotexto);
   texto = document.getElementById('recebetexto').value = novotexto;
  
  }
