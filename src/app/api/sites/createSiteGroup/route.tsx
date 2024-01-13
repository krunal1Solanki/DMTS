import {connect} from "../../../../dbConfig/dbConfig.js"
import {NextRequest, NextResponse} from "next/server"
import siteGroupModel from '../../../../models/siteGroupMode.js'

connect()
export async function POST (request : NextRequest) {
    try {
        const body = await request.json();
        const {groupName, sites} = body;
        console.log("THIS IS MY BODY", body)

        console.log(typeof sites[0].siteId)
        const group = await siteGroupModel.create({
            groupName,
            sites,
            creationDate: new Date(Date.now())
        })

        return NextResponse.json({
          message: group
        });
    } catch (err : any) {
        return NextResponse.json({
            error : err.message
        })
    }
}
