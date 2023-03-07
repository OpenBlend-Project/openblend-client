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
  updateFormulaIngredient = (formulaId, ingredientId, requestBody) => {
    return this.api.put(`/api/formulas/${formulaId}/ingredients/${ingredientId}`, requestBody);
  }

  // DELETE /api/formulas/:id
  deleteFormula = (id) => {
    return this.api.delete(`/api/formulas/${id}`);
  }
  
  // Process formula data for table

}

const formulasService = new FormulasService();

export default formulasService;