import React, { useEffect, useState } from "react";
import Page from "../Universal/Page";
import CardSection from "./CardSection";
import * as THREE from "three";
import Stats from "stats.js";
import LiveBanner from "./LiveBanner";

export default function Landing({ liveEvent }) {

    useEffect(() => {
        if (document) {

            var scene, camera, renderer;
            var container, HEIGHT,
                WIDTH, fieldOfView, aspectRatio,
                nearPlane, farPlane, stats,
                geometry, particleCount,
                i, h, color, size,
                materials = [],
                mouseX = 0,
                mouseY = 0,
                windowHalfX, windowHalfY, cameraZ,
                fogHex, fogDensity, parameters = {},
                parameterCount, particles;

            function onDocumentMouseMove(e) {
                mouseX = e?.clientX - windowHalfX;
                mouseY = e?.clientY - windowHalfY;
            }

            function onDocumentTouchStart(e) {

                if (e?.touches?.length === 1) {

                    e?.preventDefault();
                    mouseX = e?.touches[0]?.pageX - windowHalfX;
                    mouseY = e?.touches[0]?.pageY - windowHalfY;
                }
            }

            function onDocumentTouchMove(e) {

                if (e?.touches?.length === 1) {

                    e?.preventDefault();
                    mouseX = e?.touches[0]?.pageX - windowHalfX;
                    mouseY = e?.touches[0]?.pageY - windowHalfY;
                }
            }

            function onWindowResize() {

                windowHalfX = innerWidth / 2;
                windowHalfY = innerHeight / 2;

                camera.aspect = innerWidth / innerHeight;
                camera.updateProjectionMatrix();
                renderer?.setSize(document?.getElementById("particleAnimationOuter")?.clientWidth, innerHeight-110);
            }

            function init() {

                HEIGHT = innerHeight-110;
                WIDTH = document?.getElementById("particleAnimationOuter")?.clientWidth;
                windowHalfX = WIDTH / 2;
                windowHalfY = HEIGHT / 2;
                fieldOfView = 75;
                aspectRatio = WIDTH / HEIGHT;
                nearPlane = 1;
                farPlane = 3000;

                cameraZ = farPlane / 3; /*	So, 1000? Yes! move on!	*/
                fogHex = 0x000000; /* As black as your heart.	*/
                fogDensity = 0.0007; /* So not terribly dense?	*/

                camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
                camera.position.z = cameraZ;


                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2(fogHex, fogDensity);

                container = document?.createElement('div');
                document?.getElementById("particleAnimation").appendChild(container);
                document?.getElementById("particleAnimation").margin = 0;
                document?.getElementById("particleAnimation").overflow = 'hidden';

                particleCount = 20000; /* Leagues under the sea */

                const points = []
                for (i = 0; i < particleCount; i++) {

                    const Y = Math?.random() * 2000 - 1000;
                    const Z = Math?.random() * 2000 - 1000;
                    const X = Math?.random() * 2000 - 1000;
                    var vertex = new THREE.Vector3(X, Y, Z);

                    points?.push(vertex);
                }

                geometry = new THREE.BufferGeometry()?.setFromPoints(points); /*	NO ONE SAID ANYTHING ABOUT MATH! UGH!	*/

                //     /*	We can't stop here, this is bat country!	*/

                parameters = [
                    [
                        [1, 1, 0.5], 2
                    ],
                ];

                parameterCount = parameters.length;


                for (i = 0; i < parameterCount; i++) {

                    color = parameters[i][0];
                    size = parameters[i][1];

                    materials[i] = new THREE.PointsMaterial({
                        size: size
                    });

                    particles = new THREE.Points(geometry, materials[i]);

                    particles.rotation.x = Math?.random() * 6;
                    particles.rotation.y = Math?.random() * 6;
                    particles.rotation.z = Math?.random() * 6;

                    scene?.add(particles);
                }


                renderer = new THREE.WebGLRenderer(); /*	Rendererererers particles.	*/
                renderer?.setPixelRatio(devicePixelRatio); /*	Probably 1; unless you're fancy?.	*/
                renderer?.setSize(WIDTH, HEIGHT); /*	Full screen baby Wooooo!	*/

                container?.appendChild(renderer?.domElement); /* Let's add all this crazy junk to the page?.	*/


                stats = new Stats();
                // stats.domElement.style.position = 'absolute';
                // stats.domElement.style.top = '0px';
                // stats.domElement.style.right = '0px';
                // container.appendChild(stats.domElement);

                //     /* Event Listeners */

                addEventListener('resize', onWindowResize, true);
                document?.addEventListener('mousemove', onDocumentMouseMove, false);
                document?.addEventListener('touchstart', onDocumentTouchStart, false);
                document?.addEventListener('touchmove', onDocumentTouchMove, false);

            }

            function render() {
                var time = Date.now() * 0.00005;

                camera.position.x += (mouseX - camera.position.x) * 0.05;
                camera.position.y += (-mouseY - camera.position.y) * 0.05;

                camera?.lookAt(scene?.position);

                for (i = 0; i < scene?.children?.length; i++) {

                    var object = scene?.children[i];

                    if (object instanceof THREE.PointsMaterial) {

                        object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
                    }
                }

                for (i = 0; i < materials?.length; i++) {

                    color = parameters[i][0];

                    h = (360 * (color[0]) % 360) / 360;
                    materials[i]?.color?.setHSL(h, color[1], color[2]);
                }

                renderer?.render(scene, camera);
            }

            function animate() {
                requestAnimationFrame(animate);
                render();
                stats?.update();
            }

            init();
            animate();

        }
    }, []);

    return (
        <Page pageTitle={"Home"}>

            {/* <LiveBanner
                imageUrl={liveEvent?.imageUrl}
                title={liveEvent?.title}
                details={liveEvent?.details}
            /> */}
            <div id="particleAnimationOuter" className="relative h-full w-full flex justify-center items-center">
                <img src="/LandingPage/TEDxDTU_Black.png" className="absolute h-16 sm:h-24 md:h-36 lg:h-40" />
                <div id="particleAnimation"></div>
            </div>
            <CardSection />
        </Page>
    );
}
