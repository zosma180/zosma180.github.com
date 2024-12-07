uniform float radius;
uniform float variation;
uniform vec2 sectors[SECTORS_LENGTH];
uniform float time;

// Define the PI constant
float PI = radians(180.0);

void main() {
  // Clone the position: the vec3 vertex position (xyz) with values in the range [- radius, + radius]
  vec3 result = vec3(position);

  // Calculate theta: the angular section in radians
  float theta = radians(360.0) / float(SECTORS_LENGTH);

  // Calculate alpha: the conversion of the current vertex in the relative angle
  float alpha = atan(result.y, result.x);
  if (alpha < 0.0) { alpha += radians(360.0); }

  // Calculate k: the current offset (0-0.9p) in the theta angle
  float k = fract(alpha / theta);

  // Calculate sector: the sector data of the vertex
  vec2 sector = sectors[int(alpha / theta)];

  // Calculate start: the starting point of the vertex
  float start = radius * (variation * sector.x) * sin(PI * k);

  // Calculate o: the oscillation (0, 1, 0, -1) multiplied for direction (1, -1)
  float oscillation = sin(time) * sector.y;

  // Calculate x and y
  result.x += start * oscillation * cos(alpha);
  result.y += start * oscillation * sin(alpha);

  // Return the projected position
  gl_Position = projectionMatrix * modelViewMatrix * vec4(result, 1.0);
}
