const mongoose  = require('mongoose');

const connect = async()=>{
    await mongoose.connect("mongodb+srv://NamestheDev:RwEdiXV4sZCKYPPN@namesthenode.qtbbypy.mongodb.net/?retryWrites=true&w=majority&appName=NamestheNode/devTinder")
}

connect().then(()=>{
console.log("Data Base Connection success");
}).catch(err=>{
    console.log("Connection Not establish")
})