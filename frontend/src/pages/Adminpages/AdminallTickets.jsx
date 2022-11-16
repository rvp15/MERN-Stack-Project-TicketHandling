import axios from "axios";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";


export default function AdminallTickets() {
  const [tickets, setTickets] = useState(null);
  const [usersData,setUserData] =useState(null)
  const token =
    localStorage.getItem("token") !== null
      ? JSON.parse(localStorage.getItem("token"))
      : "";

  /////////////////////////////////////////
  const axiosAuth = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //////////////////////////////
  const getallTickets = async () => {
    try {
      const response = await axiosAuth.get("/admin/getallticket",token);

      setTickets(response.data.tickets);
      setUserData(response.data.usersData);
      
  
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tickets)
  console.log(usersData)
  useEffect(() => {
    getallTickets();
  }, []);

  return (
    <div>
    <h1>All Tickets</h1>
    <MDBTable align="middle">
      <MDBTableHead className="tablehead" blue-gradient>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Tenant Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Unit Number</th>
        </tr>
      </MDBTableHead >
      {tickets?.map((item, i) => {
        return (
          <MDBTableBody key={item._id}>
            <tr className="xxx">
              <th scope="row">#</th>
              <td className="xx" >{item.category}</td>
            
              {item.detail.map((des, i) => {
                return (
                  <ul>
                    <li>{des.description}</li>
                  </ul>
                );
              })}

              <td>{item.status}</td>

              
              {usersData.map((use)=>{
                return  <ul>
                <li>{use.name}</li>
              </ul>
              })}
             <td>
             {usersData.map((use)=>{
                return  <ul>
                <li>{use.phnumber}</li>
              </ul>
              })}
             </td>
             <td>
             {usersData.map((use)=>{
                return  <ul>
                <li>{use.unitnum}</li>
              </ul>
              })}
             </td>
              <td
                onClick={(e) => {
                  // handleDelete(item);
                }}
              ></td>
            </tr>
          </MDBTableBody>
        );
      })}
    </MDBTable>
  </div>
  );
}
