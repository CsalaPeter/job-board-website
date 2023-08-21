import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from './app.service';
import { Subscription } from 'rxjs';
import { ConfigService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  job!: Job[];
  jobSubscription?: Subscription;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.jobSubscription = this.configService
      .getAllJobs()
      .subscribe((job) => (this.job = job));
  }
}
