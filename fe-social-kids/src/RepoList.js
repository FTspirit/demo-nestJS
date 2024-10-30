import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RepoList.css';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [languageFilter, setLanguageFilter] = useState('all');

  useEffect(() => {
    const fetchRepos = async () => {
      const url =
        languageFilter === 'all'
          ? 'http://localhost:3000/repos'
          : `http://localhost:3000/repos/all?language=${languageFilter}`;

      try {
        const response = await axios.get(url);
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, [languageFilter]);

  const handleLanguageFilterChange = (e) => {
    setLanguageFilter(e.target.value);
  };

  return (
    <div className="repo-list">
      <h1>Repository List</h1>
      <select onChange={handleLanguageFilterChange} value={languageFilter}>
        <option value="all">All</option>
        <option value="TypeScript">TypeScript</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
      </select>
      <ul>
        {repos
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((repo) => (
            <li key={repo._id}>
              {' '}
              {/* Use _id as the unique key */}
              <h2>{repo.name}</h2>
              <p>Description: {repo.description || 'Not Provided'}</p>
              <p>Language: {repo.language || 'Not Found'}</p>
              <p>Forks: {repo.forks}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RepoList;
