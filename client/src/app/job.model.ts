export interface Job {
  id: number;
  jobName: string;
  company: string;
}

export interface GetAllJobs {
  jobs: Job[];
}
