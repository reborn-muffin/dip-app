import {json} from '@sveltejs/kit';
import {db} from '$lib/pocketbase.js';

export async function GET() {
  const classTypes = await db.collection('classes').getFullList()
  return json(classTypes)
}
