import '../styles/bigCardStyles.css'

export const BigCard = ({name, img, released}) => {

    return (


        <div   className="contain-principal">
            <div className="contain card">
                <div className="card__face card__face--front">
                    <h1>{name}</h1>
                    <div className="contain-img">
                        <img src={img} alt={name} />
                    </div>
                    <div className="footer">{released}</div>
                </div>
                <div className="card__face card__face--back ">back</div>

            </div>

        </div>

    )
}
