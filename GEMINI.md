# Project Context: WebXR Monolith

This project is a WebXR/Three.js playground built entirely as a single-file HTML monolith. The goal is rapid prototyping and "vibe coding" without the friction of build steps, bundlers, or heavy frameworks.

## 🏗️ Architecture & Style Constraints

When assisting, generating, or refactoring code for this project, you MUST adhere strictly to the following rules:

### 1. The Monolith Rule
* **No splitting files:** Keep HTML, CSS, and JavaScript strictly within the single HTML file being worked on unless explicitly instructed otherwise.
* **Structure:** * CSS goes inside `<style>` tags in the `<head>`.
    * JavaScript goes inside `<script type="module">` tags at the bottom of the `<body>`.
* **Do not suggest build tools:** No Webpack, Vite, Rollup, Babel, or TypeScript setups.
* **Do not suggest JS frameworks:** No React, Vue, Svelte, or Three.js wrappers like React Three Fiber. Keep it pure vanilla.

### 2. Dependency Management
* **Use Import Maps:** All external dependencies (like Three.js, GLTFLoader, VRButton) must be managed via a `<script type="importmap">` in the HTML document.
* **Module Imports:** Use native ES Modules (`import * as THREE from 'three';`).
* **Local Vendor vs. CDN:** Assume libraries are either fetched via unpkg/esm.sh CDNs or served directly from a local `../vendor/` directory as established in the template.

### 3. JavaScript & Three.js Patterns
* **Modern Vanilla JS:** Use modern ECMAScript features (async/await, destructuring, arrow functions, optional chaining) supported by current browsers.
* **Performance:** Reuse vectors, matrices, and raycasters by declaring them globally outside the render loop (e.g., `const _tempMat = new THREE.Matrix4();`) to avoid garbage collection stutter in VR.
* **WebXR Specifics:** Always rely on Three.js's WebXR abstraction (`renderer.xr`). Handle locomotion by manipulating the XR reference space (`getOffsetReferenceSpace`), NOT by moving the camera manually.

### 4. Styling Guidelines
* **Vanilla CSS:** Write clean, modern, vanilla CSS. No SCSS, LESS, Tailwind, or CSS-in-JS.
* **UI overlays:** Position 2D UI elements absolutely over the canvas, using `backdrop-filter` and transparent backgrounds to fit the immersive aesthetic.

## 🎯 Primary Directive
Keep the code as simple, readable, and direct as possible. Do not over-engineer solutions. If a feature can be accomplished with a few lines of vanilla JavaScript or CSS, do that instead of importing a new library or abstracting it into complex classes.
