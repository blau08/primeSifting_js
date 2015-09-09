var prime_sifter = function(number) {
  var primes = []
  var non_primes = []

  for(var i = 2; i <= number; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      primes.push(i);
    } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      non_primes.push(i);
    } else {
      primes.push(i);
    }
  };

  return primes;
};
