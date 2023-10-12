function forEachPrime(number) {
    
    if (number < 2) 
      return false;
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) 
          return false;
    }
    return true;
}

function printPrimeNumbers(max) {
    const primes = [];
    for (let i = 2; i <= max; i++) {
        if (forEachPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

const maxNumber = 30; 
const primeNumbers = printPrimeNumbers(maxNumber);

primeNumbers.forEach(function(prime) {
    
    console.log(prime);
});

