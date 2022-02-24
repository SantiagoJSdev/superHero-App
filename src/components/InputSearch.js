import { useForm } from "../hooks/useForm"

import '../styles/inputStyles.css'

export const InputSearch = () => {

    const [values, handleInputChange, reset] = useForm({
        name: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        reset()
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
                    value={values.name}
                    onChange={handleInputChange}
                ></input>

                <button className='search-btn' type='submit'></button>
            </form>

        </>
    )
}
