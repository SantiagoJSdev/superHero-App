
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/carsStyles.css'


export const Cards = ({ heroes }) => {

    const [page, setpage] = useState(1);
    const maximo = (4);

    const increment = () => {
        setpage(page + 1)
    }
    const decrement = () => {
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
                        heroes?.slice((page - 1) * maximo, ((page - 1) * maximo) + maximo).map((ele, i) => (
                            <li key={ele.id}>
                                <Link to={`/detail/${ele.id}`}>
                                    <h2>{ele.name}</h2>
                                    <img src={ele.images.sm} alt={ele.name} />

                                    <div className='powerStars'>
                                        
                                        {
                                             
                                            Object.entries(ele.powerstats).map((power, i) => (
                                                
                                                <div key={Math.random() * i} className='div-interno'>
                                                    <p>{(power[0].charAt(0).toUpperCase() + power[0].slice(1))}</p>
                                                    <div className='barra'>
                                                        <div className='relleno' style={{ width: `${((Object.values(power)[1]) + '')}%` }}></div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>



                                </Link>
                            </li>
                        ))
                        :
                        heroes?.map(ele => (
                            <li key={ele.id}>
                                <Link to={`/detail/${ele.id}`}>
                                    <h2>{ele.name}</h2>
                                    <img src={ele.images.sm} alt={ele.name} />
                                    <div className='barra'></div>
                                </Link>
                            </li>
                        ))
                }
            </ul>

        </div>

    )
}
