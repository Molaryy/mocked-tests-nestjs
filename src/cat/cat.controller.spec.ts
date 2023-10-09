import { CatController } from './cat.controller';
import {CatService} from "./cat.service";

describe('CatController', () => {
  let controller: CatController;
  let service: CatService;

  beforeEach(async () => {
    service = new CatService();
    controller = new CatController(service);
  });

  describe('get cats breed', () => {
    it('should return the name base on the id or breed', async () => {
      const resultExpected: string = 'Abyssinian';

      expect(await controller.getBreed('abys')).toBe(resultExpected);
    });
  });
});
