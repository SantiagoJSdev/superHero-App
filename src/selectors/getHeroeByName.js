





export const getHeroeByName = (data, name) => {


    let error = {}
    if ( name === '' || !data) {
       
        return error.name = 'Nombre no encontrado';
    }

    name = name.toLocaleLowerCase();
    let resul =  data.filter( hero => hero.name.toLocaleLowerCase().includes( name )  );

   if  (resul.length === 0){
   return error.name = 'Nombre no encontrado'
   } else {
    return resul
   }
    
    
    
  
}
