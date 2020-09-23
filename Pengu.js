var Studentpromise=d3.json("classData.json");

var StuSucc=function(classData)
{
    console.log("Collection Success",classData);
    MakeGraph(classData)
//    console.log(classData.final)
}

var StuFail=function(classData)
{
    console.log("Collection failure",ErrorMsg)
}

Studentpromise.then(StuSucc,StuFail);

var drawPlot=function(classData,screen,xScale,yScale)
{console.log(classData)
    
    d3.select("#graph")
    .selectAll("circle")
    .data(classData)
    .enter()
    .append("circle")
    .attr("cx",function(Pengu)
    {
        console.log(Pengu)
        return xScale(d3.mean(homeworkGrade));
    })
    .attr("cy",function(Pengu)
          
        {
    return yScale(Pengu.final[0].grade)}
         )
    
    .attr("r",2)
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
      console.log("call draw plot")
    var homeworkMean = function(penguin)
    {
        console.log("hello")
        var getGradeHW = function(homework)
            {
                return homework.grade
            }
        var homeworkGrade = penguin.homework.map(getGradeHW)
        return d3.mean(homeworkGrade)
        console.log(d3.mean(homeworkGrade))
    }
 drawPlot(classData,screen,xScale,yScale);
    

    

    }







