const express = require("express");
const router = express.Router();
const User = require("../model/userSchema")
// require("../db/connect");

router.get("/", (req, res) => {
    res.send("hello world from the server");
});

router.post("/register",async (req, res) => {
  
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        console.log("Please Enter full details");
        return res.json({ error: "pls fill the field properly" });
    }
try{ 
    const UserExist= await User.findOne({ email: email });

    if(UserExist){
        return res.send("This is already exist")
    }
    else if(password!=cpassword){
        return res.json({error:"password are not matching"})
    }
    else{

    const user = new User({ name, email, phone, work, password, cpassword });

    const usersave=await user.save()
    if(usersave){
       return res.json({message:"user register succesully"});
    }
    else{
        return res.json({error:"user not registered"})

    }
}


}catch(err){
    console.log(`${err} this is the problem`)

}

// Through Promise

//     User.findOne({ email: email }).then((UserExist) => {
//         if(UserExist){
//             return res.send("This is already exist")
//         }
      
//         const user = new User({ name, email, phone, work, password, cpassword });
//         user.save().then(() => {
//                 res.json({ message: "user regiseter successfully" });
//             }).catch((err) => {
//                 res.json({ err: "failed to register" });
//             });
            
//     }).catch((err)=>{
//     });
});


// Sign in page for the user only

router.post("/signin",async(req,res)=>{
    const {email,password}=req.body;

    try{
        const exist= await User.findOne({email:email,password:password});
    
        if(exist){
           return res.status(202).json("user signin successfully")
        }
        else{
           return res.json({err:"name and password is not valid"});
        }

    }
    catch(err){console.log(`${err} not sign in`)};
})

module.exports = router;
