//use arrow syntax and assign the function to sumtotal5000
sumtotal5000 = () => {
    var sum = 0;
    for (var i=1; i<=5000;i+=2) {
        sum +=i;
    };
    console.log(sum);
};

sumtotal5000();
