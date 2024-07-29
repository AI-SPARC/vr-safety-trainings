AFRAME.registerComponent('bubble-effect', {
  schema: {
    width: { type: 'number', default: 0.4 },
    height: { type: 'number', default: 4 },
    numParticles: { type: 'number', default: 400 },
    colorStart: { type: 'color', default: '#FFFFFF' },
    colorEnd: { type: 'color', default: '#FFFFFF' },
    isActive: { type: 'boolean', default: true }
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    this.particles = [];

    const sphereGeometry = new THREE.SphereGeometry(0.05, 16, 16);

    for (let i = 0; i < data.numParticles; i++) {
      const x = (Math.random() - 0.5) * data.width;
      const y = Math.random() * data.height;
      const z = (Math.random() - 0.5) * data.width;

      const colorStart = new THREE.Color(data.colorStart);
      const colorEnd = new THREE.Color(data.colorEnd);
      const color = colorStart.clone().lerp(colorEnd, y / data.height);

      const material = new THREE.MeshStandardMaterial({ color: color, transparent: true });

      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(x, y, z);

      this.particles.push(sphere);
      el.object3D.add(sphere);
    }
  },

  update: function () {
    const data = this.data;
    const el = this.el;

    if (data.isActive) {
      this.particles.forEach(particle => {
        el.object3D.add(particle);
      });
    } else {
      this.particles.forEach(particle => {
        el.object3D.remove(particle);
      });
    }
  },

  tick: function (time, timeDelta) {
    if (!this.data.isActive) {
      return;
    }

    const numParticles = this.data.numParticles;
    const width = this.data.width;
    const height = this.data.height;

    for (let i = 0; i < numParticles; i++) {
      const particle = this.particles[i];
      particle.position.y += 0.01 * Math.random();

      if (particle.position.y > height) {
        particle.position.y = 0;
        particle.position.x = (Math.random() - 0.5) * width;
        particle.position.z = (Math.random() - 0.5) * width;
      }
    }
  },

  remove: function () {
    // Limpeza ao remover o componente
    const el = this.el;
    this.particles.forEach(particle => {
      el.object3D.remove(particle);
    });
  }
});
