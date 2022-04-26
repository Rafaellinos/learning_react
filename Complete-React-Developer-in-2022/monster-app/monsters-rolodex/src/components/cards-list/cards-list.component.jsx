import { Component } from "react";
import './cards-list.styles.css';
import CardComponent from '../card/card.component';

class CardListComponent extends Component {
    render() {
        console.log("rendering component CardList")
        const { monsters } = this.props;
        return (<div className="card-list">
            {monsters.map(m => <CardComponent name={m.name} id={m.id} email={m.email}/>)}
        </div>)
    }
}

export default CardListComponent