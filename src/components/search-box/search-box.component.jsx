
import './search-box.styles.css';

const SearchBox =({ className, placeholder, onSearchChangeHandler }) => {

    return (

        <input
            className={` search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onSearchChangeHandler}
        />)

}

/*
class SearchBox extends Component {

    render() {


        return (

            <input
                className={` search-box ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onSearchChangeHandler}
            />)

    }

}
*/
export default SearchBox