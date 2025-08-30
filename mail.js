
const firebaseConfig = {
    apiKey: "AIzaSyCnvqEAh9rXQKfW_huNUGJpSUQoUanpQic",
    authDomain: "unityconstruction-bcd5c.firebaseapp.com",
    databaseURL: "https://unityconstruction-bcd5c-default-rtdb.firebaseio.com",
    projectId: "unityconstruction-bcd5c",
    storageBucket: "unityconstruction-bcd5c.appspot.com",
    messagingSenderId: "305808646720",
    appId: "1:305808646720:web:c788a0bfe52ed0fe9b35a5"
};

// initialize
firebase.initializeApp(firebaseConfig);

//refernce db
var UnityconstructionDB = firebase.database().ref("UnityConstruction");

document.getElementById("contactForm").addEventListener("submit",submitForm)
function submitForm(e){
    e.preventDefault();

    var Name=getElementval("name");
    var Email=getElementval("email");
    var Phone=getElementval("phone");
    var Msg=getElementval("msg");

    console.log(Name,Email,Phone,Msg);

}

const getElementval = (id)=>{
    return document.getElementById(id).ariaValueMax;
};
