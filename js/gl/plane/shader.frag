
precision highp float;
varying vec2 vUv;

uniform sampler2D uTex;
uniform vec2 resolution;
uniform vec2 wResolution;
uniform float scrollY;

void main(void) {
      vec2 ratio = vec2(
      wResolution.x / resolution.x,
      wResolution.y / resolution.y
      
    );

   vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.0,
      vUv.y * ratio.y + (1.0 - ratio.y) * 1.0
    );


    vec2 _uv = fract(uv);

    vec4 colorWhite = vec4(1.0,1.0,1.0,1.0);
    // vec2 p = gl_FragCoord.xy /wResolution.xy;
    vec2 p = (gl_FragCoord.xy - wResolution) / min(wResolution.x, wResolution.y);


    // _uv.x *= vUv.x * (p.x - 1.0);

    vec4 colorTex = texture2D(uTex, _uv);

    float d = clamp(1.0 + 3.0 - distance(vec2(0.0),p),0.0,1.0);
    // float per = smoothstep(0.0,1.0,d);
    vec4 finalColor = mix(colorWhite,colorTex,d);


    

  gl_FragColor = finalColor;
}