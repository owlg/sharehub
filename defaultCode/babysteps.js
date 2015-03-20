var result = 0

 for (var i = 2; i < process.argv.length; i++)
   result += Number(process.argv[i])

 console.log(result)


 var sum=0;
 var i=0;
 process.argv.forEach(function(data){
 i++;
 if(i>=3){
   sum+=Number(data)
 }
 });

 console.log(sum);
