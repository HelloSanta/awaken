/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {
            $(window).load(function() {
                $(this).impulse();
            });
            // var v = $("#block-nodeblock-17 img").attr("src");
            // $("#block-nodeblock-17").css({
            //     'background-image': 'url(' + v + ')',
            // });

            // var items = jQuery('.youblock>li');
            // for (var i = 0; i < items.length; ++i) {};
            // for (var i = 0; i < items.length; ++i) {
            //     $(items[i]).css('background-image', 'url(' + $(items[i]).find('img').attr('src') + ')');
            // }

            function parallax() {
                var v = $(' #block-nodeblock-17').find("img").attr("src");
                $(' #block-nodeblock-17').parallax({
                    imageSrc: v
                });
            }

            parallax();



            $("#block-views-travel-recommend-block .views-row .views-field-title ").prepend("<div class='hover'></div>");
            $(".hover").html("<svg id='Layer_1' viewBox='1 -1 333 333'><path class='path' fill='none' stroke='#ffffff' stroke-width='1' stroke-miterlimit='0' d='M2 2 ,2 200 ,300 200 ,300 2 ,1 2'/></svg>");

            $(window).load(function() {
                $('#loading').fadeOut("slow");
            });

            // Place your code here.
            $(document).ready(function() {

                $(".not-logged-in").addClass("animated fadeIn");

            });
        }
    };
    $().ready(function() {
        var $scrollingDiv = $("#block-menu-block-4"); // #scrollingDiv請改成自己要移動的元素

        $(window).scroll(function() {
            $scrollingDiv
                .stop()
                .animate({
                    "marginTop": ($(window).scrollTop() + 0) + "px"
                }, "slow");
        });
        //hover effect1
        $(" .row-effect").hover(function() {
            $(this).toggleClass("row-effect-ios");
        });

        // $(".view-latest-news .views-row").addClass("hvr-underline-reveal");


        $(".webform-component--name .field-prefix").addClass("fa fa-user");
        $(".webform-component--title .field-prefix").addClass("fa fa-pencil");
        $(".webform-component--phoneform .field-prefix").addClass("fa fa-phone");

        //$(window).load(function() {


        // }


    });





})(jQuery, Drupal, this, this.document);
