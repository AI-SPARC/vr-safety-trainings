document.addEventListener("DOMContentLoaded", function () {
  scene = document.getElementById("scene");
  player = document.getElementById("player");
  camera = document.getElementById("#camera").object3D;

  domCamera = document.getElementById("#camera");

  rightController = document.getElementById("rightController");
  leftController = document.getElementById("leftController");

  elevator = document.getElementById("elevator");

  currentElement = undefined;
  
  // controller1 = scene.renderer.xr.getController(1);
  rightController.addEventListener("selectstart", onSelect1Start);
  leftController.addEventListener("selectstart", onSelect1Start);
  rightController.addEventListener("squeezestart", onSelect1Start);
  leftController.addEventListener("squeezestart", onSelect1Start);
  rightController.addEventListener("triggerdown", onSelect1Start);
  leftController.addEventListener("triggerdown", onSelect1Start);
  rightController.addEventListener("gripdown", onSelect1Start);
  leftController.addEventListener("gripdown", onSelect1Start);
});

function onSelect1Start() {
  if (currentElement) {
    if(currentElement.id === "elevatorButtons") {


      player_x = player.object3D.position.x
      player_y = player.object3D.position.y
      player_z = player.object3D.position.z
      
      elevator_x = elevator.object3D.position.x
      elevator_y = elevator.object3D.position.y
      elevator_z = elevator.object3D.position.z

      offset = 7.0
      duration = 7000

      elevator.setAttribute("animation__down", {
        property: "position",
        to: { x: elevator_x, y: elevator_y - offset, z: elevator_z },
        dur: duration,
        startEvents: "loaded",
      });
      player.setAttribute("animation__up", {
        property: "position",
        to: { x: player_x, y: player_y - offset, z: player_z },
        dur: duration,
        startEvents: "loaded",
      });
      
      elevator.emit("loaded", null, false);
      player.emit("loaded", null, false);
    }
  }
}

window.addEventListener("load", function (event) {
  setTimeout(() => {
    var loadingScreen = document.getElementById("loadingScreen");

    loadingScreen.style.display = "none";
    scene.style.display = "contents";
  }, 10000);
});