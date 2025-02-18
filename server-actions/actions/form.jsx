"use server"
import fs from "fs/promises"


export const submitAction = async (e)=>{
    "use server";
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("asad.txt",`Name is ${e.get("name")} and adress is ${e.get("add")}`)
    console.log(a)
  }
