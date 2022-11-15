import axios from "axios";
import { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";


export default function AdminallTickets() {
  const [tickets, setTickets] = useState([]);
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
      const response = await axiosAuth.get("/admin/getallticket", token);
      setTickets(response.data);
      console.log(tickets);
      //   dispatch(alltickets(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallTickets();
  }, []);

  const handleDelete = async (item) => {
    // console.log(item._id);
    const id = item._id;
    try {
      const response = await axiosAuth.delete(`/admin/delete/${id}`, token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>All Tickets</h1>
      <MDBTable align="middle">
        <MDBTableHead light>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>

            <th scope="col">Status</th>
          </tr>
        </MDBTableHead>
        {tickets.map((item, i) => {
          return (
            <MDBTableBody key={item._id}>
              <tr>
                <th scope="row">#</th>
                <td>{item.category}</td>
                <br />
                {item.detail.map((des, i) => {
                  return (
                    <ul>
                      <li>{des.description}</li>
                    </ul>
                  );
                })}

                <td>{item.status}</td>
                <td
                  onClick={(e) => {
                    handleDelete(item);
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
