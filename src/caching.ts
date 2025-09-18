//Slow function
function slow(x: number) {
    console.log(x);
    return x;
}

/**
 * Adding a decorator
 * @param f
 */
function cachingDecorator(f: Function) {
    let map: Map<number, number> = new Map();
    return function (x: number) {
        if (map.has(x)) {
            //console.log(`Value ${x} returned from cache`);
            return map.get(x);
        }
        let result: number = f(x);
        map.set(x, result);
        //console.log(`Setting value of ${x} in cache`);
        return result;
    }
}

let fast = cachingDecorator(slow);

fast(1);
fast(2);
fast(3);
fast(4);
fast(1);
fast(4);
