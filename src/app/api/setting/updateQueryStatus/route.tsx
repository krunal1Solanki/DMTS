import {connect} from "../../../../dbConfig/dbConfig"
import queryModel from '@/models/queryMaster'
import {NextRequest, NextResponse} from "next/server"
connect()
export async function POST (request : NextRequest) {
    try {
        const body = await request.json();
        console.log(body)
        const {queryStatus, _id} = body;
        const c = await queryModel.findOneAndUpdate({_id}, {$set : {queryStatus}});
        console.log(c)
        return NextResponse.json({
            message : "Query Raised Successfully"
        })
    } catch (err : any) {
        return NextResponse.json({
            error : err.message
        })
    }
}
