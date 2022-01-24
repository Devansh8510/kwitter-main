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
 room_name=localStorage.getItem("room");
 function send () {
     Msg1=document.getElementById("msg").value ;
     firebase.database().ref(room_name).push({
         name:User_name,
        message:Msg1,
        likes:0
     });
     document.getElementById("msg").value="";
    }
    function logout() {
        localStorage.removeItem("name");
      localStorage.removeItem("room");
      window.location="index.html";
    }
      
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey; message_data = childData;
       name=message_data["name"];
       message=message_data["message"];
       like=message_data["likes"];
       //<h4> name <img class="user_tick" src="tick.png"</img></h4>
       part_1="<h4>"+name+"<img class='user_tick' src='tick.png'</img></h4>";
       part_2="<h4>"+message+"</h4>";
       //<button class="btn btn-warning" id="firebase_message_id" value="like">
       part_3="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
       part_4="<span class='glyphicon glyphicon-thumbs-up'> like="+like+"</span></button><hr>";
       row=part_1+part_2+part_3+part_4;
       document.getElementById("output").innerHTML+=row;
      } }); }); } getData();
      function updateLike(message_id) { console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }
    
      