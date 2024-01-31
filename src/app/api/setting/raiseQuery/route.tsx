import { connect } from "../../../../dbConfig/dbConfig"
import queryModel from '@/models/queryMaster'
import { NextRequest, NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { readFile } from "fs";

connect()

export async function POST(request: NextRequest) {
    try {
        const body = await request.formData();
        const file = body.get("attachments");
        const selectedSite = body.get("selectedSite");
        const selectedUser = body.get("selectedUser");
        const querySubject = body.get("querySubject");
        const queryDescription = body.get("queryDescription");
        const selectedPriority = body.get("selectedPriority");
        //@ts-ignore
        const siteDetails = JSON.parse(body.get("siteDetails"));
        //@ts-ignore
        const responsibleUser = JSON.parse(body.get("responsibleUser"));

        const timestamp = Date.now();
        // @ts-ignore
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);


        //@ts-ignore
        const relativePath = join('images', `${timestamp}_${file.name}`);
        
        // Specify the absolute path
        const absolutePath = join(process.cwd(), 'public', relativePath);

        console.log(absolutePath);

        await writeFile(absolutePath, buffer);

        await queryModel.create({
            selectedSite, selectedUser, querySubject, queryDescription, selectedPriority, attachments: absolutePath,responsibleUser, siteDetails
        });

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
