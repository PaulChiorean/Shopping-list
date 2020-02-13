//Mark item from list with a line and different color with on click(), not simple click() because if i add another item doesn't work for him.
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//Click on X to delete an item
$("ul").on("click", "span", function(event){      //same problem here, if i used just click without on, doesn't work for new items. Old was $("span").click(function(event){....
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Add another item
$("input[type='text']").keypress(function(event){
    if(event.which === 13){         //when I hit enter(enter=13) take text from imput
        var newItem = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newItem + "</li>")   //create new li
        $(this).val("");// clean input field after i hit enter
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()

});