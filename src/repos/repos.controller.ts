import { Controller, Get, Query } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get()
  async getRepos(@Query('language') language?: string) {
    return this.reposService.getRepos(language);
  }

  // Get data from MongoDB
  @Get('all')
  async getAllRepos(@Query('language') language?: string) {
    return this.reposService.getAllRepos(language);
  }
}
