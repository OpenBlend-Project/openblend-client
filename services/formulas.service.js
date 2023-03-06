import PrivateService from './private.service';

class FormulasService extends PrivateService {
  constructor() {
    super();
  }

  // POST /api/formulas
  createFormula = (requestBody) => {
    return this.api.post('/api/formulas', requestBody);
  }

  // GET /api/formulas
  getAllFormulas = () => {
    return this.api.get('/api/formulas');
  }

  // GET /api/formulas/:id
  getFormula = (id) => {
    return this.api.get(`/api/formulas/${id}`);
  }

  // PUT /api/formulas/:id
  updateFormula = (id, requestBody) => {
    return this.api.put(`/api/formulas/${id}`, requestBody);
  }

  // DELETE /api/formulas/:id
  deleteFormula = (id) => {
    return this.api.delete(`/api/formulas/${id}`);
  } 
}

const formulasService = new FormulasService();

export default formulasService;