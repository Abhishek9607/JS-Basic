function fib(n){
    if(n == 0) {
        console.log(0)
        return
    }
    if(n >= 1) {
        console.log(0);
        console.log(1)
    }
        let last = 1;
        let secondLast = 0;
        
        for(let i = 2; i <= n; i++) {
         let ans = secondLast+last;
            console.log(ans);
            secondLast = last
            last = ans;
    }
   
}
fib(5)