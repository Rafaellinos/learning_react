import './card.styles.css';

const CardComponent = ({name, id, email}) => {
    return (
        <div className="card-container" key={`${name}-${id}`}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2 key={id}>{name}</h2>
            <p>{email || 'Email not found'}</p>
        </div>
    )
}

export default CardComponent