const operation = 
{
	fOperand : 0,
	symbol : '+',
	sOperand : 0
};


function operate(operation)
{
	if (operation.symbol === '+')
		return (operation.fOperand + operation.sOperand);
	else if (operation.symbol === '-')
		return (operation.fOperand - operation.sOperand);
	else if (operation.symbol === '*')
		return (operation.fOperand * operation.sOperand);
	else if (operation.symbol === '/')
		return (operation.fOperand / operation.sOperand);
}