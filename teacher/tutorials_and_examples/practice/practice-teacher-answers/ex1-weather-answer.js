// Solution for Exercise 1
function weatherForecast() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      resolve(randomNum > 5 ? "Sunny" : "Cloudy");
    }, 2000);
  });
}

// Usage
weatherForecast().then(forecast => console.log(forecast));