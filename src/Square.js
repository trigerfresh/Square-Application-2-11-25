import {useState, useRef} from "react";

function Square(){

	const rNum = useRef();
	
	const [num, setNum] = useState("");
	const [msg, setMsg] = useState("");
	
	const hNum = (event)=>{setNum(event.target.value)}

	const check =(event)=>{
		event.preventDefault();

		if(num === ""){
			alert("Please enter number");
			setMsg("");
			rNum.current.focus();
			return;
		}
	
		let n = parseFloat(num);
		let r = n*n;
		setMsg(r.toFixed(2));
		
	}

return(
<>
	<center>
		<h1>Square Application</h1>
		<form onSubmit = {check}>
			<input type = "number" ref = {rNum} onChange = {hNum} placeholder = "Enter number here"/><br/><br/>
			<input type = "submit" value = "Find Square"/>
		</form>
		<h2>{msg}</h2>
	</center>
</>
)
}

export default Square;