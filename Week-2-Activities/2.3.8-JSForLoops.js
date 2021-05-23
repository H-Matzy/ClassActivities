function totalLoop(num) {
  for (let i = num; i < 100; i++) {
    num += i + 1;
    console.log(num);
  }
};
totalLoop(99);
