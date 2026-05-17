'use server'

import { ConnectDB } from "../lib/db"

export async function getMessage() 
{
    let db=await ConnectDB();
    const message=(await db.collection('messages')).find({}).toArray()
    return message;
}