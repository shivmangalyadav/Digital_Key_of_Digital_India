




 let words=document.getElementsByTagName("div");
 // var thisVariableContainsAlltheWordsOfContent=$("span");
  var wordsOfPage=document.getElementsByTagName("div");
 // console.log(wordsOfPage[0].textContent);

  var wordsline="";
  var className="line1"; //line1
  var y=0;
  
  //adding unique class names
  for(var i=1;i<wordsOfPage.length;i++)
  {
   // wordsline=wordsOfPage[0].textContent;
   //var className="line";
    
  //  if(i==0)
  //  {

  //  }
  //console.log((wordsOfPage[i].style.getPropertyValue("top") != wordsOfPage[i-1].style.getPropertyValue("top")) && (wordsOfPage[i].style.getPropertyValue("top") != wordsOfPage[i+1].style.getPropertyValue("top")) == true);

  if(i===wordsOfPage.length-1)
  {
    y++;
    className="line";
    className=className+y;
    wordsOfPage[i].classList.add(className);
      break;
  }
  else if(((wordsOfPage[i].style.getPropertyValue("top") != wordsOfPage[i-1].style.getPropertyValue("top")) && (wordsOfPage[i].style.getPropertyValue("top") != wordsOfPage[i+1].style.getPropertyValue("top"))) == true)
   {
   
    y++;
    className="line";
    className=className+y;
    wordsOfPage[i].classList.add(className); 

   }
  else if(wordsOfPage[i-1].style.getPropertyValue("top") === wordsOfPage[i].style.getPropertyValue("top") ){

      wordsOfPage[i-1].classList.add(className);
      wordsOfPage[i].classList.add(className);

      
    }
    else{
      y++;
      className="line";
      className=className+y; //line0, line1....
     
    }
  }

  
  console.log(wordsOfPage[wordsOfPage.length-1].textContent);
  console.log(y);

  var count=y; //count contains number of lines


  var collection=[];
    var abcval=" ";
    var countLine=1;
  for(var u=0;u<=count;u++)
  {
    
   
    var classofLine="line"+countLine;
    console.log(classofLine);
    console.log(document.getElementsByClassName(classofLine).textContent);
    var abc=document.getElementsByClassName(classofLine);

    
   //console.log(abc.length);
   for(var z=0;z<abc.length;z++)
   {
     console.log(z);
     abcval+=abc[z].textContent+" ";
   }

    abcval+="+";

    countLine++;
   
   //console.log(abcval);

  }



  //localStorage.removeItem('thisVariableContainData');
  localStorage.setItem("VariableContainData",abcval);


  console.log(abcval);

  // let abc=document.getElementsByClassName("add1234");
  // let collection=[];
  // let abcval=" ";
  // console.log(abc.length);
  // for(let z=0;z<abc.length;z++){
  //   abcval+=abc[z].textContent+" ";
  // }
  // console.log(abcval);
  
    //new method
    /*let x;
    let y;
    let z=1;
    for(let i=1;i<wordsOfPage.length;i++){

      x=wordsOfPage[i-1].style.getPropertyValue("top");
      y=wordsOfPage[i].style.getPropertyValue("top");
      if(x===y){
        wordsOfPage[i-1].classList.add(className+z);
        wordsOfPage[i].classList.add(className+z);
        continue;

      }
      else {
        z++;
        wordsOfPage[i].classList.add(className+z);
      }
      




    }*/

    

    //let ab="A daughter is born "; 






  



  //console.log(wordsOfPage[6].style.getPropertyValue("top"));
 // console.log("hi");

/*var aStringVariable="";
// console.log(thisVariableContainsAlltheWordsOfContent[4].textContent)
  for(i in wordsOfPage)
 {
   //console.log(thisVariableContainsAlltheWordsOfContent[i].textContent);

   if(console.log(wordsOfPage[i].textContent)!=="undefined")
   {
    console.log(wordsOfPage[i].textContent);
    aStringVariable+="+";
    aStringVariable+=wordsOfPage[i].textContent;
   }
  
 }

 /* const filteredArr = str.filter(function (elem) //function to filter undefined values
 {
    return elem !== undefined;
  }); */
//var data="5";

//console.log(x[].textContent);

/* var str1="satya";
var str2="barik";
str1+=str2;
console.log(str1); */

/*console.log(aStringVariable);


localStorage.setItem("thisVariableContainData",aStringVariable); */

//module.exports= aStringVariable;



var string_to_array = function (str1) {
  return str1.trim().split("+");
};

var data=string_to_array(abcval);
var filteredArr = data.filter(function (elem) {
  return elem !== undefined;
});

let withReg=[];
for(i in filteredArr)
{
  withReg[i]=filteredArr[i].replace(/[0-9.]/g,'');
  

}

for(let xy=0;xy<withReg.length;xy++){
  console.log(withReg[xy].trim());
  addHyperLinkToeachWOrd(withReg[xy].trim());
}













//to add HyperLink to every encountered word
function addHyperLinkToeachWOrd(string1){
  let allContents=string1;
  
  let splitContent=allContents.split(" ");
  for(i=0;i<words.length;i++){
      if(words[i].textContent===splitContent[0]){
  
          var checkString="";
              for(let r=0 ;r<splitContent.length;r++){
                  //console.log("Coming Inside loop");
                  console.log(words[i+r].textContent+"printing");
                  console.log(splitContent[r]+" text-content");
                  
  
                  if(splitContent[r]===words[i+r].textContent){
                      //count++;
                      //console.log(count);
                      console.log("inside if"+splitContent[r]);
                      checkString+=splitContent[r]+" ";
  
                  }
                 
                
              }
              console.log(checkString+" this is check string");
  
  
              if(checkString===(allContents+" ")){
                  /*splitContent.sort();
                  let id=splitContent[0]+101;
                  words[i].classList.add("OkAddingClass")
                  console.log(words[i]);
                  console.log("added ");*/
                  splitContent.reverse();
  
                  var link='pdf1.html#'+splitContent[0]+101;
                  //var newHtml = $(words[i].getAttribute("id")).html().replace(words[i].textContent, 
                     // '<a class="wikilink" title="here is a link to Wikipedia" href="'+link +'">' + words[i].textContent + '</a>');
                  //$(words[i].getAttribute("id")).html(newHtml);
                  for(let r=0 ;r<splitContent.length;r++){
                  let text=words[i+r].textContent;
              
                 words[i+r].innerHTML='<a  href="'+link +'">' + text+ '</a>';
                  }
              }
              
  
          }
  
      }
  }
  
  //end of the function

