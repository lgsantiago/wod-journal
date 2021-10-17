import { useState } from 'react';
import MainForm from './MainForm';
import EntryList from './EntryList';
import '../styles/Journal.css';

const Journal = () => {
	const [ entries, setEntries ] = useState([]);

	return (
		<div className="journalContainer">
			<header className="header" />
			<h1 className="headerTitle">WOD Journal</h1>

			<MainForm entries={entries} setEntries={setEntries} />

			{entries.length > 0 && <EntryList entries={entries} setEntries={setEntries} />}
		</div>
	);
};

export default Journal;
