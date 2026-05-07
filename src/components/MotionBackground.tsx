import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface MotionBackgroundProps {
  enabled: boolean;
}

const vertexShader = `
  uniform float uTime;
  varying float vWave;

  void main() {
    vec3 pos = position;
    float waveA = sin((pos.x * 1.15) + (uTime * 0.75)) * 0.22;
    float waveB = cos((pos.y * 1.45) - (uTime * 0.55)) * 0.18;
    pos.z += waveA + waveB;
    vWave = pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying float vWave;

  void main() {
    float intensity = smoothstep(-0.25, 0.35, vWave);
    vec3 baseA = vec3(0.9686, 0.9451, 0.9176);
    vec3 baseB = vec3(0.9765, 0.7255, 0.7725);
    vec3 color = mix(baseA, baseB, intensity);
    gl_FragColor = vec4(color, 0.24);
  }
`;

const MotionBackground: React.FC<MotionBackgroundProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const geometry = new THREE.PlaneGeometry(8.4, 8.4, 110, 110);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.62;
    mesh.position.set(0, -0.35, -1.5);
    scene.add(mesh);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const clock = new THREE.Clock();
    let rafId = 0;

    const tick = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      mesh.rotation.z += 0.00055;
      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [enabled]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-90" />;
};

export default MotionBackground;
