import { Component } from "react";

class CardListComponent extends Component {
    render() {
        console.log("rendering component CardList")
        const { monsters } = this.props;
        return <div>
            {monsters.map(m => <h1 key={m.id}>{m.name}</h1>)}
        </div>
    }
}

export default CardListComponent