function init(start, end)
{
  var i = 0;
  var output = '';
  function modCheck(modulus)
  {
    var remainder = 0;
    return (index) => { return index % modulus === remainder; }
  }
  mod3 = modCheck(3);
  mod5 = modCheck(5);
  for (i = start; i < end - start + 2; i++)
  {
    output += i + ' ';
    if (mod3(i))
    {
      output += 'Fizz';
    }
    if (mod5(i))
    {
      output += 'Buzz';
    }
    console.log(output);
    output = '';
  }
}
init(1, 60);