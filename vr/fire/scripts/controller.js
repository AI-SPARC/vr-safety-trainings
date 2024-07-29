scene = document.getElementById("sceneId");
foam = document.getElementById("foamId")

currentFoamState = false
AFRAME.registerComponent("controller", {
  init: function () {
    this.el.addEventListener("triggerdown", onTriggerDown);
    // this.el.addEventListener("triggerup", onTriggerUp);
    // this.el.addEventListener("gripdown", onGripDown);
    // this.el.addEventListener("gripup", onGripUp);
    },
})

function onTriggerDown(e){
  console.log("trigger_down")
  console.log(foam)
  if(currentFoamState == false){
    foam.setAttribute('bubble-effect', 'isActive:true; width:0.2; height: 1; numParticles:300;')
    currentFoamState = true
  } else{
    foam.setAttribute('bubble-effect', 'isActive:false; width:0.2; height: 1; numParticles:300;')
    currentFoamState = false
  }
}

// function onGripDown(e){
//   if (currentElement != undefined) {
//     switch (currentElement.id) {
//       case "botaoIniciarTreinamento":
        

      
//       }
//     }
//   }
