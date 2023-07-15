function binaryFingers(binString) {
    const fingers = ['Pinkie','Ring','Middle','Index','Thumb'];
    let f = '0'.repeat(5-binString.length)+binString;
    let ans = [];
    f.split(``).map((v,i)=>v==='1'?ans.push(fingers[i]):v)
    return ans
}