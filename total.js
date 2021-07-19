#chats.js
let chats_container = document.getElementsByClassName("chats_container")[0];
chats_container.addEventListener("click",function(){
    location.href = "chat.html";
});

#setting.js
let left = document.getElementsByClassName("left_icon")[0];
left.addEventListener("click", function() {
    history.back();
});
