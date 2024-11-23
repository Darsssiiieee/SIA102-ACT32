import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [BookComponent],
	template: `
		<main class="container">
			<app-book class="book"></app-book>
		</main>
	`,
	styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    .book {
      width: 91%;
      max-width: 1536px;
    }
  `,
})
export class AppComponent {
	title = 'Activity 32: Angular Library Grid';
}
