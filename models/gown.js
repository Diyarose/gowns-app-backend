const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "gname":String,
        "gid":String,
        "gprice":String,
        "gimage":String
    }
)
let gownmodel=mongoose.model("gowns",schema);
module.exports={gownmodel}

