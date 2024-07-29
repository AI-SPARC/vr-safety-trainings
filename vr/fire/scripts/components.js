 AFRAME.registerComponent('raycaster-listener', {
    init: function () {
      var el = this.el;

      el.addEventListener('raycaster-intersection', function (evt) {
        var intersectedEl = evt.detail.els[0];
        if (intersectedEl) {
          console.log('Intersected element ID:', intersectedEl.getAttribute('id'));
        }
      });
    }
  });



AFRAME.registerComponent("thumbstick-logging-right", {
  init: function () {
    this.el.addEventListener("thumbstickmoved", this.logThumbstick);
  },

  logThumbstick: function (evt) {
    const smoothFactor = 55;
    let deltaTheta = evt.detail.x / smoothFactor;
    player.rotation.y -= deltaTheta;
  },
});