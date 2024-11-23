import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { NgForOf } from '@angular/common';

@Component({
	selector: 'app-book',
	standalone: true,
	imports: [NgForOf],
	templateUrl: './book.component.html',
	styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
	private readonly bookService = inject(BookService);
	books: Book[] = [];

	ngOnInit(): void {
		this.bookService.getBooks().subscribe((books: Book[]) => {
			this.books = books;
		});
	}

	StartReading() {
		alert('The book has been Read!');
	}

	addToReadinglist() {
		alert('The book has been added to the Reading list!');
	}
}
