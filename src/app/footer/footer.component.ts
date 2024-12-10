import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer">
      <p>&copy; 2024 To-Do App. All Rights Reserved.</p>
      <div class="footer-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background-color: #333;
        color: white;
        padding: 20px 10px;
        text-align: center;
        justify-content: space-around;
        margin-top: 20px;
        position: fixed;
        bottom: 0;
        width: 100%;
      }

      .footer-links {
        margin-top: 10px;
      }

      .footer-links a {
        color: #61dafb;
        margin: 0 10px;
        text-decoration: none;
      }

      .footer-links a:hover {
    text-decoration: underline;
}
    `,
  ],
})
export class FooterComponent { }