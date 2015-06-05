$(function () {
  if ($('body').hasClass('controller-wiki')) {

    var stat = 'editing';

    var go_preview = function () {
      $('a[accesskey=r]').click();
        $('#wiki_form').hide();
        stat = 'preview';
    };
    var go_editing = function () {
        $('#preview').html('');
        $('#wiki_form').show();
        $('#content_text').focus();
        stat = 'editing';
    };

    $(document).on('keydown', function(e) {
      var keyCode = e.keyCode || e.which;

      if ((keyCode == 68 && e.ctrlKey)
       || (keyCode == 69 && e.ctrlKey)
      ) {
        e.preventDefault();
        if (stat == 'editing') {
          go_preview();
        } else {
          go_editing();
        }
      }

      if (keyCode == 27) {
        if (stat == 'preview') {
          e.preventDefault();
          go_editing();
        }
      }
    });
  }
});
