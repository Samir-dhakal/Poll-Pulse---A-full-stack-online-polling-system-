import React, { useState, useEffect } from 'react';

function PollView({ poll, onVote }) {
    const [selectedOptionId, setSelectedOptionId] = useState(null);
    const [voteStatus, setVoteStatus] = useState('');

    const handleVote = () => {
        if (!selectedOptionId) {
            setVoteStatus("Please select an option to vote.");
            return;
        }

        setVoteStatus("Casting your vote...");

        const backendUrl = `http://localhost:8080/api/polls/${poll.id}/vote/${selectedOptionId}`;

        fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setVoteStatus("Vote cast successfully!");
                console.log('Vote Success:', data);
                onVote(); // This will tell the parent component to refresh the poll list.
            })
            .catch((error) => {
                setVoteStatus('Error casting vote. Please try again.');
                console.error('Vote Error:', error);
            });
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{poll.title}</h2>
            <p className="text-gray-600 mb-6">{poll.description}</p>

            <div className="space-y-4">
                {poll.options.map(option => (
                    <div
                        key={option.id}
                        onClick={() => setSelectedOptionId(option.id)}
                        className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedOptionId === option.id ? 'bg-blue-200 border-blue-500' : 'bg-gray-100 hover:bg-gray-200'}`}
                    >
                        <span className="text-lg font-medium text-gray-900">{option.text}</span>
                        <span className="text-sm text-gray-500 ml-4">({option.voteCount} votes)</span>
                    </div>
                ))}
            </div>

            <button
                onClick={handleVote}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
            >
                Vote
            </button>

            {voteStatus && (
                <div className="mt-4 p-4 rounded-md text-sm text-gray-800 bg-gray-100">
                    {voteStatus}
                </div>
            )}
        </div>
    );
}

export default PollView;
