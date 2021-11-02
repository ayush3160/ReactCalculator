import React,{useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

function App (){

  const[num1,setNum1] = useState(0)
  const[num2,setNum2] = useState(0)
  const[total,setTotal] = useState(0)

  const handleIncrease = () => {
    setTotal(num1+num2)
  }

  const handleMultiplication = () => {
    setTotal(num1*num2)
  }

  const handleDivision = () => {
    setTotal(num1/num2)
  }

  const handleDecrease = () => {
    setTotal(num1-num2)
  }

  const handleNum1 = (e) => {
    setNum1(Number(+e.target.value))
  }

  const handleNum2 = (e) => {
    setNum2(Number(+e.target.value))
  }


  return(<>
    <div className="form-group row">
      <div className="col-xs-2">
      <input type="number" placeholder="0" onChange={handleNum1} className="m-4" id="ex-1"/>
      <input type="number" placeholder="0" onChange={handleNum2} className="m-4" id="ex-1"/>
    </div>
    </div>
    <br/> <br/>
    <div>
    <button className="btn btn-outline-success m-2 p-2" onClick = {handleIncrease} >Add</button>
    <button className="btn btn-outline-success m-2 p-2 " onClick = {handleDecrease} >Subtraction</button>
    <button className="btn btn-outline-success m-2 p-2" onClick = {handleMultiplication} >Multiply</button>
    <button className="btn btn-outline-success m-2 p-2" onClick = {handleDivision} >Division</button>
    
    </div>
    <h3 className="ans"> Your Answer is {total}</h3>
    </>
  )
}


export default App