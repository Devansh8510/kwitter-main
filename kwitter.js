function login() {
    user_name1=document.getElementById("user_name").value ;
    localStorage.setItem("name",user_name1);
    window.location="kwitter_room.html";
}