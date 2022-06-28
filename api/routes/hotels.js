import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllData, getData, getDataHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel)

//delete
router.delete("/:id", deleteHotel)

//get find by id

router.get("/find/:id", getDataHotel);

//get all
router.get("/", getAllData)

router.get("/getdata", getData)

router.get("/countByCity", countByCity);
router.get("/countByType", countByType)


export default router


// import express from "express";
// import {
//   countByCity,
//   createHotel,
//   deleteHotel,
//   getAllData,
//   getDataHotel,
//   updateHotel,
// } from "../controllers/hotel.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
// const router = express.Router();

// //CREATE
// router.post("/", verifyAdmin, createHotel);

// //UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
// //DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
// //GET

// router.get("/find/:id", getDataHotel);
// //GET ALL

// router.get("/", getAllData);
// router.get("/countByCity", countByCity);
// // router.get("/countByType", countByType);


// export default router

