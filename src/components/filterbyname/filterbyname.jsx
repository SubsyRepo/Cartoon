import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import '../character/character.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const FilterByName = () => {
  const [characters, setCharacters] = useState([]);
  const params = useParams();
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
    .then((res) => res.json())
    .then((json) => {
        setCharacters(json.results);
    });
}, []);

useEffect(() => {
  if (characters.length !== 0) {
    setFilteredCharacters(characters.filter((item) => item.name.includes(params.id)));
  }
}, [characters, params.id]);

const handleChange = (event) => {
window.location.replace(`/character/${event.target.value}`);
};

  return(
      <div>
          <Header />
          <div>
      <div className='container characters'>
          <select name="characters" id="characters" className='dropdown' onChange={handleChange}>
              <option value="">Filter By</option>
              <option value='Alive' className='select-option'>Alive</option>
              <option value='Dead' className='select-option'>Dead</option>
          </select>
              <div class="row row-cols-3 card-row">
                {filteredCharacters.map((item) => 
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
          <Footer />   
      </div>
  )
}

export default FilterByName;