const operation = 
{
	fOperand : "",
	symbol : "",
	sOperand : ""
};

document.querySelector(".buttons").addEventListener("click", (e)=>
{
	if (e.target.classList.contains("btn-num"))
		alert("You clicked a number");
	else if (e.target.classList.contains("btn-symbol"))
		alert("You clicked a operand");
	else
		alert("Here I am");
});


function operate(operation)
{
	if (operation.symbol === '+')
		return (+operation.fOperand + +operation.sOperand);
	else if (operation.symbol === '-')
		return (+operation.fOperand - +operation.sOperand);
	else if (operation.symbol === '*')
		return (+operation.fOperand * +operation.sOperand);
	else if (operation.symbol === '/')
		return (+operation.fOperand / +operation.sOperand);
}