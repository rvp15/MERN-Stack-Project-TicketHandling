import { useSelector} from "react-redux";
import { CiEdit } from "react-icons/ci";

function DisplayTickets() {
    const { tickets } = useSelector((state) => state.ticket);
  return (
    <div>
     <h3> DisplayTickets</h3>
     {tickets?.map((item,i)=>{
        return(
            <ul>
                <li  className="display-ticket" key={item.user}>
                    <div>{item.detail}  <CiEdit/></div>
                </li>
            </ul>
        )
     })}
    </div>
  )
}

export default DisplayTickets
