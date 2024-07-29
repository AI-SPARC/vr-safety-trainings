AFRAME.registerComponent('fire-effect', {
  schema: {
    width: { type: 'number', default: 0.4 },
    height: { type: 'number', default: 4 },
    numParticles: { type: 'number', default: 400 },
    colorStart: { type: 'color', default: '#FFD700' },
    colorEnd: { type: 'color', default: '#FF4500' }, 
    isActive: { type: 'boolean', default: true }
  },

  init: function () {
    const data = this.data;
    const el = this.el;

    // Criação da geometria de pontos
    this.geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const colorStart = new THREE.Color(data.colorStart);
    const colorEnd = new THREE.Color(data.colorEnd);

    for (let i = 0; i < data.numParticles; i++) {
      const x = (Math.random() - 0.5) * data.width;
      const y = Math.random() * data.height;
      const z = (Math.random() - 0.5) * data.width;
      
      positions.push(x, y, z);

      // Interpolação de cor baseada na altura inicial
      const color = colorStart.clone().lerp(colorEnd, y / data.height);
      colors.push(color.r, color.g, color.b);
    }

    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    this.material = new THREE.PointsMaterial({
      size: 0.1, // Tamanho das partículas
      vertexColors: true,
      transparent: true
    });

    // Criação do sistema de partículas
    this.particles = new THREE.Points(this.geometry, this.material);
    el.setObject3D('mesh', this.particles);
  },

  update: function () {
    const data = this.data;
    const el = this.el;

    if (data.isActive) {
      el.setObject3D('mesh', this.particles);
    } else {
      el.removeObject3D('mesh');
    }
  },

  tick: function (time, timeDelta) {
    if (!this.data.isActive) {
      return;
    }

    const positions = this.geometry.attributes.position.array;
    const numParticles = this.data.numParticles;
    const width = this.data.width;
    const height = this.data.height;

    for (let i = 0; i < numParticles; i++) {
      const yIndex = i * 3 + 1;
      positions[yIndex] += 0.01 * Math.random();

      if (positions[yIndex] > height) {
        positions[yIndex] = 0;
        positions[i * 3] = (Math.random() - 0.5) * width;
        positions[i * 3 + 2] = (Math.random() - 0.5) * width;
      }
    }

    this.geometry.attributes.position.needsUpdate = true;
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  }
});
