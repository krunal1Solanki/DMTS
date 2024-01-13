import {connect} from "../../../../dbConfig/dbConfig.js"
import {NextRequest, NextResponse} from "next/server"
import siteMaster from "@/models/siteMaster.js"

connect()
export async function GET (request : NextRequest) {
    try {
        const info = await siteMaster.find();
        return NextResponse.json({
            message : info
        })
    } catch (err : any) {
        return NextResponse.json({
            error : err.message
        })
    }
}
