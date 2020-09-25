var Studentpromise=d3.json("classData.json");

var StuSucc=function(classData)
{
    console.log("Collection Success",classData);
    MakeGraph(classData);
    SetBanner("Penguin Stats Lab")

}

var StuFail=function(classData)
{
    console.log("Collection failure",ErrorMsg)
}

Studentpromise.then(StuSucc,StuFail);
//Various Functions
   var homeworkMean = function(penguin)
    {
        var getGradeHW = function(homework)
            {
                return homework.grade
            }
        var homeworkGrade = penguin.homework.map(getGradeHW)
        return homeworkGrade
    }
//   Quizzes
   var QM=function(Pengu)
   {
        var getQgrade =function(quizes)
    {
    return quizes.grade
    }
    var Quizgrades
    =Pengu.quizes.map(getQgrade)
         
        return Quizgrades
   }
//   changes banner
var SetBanner=function(message){
    d3.select("#banner")
    .text(message);
}
var drawPlot=function(classData,screen,xScale,yScale)
{

//    first graph
    d3.select("#first")
    .on("click",function(Pengu){
        var svg = d3.select("svg");
svg.selectAll("*").remove();
        

        SetBanner("Final vs HW Mean")
    
    d3.select("#graph")
    .selectAll("circle")
    .data(classData)
    .enter()
    .append("circle")
    .attr("cx",function(Pengu)
          
    {
        return xScale(d3.mean(homeworkMean(Pengu)))
        ;
    })
    .attr("cy",function(Pengu)
          
        {
    return yScale(Pengu.final[0].grade)}
         )
    
    .attr("r",3)

 // tooltip
 .on("mouseenter",function(pengu)
{
    var xPos=d3.event.pageX;
    var yPos=d3.event.pageY;
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        .append("img")
        .attr("src","imgs/"+pengu.picture)
    
    })
 
.on("mouseout",function(pengu){
   d3.select("#tooltip")
        .select("img")
       .remove()
       
        
   })})
//    Second Graph
     d3.select("#second")
    .on("click",function(Pengu){
           var svg = d3.select("svg");
         
svg.selectAll("*").remove()

 SetBanner("Quiz Mean vs HW Mean")    
    d3.select("#graph")
    .selectAll("circle")
    .data(classData)
    .enter()
    .append("circle")
    .attr("cx",function(Pengu)
    {
        return xScale(d3.mean(homeworkMean(Pengu)));
    })
    .attr("cy",function(Pengu)
          
        {
    return yScale(d3.mean(QM(Pengu)))}
         )
    
    .attr("r",3)

 // tooltip
 .on("mouseenter",function(pengu)
{
    var xPos=d3.event.pageX;
    var yPos=d3.event.pageY;
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        .append("img")
        .attr("src","imgs/"+pengu.picture)
    
    })
 
.on("mouseout",function(pengu){
   d3.select("#tooltip")
        .select("img").remove()
       
        
   })})
}

var MakeGraph=function(classData)
{
    var screen={ width:600, height:600}
    
    d3.select("#graph")
    .attr("width",screen.width)
    .attr("height",screen.height)
    
    var xScale=d3.scaleLinear()
    .domain([0,100])
    .range([0,screen.width])
    
      var yScale=d3.scaleLinear()
    .domain([0,100])
    .range([screen.height,0])
 
 

 drawPlot(classData,screen,xScale,yScale);
    }







