import './App.css';
import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const API_URL = 'https://jsonplaceholder.typicode.com/users'


const App = () => {

	const [searchField, setSearchField] = useState('');   // [value, setvalue]
	const [monster, setMonsters] = useState([]);   // [value, setvalue]
	const [filteredMonsters, setFilteredMonsters] = useState([monster]);   // [value, setvalue]
   console.log("rendered")
	useEffect(() => {
		console.log("render")
		fetch(API_URL)
			.then((response) => response.json())
			.then((users) => setMonsters(users)
			);
	}, []); // empty area says the only time to call this is the first time, nothing changes to trigger recall

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleUpperCase();
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		const newFilteredMonsters = monster.filter((monster) => {
			return monster.name.toLocaleUpperCase().includes(searchField);
		});
		setFilteredMonsters(newFilteredMonsters)
	}, [monster, searchField]);


	return (
		<div className="App">
			<h1 className='app-title'>Monster Rolodex</h1>
			<div className='search-div'>
				<SearchBox
					onSearchChangeHandler={onSearchChange}
					placeholder='search monsters'
					className='monsters-search-box' />
			</div>

			<CardList monsters={filteredMonsters} />

		</div>
	);

}
/*
class App extends Component {

	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: ''
		};
		console.log('constructor')
	}
	componentDidMount() {

		fetch(API_URL)
			.then((response) => response.json())
			.then((users) => this.setState(() => {
				return { monsters: users }
			}
			)
			);

	}

	onSearchChange = (event) => {
		console.log(event.target.value);
		const searchField = event.target.value.toLocaleUpperCase();

		this.setState(() => {
			return { searchField };
		});
	}



	render() {

		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleUpperCase().includes(searchField);
		});
		return (
			<div className="App">
				<h1 className='app-title'>Monster Rolodex</h1>
			<div className='search-div'>
				<SearchBox
					onSearchChangeHandler={onSearchChange}
					placeholder='search monsters'
					className='monsters-search-box' />
				</div>

				<CardList monsters={filteredMonsters} />
			</div>
		);

	}
}
*/
export default App;
