'use server'
import {redirect} from 'next/navigation'
import { ConnectDB } from "../lib/db";

export async function ContactAtions(formData) 
{
    const name= formData.get('name');    
    const email= formData.get('email');    
    const message= formData.get('message');

    if(!name || !email || !message)
    {
        throw new Error('All fields are required!')
    }

    console.log('DATA is:',name,'|',email,'|',message)
    const db=await ConnectDB();
    await db.collection('messages').insertOne({name,email,message,createdAt:new Date()})
    redirect('../formAdmin')
}