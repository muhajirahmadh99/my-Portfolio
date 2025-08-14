import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-skills-bg',
  templateUrl: './skills-bg.component.html',
  styleUrls: ['./skills-bg.component.scss'],
})
export class SkillsBgComponent implements OnInit {
  @ViewChild('bgCanvas', { static: true })
  bgCanvas!: ElementRef<HTMLCanvasElement>;
  scene = new THREE.Scene();
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  particles!: THREE.Points;

  ngOnInit() {
    this.initThree();
    this.animate();
  }

  initThree() {
    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.bgCanvas.nativeElement,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: '#1e293b', size: 0.05 });
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);


    // Resize handling
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    // Rotation effect
    this.particles.rotation.x += 0.001;
    this.particles.rotation.y += 0.002;

    this.renderer.render(this.scene, this.camera);
  };
}
