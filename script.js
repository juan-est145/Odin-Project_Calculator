const operation = 
{
	fOperand : "",
	symbol : "",
	sOperand : "",
	result : NaN,
};

const upperScreen = document.querySelector(".upper-screen");
const lowerScreen = document.querySelector(".lower-screen");

//The handler must handle displaying the final result or the result of the previous operation
const handler = 
{
	set(target, prop, value)
	{
		if (prop === "symbol")
		{
			if (target[prop] == "")
			{
				target[prop] = value;
				target.fOperand === ""? upperScreen.textContent += ` ${value} ` : upperScreen.textContent = `${target.fOperand} ${value} `;
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
			target[prop] = operate(target);
			upperScreen.textContent = "";
			lowerScreen.textContent = target[prop];
			target.fOperand = parseFloat(target[prop]);
			target.symbol = "";
			target.sOperand = "";
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
	else if (operation.symbol === '÷')
		return (+operation.fOperand / +operation.sOperand);
}

function processNum(e)
{
	if (isNaN(operation.result) === false && operation.fOperand !== "" && lowerScreen.textContent !== '0' && operation.symbol === "")
	{
		operation.fOperand = "";
		operation.result = NaN;
		lowerScreen.textContent = '0';
	}
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
	else if (butn_symbol.dot === e.target.textContent)
		decimalPoint();
}

function erase()
{
	operation.fOperand = "";
	operation.sOperand = "";
	operation.symbol = "";
	operation.result = NaN;
	upperScreen.textContent = "";
	lowerScreen.textContent = "0";
}

function decimalPoint()
{
	if (operation.fOperand !== "" && operation.sOperand === "" && operation.fOperand.includes('.') === false)
		operation.fOperand += '.';
	else if (operation.sOperand !== "" && operation.fOperand !== "" && operation.sOperand.includes('.') === false)
		operation.sOperand += '.';
	else
		return ;
	upperScreen.textContent += '.';
}