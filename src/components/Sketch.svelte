<script>
	import { onMount } from 'svelte';
    import { fly } from "svelte/transition";
    import * as THREE from 'three';
    import fragment from '$lib/glsl/frag.js';

    let canvas, title, textColorR, textColorB, textColorG;
    let loaded = false;

    onMount(() => {

        const parent = canvas.parentElement;
        let time = new Date().getHours();
        let offset = 0;
        let normalized_time = (time - offset) / 24;
        // normalized_time = Math.sin(Math.PI * normalized_time).toFixed(5);

        // const text = document.getElementById("pedro");
        // const current_time = document.getElementById("date-time");
        let textColor;

        if (time >= 12) {
            textColor = 25;
            // current_time.style.color = `rgba(${textColor}, ${textColor}, ${textColor}, 0.8)`;
            title.style.color = `rgba(${textColor}, ${textColor}, ${textColor}, 0.8)`;
        } else {
            textColorR = 255;
            textColorG = 242;
            textColorB = 234;
            // current_time.style.color = `rgba(${textColorR}, ${textColorG}, ${textColorB}, 0.8)`;
            title.style.color = `rgba(${textColorR}, ${textColorG}, ${textColorB}, 0.8)`;
        }
        // -------------------- THREE.JS SKETCH --------------------
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight - 10;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;

        const plane = new THREE.PlaneGeometry(canvas.width, canvas.height);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: { type: "f", value: 0 },
                u_resolution: {
                    value: new THREE.Vector2(canvas.width, canvas.height),
                },
                u_mouse: { type: "vec2", value: new THREE.Vector2() },
                u_hour: { type: "f", value: normalized_time },
            },
            fragmentShader: fragment,
        });

        const mesh = new THREE.Mesh(plane, material);
        scene.add(mesh);

        loaded = true;

        function animate() {
            requestAnimationFrame(animate);
            material.uniforms.u_time.value += 0.001;
            renderer.render(scene, camera);
            renderer.domElement.addEventListener("mousemove", mouseMove, false);
        }

        function mouseMove(e) {
            const vpRatio = window.innerWidth / window.innerHeight;
            material.uniforms.u_mouse.value.x = (e.offsetX / window.innerWidth) * vpRatio;
            material.uniforms.u_mouse.value.y = 1 - e.offsetY / window.innerHeight;
        }

        function refreshTime() {
            var dateString = new Date().toString();
            dateString = dateString.split("G")[0];

            // var formattedString = dateString.replace(", ", " - ");
            current_time.innerHTML = dateString;
        }

        function randomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

        animate();
        // setInterval(refreshTime, 1000);

        window.addEventListener('resize', resize);
        
        function resize() {
            const width = parent.clientWidth;
            const height = parent.clientHeight - 10;

            // Update renderer size
            renderer.setSize(width, height);

            // Update camera aspect ratio
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    })

</script>

{#if !loaded}
    <div class="overflow-y-hidden absolute left-0 top-0 flex items-center justify-center w-full h-full bg-ivory z-20 overflow-hidden">
        <span class="animate-spin text-2xl">💭</span>
    </div>
{/if}

<div in:fly={{duration: 250}} class="flex-grow relative w-full flex items-center">
    <h1 class="absolute text-2xl md:text-5xl font-bold text-ivory left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none bg-white p-2 bg-opacity-20" bind:this={title}>Pedro Falco</h1>
    <canvas class="w-full  border border-dashed border-black" bind:this={canvas}/>
</div>