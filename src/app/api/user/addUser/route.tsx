import userModel from "@/models/userModel";
import { connect } from "../../../../dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connect();

export async function POST(request: NextRequest,) {
    try {
     const body = await request.json();
     await userModel.create(body);
     return NextResponse.json({
        message : "User has been saved successfully"
     })
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
        });
    }
}
