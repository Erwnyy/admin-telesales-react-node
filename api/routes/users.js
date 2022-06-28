import express from "express";
import { createUser, updateUser, deleteUser, getDataUser, getAllData } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


router.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})


//create
router.post("/", createUser);

//update
router.put("/:id", updateUser)

//delete
router.delete("/:id", deleteUser)

//get find by id
router.get("/:id", getDataUser)

//get all
router.get("/", getAllData)


export default router