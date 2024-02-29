"use client"
import CardDataStats from "@/components/CardDataStats";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function userDash(){

    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchAllData = async ()=>{
            try{
                const res = await axios.get("http://localhost:9900/showUserDetails")
                setData(res.data)
                console.log(res) 
            }catch(e){
                console.log(e);
            }
        }
        fetchAllData()  
    },[])
    return(
        <>
            <h1>this is the user dash board.</h1>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"> */}

            {/* <CardDataStats title="Name" name="Rohan Jacob" rate="21" levelUp>
            <svg
            className="fill-primary dark:fill-white"
            width="45"
            height="40"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
             <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
             <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>

          </svg> */}
          {/* <h1>Welome to card 1</h1> */}
            {/* </CardDataStats> */}
            <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>E-Mail</TableColumn>
        <TableColumn>Date of Birth</TableColumn>
        <TableColumn>Age</TableColumn>
        <TableColumn>Contact</TableColumn>
        <TableColumn>Gender</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>  
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
              {/* </div> */}
        </>
    )
}