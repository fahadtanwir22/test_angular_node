import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  LoaderStatusSubject: BehaviorSubject<boolean>;
  LoaderStatus$: Observable<boolean>;

  constructor() {
    this.LoaderStatusSubject = new BehaviorSubject(false);
    this.LoaderStatus$ = this.LoaderStatusSubject.asObservable();
  }

  setLoaderStatus(value: boolean) {
    this.LoaderStatusSubject.next(value);
  }
}
