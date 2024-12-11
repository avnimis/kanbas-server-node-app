import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
    {
        name: String,
        number: String,
        credits: Number,
        description: String,
        department: String,
        startDate: Date,
        endDate: Date,
    },
    { collection: "courses" }
);
export default courseSchema;