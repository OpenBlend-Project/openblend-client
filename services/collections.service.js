import PrivateService from './private.service';

class CollectionsService extends PrivateService {
  constructor() {
    super();
  }

  // POST /api/collections
  createCollection = (requestBody) => {
    return this.api.post('/api/collections', requestBody);
  }

  // GET /api/collections
  getUserCollections = () => {
    return this.api.get('/api/collections');
  }

  // GET /api/collections/:collectionId
  getCollection = (collectionId) => {
    return this.api.get(`/api/collections/${collectionId}`);
  }

  // PUT /api/collections/:collectionId
  updateCollection = (collectionId, requestBody) => {
    return this.api.put(`/api/collections/${collectionId}`, requestBody)
  }

  // DELETE /api/collections/:collectionId/formulas/:formulaId
  deleteFormulaFromCollection = (collectionId, formulaId) => {
    return this.api.delete(`/api/collections/${collectionId}/formulas/${formulaId}`);
  }

  // DELETE /api/collections/:collectionId
  deleteCollection = (collectionId) => {
    return this.api.delete(`/api/collections/${collectionId}`);
  }

}


const collectionsService = new CollectionsService();

export default collectionsService;