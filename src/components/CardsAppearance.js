import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cardsAppearanceStyles.css'

export const CardsAppearance = ({ dataAppearance }) => {


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



    return <>


        {


            (dataAppearance.length > 4)

                ?

                dataAppearance?.slice((page - 1) * maximo, ((page - 1) * maximo) + maximo).map((ele, i) => (
                    <div key={ele.id}>
                        <div onClick={decrement} className='arrow-1'></div>
                        <div onClick={increment} className='arrow-2'></div>
                        <Link to={`/detail/${ele.id}`} >
                            <div className='card-Appearance' >

                                <h2>{ele.name}</h2>
                                <img src={ele.images.sm} alt={ele.name} />

                            </div>
                        </Link>
                    </div>
                ))
                :
                dataAppearance.map(ele => (
                    <Link key={ele.id} to={`/detail/${ele.id}`} >
                        <div className='card-Appearance' >

                            <h2>{ele.name}</h2>
                            <img src={ele.images.sm} alt={ele.name} />

                        </div>
                    </Link>
                ))

        }

    </>
}
