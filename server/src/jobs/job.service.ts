import { Jobs } from './job.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Jobs)
    private jobRepository: Repository<Jobs>,
  ) {}

  async getJobs(): Promise<Jobs[]> {
    return this.jobRepository.find();
  }
}
