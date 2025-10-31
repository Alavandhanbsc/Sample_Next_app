import mongoose from "mongoose"

const notesSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
        trim:true,
    },content:{
        type:String,
        default:'',
    }
},
{timestamps:true}
)

// prevent if note is already exist
const Note = mongoose.models.Note || mongoose.model("Note",notesSchema) // mangoo db create collection by the name "Note"
export default Note

