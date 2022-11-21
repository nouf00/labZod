import express from "express";
import validate from "../Middl/Val";
import { MovieSchema , MovieSchemaType} from "../Schema/movie";


const route=express.Router();

let moviearray:MovieSchemaType[]=[];


route.post("/", validate(MovieSchema) , (req, res,next)=>{
const newitem = req.body as MovieSchemaType;
moviearray.push(newitem)
return res.status(200).json({ message: 'neeewww movie !',
  });

});


route.get("/", validate(MovieSchema) ,(req,res,next)=>{
    return res.status(200).json(moviearray);
})


route.put("/:id" , validate(MovieSchema), (req,res,next)=>{
const newarray = req.body as MovieSchemaType
const {id}=req.params
const newupdata =moviearray.filter((Item)=>{
return Item.id !== id });
newupdata.push(newarray)
moviearray = newupdata;

return res.status(200).json({ message: 'New MOIVE DATA !',})

})


route.delete("/:id" , validate(MovieSchema), (req,res,next)=>{
  const {R}=req.params
  const delitem = moviearray.filter((Item)=>{
  return Item.id!== R })
  moviearray= delitem
 

  return res.status(200).json({ message: 'delete MOIVE !',})
})

export default route;