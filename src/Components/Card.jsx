
export default function Card(props) {
    return (
        <div className="card">
            <div className="card__image-container">
                <img className="card__image" src={`/Photos/${props.img}`} title={props.title} alt={props.title} />
                {props.time == "past" && <div className="past-future-trip">Past Trip</div>}
                {props.time == "future" && <div className="past-future-trip">Future Trip</div>}
            </div>
            <div className="card__info-container">
                <div className="card__info-container__top">
                    <div class="wrapper">
                        <a href={props.googleMaps} target="_blank"><img className="location-icon" src="/Photos/location-icon.webp" alt="location icon" /></a>
                        <h2 class="location-title">{props.location}</h2>
                    </div>
                    <a href={props.googleMaps} target="_blank" className="google-map-anchor">View on Google Maps</a>
                </div>
                <h1 className="specific-place-title">{props.title}</h1>
                <h3 className="date-title">{props.date}</h3>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}