import '../styles/EntryList.css';

const EntryList = ({ entries, setEntries }) => {

	const handleRemove = (removedEntry) => {
		const newEntries = entries.filter((entry) => entry.id !== removedEntry.id);
		setEntries(newEntries);
	};
	
	return (
		<div className="entryListContainer">
			<div className="entryList">
				{entries.map((entry, id) => (
					<div className="entry" key={id}>
						<span>{`${entry.reps} ${entry.movement} at ${entry.weight}`}</span>{' '}
						<button className="removeButton" onClick={() => handleRemove(entry)}>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default EntryList;
