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
		proccesOperator(e);
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
	const upperScreen = document.querySelector(".upper-screen");
	const number = operation.symbol === "" ? operation.fOperand += e.target.textContent : operation.sOperand += e.target.textContent;
	operation.symbol === "" ? upperScreen.textContent = number : upperScreen.textContent += number[number.length - 1];
}

function proccesOperator(e)
{
	const upperScreen = document.querySelector(".upper-screen");
	const keys = 
	{
		operand : ['+', '-','*','÷'],
		negative : '±',
		clear : "AC",
		erase : "Del",
		dot : '.',
		equal : '='
	};
	if (keys.operand.includes(e.target.textContent) === true)
	{
		operation.symbol = e.target.textContent;
		upperScreen.textContent += ` ${e.target.textContent} `;
	}
		
}