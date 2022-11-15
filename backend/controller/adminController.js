const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const Ticket = require("../model/ticketModel");


const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
        //1. Check if the user exists
        const admin = await User.findOne({email});
        if (!admin) {
        res.status(404)
            throw new Error("Admin not avaliable!");
        }
    if(admin.isadmin && (await bcrypt.compare(password, admin.password))){
            res.json({
                _id:admin.id,
                name:admin.name,
                email:admin.email,
                isadmin:admin.isadmin,
                token: generateToken(admin._id)
            })
        }else{
            res.status(400)
            throw new Error('Invalid admin Credentials')
        }
});

//GET: Route:/admin/getalltickets
const getAllTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({});
    res.status(200).json(tickets);
  });
  
  //GET: Route:/admin/getalltickets
const getAllUser = asyncHandler(async (req, res) => {
    const tickets = await User.find({});
    res.status(200).json(tickets);
  });
const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}

module.exports ={loginAdmin,getAllTickets,getAllUser}