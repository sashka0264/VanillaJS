// Jquery
// $("#btn");

$(document).ready(function () {
    // Обработчик, не позволяющий скриптам выполняться до загрузки
    // страницы
    // $(".list-item:first").hover(function() {
    //     $(this).toggleClass("active");
    // });

    // $(".list-item: eq(2)").on("click", function() {
    //     $(".image: even").fadeToggle("slow");
    // });

    // так мы получим второй элемент

    // $(".list-item: eq(4)").on("click", function() {
    //     $(".image: odd").animate(
    //         {
    //             opacity: "toggle",
    //             height: "toggle"
    //         }, 3000

    //     );
    // });
    
    $(".main_btna").on("click", function() {
        $(".overlay").fadeIn("slow"); 
        $(".modal").css({"top": "-40px", "display": "block", "opacity": "0"});
        $(".modal").animate({"top": "30px", "opacity": "1"}, "slow");
    });

    $(".main_btn").on("click", function() {
        $(".overlay").fadeIn("slow"); 
        $(".modal").css({"top": "-40px", "display": "block", "opacity": "0"});
        $(".modal").animate({"top": "30px", "opacity": "1"}, "slow");
    });

    $("#sheldures").on("click", function() {
       
        $(".overlay").fadeIn("slow"); 
        $(".modal").css({"top": "-40px", "display": "block", "opacity": "0"});
        $(".modal").animate({"top": "30px", "opacity": "1"}, "slow");
    });

    $(".close").on("click", function() {
        $(".overlay").fadeToggle("slow"); 
        $(".modal").css({"display": "none"});
    });
    


});