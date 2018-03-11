/*	Blvd-Media Content Blocker Website: http://www.blvd-media.com */

window.location.querystring = (function() {
    var collection = {};
    var querystring = window.location.search;
    if (!querystring) {
        return { toString: function() { return ""; } };
    }
    querystring = decodeURI(querystring.substring(1));
    var pairs = querystring.split("&");
    for (var i = 0; i < pairs.length; i++) {
        if (!pairs[i]) {
            continue;
        }
        var seperatorPosition = pairs[i].indexOf("=");

        if (seperatorPosition == -1) {
            collection[pairs[i]] = "";
        }
        else {
            collection[pairs[i].substring(0, seperatorPosition)]
        = pairs[i].substr(seperatorPosition + 1);
        }
    }
    collection.toString = function() {
        return "?" + querystring;
    };
    
/* Begin New Ajax Method - MDK 12-21-11 */

$(document).ready(
function () {
	$('iframe').each(
	function() {
		var yturl = $(this).attr("src");
		var result = yturl.search(/youtube/i);
		if(result!=-1)
		{
			result = yturl.indexOf('?');
			if(result!=-1)  
			{
				$(this).attr("src",yturl+"&wmode=transparent");
			} else {
				$(this).attr("src",yturl+"?wmode=transparent");
			}
		}
	});
});

/* End New Ajax Method - MDK 12-21-11 */    

    return collection;
})();

function hideAccessTool() {
    document.getElementById('myFlashContent').style.display = 'none';
    document.getElementById('accessToolContainer').style.display = 'none';
    document.getElementById('video').style.display = 'none';
    document.getElementById('video2').style.display = 'block';
    document.getElementById('feature').style.display = 'none';
    document.getElementById('feature2').style.display = 'block';
    document.getElementById('mainheader').style.display = 'none';
    document.getElementById('mainheader2').style.display = 'block';
    var alliframes = document.getElementsByTagName('iframe');
    for (i = 0; i != alliframes.length; i++) 
    {
        alliframes[i].style.visibility = 'visible';
    }

    var allFlashObjects = document.getElementsByTagName('object');
    for (i = 0; i != allFlashObjects.length; i++) 
    {
        allFlashObjects[i].setAttribute('wmode', 'window');
        allFlashObjects[i].style.visibility = 'visible';
    }

    var allEmbedTags = document.getElementsByTagName('embed');
    var embedTags = document.allEmbedTags;
    if (embedTags != null) {
        for (embedTags, i = 0, embeded; embeded = embedTags[i]; i++) {
            if (navigator.appName == 'Microsoft Internet Explorer') {
                embeded.setAttribute('wmode', 'window');
                embeded.style.visibility = 'visible';
            }
            else {
                embeded.setAttribute('wmode', 'window');
                var parentNode = embeded.parentNode;
                parentNode.removeChild(embeded);
                var nextSibling = embeded.nextSibling
                parentNode.insertBefore(embeded, nextSibling);
            }
        }
    }
}