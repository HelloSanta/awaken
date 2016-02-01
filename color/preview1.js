(function($) {
    Drupal.color = {
        logoChanged: false,
        callback: function(context, settings, form, farb, height, width) {
            // Change the logo to be the real one.
            if (!this.logoChanged) {
                $('#preview #preview-logo img').attr('src', Drupal.settings.color.logo);
                this.logoChanged = true;
            }
            // Remove the logo if the setting is toggled off. 
            if (Drupal.settings.color.logo == null) {
                $('div').remove('#preview-logo');
            }

            // Solid background.
            //background
            $('#preview-body', form).css('backgroundColor', $('#palette input[name="palette[BodyBg]"]', form).val());
            $('#preview-body .prepage', form).css('backgroundColor', $('#palette input[name="palette[PageBg]"]', form).val());
            $('#preview-body #preview-header-totle', form).css('backgroundColor', $('#palette input[name="palette[HeaderBg]"]', form).val());
            $('#preview-body .prepage #content', form).css('backgroundColor', $('#palette input[name="palette[ContentBg]"]', form).val());
            $('#preview-body .preview-footer-wrapper', form).css('backgroundColor', $('#palette input[name="palette[FooterBg]"]', form).val());

            //color
            $('#preview-body .prepage  #preview-header-totle #menu li a', form).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
            $('#preview-body .prepage  #content p ,#preview-body .preview-footer-wrapper ,#preview-body .preview-footer-wrapper #block-menu-block-3 a ,#preview-body .prepage #block-block-2', form).css('color', $('#palette input[name="palette[ContentText]"]', form).val());
            $('#preview-body .prepage  #content a,#preview-body .prepage  #content span', form).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
            $('#preview-body .preview-footer-wrapper #block-views-serivce-content-block a, #preview-body .preview-footer-wrapper #block-block-4 a', form).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
            $('#preview-body .preview-footer-wrapper  #block-views-travel-recommend-block-1 a', form).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());
            $('#preview-body .prepage  h2', form).css('color', $('#palette input[name="palette[H2]"]', form).val());
             $('#preview-body .prepage  #block-nodeblock-6 p', form).css('color', $('#palette input[name="palette[MainColor1]"]', form).val());

            //hover{
            $('#preview-body .prepage  #preview-header-totle #menu li a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[MenuLink]"]', form).val());
                }
            );
            $('#preview-body .prepage  #content a,#preview-body .preview-footer-wrapper #block-views-serivce-content-block a ,#block-menu-block-3 a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[ContentLink]"]', form).val());
                }
            );
                        $('#preview-body .preview-footer-wrapper #block-views-travel-recommend-block-1 ul li a').hover(
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterHover]"]', form).val());
                },
                function() {
                    $(this).css('color', $('#palette input[name="palette[FooterLink]"]', form).val());
                }
            );
        }
    };
})(jQuery);
