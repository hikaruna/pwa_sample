console.log('hello world!');

const wait4Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
}

const testAsync = async () => {
  console.log('waiting 4 sedonds ...');
  await wait4Seconds();
  console.log('done!');
}

testAsync();