import { ConnectDB } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() 
{
    try 
    {
        const db= await ConnectDB();
        const products=await db.collection('students').find({}).toArray();
        return NextResponse.json({success:true,data:products})    
    } catch (error) {
        return NextResponse.json({success:false,error:"failed to fetch"})    
    }
    //. get => api/products
}
export async function POST(request=NextResponse) 
{
    try 
    {
        const body=await request.json();
        const {name,email,age,phone}=body;
        console.log(body)
        if(!name || !email || !age || !phone)
            return NextResponse.json({success:false,message: "All fields are required"})
        const db=await ConnectDB();
        await db.collection('students').insertOne({name,email,age,phone,createdAt:new Date()})
        const students=await db.collection('students').find({}).toArray()
        return NextResponse.json({success:true,data:students})
    } catch (error) 
    {
        return NextResponse.json({success:false, error:"Failed to insert"})
        
    }
}