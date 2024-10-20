import connectMongoDB from "@/libs/mongodb";
import Translation from "@/models/translation";
import { NextResponse } from "next/server";

export async function POST (request) {
    const { path, assignee, approved_dt, approved_kj, approved_kp, approved_ur, payment, created_by } = await request.json();
    await connectMongoDB();
    await Translation.create({ path, assignee, approved_dt, approved_kj, approved_kp, approved_ur, payment, created_by, modified_by: created_by });
    return NextResponse.json({ message: "Translation Created" }, { status: 201 });
}

export async function GET () {
    await connectMongoDB();
    const translations = await Translation.find();
    return NextResponse.json({ translations });
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Translation.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}