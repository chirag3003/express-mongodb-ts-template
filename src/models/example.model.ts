import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema(
  {
    msg: String,
  },
  { timestamps: true }
);

export const Example = mongoose.model("example", exampleSchema);
