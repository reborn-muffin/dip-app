import { json } from '@sveltejs/kit';
import { db } from '$lib/pocketbase.js';

export async function POST({ request }) {
  const data = await request.json();
  let hotels;

  if (data.isAll) {
    hotels = await db.collection('hotels').getFullList();
  } else {
    hotels = await db.collection('hotels').getFullList({
      filter: data.filterString
    });
  }

  return json(hotels);
}
