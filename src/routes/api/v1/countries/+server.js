import {json} from '@sveltejs/kit';
import {db} from '$lib/pocketbase.js';

export async function GET() {
  const countries = await db.collection('countries').getList()
  return json(countries.items)
}
