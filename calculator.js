function calculator(wish)
{
    var operator=prompt('Enter what you want to do + - * /');
    var firstNumber=parseInt(prompt('Enter the first number'));
    var secondNumber=parseInt(prompt('Enter the second number'));
    if(operator=='+')
    {
        var result=(firstNumber+secondNumber);
        alert('Your addition is '+result);
        wish=prompt('Do you wish to continue then write YES or else NO');
        return wish;
    }
    else if(operator=='-')
    {
        var result=(firstNumber-secondNumber);
        alert('Your subtraction is '+result);
        wish=prompt('Do you wish to continue then write YES or else NO');
        return wish;
    }
    else if(operator=='*')
    {
        var result=(firstNumber*secondNumber);
        alert('Your multification is '+result);
        wish=prompt('Do you wish to continue then write YES or else NO');
        return wish;
    }
    else if(operator=='/')
    {
        var result=(firstNumber/secondNumber);
        alert('Your addition is '+result);
        wish=prompt('Do you wish to continue then write YES or else NO');
        return wish;
    }
    else
    {
        alert('You entered wrong operator')
        wish='YES';
        return wish;
    }
}

alert('this is personal calculator');
var wish=prompt('Do you wish to continue then write YES or else NO');
while(wish=='YES')
{
    wish=calculator(wish);
}
