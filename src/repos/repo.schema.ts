import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Repo } from './repo.interface';

export type RepoDocument = Repo & Document;

@Schema()
export class RepoEntity implements Repo {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  language: string;

  @Prop({ required: true })
  fork: boolean;

  @Prop({ required: true })
  forks: number;

  @Prop({ required: true })
  createdAt: Date;
}

export const RepoSchema = SchemaFactory.createForClass(RepoEntity);
