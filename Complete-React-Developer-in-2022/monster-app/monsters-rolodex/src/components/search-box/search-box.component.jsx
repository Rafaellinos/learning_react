import { Component } from "react";

import './search-box.styles.css';
class SearchBoxComponent extends Component {
    render () {
        console.log("Renderizando search box component")
        return <input 
            className={`search-box ${this.props.className}`}
            type='search'
            placeholder={this.props.placeholder}
            onChange={this.props.onChangeHanlder}
        />
    }
}

export default SearchBoxComponent