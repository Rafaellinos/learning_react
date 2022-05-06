import './cards-list.styles.css';
import CardComponent from '../card/card.component';

// destructuring on parameters below
const CardListComponent = ({ monsters }) =>  {
    console.log("rendering component CardList")
    return (<div className="card-list">
        {monsters.map(m => <CardComponent name={m.name} id={m.id} email={m.email}/>)}
    </div>)
}

export default CardListComponent