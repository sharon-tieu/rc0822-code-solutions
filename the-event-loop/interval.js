let count = 3;

const blastOff = setInterval(() => {
  if (count > 0) {
    console.log(count--);
  } else {
    clearInterval(blastOff);
    console.log('blast off!');
  }
}, 1000);
