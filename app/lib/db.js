import {MongoClient} from 'mongodb'

const client=new MongoClient(process.env.mongo_URI)

export async function ConnectDB() 
{
    await client.connect();
    return client.db('nextTest')
}