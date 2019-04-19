#version 460 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D texture_diffuse1;
uniform bool isBackgroundColor;
uniform vec3 backgroundColor;

void main()
{
	if (isBackgroundColor)
		FragColor = vec4(backgroundColor, 1.0);
	else
		FragColor = texture(texture_diffuse1, TexCoords);
}