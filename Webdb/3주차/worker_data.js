const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // 메인 쓰레드
  const threads = new Set();
  //Set은 배열인데 중복되지 않는 배열
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 }, //초기 데이터
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },//초기 데이터
    })
  );
  for (let worker of threads) {
    worker.on("message", (message) => console.log("from worker", message));
    worker.on("exit", () => {
      threads.delete(worker); //워커가 끝났을때 삭제 (한개 끝날때마다 삭제)
      //끝났을때 Set에서 삭제하기 위함
      if (threads.size === 0) { //모든 워커가 종료됐음을 의미(일이 끝남)
        console.log("job done");
      }
    });
  }
} else {
  // 워커일 때
  const data = workerData; //워커데이터에 보냈던 데이터를 받아온다.
  parentPort.postMessage(data.start + 100); //객체를 보내서 data가 객체가 된다.
}
