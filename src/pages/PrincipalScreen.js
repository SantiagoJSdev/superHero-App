import { useDispatch } from "react-redux";
import { addData } from "../action/dataAction";



export const PrincipalScreen = () => {


  const dispatch = useDispatch();
const handleClick = () => {
  const data = {
    name: 'santiago'
  }
  dispatch(addData(data))
}
  
  return (
    <>
    <h1>PrincipalScreen</h1>
    <br>
    </br>
    <button onClick={handleClick}>add</button>
    </>
  )
}
