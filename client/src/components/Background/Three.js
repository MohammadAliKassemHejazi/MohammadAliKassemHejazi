import React, { Fragment, useEffect } from "react";
import ReactDom from "react-dom";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Three() {
  const myCanvas = document.getElementById("canvs");

  const cameraGroup = new THREE.Group();
  const parameters = {
    materialColor: "#fff",
  };
  const scene = new THREE.Scene();
  const sphereGeometry = new THREE.SphereGeometry(1, 35, 35);
  const torusGeo = new THREE.TorusGeometry(0.8, 1.1, 290, 20, 120);

  const pointsMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    size: 0.001,
    sizeAttenuation: true,
    transparent: false,
  });

  const sphereParticles = new THREE.Points(sphereGeometry, pointsMaterial);
  const torusParticles = new THREE.Points(torusGeo, pointsMaterial);

  const material = new THREE.MeshBasicMaterial({
    color: parameters.materialColor,
    wireframe: true,
  });

  const animateCanvas = () => {
    const mesh = new THREE.Mesh(torusGeo, material);
    mesh.position.x = 1.5;
    torusParticles.material.opacity = 0.15;
    scene.add(sphereParticles, torusParticles);

    // Particles
    const particleCount = 10;
    const positions = new Float32Array(particleCount * 3);
    const particlesMaterial = new THREE.PointsMaterial({
      color: parameters.materialColor,
      size: 0.02,
      sizeAttenuation: true,
    });
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const particlesGeometry = new THREE.BufferGeometry();
      positions[i3 + 0] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      const points = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(points);
    }
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Base camera
    scene.add(cameraGroup);
    const camera = new THREE.PerspectiveCamera(
      25,
      sizes.width / sizes.height,
      0.3,
      100
    );
    camera.position.z = 1;
    cameraGroup.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: myCanvas,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new THREE.Clock();
    let previousTime = 0;

    // Todo: Scrolling the camera
    let scrollY = window.scrollY;
    const cursor = {
      x: 0,
      y: 0,
    };

    const controls = new OrbitControls(camera, myCanvas);
    controls.enableDamping = true;
    controls.enableZoom = false;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      camera.position.y = -scrollY / sizes.height;

      // Parallax
      const parallaxX = cursor.x * 6;
      const parallaxY = cursor.y * 6;
      cameraGroup.position.x +=
        (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
      cameraGroup.position.y -=
        (parallaxY + cameraGroup.position.y) * 5 * deltaTime;
      sphereParticles.rotation.x = 0.05 * elapsedTime;
      sphereParticles.rotation.y = 0.05 * elapsedTime;
      torusParticles.rotation.x = 0.05 * elapsedTime;
      torusParticles.rotation.y = 0.05 * elapsedTime;
      controls.update();
      // Render
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();

    // Todo: Parallax effect using mousemove & the cursor
    window.addEventListener("mousemove", (e) => {
      cursor.x = e.clientX / sizes.width - 0.5;
      cursor.y = e.clientY / sizes.height - 0.5;
    });

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // const s = () => {
    //   if (cameraGroup.position.z <= -6) {
    //     cameraGroup.position.z = 0;
    //   }
    //   gsap.to(cameraGroup.rotation, {
    //     duration: 2,
    //     y: "-=2",
    //     ease: "power2.inOut",
    //   });
    //   gsap.to(cameraGroup.position, {
    //     duration: 2,
    //     z: "-=2",
    //     ease: "power2.inOut",
    //   });
    // };
  };
  useEffect(() => {
    animateCanvas();
  }, []);

  return (
    <Fragment>
      {ReactDom.createPortal(
        <canvas id="canvs1"></canvas>,
        document.getElementById("canvs")
      )}
    </Fragment>
  );
}

export default Three;
