import { BaseAPI } from './api';

export class MazeAPI extends BaseAPI {
  constructor() {
    super('maze');
  }

  create(settings) {
    return this.post('', { ...settings });
  }

  load(id) {
    return this.get(`/${id}`);
  }

  move(id, direction) {
    return this.post(`/${id}`, { direction });
  }

  print(id) {
    return this.get(`/${id}/print`);
  }
}
