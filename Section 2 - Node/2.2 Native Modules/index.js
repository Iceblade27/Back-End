const fs = require("fs");

function sortmessage(path){
    fs.readFile(path,"utf8", (err,data)=>{
        const lines = data.split(/\r?\n/);
    
        let sortedLines = lines
          .map(line => {
            const match = line.match(/^(\d+)\s*(.+)/);
            return {
              number: match ? parseInt(match[1], 10) : null,
              text: match && match[2] ? match[2] : ''
            };
          })
          .sort((a, b) => a.number - b.number)
          .map(item => item.text);   
          
          var index = 0;
          var step = 2;
          var returnString = "";

        while(index<sortedLines.length){
            returnString = returnString + sortedLines[index]+ " ";
            index = index + step;
            step = step + 1; 
        }
        return returnString;
    });
}

console.log(sortmessage("message.txt"));


