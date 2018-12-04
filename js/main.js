$(document).ready(function() {
    $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1200);
        }
        return false;
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoJy5nb190bycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2Nyb2xsX2VsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIGlmICgkKHNjcm9sbF9lbCkubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKHNjcm9sbF9lbCkub2Zmc2V0KCkudG9wIH0sIDEyMDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn0pO1xuIl19
