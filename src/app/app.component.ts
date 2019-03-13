import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = ' Basic card sections';
  subtitle = 'Angular is very useful';
  content = 'The most basic card needs only an mat-card element with some content. However, Angular Material provides a number of preset sections that you can use inside of an';
  ngOnInit(): void {
    this.title = 'word';
  }
}
