// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function showselected()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'none' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading") {
            el [i] .style.display = 'none' ;
        }
    }
    document.getElementById('select').style = 'text-decoration:underline';
    document.getElementById('unselect').style = '';
}


function showall()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            if (el[i] .dataset.selected == 'n'){
                el [i] .style.display = 'block' ;
            }
        }
    }

    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "year_heading") {
            el [i] .style.display = 'block' ;
        }
    }
    document.getElementById('unselect').style = 'text-decoration:underline';
    document.getElementById('select').style = '';
}

function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function toggleblock(blockId)
{
    var block = document.getElementById(blockId);
    if (block.style.display == 'none') {
    	block.style.display = 'block' ;
    } else {
    	block.style.display = 'none' ;
    }
}

function hideblock(blockId)
{
    var block = document.getElementById(blockId);
    block.style.display = 'none' ;
}

// Lazy autoplay videos only when visible
document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video.paper');
    if (!videos.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            var video = entry.target;
            if (entry.isIntersecting) {
                // Set up time-range looping if data attributes present
                if (video.dataset.tStart && !video._loopSetup) {
                    video._loopSetup = true;
                    var tStart = parseFloat(video.dataset.tStart);
                    var tEnd = parseFloat(video.dataset.tEnd);
                    video.addEventListener('loadedmetadata', function() {
                        video.currentTime = tStart;
                    });
                    video.addEventListener('timeupdate', function() {
                        if (video.currentTime >= tEnd) video.currentTime = tStart;
                    });
                }
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.25 });

    videos.forEach(function(video) {
        observer.observe(video);
    });
});