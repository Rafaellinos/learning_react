import { Component } from "react";
import './card.styles.css';

class CardComponent extends Component {
    render () {
        const {name, id, email} = this.props;
        return (
            <div className="card-container" key={`${name}-${id}`}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2 key={id}>{name}</h2>
                <p>{email || 'Email not found'}</p>
            </div>
        )
    }
}

export default CardComponent