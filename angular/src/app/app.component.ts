import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  LoaderStatus$: Observable<boolean>;

  constructor(
    private loaderService: LoaderService
  ) {
    this.LoaderStatus$ = loaderService.LoaderStatus$;
  }
}
