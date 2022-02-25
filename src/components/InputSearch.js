import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm"

import '../styles/inputStyles.css'

export const InputSearch = ({ className }) => {

    const navigate = useNavigate();
    const [{ name }, handleInputChange, reset, error] = useForm({
        name: ''
    });
   
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Object.keys(error).length && name.length !== 0) {
            reset()
            navigate(`/search?q=${name}`)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    className={`search-input ${className}`}
                    type='text'
                    name='name'
                    autoComplete='off'
                    placeholder='SEARCH'
                    value={name}
                    onChange={handleInputChange}
                ></input>
                <div className={(!Object.keys(error).length) ? 'createValidation' : 'createValidation active'}>{error.name}</div>

                <button className={`search-btn ${className}`} type='submit'></button>
            </form>

        </>
    )
}
