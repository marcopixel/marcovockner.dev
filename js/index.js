// Code based on https://codepen.io/magnificode/full/NxXvKj/

var SEPARATION = 40,
  AMOUNTX = 35,
  AMOUNTY = 35;

var CONTAINERID = 'background';

var container, stats;
var camera, scene, renderer;

var particles, particle, count = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

  container = document.createElement('div');
  container.id = CONTAINERID;
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.x = 75;
  camera.position.z = 250;
  camera.position.y = 400;
  camera.rotation.x = -40 * Math.PI / 180;

  scene = new THREE.Scene();

  particles = new Array();

  var PI2 = Math.PI * 2;

  var material = new THREE.SpriteCanvasMaterial({

    color: 0xED1C5B,
    program: function(context) {

      context.beginPath();
      context.arc(0.5, 0, 0.15, PI2, 0.1, true);
      context.shadowBlur = 0;
      context.shadowColor = "#ED1C5B";
      context.fill();

    }

  });

  var i = 0;

  for (var ix = 0; ix < AMOUNTX; ix++) {

    for (var iy = 0; iy < AMOUNTY; iy++) {

      particle = particles[i++] = new THREE.Sprite(material);
      particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
      particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
      scene.add(particle);

    }

  }

  renderer = new THREE.CanvasRenderer( { alpha: true } );
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

  requestAnimationFrame(animate);

  render();

}

function render() {

  var i = 0;

  for (var ix = 0; ix < AMOUNTX; ix++) {

    for (var iy = 0; iy < AMOUNTY; iy++) {

      particle = particles[i++];
      particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;

    }

  }

  renderer.render(scene, camera);

  count += 0.004;

}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}