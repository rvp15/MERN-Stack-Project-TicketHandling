import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch} from "react-redux";
import { createticket , alltickets } from "../../features/tickets/ticketSlice";
import DisplayTickets from "../../components/DisplayTickets";

const token =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : "";

const axiosAuth = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

function MaintanceRequest() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
  
    category: "",
    detail: "",
  });
  const {  category, detail } = form;
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !category || !detail) {
      toast.error("Please enter all fields");
    } else {
      const ticketdetail = { category, detail };
      try {
        const response = await axiosAuth.post("/ticket", ticketdetail, token);
        console.log(response.data);
        dispatch(createticket(response.data));
      } catch (error) {}
    }
  };

  const getalltickets = async()=>{
    try{
      const response = await axiosAuth.get("/ticket",token);
  // console.log(response.data)
  dispatch(alltickets(response.data));
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
  getalltickets()
  },[])

  return (
    <>
      <section className="heading">
        <h3>Submit a Maintance Request Ticket</h3>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <select
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={category}
              placeholder="Select Category"
              onChange={handleChange}
            >
              <option></option>
              <option>Plumbing</option>
              <option>Electric</option>
              <option>Cosmetic repair</option>
              <option>Other</option>
            </select>
            <textarea
              type="detail"
              className="form-control"
              id="detail"
              name="detail"
              value={detail}
              placeholder="Describe your complaint"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
      <DisplayTickets/>
    </>
  );
}

export default MaintanceRequest;
