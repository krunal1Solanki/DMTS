import userModel from "@/models/userModel";
import { connect } from "../../../../dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest,) {
    try {
        const { OperatorName, password } = await request.json();
        const user = await userModel.findOne({ OperatorName });
        console.log({ user });

        if (!user) return NextResponse.json({
            message: "User not found!"
        });

        const isMatched = await bcrypt.compare(password, user.Password);

        if (!isMatched) return NextResponse.json({
            message: "Please enter correct password!"
        });

        // Create a JWT token
        const token = jwt.sign({ user }, 'PIKACHU', { expiresIn: '1h' });

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
