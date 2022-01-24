var firebaseConfig = {
    apiKey: "AIzaSyAX4dMILQW_pfbjN5e3vstFrbHGAVl1t3I",
    authDomain: "c-94-7a962.firebaseapp.com",
    databaseURL: "https://c-94-7a962-default-rtdb.firebaseio.com",
    projectId: "c-94-7a962",
    storageBucket: "c-94-7a962.appspot.com",
    messagingSenderId: "862391140125",
    appId: "1:862391140125:web:561223086d4518fd74abf4",
    measurementId: "G-JYE0WCMV7B"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 User_name=localStorage.getItem("name");
 document.getElementById("welcome").innerHTML="welcome "+User_name +"!";
 function addroom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room",room_name);
      window.location="kwitter_page.html";
 }

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
//<div id="Room_names">room_name</div><hr>
row="<div id='"+Room_names+"' onclick='room_change(this.id)'>"+room_name+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function room_change(name) {
      localStorage.setItem("room",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("name");
      localStorage.removeItem("room");
      window.location="index.html";
}