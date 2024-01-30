import { connect } from "../../../../dbConfig/dbConfig"
import questionnaireMaster from '@/models/questionnaireMaster'
import { NextRequest, NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { readFile } from "fs";

connect()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {type, userId, userName, formType, questionnaireName, questions, images} = body;
    
        if(images && images.length > 0) {
            for(let i = 0; i < images.length; i ++) {
                const file = images[i].imageName;
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                const timestamp = Date.now();
                const relativePath = join('images', `${timestamp}_${file.name}`);
                const absolutePath = join(process.cwd(), 'public', relativePath);
                await writeFile(absolutePath, buffer);
                images[i].answer = absolutePath;
            }
        }

        await new questionnaireMaster({
            type, userId, userName, formType, questionnaireName, questions, images
        })
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
