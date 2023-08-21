import { Jobs } from './job.entity';
import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobController } from './job.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Jobs])],
  providers: [JobService],
  controllers: [JobController],
})
export class JobModule {}
