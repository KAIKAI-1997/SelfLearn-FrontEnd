window.addEventListener('DOMContentLoaded', function() {
    var m = document.querySelector('#mousefollow');
    document.addEventListener('mousemove', function(e) {
        var x = e.pageX;
        var y = e.pageY;

        m.style.left = x + 5 + 'px';
        m.style.top = y + 5 + 'px';
    });
});