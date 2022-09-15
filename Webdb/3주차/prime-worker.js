const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

const min = 2;
let primes = [];

function findPrimes(start, range) {  //에라토스테네스의 체 알고리즘으로 소수찾기
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

if (isMainThread) {
  const max = 10000000;
  const threadCount = 8; //8개의 쓰레드 생산할것이다
  const threads = new Set();
  const range = Math.ceil((max - min) / threadCount); //2에서 천만까지 8개의 쓰레드에게 범위 할당
  let start = min;
  console.time("prime"); //시작
  for (let i = 0; i < threadCount - 1; i++) { // 1번 쓰레드부터 7번까지 반복
    const wStart = start;
    threads.add(
      new Worker(__filename, { workerData: { start: wStart, range } })
        //각각 쓰레드에 시작값과 끝값이 들어가면서 각자의 쓰레드 초기데이터에 범위를 준다.
    );
    start += range;
  }
  threads.add( //마지막 쓰레드
    new Worker(__filename, {
      workerData: { start, range: range + ((max - min + 1) % threadCount) },
    })
  );
  for (let worker of threads) {
    worker.on("error", (err) => { //만약 에러가 뜨면 대처 방법
      throw err;
    });
    worker.on("exit", () => {
      threads.delete(worker); //쓰레드 한개 끝날때마다 삭제
      if (threads.size === 0) {  //사이즈가 0이면 모든 일이 끝났다.
        console.timeEnd("prime"); //끝
        console.log(primes.length); //시작과 끝의 사이에 얼마나 걸렸나
      }
    });
    worker.on("message", (msg) => { //메세지는 쓰레드들이 구한 소수값
      primes = primes.concat(msg); //8개의 쓰레드가 구한 값을 합쳐준다.
    });
  }
} else {
  findPrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}
