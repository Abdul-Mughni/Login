const mongoose = require("mongoose");


const Roles_model = mongoose.Schema(
    {
    RoleName : {
        type : String,
        required : [true , " Role name is required"],
        unique : true,
        trim: true, 
    },
    Status : {
        type : String,
        required : [true , " Status is required"],
        enum : ["active","unactive"],
        default: "active", //Default status is active
    },
},

{ timestamps: true, }// Optionally, you can add timestamps to track creation and update times

)


const Roles = mongoose.model("Roles", Roles_model)

module.exports = Roles;
