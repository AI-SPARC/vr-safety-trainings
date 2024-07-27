document.addEventListener("DOMContentLoaded", function () {
  const classeParam = new URLSearchParams(window.location.search).get("type");
  console.log("classeParam", classeParam);
  const scene = document.getElementById("scene");
  let currentTraining = "";
  let elements;
  player = document.getElementById("player");

  console.log(classeParam, player)
  switch (classeParam) {
    case "elevator":
      elements = document.querySelectorAll(".elevator");
      currentTraining = "elevator";
      player.setAttribute("position", "15.4 8 3.15");
      break;
  
    case "fire":
      elements = document.querySelectorAll(".fire");
      currentTraining = "fire";
      player.setAttribute("position", "15.4 8 3.15");
      break;
  
    case "confinedspace":
      elements = document.querySelectorAll(".confinedspace");
      currentTraining = "confinedspace";
      player.setAttribute("position", "6.5 -2.114 20.117");
      player.setAttribute("rotation", "0 15 0");
      break;

    case "exploration":
      elements = document.querySelectorAll(".exploration");
      currentTraining = "exploration";
      // player.setAttribute("position", "23.232 14.39 2.249");
      // player.setAttribute("rotation", "0 20 0");
      player.setAttribute("position", "-28.347 1.6 19.5");
      player.setAttribute("rotation", "0 -90 0");
      break;
  
    default:
      elements = document.querySelectorAll(".elevator");
      currentTraining = "elevator";
      player.setAttribute("position", "15.4 8 3.15");
      break;
  }
});

