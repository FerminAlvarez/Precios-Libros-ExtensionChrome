# Precios Libros ExtensionChrome
## Vista previa
![Precios Libros Extensión Chrome - Screenshot](https://i.imgur.com/hFQHlS5.png)
## Idea
La idea de este proyecto surgió cuando estaba viendo precios de libros y cada vez que veía uno interesante quería ver en otras páginas que suelo consultar cuál era su precio y poder decidirme. Se me ocurrió que estaría bueno que simplemente copiando el ISBN del libro en cuestión pueda ver el precio que se encuentra en el resto de librerías.

## Instalación
- Clonar el repositorio `git clone https://github.com/FerminAlvarez/Precios-Libros-ExtensionChrome`
- Debemos ir a las extensiones del navegador.
- Activar el modo desarrollador.
- Cargar extensión descomprimida.
- Seleccionamos la carpeta base del proyecto.

## Uso
- En el listado de extensiones veremos una P, esa es nuestra extensión.
- Introducimos un ISBN.
- ¡Listo, ya estamos viendo el precio de ese libro en otras librerías!
- Podemos cliquear y nos llevará a la página en cuestión.

### Aclaraciones
La extensión consulta 4 servicios. Estos servicios son del repositorio https://github.com/FerminAlvarez/PreciosLibrosAPI.
En el caso de querer agregar un nuevo servicio se puede realizar agregando el enlace en js/services.js (debería respetar el mismo JSON de los otros servicios).

###### Espero que le sea de utilidad a alguien más, tanto dandole uso como viendo la implementación
