const operation = 
{
	fOperand : "",
	symbol : "",
	sOperand : "",
	result : NaN,
};

//The handler must handle displaying the final result or the result of the previous operation
const handler = 
{
	set(target, prop, value)
	{
		const upperScreen = document.querySelector(".upper-screen");
		if (prop === "symbol")
		{
			if (target[prop] == "")
			{
				target[prop] = value;
				upperScreen.textContent += ` ${value} `;
			}
			else
			{
				target.fOperand = operate(target);
				target[prop] = value;
				target.sOperand = "";
				upperScreen.textContent = `${target.fOperand} ${value} `
			}
		}
		else if (prop === "result")
		{
			const lowerScreen = document.querySelector(".lower-screen");
			target[prop] = operate(target);
			upperScreen.textContent = "";
			lowerScreen.textContent = target[prop];
			target.fOperand = parseFloat(target[prop]);
			target.symbol = "";
			target.sOperand = "";
			target[prop] = NaN;
		}
	},
};

const proxyOperation = new Proxy(operation, handler);

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
	operation.symbol === "" ? operation.fOperand += e.target.textContent : operation.sOperand += e.target.textContent;
	operation.symbol === "" ? upperScreen.textContent += e.target.textContent : upperScreen.textContent += e.target.textContent;
}

function proccesOperator(e)
{
	const butn_symbol = 
	{
		operand : ['+', '-','*','÷'],
		negative : '±',
		clear : "AC",
		erase : "Del",
		dot : '.',
		equal : '='
	};
	if (butn_symbol.operand.includes(e.target.textContent) === true && proxyOperation.fOperand != "")
		proxyOperation.symbol = e.target.textContent;
	else if (butn_symbol.equal === e.target.textContent)
		proxyOperation.result = 0;
	else if (butn_symbol.clear === e.target.textContent)
		erase();

}

function erase()
{
	const upperScreen = document.querySelector(".upper-screen");
	const lowerScreen = document.querySelector(".lower-screen");
	operation.fOperand = "";
	operation.sOperand = "";
	operation.symbol = "";
	operation.result = NaN;
	upperScreen.textContent = "";
	lowerScreen.textContent = "0";
}