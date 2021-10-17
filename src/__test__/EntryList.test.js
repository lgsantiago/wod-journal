import { render, screen, fireEvent } from '@testing-library/react';
import EntryList from '../components/EntryList';

const entries = [
	{
		movevement: 'Back Squat',
		reps: 5,
		weight: '200lbs'
	}
];

const multipleEntries = [
	{
		movevement: 'Back Squat',
		reps: 5,
		weight: '200lbs'
	},
	{
		movevement: 'Bench Press',
		reps: 10,
		weight: '135lbs'
	},
    {
		movevement: 'Bench Press',
		reps: 10,
		weight: '135lbs'
	}
];

it('renders Entry component', () => {
	render(<EntryList entries={entries} setEntries={jest.fn()} />);
	const removeButton = screen.getByText(/remove/i);
	expect(removeButton).toBeInTheDocument();
});

it('renders multiple entries', () => {
	render(<EntryList entries={multipleEntries} setEntries={jest.fn()} />);
	const buttons = screen.getAllByRole('button');
	expect(buttons.length).toBe(3);
});
