'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Particles() {
  const mount = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!mount.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = mount.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 36;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const count = window.innerWidth < 768 ? 320 : 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 55;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 55;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.045, color: 0x00f5ff, transparent: true, opacity: 0.68, blending: THREE.AdditiveBlending });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const magenta = new THREE.PointLight(0xff2bd6, 2.1, 70);
    magenta.position.set(24, 13, 14);
    scene.add(magenta);
    const cyan = new THREE.PointLight(0x00f5ff, 2.3, 80);
    cyan.position.set(-22, -7, 18);
    scene.add(cyan);

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      points.rotation.y += 0.0009;
      points.rotation.x += 0.00025;
      renderer.render(scene, camera);
    };
    animate();
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); renderer.dispose(); geometry.dispose(); material.dispose(); container.innerHTML = ''; };
  }, []);
  return <div ref={mount} aria-hidden="true" className="pointer-events-none fixed inset-0 z-10 opacity-55 md:opacity-70" />;
}
