import { json } from '@sveltejs/kit';
import { db } from '$lib/pocketbase.js';

export async function POST({ request }) {
  const data = await request.json();
  let flights;

  if (data.isAll) {
    flights = await db.collection('flights').getFullList();
  } else {
    flights = await db.collection('flights').getFullList({
      filter: data.filterString
    });
  }

  return json(flights);
}
