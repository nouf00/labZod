import express  from "express";
import movieRoute from "./Route/movierout"

const app = express()
app.use(express.json());

app.use("/movie" , movieRoute )


app.listen(5000, ()=>
console.log(" the porrt 5000 is work "));