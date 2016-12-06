/**
 * @author felixturner / http://airtight.cc/
 *
 * Kaleidoscope Shader
 * Radial reflection around center point
 * Ported from: http://pixelshaders.com/editor/
 * by Toby Schachman / http://tobyschachman.com/
 *
 * sides: number of reflections
 * angle: initial angle in radians
 */

THREE.KaleidoShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"sides":    { type: "f", value: 6.0 },
		"angle":    { type: "f", value: 0.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float sides;",
		"uniform float angle;",
		
		"varying vec2 vUv;",

		"void main() {",
			"float tau = 2. * 3.1416 ;",

			"vec2 p = vUv - 0.5;",
			"float r = length(p) ;",
			"float a = atan(p.y, p.x);",
			"a = mod(a, tau/sides);",
			"a = abs(a - tau/sides/2.) ;",

			"vec2 t = vec2(angle + 0.2 + r * 0.6 , 0.2 + a/2.);",
			// "a = ;",
			// "p = r * vec2(cos(a), sin(a));",
			// "vec4 color = texture2D(tDiffuse, p  0.5);",
			"gl_FragColor = texture2D(tDiffuse, t);",

		"}"

	].join("\n")

};
