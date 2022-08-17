const {Schema,model}=require('mongoose');
const bcrypt= require('bcriptjs');
const UserSchema= new Schema({
    name:{type:String, trim:true},
    email:{type:String, required:true,unique: true, trim:true},
    password:{type:String, required: true},
    date:{type:Date, default: Date.now}
},{
    timestamps:true,
    versionKey: false
});
UserSchema.method.encryptPassword=async (password)=>{
    const salt=await bcrypt.genSlat(10);
    return await bcrypt.hash(password,salt)
};
UserSchema.method.matchPassword= async function(password){
    return await bcrypt.compare(password,this.password)
}
export default model('User', UserSchema);