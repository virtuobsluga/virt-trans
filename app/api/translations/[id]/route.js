import connectMongoDB from "@/libs/mongodb";
import Translation from "@/models/translation";

import { NextResponse } from "next/server";

export async function PUT (request, { params }) {
    const { id } = params;
    const { newPath: path, newAssignee: assignee, newDT: approved_dt, newKJ: approved_kj, newKP: approved_kp, newUR: approved_ur, newPayment: payment, newModifiedBy: modified_by } = await request.json();
    await connectMongoDB();
    await Translation.findByIdAndUpdate(id, { path, assignee, approved_dt, approved_kj, approved_kp, approved_ur, payment, modified_by });
    return NextResponse.json({ message: "Translation updated" }, { status: 200 });
}

export async function GET (request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const translation = await Translation.findOne({ _id: id });
    return NextResponse.json({ translation }, { status: 200 });
}