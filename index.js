// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDlKcLjXBJjbiP_Kb144l9GbkFKbJtJlSQ",
   authDomain: "alimentos-541e9.firebaseapp.com",
   projectId: "alimentos-541e9",
   storageBucket: "alimentos-541e9.appspot.com",
   messagingSenderId: "412150538506",
   appId: "1:412150538506:web:5f1d58f894ab3fec1e5af3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 import {getDatabase, ref, get, set, child, update, remove}
 from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"

 const db = getDatabase();
//--------------Referencias----------------------------------------------//

 var alimentos = document.getElementById("Alimentosbox")
 var unidade = document.getElementById("Secbox")
 var ml = document.getElementById("ml")
 var kg = document.getElementById("kg")
 var fabricado = document.getElementById("fabricado")
 var validade = document.getElementById("validade")
 var observacao = document.getElementById("obs")

 var Insbtn = document.getElementById("Insbtn")
 var selBtn = document.getElementById("Selbtn")

//--------------ENVIAR----------------------------------------------//
 
 function InserirAlimento(){

    if (alimentos.value === '') {
        alert("Preencha o nome do produto!!!");
        return;
      }
      set(ref(db,"Produtos/" + alimentos.value), {
        Estoque_Atual: unidade.value,
        Litros: ml.value,
        kg: kg.value,
        Fabricado: fabricado.value,
        Validade: validade.value,
        Observacao: observacao.value
    }).then(() => {
       alert("Produto Alimentos enviado.") 
    }).catch((error)=> {
        alert("falha, error"+error)
    })
    alimentos.value = ""
    unidade.value = ""
    ml.value = ""
    kg.value = ""
    fabricado.value = ""
    validade.value = ""
    observacao.value = ""
}

//--------------Select Datas----------------------------------------------//
 
 function SelectData(){
     const dbref = ref(db);

     get(child(dbref,"Produtos/" + alimentos.value)).then((snapshot) => {
         if(snapshot.exists()){
             unidade.value = snapshot.val().Estoque_Atual;
             ml.value = snapshot.val().Litros;
             kg.value = snapshot.val().kg;
             fabricado.value = snapshot.val().Fabricado;
             validade.value = snapshot.val().Validade;
             observacao.value = snapshot.val().Observacao;
         }
         else {
             alert(`Produto NÃO encontrado, digite o mesmo nome que foi enviado.`)
         }
     }).catch((error) => {
         alert("falha, error"+error);
     })
 }

 Insbtn.addEventListener('click', InserirAlimento)
 selBtn.addEventListener('click', SelectData)

 





