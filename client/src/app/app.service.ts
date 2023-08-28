import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllJobs, Job } from './job.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    return this.http
      .get<GetAllJobs>('http://localhost:3000/api/jobs')
      .pipe(map((data: GetAllJobs) => data.jobs));
  }
}
