import mongoose from "mongoose";


const clothSchema = new mongoose.Schema({
    mainCategory:{
        type:'String',
        required:true,

    },
    subCategory:{
        type:'String',
        required:true,
    },

    gender:{
        type: 'String',
        enum:['men','woman','boy','girl'],
        required: true
        
    },



    clothType:{
        type: 'String',
        required:true,
    }, 
    
    nameTag:{
        type: 'String',
        required: true,
    },
    brandTag:{
        type: 'String', 
        required: true
    },
    price:{
        type: 'number',
        required: true
    },
    color:{
        type:[String],

    },
    size: {
        type: [String]
      },

    productInfo:{type:{
        material:String,
        seasons:String,
        occasion:String,

    }},

    createdAt:{type:Date,default:Date.now()},

    
},{timestamps:true},);


clothSchema.index({ clothType: 1, nameTag: 1 }, { unique: true });



export const mensCloth =  mongoose.model('mencloths',clothSchema);
export const womansCloth = mongoose.model('womancloths',clothSchema);
export const kidsCloth = mongoose.model('kidsloths',clothSchema);

