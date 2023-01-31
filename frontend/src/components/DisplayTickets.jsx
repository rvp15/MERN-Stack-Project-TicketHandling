import { useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function DisplayTickets() {
  const { tickets } = useSelector((state) => state.ticket);
  console.log(tickets);
  return (
    <div>
      <h3> Submitted Tickets</h3>
      {tickets?.map((item, i) => {
        return (
          <ul className="display-tik-section">
            <li className="display-ticket" key={item.user}>
              <div className="ticket-list">
               <div className="align-status">
                <div>Category: {item.category}</div>
                 <div className="status"> status: {item.status}</div>
                <Link to={`/ticket/${item._id}`}> <AiOutlineEdit /> </Link></div>
                {item.detail?.map((eachupdate) => {
                  return (
                    <ul>
                      <hr />
                      <li key={eachupdate._id}>
                        {eachupdate.description}
                        <span> ,update at :{eachupdate.date}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default DisplayTickets;
