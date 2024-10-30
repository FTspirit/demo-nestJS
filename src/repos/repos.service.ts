import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RepoEntity as RepoSchema, RepoDocument } from './repo.schema';
import axios from 'axios';
import { Repo } from './repo.interface';

@Injectable()
export class ReposService {
  constructor(
    @InjectModel(RepoSchema.name) private repoModel: Model<RepoDocument>,
  ) {}

  async getRepos(languageQuery?: string) {
    const language = languageQuery ? languageQuery : 'Javascript';
    const response = await axios.get(
      `https://api.github.com/users/freeCodeCamp/repos?language=${language}`,
    );
    const repos: any[] = response.data;

    const filteredRepos = repos.filter(
      (repo: { fork: boolean; forks: number }) => !repo.fork && repo.forks > 5,
    );

    for (const repo of filteredRepos) {
      const existingRepo = await this.repoModel.findOne({ name: repo.name });

      if (!existingRepo) {
        await this.repoModel.create({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          fork: repo.fork,
          forks: repo.forks,
          createdAt: new Date(repo.created_at),
        });
      }
    }

    return filteredRepos as Repo[];
  }

  async getAllRepos(languageQuery?: string): Promise<Repo[]> {
    console.log(languageQuery);

    const data = await this.repoModel
      .find({ language: languageQuery })
      .sort({ createdAt: -1 })
      .exec();

    console.log(data, 'data');
    return data;
  }
}
