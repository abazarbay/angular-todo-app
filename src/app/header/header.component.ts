import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <nav>
        <ul class="header-links">
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          <li><a routerLink="/add_to_calendar">Add To Calendar</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #333;
        padding: 10px;
        width: 100%;
      }

      .header-links {
        display: flex;
        justify-content: space-around; 
        align-items: center;
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
      }

      .header-links li {
        text-align: center; 
      }

      .header-links a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
      }

      .header-links a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class HeaderComponent { }