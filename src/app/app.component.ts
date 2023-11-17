import { Component, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-storage';
  private platformId = inject(PLATFORM_ID)
  // storedData?: string | null
  favoriteColorControl = new FormControl();
  ngOnInit(){

    if (isPlatformBrowser(this.platformId)) {
      this.favoriteColorControl.setValue(localStorage.getItem('storedData'))
    } else {
    }
  }
  
  save(){
    localStorage.setItem('storedData', this.favoriteColorControl.value || "");
  }

  remove(){
    localStorage.removeItem('storedData');
  }
}
