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


 var aliBtn = document.getElementById("Alibtn")
 var selBtn = document.getElementById("Selbtn")
 

//--------------ENVIAR----------------------------------------------//
 
 function InserirAlimento(){
    set(ref(db, "Alimentos/"+ alimentos.value), {
        Unidade: unidade.value,
        ml: ml.value,
        kg: kg.value,
        Fabricado: fabricado.value,
        Validade: validade.value,
        Observação: observacao.value
    }).then(() => {
       alert("Produto Alimentos enviado") 
    }).catch((error)=> {
        alert("falha, error"+error)
    })
}

//--------------Select Datas----------------------------------------------//
 
 function SelectData(){
     const dbref = ref(db);

     get(child(dbref,"Alimentos/"+ alimentos.value)).then((snapshot) => {
         if(snapshot.exists()){
             unidade.value = snapshot.val().Unidade;
             ml.value = snapshot.val().ml;
             kg.value = snapshot.val().kg;
             fabricado.value = snapshot.val().Fabricado;
             validade.value = snapshot.val().Validade;
             observacao.value = snapshot.val().Observação;
         }
         else {
             alert("Produto não encontrado, digite o mesmo nome que foi enviado")
         }
     }).catch((error) => {
         alert("falha, error"+error);
     })
 }


 aliBtn.addEventListener('click', InserirAlimento)
 selBtn.addEventListener('click', SelectData)

 





