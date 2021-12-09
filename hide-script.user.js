// ==UserScript==
// @name	Hidde Inappropriate Content
// @author	TheGuardian
// @version 0.1
// @namespace tgp_netflix
// @description Whacth only what will bless you
// @include	https://www.netflix.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

// license	Creative Commons Attribution License

$(document).ready(function() {
    function prelaodFlagged(file) {
        $.getJSON(file, function(data){
            $.each( data, function( key, val ) {
                if(!localStorage.getItem(key))
                    localStorage.setItem(key, val);
            });
        }).fail(function(){
            console.log("An error has occurred.");
        });
    }

    function hideFlagged(scope) {
        scope.find('[data-ui-tracking-context]').each(function(){
            // It's  query string that's actually JSON that's actually an array
            var id= JSON.parse(decodeURI($(this).data('ui-tracking-context')));
            id = id.video_id;
            if(localStorage.getItem(id))
                $(this).closest('.title-card-container').hide();
        });
        scope.find('[data-tracking-uuid]').closest('.title-card-container').append('<div class="flag">&#127988;</div>');
        scope.find('.flag').click(function(){
            var card = $(this).closest('.title-card-container')
            var id = card.find('[data-ui-tracking-context]').data('ui-tracking-context');
            id= JSON.parse(decodeURI(id));
            id = id.video_id;
            var name = card.find('[aria-label]').attr('aria-label');
            if(!localStorage.getItem(id)) {
                localStorage.setItem(id,name);
                console.log(id);
                console.log(name);
                card.hide();
            }
        });
    }

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var observer = new MutationObserver(function(mutations) {
        for(let mutation of mutations) {
            var newNodes = mutation.addedNodes; // DOM NodeList
            var $nodes = $( newNodes ); // jQuery set
            $nodes.each(function() {
                var $node = $( newNodes );
                hideFlagged($node);
            });
        }
    });

    var file = "https://raw.githubusercontent.com/theguardian58/Netflix-Hide-Content/main/ban-list.json"
    prelaodFlagged(file);
    hideFlagged($(this));

    // Config: what to listen for
    var config = {
        childList: true,
        subtree: true
    }

    // Target node for observing mutations
    var target = document;//document.querySelector('.mainView');

    // Start observing
    observer.observe(target, config);

});
