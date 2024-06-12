import {json} from '@sveltejs/kit';
import {db} from '$lib/pocketbase.js';

export async function GET() {
  const cities = await db.collection('cities').getList()
  return json(cities.items)
}
