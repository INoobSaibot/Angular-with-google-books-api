import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GoogleBooks';

  constructor() {}

}

@Component({
  selector: 'google-books-fetcher'
})
export class GoogleBooksFetcher {
  title = "google-books-fetcher";
}