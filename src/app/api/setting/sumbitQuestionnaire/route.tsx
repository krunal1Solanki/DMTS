import { connect } from "../../../../dbConfig/dbConfig"
import queryModel from '@/models/queryMaster'
import { NextRequest, NextResponse } from "next/server"
connect()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
       
        console.log(body);
        return NextResponse.json({
            message: "Query Raised Successfully"
        });
    } catch (err: any) {
        console.log('PP');
        return NextResponse.json({
            error: err.message
        });
    }
}
