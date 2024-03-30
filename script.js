const operation = 
{
	fOperand : "",
	symbol : "",
	sOperand : "",
	result : NaN,
};

const handler = 
{
	set(target, prop, value)
	{
		const upperScreen = document.querySelector(".upper-screen");
		if (prop === "fOperand")
		{
			target[prop] = value;
			upperScreen.textContent = value;
		}
			
		else if (prop === "symbol")
		{
			target[prop] = value;
			upperScreen.textContent += ` ${value} `;
		}
			
		else if (prop === "sOperand")
		{
			target[prop] = value;
			upperScreen.textContent += value[value.length - 1];
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
	proxyOperation.symbol === "" ? proxyOperation.fOperand += e.target.textContent : proxyOperation.sOperand += e.target.textContent;
}

function proccesOperator(e)
{
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
		proxyOperation.symbol = e.target.textContent;
}