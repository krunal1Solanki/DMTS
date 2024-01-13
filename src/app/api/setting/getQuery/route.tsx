import {connect} from "../../../../dbConfig/dbConfig"
import {NextRequest, NextResponse} from "next/server"
import  queryModel from '../../../../models/queryMaster'
connect()
export async function GET (request : NextRequest) {
    try {
        // Save the document to the database
        const info = await queryModel.find();
        console.log("INDO", info)
        return NextResponse.json({
            message :  info
        })
    } catch (err : any) {
        return NextResponse.json({
            error : err.message
        })
    }
}
