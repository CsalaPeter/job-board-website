import { Jobs } from './job.entity';
import { Get, Controller, Res, HttpStatus } from '@nestjs/common';
import { JobService } from 'src/jobs/job.service';

@Controller('api/jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async fetchAll(@Res() response): Promise<Jobs[]> {
    const jobs = await this.jobService.getJobs();
    console.log(jobs);
    return response.status(HttpStatus.OK).json({ jobs });
  }
}
