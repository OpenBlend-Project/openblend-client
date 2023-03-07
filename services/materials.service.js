import PublicService from './public.service';

class MaterialsService extends PublicService {
  constructor() {
    super();
  }

  // Search Raw Material
  searchRawMaterial = (query, autocomplete) => {
    return this.api.get(`api/search?${autocomplete ? "a=1" : "a=0"}&q=${query}`);
  }

  // Get Raw Material
  getRawMaterial = (id) => {
    return this.api.get(`api/materials/${id}`);
  }
}


const materialsService = new MaterialsService();

export default materialsService;