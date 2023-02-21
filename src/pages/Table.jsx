import React, { useMemo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import{DataGrid} from"@mui/x-data-grid";
import { useState } from "react";
import Style from "./styles/Table.module.css"

const Table = ()=>{
    const [tableData,setTableData]=useState([])
    useEffect( ()=>{
        fetch("http://localhost:5000/api/students")
        .then((data)=>data.json())
        .then((data)=>setTableData(data))
    },[])

    const columns = useMemo(()=>[
        {field:"_id",headerName:"Id",width:60,flex:1, headerClassName:Style.header},
        {field:"name",headerName:"Nom",width:60,flex:1,headerClassName:Style.header},
        {field:"surname",headerName:"Prenom",width:60,flex:1,headerClassName:Style.header},
        {field:"class",headerName:"Classe",width:60,flex:1,headerClassName:Style.header},
        {field:"matricule",headerName:"Matricule",width:60,flex:1,headerClassName:Style.header},
        {field:"number",headerName:"Telephone",width:60,flex:1,headerClassName:Style.header}
        
    ],[])
    return(
        <div >
            <Box rclassName={Style.tableBox}>
                <DataGrid className={Style.table}
                    autoHeight
                    disableExtendRowFullWidth={true}
                    getRowId={(tableData) => tableData._id}
                    columns={columns}
                    rows={tableData}
                    headerHeight={70}
                    rowHeight={60}
                    pageSize={100}
                    rowsPerPageOptions={[5,10,20]}
                /> 
            </Box>
           
        </div>
    )
}
export default(Table)