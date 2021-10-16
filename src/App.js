import { useState } from 'react';
import MainForm from './components/MainForm';
import EntryList from './components/EntryList';
import './App.css';

function App() {
	const [ entries, setEntries ] = useState([]);

	return (
		<div className="App">
			<header className="header" />
			<h1 className="headerTitle">WOD Journal</h1>

			<MainForm entries={entries} setEntries={setEntries} />

			{entries.length > 0 && <EntryList entries={entries} setEntries={setEntries} />}
		</div>
	);
}

export default App;
