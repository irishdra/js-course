console.log('module.js wow');

async function start() {
  return await Promise.resolve('hi :)');
}

start().then(console.log);
