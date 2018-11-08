var socket = io("/lobby");

document.querySelector("form.chat").addEventListener("submit", event => {
  const message = $("#m").val();

  console.log(message);
  if (message !== undefined && message !== "") {
    fetch("/chat/lobby", {
      method: "post",
      body: JSON.stringify({ message }),
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json" })
    })
    .then( () => $('#m').val(""))
    .catch(error => console.log(error));
  }

  event.preventDefault();
  event.stopPropagation();
  return false;
});

// Receive from server
socket.on("chat-lobby", function(data) {
  if (data) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var ampm = h < 12 ? "AM" : "PM";
    h = h % 12;
    h = h ? h : 12; // the hour '0' should be '12'
    m = m < 10 ? "0" + m : m;
    var strTime = h + ":" + m + " " + ampm;
    $('#messages').append(
      '<li>' + data.user.bold() + ' (' + strTime +  '): ' + data.msg + '</li>'
    );
  }
});

$("div.joinableGame").each((index,element) => {
    $(element).on("click", () => {
      $("div.joinableGame").removeClass("selected");
      $(element).addClass("selected");
    })
})

$("form.join").on("submit", event => {
  const game_id = $("div.joinableGame.selected").attr("data");
  console.log(game_id);
  if (game_id !== undefined) {
    fetch(`/game/join/${game_id}`,{
          method: "post",
          credentials: "include"
    })
  .then( () => window.location.replace(`/game/${game_id}`))
  .catch( error => console.log(error))
  }else{
      alert("Please select a game!");
  }
  event.preventDefault();
  event.stopPropagation();
  return false;
});
