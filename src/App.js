import { useEffect, useState } from 'react';
import MainForm from './components/MainForm';
import EntryList from './components/EntryList';
import './App.css';

function App() {
	const [ reps, setReps ] = useState('');
	const [ weight, setWeight ] = useState('');
	const [ movement, setMovement ] = useState('');
	const [ entries, setEntries ] = useState([]);
	const [ isButtonEnabled, setIsButtonEnabled ] = useState(false);

	const handleEntry = (newEntry) => {
		newEntry.id = Math.random();
		const newEntries = [ ...entries ];
		newEntries.push(newEntry);
		setEntries(newEntries);
		handleClear();
	};

	const handleClear = () => {
		setMovement('');
		setReps('');
		setWeight('');
	};

	useEffect(
		() => {
			const isEnabled = movement && weight && reps;
			setIsButtonEnabled(isEnabled);
		},
		[ movement, weight, reps ]
	);

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

	const handleRemove = (removedEntry) => {
		const newEntries = entries.filter((entry) => entry.id !== removedEntry.id);
		setEntries(newEntries);
	};

	let imageName = require('./images/header.jpg');

	return (
		<div className="App">
			<img src={imageName.default} alt="Man working out with ropes." />
			<h1 className="headerTitle">WOD Journal</h1>

			<MainForm
				movement={movement}
				weight={weight}
				reps={reps}
				onInputChange={handleInputChange}
				onClear={handleClear}
				isButtonEnabled={isButtonEnabled}
				onSendClick={handleEntry}
			/>

			<hr />

			<EntryList entries={entries} onRemoveClick={handleRemove} />
		</div>
	);
}

export default App;
