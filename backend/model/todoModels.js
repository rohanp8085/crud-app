const mongoos = require("mongoose")

const todoSchema =  new mongoos.Schema({
    title : {
        type : String,
        required : true
    },task :{
        type : String,
        required :true
    }
},
{
    timestamps : true
}
)
 module.exports = mongoos.model("Todo" , todoSchema)