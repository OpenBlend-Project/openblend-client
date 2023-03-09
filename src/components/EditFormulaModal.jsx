import React from 'react'
import { useState, useContext, useEffect } from 'react';

// Contexts
import { AuthContext } from '../../context/auth.context';

// Services
import formulasService from '../../services/formulas.service';

const EditFormulaModel = ({ data }) => {
  const [name, setName] = useState(data.name)
  const [version, setVersion] = useState(data.version);
  const [tagline, setTagline] = useState(data.tagline);
  const [type, setType] = useState(data.type);
  const [stage, setStage] = useState(data.stage);
  const [description, setDescription] = useState(data.description);
  const [olfactiveFamily, setOlfactiveFamily] = useState(data.olfactiveFamily);
  const [concentration, setConcentration] = useState(data.concentration);

  const { user } = useContext(AuthContext);

  useEffect (() => {
    resetFields()
  }, [data]);

  const resetFields = () => {
    setName(data.name);
    setVersion(data.version)
    setTagline(data.tagline)
    setType(data.type)
    setStage(data.stage)
    setDescription(data.description)
    setOlfactiveFamily(data.olfactiveFamily)
    setConcentration(data.concentration)
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  }

  const handleVersionChange = (e) => {
    setVersion(e.target.value);
    console.log(version);
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
      version,
      type,
      stage,
      tagline,
      description,
      olfactiveFamily,
      concentration,
    }
    console.log(requestBody);

    formulasService.updateFormula(data._id, requestBody)
      .then(response => console.log('%c Formula Updated', 'background: #222; color: #bada55'))
      .catch(error => console.log(error));
  }

  return (
    <div className="modal fade" id="editFormulaModal" tabIndex="-1" aria-labelledby="editFormulaModal" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editFormulaTitle" style={{ letterSpacing: "1.01px" }}>Edit <span className="text-muted">{data.name}</span></h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <label htmlFor="formulaName" className="form-label">Name</label>
              <input type="text" className="form-control" id="formulaName" placeholder={data.name} value={name} onChange={handleNameChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaName" className="form-label">Version</label>
              <input type="text" className="form-control" id="formulaName" placeholder={data.version} value={version} onChange={handleVersionChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaTagline" className="form-label">Tagline (optional)</label>
              <input type="text" className="form-control" id="formulaTagline" placeholder={data.tagline} value={tagline} onChange={handleTaglineChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaType" className="form-label">Type</label>
              <select className="form-select" aria-label="formula type select" value={type} onChange={handleTypeChange}>
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
              <select className="form-select" aria-label="formula stage select" value={stage} onChange={handleStageChange}>
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
              <textarea className="form-control" id="formulaDescription" rows="3" value={description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="formulaOlfactiveFamily" className="form-label">Olfactive Family</label>
              <select className="form-select" aria-label="formula olfactive family select" value={olfactiveFamily} onChange={handleOlfactiveFamilyChange}>
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
                <input type="number" className="form-control" aria-label="Concentration in percent" value={concentration * 100} onChange={handleConcentrationChange}/>
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetFields}>Close</button>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditFormulaModel