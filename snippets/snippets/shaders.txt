Shaders Snippets




http://mrdoob.github.io/three.js/docs/#Reference/Materials/ShaderMaterial

https://www.airtightinteractive.com/2013/02/intro-to-pixel-shaders-in-three-js/


Vertex shader runs first. 
It receives attributes, calculates/manipulates the position of each individual vertex, 
and passes additional data (varyings) to the fragment shader.
Sets gl_Position, a 4D float vector, which is the final position of the vertex on screen. 

Fragment shader ( Pixel Shaders ) runs second. 
It sets the color of each individual "fragment" (pixel) rendered to the screen.
gl_FragColor variable, a 4D float vector, which is the final colour of our fragment


Shader Variables

When talking about variables there are three declarations you can make: Uniforms, Attributes and Varyings. 

* Uniforms are sent to both vertex shaders and fragment shaders and contain values that stay the same across the entire frame being rendered. 
A good example of this might be a light's position.

Vertex shader
attribute position: vec3, the vertex itself
attribute normal: vec3, the normal at the current vertex
attribute uv: vec2, the texture coord
uniform projectionMatrix: mat4, self explanatory
uniform modelMatrix: mat4, object-to-world matrix
uniform viewMatrix: mat4, world-to-camera matrix
uniform modelViewMatrix: mat4, same as viewMatrix*modelMatrix, or object-to-camera matrix

Fragment shader
uniform mat4 viewMatrix - camera.matrixWorldInverse
uniform vec3 cameraPosition - camera position in world space

https://github.com/mrdoob/three.js/wiki/Uniforms-types


* Attributes are values that are applied to individual vertices. 
Attributes are only available to the vertex shader. 
This could be something like each vertex having a distinct colour. Attributes have a one-to-one relationship with vertices.

* Varyings are variables declared in the vertex shader that we want to share with the fragment shader. 
To do this we make sure we declare a varying variable of the same type and name in both the vertex shader and the fragment shader. 
A classic use of this would be a vertex's normal since this can be used in the lighting calculations.

Fragment Shaders in Three.js

Three.js has an effects manager called EffectsComposer and many useful shaders built in. This code is not compiled into the main Three.js file, rather it is maintained separately in 2 folders in the three.js root folder:

/examples/js/postprocessing – contains the main EffectsComposer() class, and a number of ShaderPasses.
/examples/js/shaders – contains multiple individual shaders.

Cookbook Fragment Shaders
http://blog.2pha.com/experimenting-threejs-shaders-and-shadermaterial

http://patriciogonzalezvivo.com/2015/thebookofshaders/

http://pixelshaders.com/

To play with

http://www.html5rocks.com/en/tutorials/webgl/million_letters/
