const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    commentid: {
      type: String,
      required: true,
    },
    comment:{
        type:String,
        required: true,
    },
    phonenumber:{
        type:String,
        required:true,

    },
    img:{
        type:String,
        required:true,
    },
   
  },
  // { timestamps: true },
  { collection: "commentInfo" }
);
mongoose.model("commentInfo", CommentSchema);
