//import connectDB
import { connectDB } from "@/lib/mongodb";
import Note from "@/models/NoteModels";
import { NextResponse } from "next/server";


// handle POST request
export async function POST(req) {

  try {
    await connectDB()
    const { title, content } = await req.json()
    const newNote = new Note({ title, content })
    await newNote.save()
    return NextResponse.json(
      { message: "Note added successfully!", note: newNote },
      { status: 201 }
    )
  } catch (err) {
    console.log("from b-end :", err)
    return NextResponse.json(
      { message: "failed to add Note!", error: err.message },
      { status: 500 }
    );
  }

}

//handle GET request
export async function GET() {
  try {
    await connectDB()
    const notes = await Note.find()
    return NextResponse.json({ notes }, { status: 200 })
  } catch (err) {
    console.error("Error fetching notes:", err);
    return NextResponse.json(
      { message: "Failed to fetch notes", error: err.message },
      { status: 500 })
  }
}

//handle DELETE request
export async function DELETE(req) {
  try {
    await connectDB()
    const { id } = await req.json()
    await Note.findByIdAndDelete(id)
    return NextResponse.json(
      { message: "Task deleted" },
      { status: 200 })
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to delete note!", error: err.message },
      { status: 500 })
  }
}



