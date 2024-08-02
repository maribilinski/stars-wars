import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resource}/${id}/`);
      setData(response.data);
      setError('');
    } catch (error) {
      setData(null);
      setError('Estos no son los droides que está buscando');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Star Wars Search</h1>
      <div>
        <label>
          Search for:
          <select value={resource} onChange={(e) => setResource(e.target.value)}>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
        </label>
        <input
          type="number"
          placeholder="Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>{data.name || data.title}</h2>
          {resource === 'people' && (
            <ul>
              <li>Height: {data.height}</li>
              <li>Hair Color: {data.hair_color}</li>
              <li>Birth Year: {data.birth_year}</li>
              <li>Homeworld: {data.homeworld}</li>
            </ul>
          )}
          {resource === 'films' && (
            <ul>
              <li>Director: {data.director}</li>
              <li>Producer: {data.producer}</li>
              <li>Release Date: {data.release_date}</li>
              <li>Opening Crawl: {data.opening_crawl}</li>
            </ul>
          )}
          {resource === 'starships' && (
            <ul>
              <li>Model: {data.model}</li>
              <li>Manufacturer: {data.manufacturer}</li>
              <li>Cost in Credits: {data.cost_in_credits}</li>
              <li>Length: {data.length}</li>
            </ul>
          )}
          {resource === 'vehicles' && (
            <ul>
              <li>Model: {data.model}</li>
              <li>Manufacturer: {data.manufacturer}</li>
              <li>Cost in Credits: {data.cost_in_credits}</li>
              <li>Length: {data.length}</li>
            </ul>
          )}
          {resource === 'species' && (
            <ul>
              <li>Classification: {data.classification}</li>
              <li>Designation: {data.designation}</li>
              <li>Average Height: {data.average_height}</li>
              <li>Skin Colors: {data.skin_colors}</li>
            </ul>
          )}
          {resource === 'planets' && (
            <ul>
              <li>Climate: {data.climate}</li>
              <li>Diameter: {data.diameter}</li>
              <li>Gravity: {data.gravity}</li>
              <li>Population: {data.population}</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
