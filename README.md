# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Page ScreenPrincipal

1. Creo un componente para mi input principal el cual va tener la funcionalidad de buscar el superheroe por nombre llamado InputSearch.js, dentro utilizo mi useForm para obtener su valor, el mismo al hacer submit nos va redirigir a la pagina SearchScreen.js 

2. Realice otro componente dentro de la pagina principal llamado Cars.js, el cual muestra las tarjetas, con una paginacion para ir mostrandola de 4 heroes cada vez que se incremente o decremente, creo un estado para almacenar el valor de la pagina en la que me encuentro y asi poder recorrer mi arreglo de heroes donde tengo la data en redux 

3. El componente Cards.js, itera el arreglo para poder mostrar el detalle de su powerstats, mediante css se muestra una pequeña barra con el porcentaje o rango del valor.

4. Terminando la pagina SearchScreen.js, agregandole estilos, se agrego un componente BigCard.js para mostrar en una tarjeta los heroes o el heroe resultante de la busqueda.

5. Creo otro componente BtnReturn.js que es solo un boton reutilizable para redirigirme a la pagina principal

6. Finalizando la pagina DetailScreen.js la misma me muestra el detalle del heroe reutilizo el mismo componente BigCard.js, mediante las props y las condiciono para mostrar la imagen o la descripcion.