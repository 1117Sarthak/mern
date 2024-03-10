const express = require("express");
const router = express.Router();
const User = require("../model/userSchema")
const bcrypt=require("bcryptjs")
const jwt =require("jsonwebtoken")

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
    
    try{
        const { email,password }=req.body;
        if(!email || !password){
            return res.status(400).json({error:"pls filled the details"})
        }
    
        
        const userLogin= await User.findOne({email:email});
        console.log(userLogin);
        if(userLogin){
            const isMatch= await bcrypt.compare(password,userLogin.password)
            
            const token=await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now()+ 25892000000),
                httpOnly:true

            })

            if(!isMatch){
                console.log("invalid credential")
                res.json({error:"invalid credential"})
            }
            else{
                console.log("valid")
                res.json({message:"valid credential"})
            }

        
        // if(exist){
            //    return res.status(202).json("user signin successfully")
            // }
            // else{
                //    return res.json({err:"name and password is not valid"});
                // }
                
            }
    }
    catch(err){console.log(`${err} not sign in`)};
})

module.exports = router;
