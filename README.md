<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## SPA (Single Pague Application) construida con:

- Front-End: React - Redux, CSS, HTML.
- Back-End: NodeJS, ExpressJS y Sequelize.
- Base de datos: PostgreSQL.


Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

El contenido de `client` fue creado usando: Create React App.

## Descripción

La SPA se creo con el fin de que se pueda ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella poder, entre otras cosas:

  - Buscar paises
  - Filtrarlos / Ordenarlos
  - Crear actividades turísticas

Se desarrolló una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Index__:
- [ ] Botón para ingresar al home y dar comienzo a la SPA

__Home__:
- [ ] Posibilidad de buscar países por nombre
- [ ] Área del listado de países.
- [ ] Posibilidad de filtrar y ordenar los países por continente, tipo de actividad turística,
      ordenar por nombres tanto ascendentemente como descendentemente y por cantidad de población
- [ ] Paginado para ir buscando y mostrando los siguientes paises

__Ruta de detalle de país__: 
- [ ] Imagen de la bandera 
- [ ] Nombre
- [ ] Continente
- [ ] Código de país de 3 letras (id)
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrada en km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__:
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultaneo
- [ ] Posibilidad de crear una nueva actividad turística y de redireccionamiento al Home

