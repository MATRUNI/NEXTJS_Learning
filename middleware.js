import { NextResponse } from "next/server"

export function middleware(request)
{
    console.log(request.method)
    const {pathname}=request.nextUrl
    console.log("REQ:",pathname,":",request.method)
    return NextResponse.redirect('/api/products',request.url)
}

export const config={
    matcher:['/api/:path*','/products']
}