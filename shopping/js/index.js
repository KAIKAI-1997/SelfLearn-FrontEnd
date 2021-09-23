window.addEventListener('DOMContentLoaded', function() {
    var ad = document.querySelector('.load_ad');
    var hour = document.querySelector('#hour');
    var mins = document.querySelector('#mins');
    var secs = document.querySelector('#secs');
    var close_icon = document.querySelector('.close_icon');

    var inputTime = +new Date() + 18000000;
    countDown();
    setInterval(countDown, 1000);

    function countDown() {
        var nowTime = +new Date();
        var times = (inputTime - nowTime) / 1000;
        var h = parseInt(times / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        mins.innerHTML = m;
        var s = parseInt(times % 60);
        s = s < 10 ? '0' + s : s;
        secs.innerHTML = s;
    }

    close_icon.onclick = function() {
        ad.style.display = 'none';
    }

    window.addEventListener('load', function() {
        setTimeout(function close() {
            ad.style.display = 'none';
        }, 10000)
    })

    var m = document.querySelector('#mousefollow');
    document.addEventListener('mousemove', function(e) {
        var x = e.pageX;
        var y = e.pageY;

        m.style.left = x + 5 + 'px';
        m.style.top = y + 5 + 'px';
    });

    var slide = document.querySelector('.slider-bar');
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 200) {
            slide.style.position = 'fixed';
            slide.style.top = 100 + 'px';

        } else if (window.pageYOffset < 200 || window.pageYOffset >= 1400) {
            slide.style.position = 'absolute';
            slide.style.top = '300px';
        }
    })

    var close_bar = document.querySelector('#close_bar');
    close_bar.addEventListener('click', function() {
        slide.style.display = 'none';
        this.style.display = 'none';
    })

    var back = document.querySelector('.go_back');
    back.style.display = 'none';
    var topoff = window.pageYOffset;

    document.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            back.style.display = 'block';
            back.style.position = 'fixed';
        } else {
            back.style.display = 'none';
        }
    })

    var imgs = document.querySelectorAll('.table_list_item')[0].querySelectorAll('img')
    var imgs_2 = document.querySelectorAll('.table_list_item')[1].querySelectorAll('img')
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < imgs.length; i++) {
                animate(this, 20);
            }
        })
        imgs[i].addEventListener('mouseleave', function() {
            for (var i = 0; i < imgs.length; i++) {
                animate(this, 0);
            }
        })
    }
    for (var i = 0; i < imgs_2.length; i++) {
        imgs_2[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < imgs_2.length; i++) {
                animate(this, 20);
            }
        })
        imgs_2[i].addEventListener('mouseleave', function() {
            for (var i = 0; i < imgs_2.length; i++) {
                animate(this, 0);
            }
        })
    }
});

function animate(obj, interval_time, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (interval_time - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == interval_time) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + "px";
    }, 15);

}