
1. Creo un componente para mi input principal el cual va tener la funcionalidad de buscar el superhéroe por nombre llamado InputSearch.js, dentro utilizo mi useForm para obtener su valor, el mismo al hacer submit nos va redirigir a la página SearchScreen.js 

2. Realice otro componente dentro de la página principal llamado Cars.js, el cual muestra las tarjetas, con una paginación para ir mostrándola de 4 héroes cada vez que se incremente o decremente, creo un estado para almacenar el valor de la página en la que me encuentro y así poder recorrer mi arreglo de héroes donde tengo la data en redux 

3. El componente Cards.js, itera el arreglo para poder mostrar el detalle de su powerstats, mediante css se muestra una pequeña barra con el porcentaje o rango del valor.

4. Terminando la página SearchScreen.js, agregándole estilos, se agregó un componente BigCard.js para mostrar en una tarjeta los héroes o el héroe resultante de la búsqueda.

5. Creo otro componente BtnReturn.js que es solo un botón reutilizable para redirigirme a la página principal

6. Finalizando la página DetailScreen.js la misma me muestra el detalle del héroe reutilizo el mismo componente BigCard.js, mediante las props y las condiciono para mostrar la imagen o la descripción.

7. Diseñe una pequeña validación para el input con una función en la carpeta selectors llamada validador, realice los detalles de la página searchScreen, valide el input

8. Tengo dos reducer uno para manejar los pequeños errores y otro reducer para almacenar la data de la api y los héroes que obtengo al filtrar la búsqueda con su id, en este punto cree algunas acciones.

9. Realizando los filtros para que el usuario decida el orden en el que aparecerán las habilidades voy a crear una función en la carpeta selector llamada getPowerStrength.js que filtra y ordena por habilidad strength y  luego hago una acción para almacenar en mi estado el array ordenado y mostrar los datos.

10. Todas las funciones desde la carpeta selector para filtrar y ordenar por sus habilidades, además filtro alfabéticamente, creo sus acciones para luego ser despachadas cuando el usuario lo requiera.

11. Realice un componente llamado DropButton.js, el mismo va despacharla las acciones al hacer click en el los filtros

12. Se crea otro componente DropButtonAppearance.js para empezar con los estilos de los botones que nos van a dar la opciones de filtrado.

13. Hice otra ruta que sería la página AppearenceScreen.js para mostrar y realizar el detalle de los diferentes filtros de apariencia.

14. Cree otro componente CardsAppearance.js para mostrar las cards de los elementos filtrados en la página AppearenceScreen.js
