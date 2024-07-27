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
      player.setAttribute("position", "15.4 8 3.15");
      break;
  
    default:
      elements = document.querySelectorAll(".elevator");
      currentTraining = "elevator";
      player.setAttribute("position", "15.4 8 3.15");
      break;
  }
});

