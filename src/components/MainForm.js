import { useEffect, useState } from 'react';
import '../styles/MainForm.css';

const MainForm = ({ entries, setEntries }) => {
	const [ reps, setReps ] = useState('');
	const [ weight, setWeight ] = useState('');
	const [ movement, setMovement ] = useState('');
	const [ isButtonEnabled, setIsButtonEnabled ] = useState(false);

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

	const handleEntry = (newEntry) => {
		newEntry.id = Math.random();
		const newEntries = [ ...entries ];
		newEntries.push(newEntry);
		setEntries(newEntries);
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

	return (
		<div className="wodJournalContainer">
			<div className="wodFormContainer">
				<div className="formInputs">
					<div>
						<label htmlFor="movement">Movement:</label>{' '}
						<input
							id="movement"
							className="formInput"
							list="movements"
							value={movement}
							onChange={handleInputChange}
						/>
						<datalist id="movements">
							<option value="Back Squat" />
							<option value="Bench Press" />
							<option value="Snatch" />
							<option value="Front Squat" />
							<option value="Deadlift" />
							<option value="Overhead Squat" />
						</datalist>
					</div>
					<div>
						<label htmlFor="weight">Weight:</label>{' '}
						<input
							id="weight"
							className="formInput"
							value={weight}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="reps">Reps:</label>{' '}
						<input
							id="reps"
							className="formInput"
							value={reps}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<button
					className={isButtonEnabled ? 'recordEntry' : 'recordEntry noHover'}
					disabled={!isButtonEnabled}
					onClick={() => {
						handleEntry({ movement: movement, weight: weight, reps: reps });
						handleClear();
					}}
				>
					Send
				</button>

				<button className="clearEntry" onClick={handleClear}>
					Clear
				</button>
			</div>
		</div>
	);
};

export default MainForm;
