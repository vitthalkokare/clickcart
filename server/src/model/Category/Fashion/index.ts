import mongoose from "mongoose";


const fashionShema = new mongoose.Schema({

    gender:{
        type: 'String',
        required: true
        
    },

    category:{
        type: 'String',
        required: true
    },
    nameTag:{
        type: 'String',
        required: true
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
        type:'array',

    },
    sizes:{type:'array'},
    productInfo:{type:'object'},

    
},{timestamps:true},);


export const Fashion =  mongoose.model('fashion',fashionShema)