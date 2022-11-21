import  Express  from "express";
import {z ,TypeOf} from "zod"


export const MovieSchema=z.object({
body:z.object({
    id:z.string({required_error:" enter id "}).min(4),
    name:z.string().min(3),
    genre:z.enum(["Drama", "Action", "Comedy"] ,{ required_error:" Enter from these Drama|Action|Comedy)"}),
    rating:z.number().gte(1).lte(5),
    duration:z.number().gte(60).lte(500)
})

})
export type MovieSchemaType = TypeOf<typeof MovieSchema>['body'];