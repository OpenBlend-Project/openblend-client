import React from 'react'
import plusIcon from '../assets/icons/plus.svg'

import { useState, useEffect } from 'react'

// Services
import materialsService from '../../services/materials.service';
import formulasService from '../../services/formulas.service';

const MaterialsSearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);

  useEffect(() => {
    if (searchTerm.length) {
      console.log(searchTerm);
      materialsService.searchRawMaterial(searchTerm, true)
        .then(response => {
          const limitedData = response.data
          setAutocomplete(limitedData);
        })
    }
    else {
      setAutocomplete([]);
    }
  }, [searchTerm])

  const handleSubmit = (e) => {
    e.preventDefault();

    materialsService.searchRawMaterial(searchTerm, false)
      .then(response => {
        setSearchTerm("");
      })
  }

  const handleSelect = (materialId) => {
    console.log(materialId);
    materialsService.getRawMaterial(materialId)
      .then(response => {
        console.log(response.data);
        formulasService.updateFormula(props.formulaId, { $push: { ingredients: { materialId } } })
          .then(response => props.reloadFormula())
          .catch(error => console.log(error));
      })
    setAutocomplete([]);
    setSearchTerm("");
  }

  return (
    <form className='row mt-4 g-2' onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="position-relative">
          <input type="search" className="form-control form-control-lg shadow-sm border border-0" id="search" placeholder="Search material... " onChange={(e) => setSearchTerm(e.target.value)} />
          {autocomplete.length > 0 && (
            <ul className="list-group position-absolute w-100 mt-1 shadow-sm z-3">
              {autocomplete.map((item, index) => {
                if (index < 10) {
                  return (
                    <li key={item._id} className="list-group-item list-group-item-action" onClick={() => handleSelect(item._id)}>
                      <h6 className='mb-0'>{item.name.common} <span className="text-muted fst-italic fw-normal">{item.name.botanical && item.name.botanical}</span></h6>
                      <small>{item.identifier.cas}</small>
                    </li>
                  )
                }
              })}
            </ul>
          )}
        </div>
      </div>
    </form>
  )
}

export default MaterialsSearchBar