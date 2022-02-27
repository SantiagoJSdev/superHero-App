import '../styles/bigCardStyles.css'

export const BigCard = ({ name, img, publisher, description = '', work, appearance }) => {

    return (

        <div className="contain-principal">
            <div className="contain card">
                <div className="card__face card__face--front">
                    {
                        (!description) ?
                            <h1>{name}</h1>
                            :
                            <h1>{description.fullName}</h1>
                    }

                    <div className="contain-img">
                        {
                            (!description) ?
                                <img src={img} alt={name} />
                                :
                                <div className='contain-description'>

                                    <h4>Ocupacion: {work.occupation}</h4>
                                    <h4>Primera Pelicula: {description.firstAppearance}</h4>
                                    <h4>Gender: {appearance.gender}</h4>
                                    <h4>Race: {appearance.race}</h4>
                                    <h4>Eye Color: {appearance.eyeColor}</h4>
                                    <h4>Hair Color: {appearance.hairColor}</h4>
                                </div>
                        }

                    </div>
                    {(!description) ?
                    <div className="footer">{publisher}</div>
                    :
                    <div className="footer">{description.placeOfBirth}</div>}
                </div>
                <div className="card__face card__face--back ">back</div>

            </div>

        </div>

    )
}
