import { db, Bins } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Bins).values({
		id: '1234456777',
		title: 'hola',
		code: 'mundo'
	})

}
