//Setting Content
/*
<div id ="checkme" >
<h>Some Heading </h>
</div>
*/

$(fucntion(){
$("#checkme").text("this heading);
});
//----------------


$(fucntion(){
  $("#iddemo").html("<ul><li>a </li> </ul>");
  });

/*
<p id= "nameadd" > what's up </p>

*/

$(function(){
    $("#nameadd").append("Mulan");
});

/*
<p>This is how we do </p>

p{
background-color: yellow;
color:white;
}

*/


$(function(){
    alert($("p").css("background-color"));
    $("p").css("background-color", "red");
});





