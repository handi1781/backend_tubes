import  express from "express";
import {
    tampilkanData, tampilkanId, buatData, updateData, hapusData,

} from "../CRUD/crudtahanan.js";

import {
    viewData, viewId, createData, editData, deleteData

} from "../CRUD/crudpolisi.js";

const router = express.Router();

router.get('/tahanan', tampilkanData);
router.get('/tahanan/:id',tampilkanId);
router.post('/tahanan',buatData);
router.patch('/tahanan/:id', updateData);
router.delete('/tahanan/:id', hapusData);


router.get('/polisi',viewData);
router.get('/polisi/:id',viewId);
router.post('/polisi',createData);
router.patch('/polisi/:id',editData);
router.delete('/polisi/:id',deleteData);

export default router;