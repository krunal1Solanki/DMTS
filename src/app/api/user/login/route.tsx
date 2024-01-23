import userModel from "@/models/userModel";
import { connect } from "../../../../dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest,) {
    try {
        const { OperatorName, password, imeiNumber } = await request.json();
        //imeiPMSC, imeiPMSCApproved
        // no, no,
        // 
        const user = await userModel.findOne({"pmscUserData.employeeId" : OperatorName });
        console.log({ user });


        if(imeiNumber) {
            const imei = user.imeiPMSC;
            const imeiPMSCApproved = user.imeiPMSCApproved;
            if(!imei || (imei && imei != imeiNumber && imeiPMSCApproved)) {
                user.imeiPMSC =  imeiNumber;
                await user.save();
                return NextResponse.json({
                    message : "IMEI in under approval",
                })
            }
            if(imei && !imeiPMSCApproved) {
                return NextResponse.json({
                    message : "IMEI is not approved yet",
                })
            }
         }

        if (!user) return NextResponse.json({
            message: "User not found!"
        });

        const isMatched = await bcrypt.compare(password, user.Password);

        if (!isMatched) return NextResponse.json({
            message: "Please enter correct password!"
        });

        const newUser = user.user;
        
        const token = jwt.sign({ newUser }, 'PIKACHU', { expiresIn: '1h' });

        const response = NextResponse.json({
            message: "User found!",
            user
        });
        
        response.cookies.set("token", token, {httpOnly : true});

        return response;
    } catch (err: any) {
        return NextResponse.json({
            error: err.message,
        });
    }
}
