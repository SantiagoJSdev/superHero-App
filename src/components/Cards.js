
import { useState } from 'react';
import '../styles/carsStyles.css'


export const Cards = ({heroes}) => {

    const [page, setpage] = useState(1);
    const maximo = (4);

    const increment =() => {
        setpage(page + 1)
      }
      const decrement =() => {
        setpage(page - 1)
      }
      if (page === 0) {
        setpage(1)
      }
     
    
    return (

        <div className="section-card">
            <div onClick={decrement} className='arrow-1'></div>
            <div onClick={increment} className='arrow-2'></div>
            <ul>
                {
                    (heroes.length > 4) ?
                    heroes?.slice((page - 1) * maximo, ((page - 1) * maximo) + maximo).map(ele => (
                        <li key={ele.id}>{ele.name}</li>
                    ))
                    : 
                    heroes?.map(ele => (
                        <li key={ele.id}>{ele.name}</li>
                    ))
                }
            </ul>

        </div>

    )
}
