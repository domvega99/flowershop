import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductComponent } from './components/product/product.component';
import { OccasionComponent } from './components/occasion/occasion.component';
import { ReviewComponent } from './components/review/review.component';
import { AboutHomepageComponent } from './components/about-homepage/about-homepage.component';
import { HistoryHomepageComponent } from './components/history-homepage/history-homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            HeaderComponent, 
            FooterComponent, 
            HeroComponent, 
            ProductComponent, 
            OccasionComponent,
            ReviewComponent,
            AboutHomepageComponent,
            HistoryHomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular_client';
}
