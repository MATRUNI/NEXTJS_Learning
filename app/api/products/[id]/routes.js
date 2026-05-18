import { ConnectDB } from "@/app/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function PUT(request,{params}) 
{
    try 
    {
        const param=await params;
        const body= await request.json();
        const db=await ConnectDB();
        await db.collection('students').updateOne(
            {_id: new ObjectId(param.id)},
            {$set:{...body,updateedAt:new Data()}}
        )
        return NextResponse.json({success:true,message:"updated"})
    } catch (error) {
        return NextResponse.json({success:false,error:"update failed"})
        
    }    
}