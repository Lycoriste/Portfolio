# Development Documentation

This portfolio website takes great inspiration from Keita Yamada's portfolio, an amazing designer and web developer. Check him out at https://p5aholic.me. As someone without any web development experience, his works has given me significant guidance on my learning and progress on this personal portfolio.

The website is built using Vite, React, and ReactThreeFiber/three.js.

Postprocessing for scenes uses the postprocessing library over three.js's postprocessing library and react-three-fiber's postprocessing to merge effects via EffectPass. 
```
const composer = useMemo(() => {
const composer = new FXC(gl,
    {
        multisampling: 0
    });

// Postprocessing Effects
const bloomEffect = new BloomEffect({ luminanceThreshold: 0.05, luminanceSmoothing: 0.5, intensity: 3.5 });
const vignetteEffect = new VignetteEffect({ offset: 0.15, darkness: 0.83, eskil: false, blendFunction: BlendFunction.NORMAL });
const noiseEffect = new NoiseEffect({ premultiply: true, blendFunction: BlendFunction.ADD });

// Instantiate EffectPass
const effectPass = new EffectPass(camera, noiseEffect, vignetteEffect, bloomEffect);
effectPass.renderToScreen = true;

// Add passes
composer.addPass(new RenderPass(scene, camera));
composer.addPass(effectPass);

return composer;
}, []);

useEffect(() => {
return () => { composer.dispose() }
}, [composer]);
useFrame((_state, delta) => {
composer.render(delta);
}, 1);
```
The usage of postprocessing increases FPS for detailed scenes is observed around 7%.
