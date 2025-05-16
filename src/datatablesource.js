import { dividerClasses } from "@mui/material"

export const userColoums = [
    {
        field: "id", headerName: "ID", width: 70
    },
    {field: "user", headerName:"USer", width: 230, renderCell: (params) =>{
        return(
            <div className="cellWithing">
                <img className="celling" src={params.row.img} alt="avatar" />
                {params.row.age}
            </div>
        )
    }},
    {
        field: "email",
        headerNanme: "Email",
        width: 230,

    },
    {
        field: "age",
        headerName: "Age",
        width: 100

    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus`}>{params.row.status}</div>
            )
        }
    }

] 

export const userRows = [
    {
        id: 1,
        username: "snow",
        img: "",
        status: "active",
        email: "issnow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "jamie lannister",
        img: "",
        status: "passive",
        email: "issnow@gmail.com",
        age: 42
    },
    {
        id: 3,
        username: "lannister",
        img: "",
        status: "active",
        email: "issnow@gmail.com",
        age: 30
    },
    {
        id: 4,
        username: "stark",
        img: "",
        status: "active",
        email: "issnow@gmail.com",
        age: 39
    },
    {
        id: 5,
        username: "targaryen",
        img: "",
        status: "active",
        email: "issnow@gmail.com",
        age: 26
    },
    {
        id: 6,
        username: "lannr",
        img: "",
        status: "active",
        email: "issnow@gmail.com",
        age: 34
    },
]