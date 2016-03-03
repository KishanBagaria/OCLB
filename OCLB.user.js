// ==UserScript==
// @name                One Click Llama Button
// @namespace           http://www.door2windows.com/
// @description         Adds a give Llama button after username of every deviant and group.
// @author              Kishan Bagaria | kishanbagaria.com | kishan-bagaria.deviantart.com
// @version             2.4
// @match               *://*.deviantart.com/*
// @grant               none
// @downloadURL         https://gist.github.com/KishanBagaria/3c6e25d4320ede9e1a2d/raw/OCLB.user.js
// @updateURL           https://gist.github.com/KishanBagaria/3c6e25d4320ede9e1a2d/raw/OCLB.user.js
// ==/UserScript==
function contentEval(source) {
    if ('function' === typeof source) {
        source = '(' + source + ')();';
    }
    var script = document.createElement('script');
    script.textContent = source;
    document.body.appendChild(script);
    document.body.removeChild(script);
}
contentEval(function () {
    var GIVE_IMG   = 'data:image/gif;base64,R0lGODlhDwASAPQaAO6oQy4kHAAAAJRPC0onDfbhbl0yEO+pQtGBKdGMJcJaKpVgLrFtJ+qwNFkrFuqpJvjGROOKJFUyEmNjPNWUNOzJYnx8Sl0xDXFFLnV1Pv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAPABIAQAWJoKYFgiCKhKGl5ym9EjEgh9qOWWAF466VgUKAhIIYCoSbZKFgLhYJgGoYFAxRjUIjKQK2CIzBgSuSVCKICBiBSNRuAQfGMQgMHLyu8EQ4UPp/AgWDgyYrFw0GZEF5KAMFEGQ3jjQ2LhWYFWsJD2QDTk9PCW4DLQNNqAsPB6VwEwGvI7GTVDxUGiEAOw==',
        GIVING_IMG = 'data:image/gif;base64,R0lGODlhEgASAPQLAAYEASAVBvzJAPnsAvz3rqpkAO3Sfv374MuPSvvuJvzxTPnth/+oAf7+/vvxS55hAO3Fb/vJAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEgASAEAFZuAijmIALMBJrigQIIcSBOwIMICQ6jUbCAeDgdYDJARHgUKAIPYWv4PA+YQCZU9AYysYKL7TZ6AwBpBVYmAuXLXKqOlvs22NwVdrQVcxLCb1Ag4KCGh4SIcEPEUPZikFhTUpkikrIQAh+QQJCgASACwDAAAADAASAAAFYaAkjkAglSN5CICwmOm5HkAslkdQ20Bu7DFAwVCABQ9DYKqnMBgBUN1BAYEBIoIsYNAkQAWN8FZBFugaiazaoWCdBOm0QIGwxuECgvsWKBaEOiQPQjWEJAwthXs3UIVQEiEAIfkECQoADAAsBAAAAAsAEgAABVwgIzIAEJDnCCiHAAhLKq7tAYxzcOg3vgYGQ09VMBRlM0VRiCOxFAZZKfCEpF4uxQBKKDUaq61CIQgAEoJ02kEunQVogQJxhdsJrlwhUADshyV9gYAvbnkzbokMIQAh+QQJCgAMACwFAAAACgASAAAFViDDAGQwmqOiHAIgLCigsgcgnkcgBHYaGEDUqGAgKoRD4PGWWi1FpNnTJVMMDAhTITpQGJYFgVj8NQESArRAkR2l34SWKFCgA+q3QCDbzuv+TAx6gzchACH5BAkKAAwALAMAAAAMABIAAAViIMMEwAiUohgsAiAcCpoCxxun8xHAsggYQMVtVjAUhIceA1A0KJI4lfMAjQYgTwVJBiA4BzFBSyUQKsCARqPkUjjE8AQqgFCIEwI5ykXI+7kBBUyBJEQnTCc4LoctPYePKCEAIfkECQoAEgAsAwAAAAwAEgAABWCgFAAiKZ1nsAiAcJioBBwuHAOGodgobrwxVEC3C55wCqBxmOSlIM0RwAQg6AaCrCBCCggUYGxjzGopHNpsotFFKNSCBOsoIMTvCWqgACjsRz18MnwPMC0khwyGUzJTMCEAIfkECQoACwAsAwAAAAsAEgAABVbgsgDAGIhoIAjAIZzoorpwHBjKG4s3vcuKXC2l8O0CRZ0NeQAESCncYLUqqYKKaWNLEigc1FXCisgJEufSSEA4u9XOAqAQoMfmJPlDve4CGHwkglALIQAh+QQFCgAMACwEAAAACgASAAAFViATACJgMuIiAMKhKCQDHO0by4HwwmgfvAaeL2go3ESG5FF0UPZECpdhhQogDIOXgPoLDg60AnS63Yqtim1CkCCxCOx4LGAs0ANPqx7vE+QCfFWAgCghADs=',
        SUCCESS_IMG = 'data:image/gif;base64,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',
        ERROR_IMG = 'data:image/gif;base64,R0lGODlhDwASAPYAAP+GAP/LFv/mHbVYAf+tAL9GAP+mAF8iAP+AAP+OAP94AHgsAP/GAP+iAHMjADQiFICAKWdnI3cqAIs+FWsuAHp6GttkAP1HAHV1Pl0yEFUyEsJaKtGBKezJYtGMJbFtJ1krFmNjPPbhbuqwNEonDS4kHJVgLpRPC/jGRHx8StWUNOOKJF0xDXFFLuqpJu+pQv93AEAgCIIXAP/KAP9vAO5MAKQfALcwAIKCAP8xAJAlAKMcAKEVAG1tAP8kAP+BAP+hAP9SAP/yAP9lAP+qAP/QAP+bAIeHAP+lAP8yAP+SAOwEAMwRAP//AI2NAP/XAP9MAP8vAFQcAP8AAP9iAJOTAP9YAP9xALwBAP8XAOwAAP8HAHd3AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFDwAAACwAAAAADwASAAAHhYAAgoODJBkAhoSKJC8qjI6KhCQjIiMkkZIsIxmXmIIkKBkinZ4kJyIopJgkHycvqpGmHC+Hihq3GrK0th29HawcHi6kGh0rHCvAwbuCJyYbJtHRHh4vJ4Qaz9om1bWDJ9DhJi7WkSUgLSAnJScgJeYhJfEA8u+KJRglKe/69vclAOkFDAQAIfkEBQ8AGAAsAwAAAAwAEgAAB4GAGIKDBwsYhYOEDQkHiweJggcEAgSPkIcSBAuWkAcMCwKciQcFAgyihBYFDaiRBQoNhoIUtBSksLIUAbsBBxYKAAYHuggKCL4KwLEFAxcDz88AAA0FGBTN2APTsgXO3gMG1IMPDhMOBQ8FDg/jEQ/uGO/sgg8VDxDs9/P0D/3x/oEAIfkEBQ8AAAAsAwAAAAwAEgAAB4GAAIKDMjYAhYOERj8yizKJgjJEQkSPkIc7RDaWkDIzNkKciTI5QjOihEE5RqiROUNGhoI6tDqksLI6RbtFMkFDMEAyujRDNL5DwLE5NT41z88wMEY5ADrN2DXTsjnO3jVA1IMxPDc8OTE5PDHjPTHuAO/sgjE4MUfs9/P0Mf3x/oEAIfkEBQ8AAAAsAwAAAAwAEgAAB4GAAIKDWEsAhYOESldYi1iJglhITUiPkIdaSEuWkFhFS02ciVhbTUWihElbSqiRW1BKhoJMtEyksLJMT7tPWElQVEZYulZQVr5QwLFbUVNRz89UVEpbAEzN2FHTslvO3lFG1INSWllaW1JbWlLjXFLuAO/sglJOUlXs9/P0Uv3x/oEAIfkEBQ8AAAAsAwAAAAwAEgAAB4GAAIKDMjYAhYOERj8yizKJgjJEQkSPkIc7RDaWkDIzNkKciTI5QjOihEE5RqiROUNGhoI6tDqksLI6RbtFMkFDMEAyujRDNL5DwLE5NT41z88wMEY5ADrN2DXTsjnO3jVA1IMxPDc8OTE5PDHjPTHuAO/sgjE4MUfs9/P0Mf3x/oEAIfkEBQ8AGAAsAwAAAAwAEgAAB4GAGIKDBwsYhYOEDQkHiweJggcEAgSPkIcSBAuWkAcMCwKciQcFAgyihBYFDaiRBQoNhoIUtBSksLIUAbsBBxYKAAYHuggKCL4KwLEFAxcDz88AAA0FGBTN2APTsgXO3gMG1IMPDhMOBQ8FDg/jEQ/uGO/sgg8VDxDs9/P0D/3x/oEAIfkEBQ8AAAAsAwAAAAwAEgAAB4GAAIKDJBkAhYOELyokiySJgiQjIiOPkIcsIxmWkCQoGSKciSQnIiiihB8nL6iRJxwvhoIatBqksLIaHbsdJB8cHi4kuiscK74cwLEnJhsmz88eHi8nABrN2CbTsifO3iYu1IMlIC0gJyUnICXjISXuAO/sgiUYJSns9/P0Jf3x/oEAOw==',
        ALREADY_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4Ee3BvQpBYQDH4X/JpgwGOp2rcQ/cgTJRIsMpvUk+iuhwGbIxUSTH4KxvyUAWkzLK9HML72LzPNKffoLQ9wh9wzhnGWUsvZShnfDkitA3REO4b+C6gm2LdyAjV0yylvsaTl3YNiCe8azJyhWDtOU8h10T1hU49LmVZeWKTtKwCSCeQtSDZZVjUUauPoG8V13mUZG9lGT3BZlFXp7+9BNfkoBdPuQ6L8UAAAAASUVORK5CYII=',
        SPAM_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAMAAACE9bUqAAAAe1BMVEUAMmb0zTM4DRCcX0HOt4ifSyxmAADMmWZlOCSojjDMiGGPPSFlAADVs5vElXfUp6oAAC5KR0NPNTyeSi6fgHYgH0+dX0Cbg4AAMWaZZmara2a4dG4/QFLHik9jCQ13Tkw6KUUAADMILVRLEhbMj22KSSgsDg0tR2YAKmIz6elIAAAAj0lEQVR4AX3LBRrDMAxDYSdlGDMz3P+Es6tF4/1lva+S/SL/OeeaS+y014JFOKJIgE9cOAhfXB3GafPLR4HuKI7jdqkStdnuBPa9WB0RBonpo1xihZ1QXgMMURAiM45gci8rfAaz+WIppqZ1bdJUbwz4JpQWUAWh5MHB+xMLdk9nb7TkgBU6SsuVO2eU7JcbjM8Lv+nDU0gAAAAASUVORK5CYII=';
        STYLE = 'span.oclb        {display:inline-block;width:18px;height:18px;vertical-align:middle;margin:0 3px}' +
                'span.oclb-give   {background:url(' + GIVE_IMG + ')    center no-repeat; cursor:pointer}' +
                'span.oclb-giving {background:url(' + GIVING_IMG + ')  center no-repeat; cursor:progress}' +
                'span.oclb-already{background:url(' + ALREADY_IMG + ') center no-repeat; margin:0}' +
                'span.oclb-success{background:url(' + SUCCESS_IMG + ') center no-repeat; width:26px}' +
                'span.oclb-error  {background:url(' + ERROR_IMG + ')   center no-repeat; cursor:pointer}' +
                'span.oclb-spam   {background:url(' + SPAM_IMG + ')    center no-repeat; cursor:pointer;width:25px}',
        GIVE_TITLE = 'Give a Llama',
        GIVING_TITLE = 'Giving Llama...',
        ALREADY_TITLE = 'Already gave a Llama',
        loggedInDev = window.deviantART.deviant.username.toLowerCase(),
        timeouts = {};
    try {
        var addCSS = function(css) {
            var style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        };

        var setButtonStatus = function(llamaButton, className, title) {
            llamaButton.className = 'oclb oclb-' + className;
            llamaButton.title = title;
        };

        var setButtonsStatus = function(devName, buttonStatus, hoverText) {
            var llamaButtons = document.querySelectorAll('span[devName="' + devName + '"]'),
                title = {give   : GIVE_TITLE,
                         giving : GIVING_TITLE,
                         already: ALREADY_TITLE,
                         spam   : hoverText,
                         error  : hoverText,
                         success: hoverText}[buttonStatus];
            for (var i = 0; i < llamaButtons.length; i++) {
                setButtonStatus(llamaButtons[i], buttonStatus, title);
            }
        };

        var llamaButtonClicked = function() {
            if (['give', 'error', 'spam'].indexOf(this.className.substr(10)) !== -1) {
                var devName = this.getAttribute('devName'),
                    devID = this.getAttribute('devID'),
                    url = 'https://www.deviantart.com/modal/badge/give?badgetype=llama&referrer=http%3A%2F%2Fdeviantart.com&to_user=' + devID,
                    iframe = document.createElement('iframe');
                setButtonsStatus(devName, 'giving');
                iframe.style.display = 'none';
                iframe.src = url;
                iframe.id = 'oclb-frame-' + devName;
                document.body.appendChild(iframe);
                clearTimeout(timeouts[devName]);
                timeouts[devName] = setTimeout(function () { setButtonsStatus(devName, 'error', 'Timeout'); }, 45e3);
            }
        };

        var storage = function(action, key, value) {
            try {
                return window.localStorage[action + 'Item'](key, value);
            } catch(er) {
                window.localStorage.clear();
            }
        };

        var checkGiven = function(devName, callback) {
            if (storage('get', loggedInDev + '|' + devName)) {
                callback(null, true);
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', '/global/difi/?c[]="User","getGiveMenu",["' + devName + '"]&t=json&' + Math.floor(Date.now() / 1e4), true);
                xhr.onload = function () {
                    var devID = /data-userid=\\"(\d+?)\\"/.exec(this.response),
                        alreadyGiven = (this.response.indexOf('Already gave a Llama') !== -1);
                    if (alreadyGiven) { 
                        storage('set', loggedInDev + '|' + devName, false);
                        callback(devID, alreadyGiven);
                    } else if (devID) {
                        callback(devID[1], alreadyGiven);
                    }
                };
                xhr.send();
            }
        };

        var addLlamaButton = function(devNameLink) {
            if (devNameLink.className.indexOf('banned') !== -1) { return; }
            var devName = /([a-zA-Z0-9\-]+)\.deviantart\.com/.exec(devNameLink.href);
            if (devName) {
                devName = devName[1].toLowerCase();
                if (devName !== loggedInDev) {
                    checkGiven(devName, function (devID, alreadyGiven) {
                        var llamaButton = document.createElement('span');
                        llamaButton.setAttribute('devName', devName);
                        llamaButton.setAttribute('devID', devID);
                        llamaButton.onclick = llamaButtonClicked;
                        setButtonStatus(llamaButton, (alreadyGiven ? 'already' : 'give'), (alreadyGiven ? ALREADY_TITLE : GIVE_TITLE));
                        // Remove .nextSibling to make buttons appear before username
                        devNameLink.parentNode.insertBefore(llamaButton, devNameLink.nextSibling);
                    });
                }
            }
        };

        var waitForElements = function(selector, callback, notFirst) {
            var elements = document.querySelectorAll(selector);
            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                if (!el.getAttribute('data-already-found')) {
                    el.setAttribute('data-already-found', true);
                    callback(el);
                }
            }
            if (!notFirst) { setInterval(function () { waitForElements(selector, callback, true); }, 400); }
        };

        var postMessageListener = function(e) {
            if (e.data.indexOf('OCLB|') === 0) {
                var data = e.data.split('|'),
                    devName = data[1],
                    successMsg = data[2],
                    errorMsg = data[3],
                    oclbFrame = document.getElementById('oclb-frame-' + devName);
                clearTimeout(timeouts[devName]);
                delete timeouts[devName];
                if (successMsg.indexOf('Success!') !== -1) {
                    setButtonsStatus(devName, 'success', successMsg);
                    storage('set', loggedInDev + '|' + devName, true);
                } else if (errorMsg.indexOf('You cannot give any more llama badges to ') !== -1 || errorMsg === 'Cannot give badge to this user') {
                    setButtonsStatus(devName, 'already');
                } else if (errorMsg.indexOf('Badges have been given too quickly, and have tripped a spam filter') !== -1) {
                    setButtonsStatus(devName, 'spam', errorMsg);
                } else {
                    setButtonsStatus(devName, 'error', errorMsg);
                    if (oclbFrame) {
                        if (errorMsg === 'Please enter a password.') {
                            alert('One Click Llama Button will work only after you give a Llama manually with the "Remember my password" option checked.');
                        } else {
                            alert(errorMsg + (successMsg ? '\n\n\n' + successMsg : ''));
                        }
                    }
                }
                oclbFrame.remove();
            }
        };

        var storageListener = function(e) {
            var data = e.key.split('|'),
                fromDev = data[0],
                toDev = data[1];
            if (loggedInDev === fromDev) { setButtonsStatus(toDev, e.newValue ? 'success' : 'already'); }
        };

        if (window.location.href.indexOf('badge/give?badgetype=llama') !== -1) {
            document.give_form.tos.checked = true;
            document.give_form.password_remembered.checked = true;
            document.give_form.submit();
        } else if (window.location.href.indexOf('badge/process_trade') !== -1) {
            if (document.getElementsByClassName('badge-llama').length > 0) {
                var sEle = document.querySelector('#badgeReceiptBody > div'),
                    eEle = document.querySelector('#error_messages > ul > li'),
                    sMsg = sEle ? sEle.textContent.replace(/\s+/g, ' ').trim() : '',
                    eMsg = eEle ? eEle.textContent : '';
                window.parent.postMessage('OCLB|' + document.getElementsByClassName('username')[0].textContent.toLowerCase() + '|' + sMsg + '|' + eMsg, '*');
            }
        } else if (window.location.host !== 'llamatrade.deviantart.com') {
            addCSS(STYLE);
            if (loggedInDev) {
                waitForElements('a.username', addLlamaButton);
                waitForElements('a[href*=".deviantart.com/badges/"]', addLlamaButton);
                window.addEventListener('message', postMessageListener);
                window.addEventListener('storage', storageListener);
            }
        }
    } catch(err) {
        var h = 'One Click Llama Button encountered an error:\n',
            e = h + '\n---\n' + err + '\n---\n\nPlease report this to Kishan-Bagaria.DeviantArt.com';
        console.error(h, err);
        alert(e);
    }
});