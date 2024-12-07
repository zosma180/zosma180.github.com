uniform float radius;
uniform float variation;
uniform vec2 sectors[SECTORS_LENGTH];
uniform float time;

void main() {
  // Calculate o: the oscillation (0-1-0)
  float o = abs(sin(time));

  // Calculate alpha: the shader transparency
  float alpha = 0.1 + (0.1 * o);

  // Return the result color
  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
}
