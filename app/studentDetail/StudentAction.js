'use server'

import { redirect } from "next/navigation"
import { ConnectDB } from "../lib/db"
import { ObjectId } from "mongodb"

export async function createStudent(formData) 
{
    const name=formData.get('name')
    const email=formData.get('email')
    const age=formData.get('age')
    const phone=formData.get('phone')
    if(!name || !email || !age || !phone)
        throw new Error("All fields required!!")
    const db=await ConnectDB();

    await db.collection('students').insertOne({name,email,age,phone,createdAt:new Date()})
    redirect('../readAll')
}
export async function getId(prev,formData) 
{
    const id=formData.get('id')
    let db=await ConnectDB();
    const data=await db.collection('students').findOne({_id:new ObjectId(id)})
    if(!data) return null;
    return {...data,_id:data._id.toString()};
}
export async function getStudents() 
{
    let db=await ConnectDB();
    const data=await db.collection('students').find({}).toArray()
    return data;
}
export async function updateStudents(prev,formData) 
{
    const id=formData.get('id')
    const name=formData.get('name')
    const email=formData.get('email')
    const age=formData.get('age')
    const phone=formData.get('phone')
    if(!name || !email || !age || !phone)
        throw new Error("All fields required!!")
    let db=await ConnectDB();
    const data=await db.collection('students').findOneAndUpdate(
        {_id:new ObjectId(id)},
        {$set:{name,email,age,phone}},
        { returnDocument: "after" }
    )
    return data;
}
export async function deleteOne(prev,formData) 
{
    const field=formData.get('field')
    const data=formData.get('data')
    console.log(formData)
    let filter={}
    if(field==='id')
    {
        filter={
            _id:new ObjectId(data)
        }
    }
    else
    {
        filter={
            [field]:data
        }
    }
    const db=await ConnectDB();
    const deletedData= await db.collection('students').findOneAndDelete(filter)
    console.log(deletedData)
    return {...deletedData,_id:deletedData._id.toString()}
}