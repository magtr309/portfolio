let cvClicked = false;
let intygClicked = false;

$(document).ready(function()

{
  
    $("#about").click(function() {
        $(".aboutP").css("display", "inline");
        $(".intygP").css("display", "none");
        $(".vildP").css("display", "none");
        $(".systemP").css("display", "none");
        $(".cvP").css("display", "none");
        
    })

    $("#cv").click(function() {
        $(".aboutP").css("display", "none");
        $(".intygP").css("display", "none");
        $(".vildP").css("display", "none");
        $(".systemP").css("display", "none");
        $(".cvP").css("display", "inline");
        
    })


    $("#intyg").click(function() {
        $(".aboutP").css("display", "none");
        $(".intygP").css("display", "inline");
        $(".vildP").css("display", "none");
        $(".systemP").css("display", "none");
        $(".cvP").css("display", "none");
        
    })

    $("#vild").click(function() {
        $(".aboutP").css("display", "none");
        $(".intygP").css("display", "none");
        $(".vildP").css("display", "inline");
        $(".systemP").css("display", "none");
        $(".cvP").css("display", "none");
        
    })

    $("#system").click(function() {
        $(".aboutP").css("display", "none");
        $(".intygP").css("display", "none");
        $(".vildP").css("display", "none");
        $(".systemP").css("display", "inline");
        $(".cvP").css("display", "none");
        
    })



}) 
