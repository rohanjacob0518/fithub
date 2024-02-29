"use client"
import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Input,Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Sign() {
  const router = useRouter();
  const [data,setData] = useState({
    email :"",
    pass:""

});
const handleChange = (e:any)=>{
  setData(prev=>({...prev, [e.target.name]: e.target.value}));
}
// const handleClick = async (e: any) =>{
//   e.preventDefault()
//   try{
//     await axios.get("http://localhost:9900/login", data)
//     alert({data.email})
//     router.push("/login")
//   } catch(err){
//     console.log(err)
//   }
// }
console.log(data);
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
        <h2>Login/Sign-Up</h2> <br />
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <form
        action=""
        >
        <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-xs"
            placeholder="Enter the email-id"
            name="email"
            id="email"
            onChange={handleChange}
        /> <br />
        <Input
            isRequired
            type="password"
            label="Password"
            className="max-w-xs"
            placeholder="Enter the password"
            name="pass"
            id="pass"
            onChange={handleChange}
        /> <br />
        <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          // onClick={() => router.push("/userdash")} 
          type="submit"
        >
            Login
        </Button>
        </form>
      </CardBody>
      {/* <Divider/> */}
      {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
