import mongoose from "mongoose";

//criaçao do modelo
const gradeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw new Error("A nota não pode ser menor que zero");
      },
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//definindo o modelo da coleção

const gradeModel = mongoose.model("grade", gradeSchema);

export { gradeModel };
