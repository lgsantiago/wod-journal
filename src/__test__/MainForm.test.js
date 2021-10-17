import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainForm from '../components/MainForm';

const addInputValues = () => {
	const movementInput = screen.getByLabelText(/Movement/i);
	const repsInput = screen.getByLabelText(/Reps/i);
	const weightInput = screen.getByLabelText(/Weight/i);

	fireEvent.change(movementInput, { target: { value: 'test' } });
	fireEvent.change(repsInput, { target: { value: 'test' } });
	fireEvent.change(weightInput, { target: { value: 'test' } });
};

it('renders Main Form component', () => {
	render(<MainForm />);
	const movementInput = screen.getByLabelText('Movement:');
	const sendButton = screen.getAllByRole('button');

	expect(movementInput).toBeInTheDocument();
	expect(sendButton.length).toBe(2);
});

it('finds buttons and their initial state', () => {
	render(<MainForm />);
	const sendButton = screen.getByText(/send/i);
	const clearButton = screen.getByText(/clear/i);

	expect(sendButton).toBeDisabled();
	expect(clearButton).toBeEnabled();
});

it('finds disabled Send button', () => {
	render(<MainForm />);

	const sendButton = screen.getByText(/send/i);
	expect(sendButton).toBeDisabled();
});

it('finds enabled Send button', () => {
	render(<MainForm />);
	const sendButton = screen.getByText(/send/i);

	addInputValues();

	expect(sendButton).toBeEnabled();
});

it('should clear input values after send click', () => {
	render(<MainForm entries={[]} setEntries={jest.fn()} />);

	const sendButton = screen.getByText(/send/i);
	const movementInput = screen.getByLabelText(/Movement/i);
	const repsInput = screen.getByLabelText(/Reps/i);
	const weightInput = screen.getByLabelText(/Weight/i);

	addInputValues();

	fireEvent.click(sendButton);
	expect(weightInput.value).toBe('');
	expect(repsInput.value).toBe('');
	expect(movementInput.value).toBe('');
});


it('should clear input values', () => {
	render(<MainForm onSendClick={jest.fn()} />);

	const clearButton = screen.getByText(/clear/i);
	const movementInput = screen.getByLabelText(/Movement/i);
	const repsInput = screen.getByLabelText(/Reps/i);
	const weightInput = screen.getByLabelText(/Weight/i);

	addInputValues();
	
	fireEvent.click(clearButton);

	expect(weightInput.value).toBe('');
	expect(repsInput.value).toBe('');
	expect(movementInput.value).toBe('');
});
