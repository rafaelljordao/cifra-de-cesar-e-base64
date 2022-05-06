function changeButton1() {
  let btn = document.getElementById('btn');
  btn.innerText="Codificar Mensagem!"
}

function changeButton2() {
  let btn = document.getElementById('btn');
  btn.innerText="Decodificar Mensagem!"
}

var final = document.querySelector('#txtsaida');
var entrada = document.querySelector('#txtentrada');

var codDecod = document.querySelector('#btn');
var codSelect = document.querySelector('#codificar');
var decodSelect = document.querySelector('#decodificar');

var cifraCesar = document.querySelector('#cifraCesar');
var base64 = document.querySelector('#base64');

var txts = [entrada];
txts.forEach( input => {
input.oninput = () => {
  input.value = input.value.toUpperCase();
}
});

var cifrasSelect = document.getElementById('cifras');

// function mostrarChave(){
// var boxChave = document.getElementById('boxChave');
// if (cifrasSelect.value == "cifraCesar"){
//   boxChave.innerHTML = `<label for="chave">Chave da cifra</label>
//       <input type="number" id="chave" name="chave">`;
// } else {
//   boxChave.innerText = "";
// }
// }

// função para só aparecer a chave quando selecionar a cifra de César, mas que sempre que implemento dá erro na base64.

codDecod.addEventListener('click', function(){
event.preventDefault();
var cifrasIndex = cifrasSelect.selectedIndex;
var chave = Number(document.getElementById('chave').value)
var saida = '';
var saida2 = '';
entrada = document.querySelector('#txtentrada').value;
if (cifrasIndex == 1 && codSelect.checked == true){
  for (var i = 0; i < entrada.length; i++){
      if (entrada.charCodeAt(i) < 65 || entrada.charCodeAt(i) > 90){
        saida += entrada[i];
      } else {
          var r = entrada.charCodeAt(i) + chave;
          while (r > 90){
            r = (r - 91) + 65; 
          }
        saida += String.fromCharCode(r);
      }
  }
  final.innerHTML = `${saida}`;
} else if (cifrasIndex == 1 && decodSelect.checked == true){
    for (var i = 0; i < entrada.length; i++){
        if (entrada.charCodeAt(i) < 65 || entrada.charCodeAt(i) > 90){
          saida2 += entrada[i];
        } else {
            var r = entrada.charCodeAt(i) - chave;
            while (r < 65){
              r = (r + 91) - 65;
            }
          saida2 += String.fromCharCode(r);
        }
    }
    final.innerHTML = `${saida2}`;
} else if (cifrasIndex == 2 && codSelect.checked == true) {
    var codeBase64 = btoa(entrada);        
    final.innerHTML = `${codeBase64}`;
  
} else if (cifrasIndex == 2 && decodSelect.checked == true) {
  var decodeBase64 = atob(entrada);
  final.innerHTML = `${decodeBase64}`;
}
});