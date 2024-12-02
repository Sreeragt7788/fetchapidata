import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Style.css';

const RickAndMortyFetcher = () => {
  
  const [dataType, setDataType] = useState('characters')
  const [items, setItems] = useState([])

  
  useEffect(() => {
    
    let endpoint = ''

    if (dataType === 'characters') {
      endpoint = 'https://rickandmortyapi.com/api/character'
    } else if (dataType === 'episodes') {
      endpoint = 'https://rickandmortyapi.com/api/episode'
    } else if (dataType === 'locations') {
      endpoint = 'https://rickandmortyapi.com/api/location'
    }

    
    axios.get(endpoint)
      .then(response => {
        
        setItems(response.data.results)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      });
  }, [dataType])

  return (
    <div className='article'>
      
      <select
        className='buttonselect'
        value={dataType}
        onChange={(e) => setDataType(e.target.value)}
      >
        <option value="characters">Characters</option>
        <option value="episodes">Episodes</option>
        <option value="locations">Locations</option>
      </select>

      
      <ul className='fetchlist'>
        {items.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyFetcher
