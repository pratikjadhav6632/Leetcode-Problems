/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let catche={}
    return function(...args) {
        let n=JSON.stringify(args);
        if(n in catche){
            return catche[n];
        }else{
            let result=fn.apply(this,args);
            catche[n]=result;
            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */