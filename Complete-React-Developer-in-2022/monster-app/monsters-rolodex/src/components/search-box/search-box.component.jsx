import './search-box.styles.css';

const SearchBoxComponent = ({className, placeholder, onChangeHanlder}) => {
    console.log("Renderizando search box component")
    return <input 
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHanlder}
    />
}

export default SearchBoxComponent