import React, { useState, useEffect } from 'react';
import CreatePoll from './CreatePoll.js';
import PollView from './PollView.js';
// import './App.css'; 

function App() {
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState(null);
  const [view, setView] = useState('list'); // 'list', 'create', or 'view'
  const [selectedPoll, setSelectedPoll] = useState(null);

  const fetchPolls = () => {
    const backendUrl = 'http://localhost:8080/api/polls';
    fetch(backendUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPolls(data);
      })
      .catch(e => {
        console.error("Could not fetch polls: ", e);
        setError("Failed to load polls. Please ensure the backend server is running.");
      });
  };

  useEffect(() => {
    if (view === 'list') {
      fetchPolls();
    }
  }, [view]);

  const handlePollClick = (poll) => {
    setSelectedPoll(poll);
    setView('view');
  };

  const handlePollCreated = () => {
    setView('list'); // Go back to the list after a poll is created.
  };

  const handleVoteCast = () => {
    setView('list');
    setSelectedPoll(null);
  };

  return (
    <div className="App p-8">
      <header className="App-header flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">PollPulse</h1>
        <button
          onClick={() => setView(view === 'list' ? 'create' : 'list')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
        >
          {view === 'list' ? 'Create a New Poll' : 'View All Polls'}
        </button>
      </header>

      <main>
        {error && <div className="text-red-500 p-4 border border-red-400 rounded-md bg-red-50">{error}</div>}

        {view === 'list' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Polls</h2>
            <ul className="space-y-4">
              {polls.length > 0 ? (
                polls.map(poll => (
                  <li
                    key={poll.id}
                    onClick={() => handlePollClick(poll)}
                    className="bg-gray-100 p-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{poll.title}</h3>
                    <p className="text-sm text-gray-500">{poll.description}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No polls available. Create one using the backend API!</p>
              )}
            </ul>
          </div>
        )}

        {view === 'create' && <CreatePoll onCreate={handlePollCreated} />}

        {view === 'view' && selectedPoll && <PollView poll={selectedPoll} onVote={handleVoteCast} />}
      </main>
    </div>
  );
}

export default App;