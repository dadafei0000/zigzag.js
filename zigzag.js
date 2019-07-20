var convert = function(s, numRows) {
   if (numRows<=1) return s;
    let res='';
    let len=s.length;
    let dis=numRows*2-2;
    for(let i=0; i<len;i+=dis){
        res+=s.charAt(i);
    }
    for (let i=1;i<numRows-1;i++){
        let tempDis=2*i;
        for(let j=i; j<len;j+=tempDis){
            res+=s.charAt(j);
            tempDis=dis-tempDis;
        
        }
    }
    for(let i=numRows-1;i<len;i+=dis){
        res+=s.charAt(i);
    
    }
    return res;
    
};    
