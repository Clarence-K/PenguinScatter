var whales = [
    {name:"killer",weight:10,rating:43,img:"kw.jpg"},
    {name:"blue",weight:122,rating:17,img:"bw.jpg"},
    {name:"humpback",weight:32,rating:23,img:"hw.jpg"},
    {name:"grey",weight:18,rating:8,img:"gw.jpg"},
]

var whalelbs=function(weight)
{
return weight.weight
}
var Avglbs=whales.map(whalelbs)
console.log(d3.mean(Avglbs))

var showclick=function(){
    return console.log("CS ROCKS")
}

d3.select("#button1")
.on("click",showclick)


          
          d3.select("body")
    .append("ol")
  .selectAll("li")
  .data(whales)
  .enter()
  .append("li")

  .text(whalename=function(name){
                            return name.name
                            })

//if series for dangerous
var rows = d3.select("body")

  .selectAll("p")
  .data(whales)
  .enter()
    .append("p")
    .classed("Dangerous",function(weight)
    {
        if(weight.rating>20)
        {
            return whales,true;
        }
        else   
        {
            return false;
        }
    })


var colums=d3.select("table")
.selectAll("tr")
.data(whales)
.enter()
.append("tr")

rows.append("td")
.text(function(whale){return whale.name})

rows.append("td")
.text(function(whale){return whale.weight+ " "})

rows.append("td")
.text(function(whale){return whale.rating})

//rows.append("td")
//    .append("img")
//.attr("src",function(whale){return "imgs/"+whale.photo})
.append("td")
.text(function(whale){
return whale.img})
