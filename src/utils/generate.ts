const MAX_LEN=5;

 export function generate(){
     let ans= "" ;
      const subnet= "123456789qwertyuiopasdfghjklzxcvbnm";
      for(  let i  = 0 ; i<= MAX_LEN; i++){
         ans +=  subnet[Math.floor(Math.random() * subnet.length)];

      }
       return ans

 }