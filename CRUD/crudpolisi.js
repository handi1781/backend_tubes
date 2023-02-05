import User from "../tabel/tabelPolisi.js";

export const viewData = async (req,res)=> {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}

export const viewId = async (req, res)=> {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);
    }
}


export const createData = async (req,res)=> {
    try {
       await User.create(req.body);
       res.status(201).json({msg: "Data telah di buat"})
    } catch (error){
        console.log(error.message);
    }
}


export const editData = async (req,res)=> {
    try {
       await User.update(req.body,{
        where:{
            id: req.params.id
        }
       });
       res.status(200).json({msg: "Data telah di update"})
    } catch (error){
        console.log(error.message);
    }
}


export const deleteData = async (req, res)=> {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Data telah di hapus"});
    } catch (error){
        console.log(error.message);
    }
}