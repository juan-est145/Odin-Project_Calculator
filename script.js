const operation = 
{
	fOperand : "",
	symbol : "",
	sOperand : "",
	result : NaN,
};

document.querySelector(".buttons").addEventListener("click", (e)=>
{
	if (e.target.classList.contains("btn-num"))
		processNum(e);
	else if (e.target.classList.contains("btn-symbol"))
		alert("You clicked a operand");
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

function processNum(e)
{
	const screen = document.querySelector(".screen");
	const value = operation.symbol === "" ? operation.fOperand += e.target.textContent : operation.sOperand += e.target.textContent;
	screen.textContent = value;
}