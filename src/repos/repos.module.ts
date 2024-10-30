import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RepoEntity, RepoSchema } from './repo.schema';
import { ReposService } from './repos.service';
import { ReposController } from './repos.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RepoEntity.name, schema: RepoSchema }]),
  ],
  providers: [ReposService],
  controllers: [ReposController],
  exports: [ReposService],
})
export class ReposModule {}
