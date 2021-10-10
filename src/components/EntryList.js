import '../styles/EntryList.css';

const EntryList = ({ entries, onRemoveClick }) => (
	<div className="entryListContainer">
		<div className="entryList">
			{entries.map((entry, id) => (
				<div className="entry" key={id}>
					<span>{`${entry.reps} ${entry.movement} at ${entry.weight}`}</span>{' '}
					<button className="removeButton" onClick={() => onRemoveClick(entry)}>
						Remove
					</button>
				</div>
			))}
		</div>
	</div>
);

export default EntryList;
