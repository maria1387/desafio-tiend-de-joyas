const pool = require('../database/db')
const { getJoyas, prepararHATEOAS, getJoyasSearch } = require('../util/codigo');

// leer toda las tareas
const getAllJoyas = async(req, res, next)=>{
   try{
	const queryString = req.query;
    const joyas = await getJoyas(queryString);
    const HATEOAS = await prepararHATEOAS(joyas);
    res.json(HATEOAS);
   }catch (error){
	   next(error)
   }
}



const getJoyasfitro = async(req, res, next)=>{
   try{
	const queryString = req.query;
    const joyas = await getJoyasSearch(queryString);
    
    res.json(joyas);
   }catch (error){
	   next(error)
   }
}
module.exports = {
	getAllJoyas,
   getJoyasfitro
}