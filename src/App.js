import { useState } from 'react';
import './App.css';

function App() {
	const [ reps, setReps ] = useState('');
	const [ weight, setWeight ] = useState('');
	const [ movement, setMovement ] = useState('');
	const [ entries, setEntries ] = useState([]);

	const handleEntry = (newEntry) => {
		const newEntries = [ ...entries ];
		newEntries.push(newEntry);
		setEntries(newEntries);
	};

	const handleClear = () => {
		setMovement('');
		setReps('');
		setWeight('');
	};

	const handleInputChange = (event) => {
		switch (event.target.id) {
			case 'movement':
				setMovement(event.target.value);
				break;
			case 'weight':
				setWeight(event.target.value);
				break;
			case 'reps':
				setReps(event.target.value);
				break;
			default:
				throw new Error('Invalid form field');
		}
	};

	return (
		<div className="App">
			<h1>WOD Journal</h1>

			<div className="wodJournalContainer">
				<MainForm
					movement={movement}
					weight={weight}
					reps={reps}
					onInputChange={handleInputChange}
					onClear={handleClear}
				/>

				<button
					className="recordEntry"
					onClick={() => handleEntry({ movement: movement, weight: weight, reps: reps })}
				>
					Send
				</button>
			</div>

			<hr />
			<div className="entryListContainer">
				<EntryList entries={entries} />
			</div>
		</div>
	);
}

const MainForm = ({ movement, weight, reps, onInputChange, onClear }) => (
	<div className="wodFormContainer">
		<div>
			<label htmlFor="movement">Movement:</label>{' '}
			<input id="movement" className="formInput" value={movement} onChange={onInputChange} />
		</div>
		<div>
			<label htmlFor="weight">Weight:</label>{' '}
			<input id="weight" className="formInput" value={weight} onChange={onInputChange} />
		</div>
		<div>
			<label htmlFor="reps">Reps:</label>{' '}
			<input id="reps" className="formInput" value={reps} onChange={onInputChange} />
		</div>
		<button className="clearEntry" onClick={onClear}>
			Clear
		</button>
	</div>
);

const EntryList = ({ entries }) => (
	<div className="entryList">
		{entries.map((entry, id) => (
			<div className="entry" key={id}>
				<span>{`${entry.reps} ${entry.movement} at ${entry.weight}`}</span>
			</div>
		))}
	</div>
);

export default App;
