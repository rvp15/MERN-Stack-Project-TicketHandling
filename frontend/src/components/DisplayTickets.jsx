import { useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function DisplayTickets() {
  const { tickets } = useSelector((state) => state.ticket);

  return (
    <div>
      <h3> Submitted Tickets</h3>
      {tickets?.map((item, i) => {
        return (
          <ul className="display-tik-section">
            <li className="display-ticket" key={item.user}>
            <div>  <span> Created on : {item.detail[0].date.toLocaleString()}</span> 
             <Link to={`/ticket/${item._id}`}> <button className='edit-btn'><AiOutlineEdit/></button></Link></div>
            
              {item.detail?.map((eachupdate) => {
               
                return (
                  <ul><hr />
                    <li key={eachupdate._id}>{eachupdate.description}<span> ,update at :{eachupdate.date}</span></li>
                  </ul>
                );
              })}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default DisplayTickets;
