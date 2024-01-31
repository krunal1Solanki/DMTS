import {connect} from "../../../../dbConfig/dbConfig"
import {NextRequest, NextResponse} from "next/server"
import { readFile, writeFile } from "fs/promises";

import  queryModel from '../../../../models/queryMaster'

connect()

export const dynamic = 'force-dynamic'
export async function GET (request : NextRequest) {
    try {
        // Save the document to the database
        const queryDocuments = await queryModel.find();
        const processedQueries = await Promise.all(
            queryDocuments.map(async (query : any) => {
                // Read the file content
                //@ts-ignore
                const fileBuffer = await readFile(query.attachments);

                return {
                    _id: query._id,
                    selectedSite: query.selectedSite,
                    selectedUser: query.selectedUser,
                    querySubject: query.querySubject,
                    queryDescription: query.queryDescription,
                    selectedPriority: query.selectedPriority,
                    attachments: fileBuffer.toString("base64"), // Sending base64 encoded file content
                    responsibleUser: query.responsibleUser,
                    queryStatus : query.queryStatus
                };
            })
        );

        return NextResponse.json({
            info: processedQueries,
        });
        
    } catch (err : any) {
        return NextResponse.json({
            error : err.message
        })
    }
}
