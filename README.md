
### Page ScreenPrincipal

1. Creo un componente para mi input principal el cual va tener la funcionalidad de buscar el superheroe por nombre llamado InputSearch.js, dentro utilizo mi useForm para obtener su valor, el mismo al hacer submit nos va redirigir a la pagina SearchScreen.js 

2. Realice otro componente dentro de la pagina principal llamado Cars.js, el cual muestra las tarjetas, con una paginacion para ir mostrandola de 4 heroes cada vez que se incremente o decremente, creo un estado para almacenar el valor de la pagina en la que me encuentro y asi poder recorrer mi arreglo de heroes donde tengo la data en redux 

3. El componente Cards.js, itera el arreglo para poder mostrar el detalle de su powerstats, mediante css se muestra una pequeña barra con el porcentaje o rango del valor.

4. Terminando la pagina SearchScreen.js, agregandole estilos, se agrego un componente BigCard.js para mostrar en una tarjeta los heroes o el heroe resultante de la busqueda.

5. Creo otro componente BtnReturn.js que es solo un boton reutilizable para redirigirme a la pagina principal

6. Finalizando la pagina DetailScreen.js la misma me muestra el detalle del heroe reutilizo el mismo componente BigCard.js, mediante las props y las condiciono para mostrar la imagen o la descripcion.

7. cree una pequena validacion para el input con una funcion en la carpeta selectors llamada validator, realice los detalles de la pagina searchScreen, valide el input

8. Tengo dos reducer uno para manejar los pequeños errores y otro reducer para almacenar la data de la api y los heroes que obtengo al filtrar la busqueda con su id, en este punto cree algunas acciones.

9. Realizando los filtros para que el usuario decida el orden en el que aparecerán las habilidades voy a crear una funcion en la carpeta selector llamada getPowerStrength.js que filtra y ordena por habilidad strength y  luego hago una accion para almacenar en mi estado el array ordenado y mostrar los datos.

10. realice todas las funciones desde la carpeta selector para filtrar y ordenar por sus habilidades, ademas filtro alfabeticamente, creo sus acciones para luego ser despachadas cuando el usuario lo requiera.

11. realice un componente llamado DropButton.js, el mismo va despacharla las acciones al hacer click en el los filtros

12. se crea otro componente DropButtonAppearance.js para empesar con los estilos de los botones que nos van a dar la opciones de filtrado.

13. hice otra ruta que seria la pagina AppearenceScreen.js para mostrar y realizar el detalle de los diferentes filtros de apariencia.

14. hice otro componente CardsAppearance.js para mostrar las cards de los elementos filtrados en la pagina AppearenceScreen.js