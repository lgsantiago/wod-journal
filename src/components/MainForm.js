import '../styles/MainForm.css';

const MainForm = ({ movement, weight, reps, onInputChange, onClear, isButtonEnabled, onSendClick }) => (
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
						onChange={onInputChange}
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
					<input id="weight" className="formInput" value={weight} onChange={onInputChange} />
				</div>
				<div>
					<label htmlFor="reps">Reps:</label>{' '}
					<input id="reps" className="formInput" value={reps} onChange={onInputChange} />
				</div>
			</div>

			<button
				className={isButtonEnabled ? 'recordEntry' : 'recordEntry noHover'}
				disabled={!isButtonEnabled}
				onClick={() => onSendClick({ movement: movement, weight: weight, reps: reps })}
			>
				Send
			</button>

			<button className="clearEntry" onClick={onClear}>
				Clear
			</button>
		</div>
	</div>
);

export default MainForm;
