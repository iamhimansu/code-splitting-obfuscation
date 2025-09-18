// we'll make worker.slow caching
let slowWorker = {
    someMethod() {
        return 1;
    },

    slow(x: number) {
        // scary CPU-heavy task here
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

let workerCachingDecorator = function (f: Function) {
    let map: Map<number, number> = new Map();
    return function (x: number) {
        if (map.has(x)) {
            console.log(`Serving value of ${x} from cache`);
            return map.get(x);
        }
        let result = f.call(this, x);
        map.set(x, result);
        console.log(`Adding value of ${x} in cache`);
        return result;
    }
}

slowWorker.slow  = workerCachingDecorator(slowWorker.slow);

slowWorker.slow(1);
slowWorker.slow(1);
slowWorker.slow(1);
slowWorker.slow(1);