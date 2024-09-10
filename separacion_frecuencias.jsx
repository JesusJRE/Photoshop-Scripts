// Script básico para Separación de Frecuencias en Photoshop

// Selección de la capa activa
var doc = app.activeDocument;
var originalLayer = doc.activeLayer;

// Duplicar capa para texturas
var textureLayer = originalLayer.duplicate();
textureLayer.name = "Textura";

// Duplicar capa para tonos
var toneLayer = originalLayer.duplicate();
toneLayer.name = "Tonos";

// Aplicar desenfoque gaussiano a la capa de tonos
doc.activeLayer = toneLayer;
var blurRadius = 3; // Ajusta este valor según tus necesidades
doc.activeLayer.applyGaussianBlur(blurRadius);

// Aplicar filtro de paso alto a la capa de texturas
doc.activeLayer = textureLayer;
var highPassRadius = 3; // Ajusta este valor según tus necesidades
textureLayer.applyHighPass(highPassRadius);

// Cambiar el modo de fusión de la capa de texturas a Luz Lineal
textureLayer.blendMode = BlendMode.LINEARLIGHT;

// Agrupar las capas
var group = doc.layerSets.add();
group.name = "Separación de Frecuencias";
textureLayer.move(group, ElementPlacement.INSIDE);
toneLayer.move(group, ElementPlacement.INSIDE);
