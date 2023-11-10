import Users from "@/lib/dbConfig/userModel";
import dbConnect from "@/lib/dbConfig/dbConnect";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { firstName, lastName, email, password } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new Users({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};