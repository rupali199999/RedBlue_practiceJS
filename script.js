var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details){
    var rectanglePosition=rect.getBoundingClientRect();
    var position= details.clientX - rectanglePosition.left ;
    if(position<rectanglePosition.width/2)
    {
        var redValue=gsap.utils.mapRange(
            0,
            rectanglePosition.width/2,
            255,
            0,
            position
            );
        gsap.to(rect,{
            backgroundColor:`rgb(${redValue},0,0)`,
            ease: Power4
        });
        // Set the background color using the calculated red value
        //rect.style.backgroundColor = "rgb(" + redValue + ", 0, 0)";
    }
    else 
     {
        var blueValue =gsap.utils.mapRange(
            rectanglePosition.width/2,rectanglePosition.width,0,255,position);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,(${blueValue})`,
            ease: Power4
        });
        // Set the background color using the calculated red value
        //rect.style.backgroundColor = "rgb(0, 0, " + blueValue + ")";
     }

});

rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:"white"
    })
});
