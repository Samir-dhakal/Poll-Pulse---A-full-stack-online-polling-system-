import React, { useState } from 'react';

// This is the CreatePoll component.
function CreatePoll() {
    // We'll use state to manage the form's input values.
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [options, setOptions] = useState([
        { text: '' },
        { text: '' },
    ]);
    const [statusMessage, setStatusMessage] = useState('');

    // This function handles changes in the input fields.
    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index].text = event.target.value;
        setOptions(newOptions);
    };

    // This function adds a new empty option input field.
    const handleAddOption = () => {
        setOptions([...options, { text: '' }]);
    };

    // This function handles the form submission.
    const handleSubmit = (event) => {
        event.preventDefault();
        setStatusMessage('Creating poll...');

        // The data we'll send to the backend.
        const pollData = {
            title,
            description,
            status: 'ACTIVE',
            options: options.filter(opt => opt.text.trim() !== ''),
        };

        // The URL of your backend API's POST endpoint.
        const backendUrl = 'http://localhost:8080/api/polls';

        fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pollData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Clear the form and show a success message.
                setTitle('');
                setDescription('');
                setOptions([{ text: '' }, { text: '' }]);
                setStatusMessage(`Poll created successfully! ID: ${data.id}`);
                console.log('Success:', data);
            })
            .catch((error) => {
                setStatusMessage('Error creating poll. Please try again.');
                console.error('Error:', error);
            });
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a New Poll</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Poll Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="e.g., What's your favorite programming language?"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        placeholder="Optional short description for the poll."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Options
                    </label>
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder={`Option ${index + 1}`}
                                value={option.text}
                                onChange={(e) => handleOptionChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddOption}
                        className="mt-2 text-blue-500 text-sm font-semibold hover:text-blue-700 transition-colors"
                    >
                        + Add another option
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                        type="submit"
                    >
                        Create Poll
                    </button>
                </div>
            </form>
            {statusMessage && (
                <div className="mt-4 p-4 rounded-md text-sm text-gray-800 bg-gray-100">
                    {statusMessage}
                </div>
            )}
        </div>
    );
}

export default CreatePoll;
