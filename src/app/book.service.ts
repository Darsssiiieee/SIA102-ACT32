import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	placeholder = 'https://placehold.co/250';
	private readonly books: Book[] = [
		{
			id: 1,
			name: 'Beloved',
			director: ' by Toni Morrison',
			description: 'A haunting narrative about former slaves in post-Civil War America.',
			imageUrl: this.placeholder,
		},
		{
			id: 2,
			name: '1984',
			director: 'by George Orwell',
			description: 'A dystopian novel about totalitarianism where the government.',
			imageUrl: this.placeholder,
		},
		{
			id: 3,
			name: 'Circe',
			director: 'by Madeline Miller',
			description: 'A retelling life of Circe, the enchantress from Homer’s "Odyssey,".',
			imageUrl: this.placeholder,
		},
		{
			id: 4,
			name: 'The Great Gatsby',
			director: 'by F. Scott Fitzgerald',
			description: 'explores themes of wealth, love, and the American Dream.',
			imageUrl: this.placeholder,
		},
		{
			id: 5,
			name: 'Dune',
			director: 'by Frank Herbert',
			description: 'A science fiction epic set on the desert planet of Arrakis.',
			imageUrl: this.placeholder,
		},
		{
			id: 6,
			name: 'The Alchemist',
			director: 'by Paulo Coelho',
			description: 'This philosophical tale follows Santiago, a shepherd boy on a quest to discover his personal legend.',
			imageUrl: this.placeholder,
		},
		{
			id: 7,
			name: 'The Book Thief',
			director: 'by Markus Zusak',
			description: 'this poignant novel set in Nazi Germany follows a young girl named Liesel who finds solace in stealing books.',
			imageUrl: this.placeholder,
		},
		{
			id: 8,
			name: 'The Road',
			director: 'by Cormac McCarthy',
			description: 'A harrowing post-apocalyptic tale of a father and son traveling through a desolate landscape.',
			imageUrl: this.placeholder,
		},
		{
			id: 9,
			name: 'Educated',
			director: 'by Tara Westover',
			description: 'This memoir recounts the author’s journey from growing up in a strict and abusive household .',
			imageUrl: this.placeholder,
		},
		{
			id: 10,
			name: 'The Night Circus',
			director: 'by Erin Morgenstern',
			description:'A magical tale of a mysterious competition between two young illusionists set in a fantastical circus .',
			imageUrl: this.placeholder,
		},
		{
			id: 11,
			name: 'To Kill a Mockingbird',
			director: 'by Harper Lee',
			description: 'A coming-of-age story,in American South (1930s) addresses issues like racial inequality and moral growth.',
			imageUrl: this.placeholder,
		},
		{
			id: 12,
			name: 'Pride and Prejudice',
			director: ' by Jane Austen',
			imageUrl: this.placeholder,
			description: 'A classic romance that follows Elizabeth Bennet as she navigates issues of class, family, and personal pride.',
		},
		{
			id: 13,
			name: 'The Catcher in the Rye',
			director: 'by J.D. Salinger',
			description: 'A poignant look at teenage angst and alienation,follows Holden Caulfield.',
			imageUrl: this.placeholder,
		},
		{
			id: 14,
			name: 'Sapiens: A Brief History of Humankind',
			director: 'by Yuval Noah Harari',
			description: 'A thought-provoking non-fiction,explores the history of humankind.',
			imageUrl: this.placeholder,
		},
		{
			id: 15,
			name: 'The Silent Patient',
			director: 'by Alex Michaelides',
			description: 'psychological thriller with uncovering why a woman stopped speaking after murdering her husband.',
			imageUrl: this.placeholder,
		},
	];

	getBooks(): Observable<Book[]> {
		return new Observable<Book[]>((subscriber) => {
			subscriber.next(this.books);
			subscriber.complete();
		});
	}
}
