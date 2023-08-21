import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './jobs/job.module';
import { Jobs } from './jobs/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'jobsDB',
      entities: [Jobs],
      synchronize: true,
    }),
    JobModule,
  ],
})
export class AppModule {}
