import React, { useEffect, useState } from 'react';
import './character.css';

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character?page=1")
        .then((res) => res.json())
        .then((json) => {
            setCharacters(json.results);
        });
    }, []);

    const handleChange = (event) => {
      window.location.replace(`/character/${event.target.value}`);
    };

    return(
      <div>
        <div className='container characters'>
            <select name="characters" id="characters" className='dropdown' onChange={handleChange}>
                <option value="">Filter By</option>
                <option value='Alive' className='select-option'>Alive</option>
                <option value='Dead' className='select-option'>Dead</option>
            </select>
                <div class="row row-cols-3 card-row">
                  {characters.map((item) => 
                  <div class="col d-flex cards">
                    <img src={item.image} alt='' width="250px" height="300px" className='image'/>
                      <div className='details'>
                        <span key={item.id} className='title'>{item.name}</span>
                        <span>{item.status} - {item.species}</span>
                      <div className='location-details'>
                        <span className='sub-title'>Last known location</span>
                        <span>{item.location.name}</span>
                       </div>
                       <div className='location-details'>
                         <span className="sub-title">First seen in</span>
                         <span> {item.origin.name}</span>
                       </div>
                     </div>
                  </div>
                  )}
                </div>
              </div>              
            </div>
    )
}

export default Character;