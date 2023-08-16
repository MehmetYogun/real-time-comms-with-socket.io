let socket = io();

function scrollToBottom() {
  let messages = document.querySelector("#messages").lastElementChild;
  messages.scrollIntoView();
}

socket.on("connect", function () {
  let searchQuery = window.location.search.substring(1);
  let params = JSON.parse(
    '{"' +
      decodeURI(searchQuery)
        .replace(/&/g, '","')
        .replace(/\+/g, " ")
        .replace(/=/g, '":"') +
      '"}'
  );

  socket.emit("join", params, function (err) {
    if (err) {
      alert(err);
      window.location.href = "/";
    } else {
      console.log("no error");
    }
  });
});

socket.on("disconnect", function () {
  console.log("Disconnected from server");
});

socket.on("newMessage", function (message) {
  const formattedTime = moment(message.createdAt).format("LT");
  const template = document.querySelector("#message-template").innerHTML;
  const html = Mustache.render(template, {
    from: message.from,
    text: message.text,
    createdAt: formattedTime,
  });

  const li = document.createElement("li");
  li.innerHTML = html;

  document.querySelector("#messages").appendChild(li);

  scrollToBottom();
});

socket.on("newLocationMessage", function (message) {
  const formattedTime = moment(message.createdAt).format("LT");
  console.log("newLocationMessage", message);
  const template = document.querySelector(
    "#location-message-template"
  ).innerHTML;
  const html = Mustache.render(template, {
    from: message.from,
    url: message.url,
    createdAt: formattedTime,
  });

  const li = document.createElement("li");
  li.innerHTML = html;

  document.querySelector("#messages").appendChild(li);
  scrollToBottom();
});

document.querySelector("#submit-btn").addEventListener("click", function (e) {
  e.preventDefault();

  socket.emit(
    "createMessage",
    {
      from: "User",
      text: document.querySelector("input[name='message']").value,
    },
    function () {}
  );
});

document
  .querySelector("#send-location")
  .addEventListener("click", function (e) {
    if (!navigator.geolocation) {
      return alert("Geolocation is not support by your browser.");
    }

    navigator.geolocation.getCurrentPosition(
      function (position) {
        socket.emit("createLocationMessage", {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      function () {
        alert("Unable to fetch location");
      }
    );
  });
