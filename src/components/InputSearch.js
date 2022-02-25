import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"

import '../styles/inputStyles.css'

export const InputSearch = () => {

    const navigate = useNavigate();
    const [{ name }, handleInputChange, reset] = useForm({
        name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
     
        reset()
        navigate(`/search?q=${name}`)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    className='search-input'
                    type='text'
                    name='name'
                    autoComplete='off'
                    placeholder='SEARCH'
                    value={name}
                    onChange={handleInputChange}
                ></input>

                <button className='search-btn' type='submit'></button>
            </form>

        </>
    )
}
