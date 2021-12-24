function init(start, end) {
  let output = '';
  const modCheck = modulus => i => i % modulus === 0;
  const mod3 = modCheck(3);
  const mod5 = modCheck(5);
  const hash = {
    [0]: '',
    [3]: 'Fizz',
    [5]: 'Buzz',
  };
  for (let i = start; i < end - start + 2; i++) {
    output += i + ' ';
    output += hash[mod3(i) ? 3 : 0];
    output += hash[mod5(i) ? 5 : 0];
    console.log(output);
    output = '';
  }
}
init(1, 60);
