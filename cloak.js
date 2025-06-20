AFRAME.registerComponent('cloak', {
   init: function() {
     var geometry = new THREE.BoxGeometry( 1.1, 1.1, 1.1 );
     var material = new THREE.MeshBasicMaterial( {colorWrite: false} );
     var cube = new THREE.Mesh( geometry, material );
     this.el.object3D.add( cube );
   }
})