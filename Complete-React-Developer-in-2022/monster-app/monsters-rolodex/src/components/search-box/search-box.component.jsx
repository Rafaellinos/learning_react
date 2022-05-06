import './search-box.styles.css';

const SearchBoxComponent = (props) => {
    console.log("Renderizando search box component")
    return <input 
        className={`search-box ${props.className}`}
        type='search'
        placeholder={props.placeholder}
        onChange={props.onChangeHanlder}
    />
}

export default SearchBoxComponent