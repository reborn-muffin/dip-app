import { json } from '@sveltejs/kit';
import { db } from '$lib/pocketbase.js';
import {formatDateDB} from '$lib/utils/date.js';

export async function POST({ request }) {
  const data = await request.json();
  let tours;
  console.log(data.filterString);
  if (data.isAll) {
    tours = await db.collection('tours').getFullList();
  } else {
    tours = await db.collection('tours').getFullList({
      filter: data.filterString
    });
  }

  return json(tours);
}
