function pattern(n) {
    for(let row = 1; row <= n; row++) {
        let str = "";
        let spaces = n- row;
        for(let i = 1; i <= spaces; i++) {
            str += " ";
        }
        let counter = 1;
        for(let j = 1; j <= row; j++) {
            str += counter;
            counter++
        }
        console.log(str);
    }
}

pattern(8);

/**
 *     1
      12
     123
    1234
   12345
  123456
 1234567
12345678

 */