import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-al-slim-bar';
import { NavigationCancel,
          Event,
          NavigationEnd,
          NavigationError,
          NavigationStart,
          Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'front-angular';
  /**
   *
   */
  constructor(private slimLoadingBarService:SlimLoadingBarService, private router: Router ) {
    this.router.events.subscribe((event: Event)=>{
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if(event instanceof NavigationStart){
      this.slimLoadingBarService.start();
    }
    if(event instanceof NavigationCancel){
      this.slimLoadingBarService.stop();
    }
    if(event instanceof NavigationError){
      this.slimLoadingBarService.stop();
    }
    if(event instanceof NavigationEnd){
      this.slimLoadingBarService.complete();
    }
  }

}
