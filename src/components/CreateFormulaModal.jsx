import React from 'react'
import { useState, useContext } from 'react';

// Contexts
import { AuthContext } from '../../context/auth.context';

// Services
import formulasService from '../../services/formulas.service';
import collectionsService from '../../services/collections.service';

const CreateFormulaModal = ({ collection }) => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [type, setType] = useState("");
  const [stage, setStage] = useState("");
  const [description, setDescription] = useState("");
  const [olfactiveFamily, setOlfactiveFamily] = useState("");
  const [concentration, setConcentration] = useState("");

  const { user } = useContext(AuthContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  }

  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
    console.log(tagline);
  }

  const handleTypeChange = (e) => {
    setType(e.target.value);
    console.log(type);
  }

  const handleStageChange = (e) => {
    setStage(e.target.value);
    console.log(stage);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(description);
  }

  const handleOlfactiveFamilyChange = (e) => {
    setOlfactiveFamily(e.target.value);
    console.log(olfactiveFamily);
  }

  const handleConcentrationChange = (e) => {
    setConcentration(e.target.value / 100);
    console.log(concentration);
  }

  const handleSubmit = (e) => { 
    const requestBody = {
      name,
      version: "0.0.1",
      isPrivate: false,
      type,
      creator: user._id,
      stage,
      tagline,
      description,
      olfactiveFamily,
      concentration,
      ingredients: [],
      likedBy: []
    }
    console.log(requestBody);

    formulasService.createFormula(requestBody)
      .then(newFormula => {
        console.log(newFormula);

        if (collection) {
          collectionsService.updateCollection(collection, { $push: { formulas: newFormula.data._id} } )
            .then(response => console.log(response))
            .catch(error => console.log(error));
        }
      })
      .catch(error => console.log(error));

  }

  return (
    <div className="modal fade" id="createFormulaModal" tabIndex="-1" aria-labelledby="createFormulaModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="createFormulaTitle" style={{ letterSpacing: "1.01px" }}>Create a new formula</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <label htmlFor="formulaName" className="form-label">Name</label>
              <input type="text" className="form-control" id="formulaName" placeholder="My formula" onChange={handleNameChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaTagline" className="form-label">Tagline (optional)</label>
              <input type="text" className="form-control" id="formulaTagline" placeholder="A new formula" onChange={handleTaglineChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaType" className="form-label">Type</label>
              <select className="form-select" aria-label="formula type select" onChange={handleTypeChange}>
                <option>Select a formula type</option>
                <option value="Accord">Accord</option>
                <option value="Base">Base</option>
                <option defaultValue value="Fragrance">Fragrance</option>
                <option value="Modifier">Modifier</option>
                <option value="Solvent">Solvent</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaStage" className="form-label">Stage</label>
              <select className="form-select" aria-label="formula stage select" onChange={handleStageChange}>
                <option>Select a formula stage</option>
                <option value="Ideation">Ideation</option>
                <option defaultValue value="Formulation">Formulation</option>
                <option value="Refinement">Refinement</option>
                <option value="Production">Production</option>
                <option value="Packaging">Packaging</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaDescription" className="form-label">Description (optional)</label>
              <textarea className="form-control" id="formulaDescription" rows="3" onChange={handleDescriptionChange}></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaOlfactiveFamily" className="form-label">Olfactive Family</label>
              <select className="form-select" aria-label="formula olfactive family select" onChange={handleOlfactiveFamilyChange}>
                <option>Select an olfactive family</option>
                <option defaultValue value="Aquatic">Aquatic</option>
                <option value="Aromatic">Aromatic</option>
                <option value="Chypre">Chypre</option>
                <option value="Citrus">Citrus</option>
                <option value="Floral">Floral</option>
                <option value="Fougère">Fougère</option>
                <option value="Gourmand">Gourmand</option>
                <option value="Leather">Leather</option>
                <option value="Oriental">Oriental</option>
                <option value="Woody">Woody</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="formulaConcentration" className="form-label">Concentration</label>
              <div className="input-group">
                <input type="number" className="form-control" aria-label="Concentration in percent" onChange={handleConcentrationChange}/>
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Create Formula</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateFormulaModal