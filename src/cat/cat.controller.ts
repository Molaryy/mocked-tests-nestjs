import { Controller, Get, Param } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService){}

  @Get()
  async getBreeds() {
    return await this.catService.getBreeds();
  }

  @Get(':breed')
  async getBreed(@Param('breed') breed: string) {
    return await this.catService.getBreed(breed);
  }
}
