// ==UserScript==
// @name                One Click Llama Button
// @namespace           http://www.door2windows.com/
// @description         Adds a give Llama button after username of every deviant and group.
// @author              Kishan Bagaria | kishanbagaria.com | kishan-bagaria.deviantart.com
// @version             2.3
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
    var GIVE_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTQtMDQtMzBUMDA6MzA6MjErMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDE0LTA0LTMwVDAwOjMxOjA3LTE4OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE0LTA0LTMwVDAwOjMxOjA3LTE4OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RjA1OENENENGRDAxMUUzODNFQURFM0FBRUM4ODcxMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RjA1OENENUNGRDAxMUUzODNFQURFM0FBRUM4ODcxMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlGMDU4Q0QyQ0ZEMDExRTM4M0VBREUzQUFFQzg4NzEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlGMDU4Q0QzQ0ZEMDExRTM4M0VBREUzQUFFQzg4NzEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+P1QzJwAAAcRJREFUeNqMUk0oRFEU/t4zyAxiRpqZ5g3lt/zVmKKQkizYWNmZJQs1GwtLZWdhIxJhR8nCbCwVCtkoNFKmxBtCoYTxfzmX+7y5M8pXp/Nzz3fOufceMMZAUl3sYQC4iJiQ9rIs1u3LYbJtJBDp8STIqIhMvF1oYeExP5Nt3lEIkamI8M0FrkJ+fk6afIorPx0hw1owSkQ6R0d5NnNYgZHBMvQPRXD98I7lwzt+ZnQTY4v7mzs/bbbyu1KO6KxSddFBYPdIT4hND29hcikA9ezAiKnC2ItE+ah/QfN6MBucQUz/MGIWYcidZOinUTT5vNx22FLiyWZ01ToY/gFLMuLERGdcLBBY5GMTTnUdIwP5/AcsyYixtXXcxFJhz3hF78wletvcKMwzngep8HyNfgXlZ7s4xjszmZJbhKqXN+ynJd6osTLGtVfTMDe//fvahL7QvbK6F+VEKkAQ2nh1jxfB4R2eq8rVm7Vno7NZE1yaAkVhqNNeuR83tkBNicYq0l/gdDtxcX6BhuIHTIVz0VNxi42IDeHnNL5I6l/fYK0vxcrxDddEpGTS5CdsmAy7/fvI5cqOi5v9pGOL0eV9N8fI/xRgAK/cGqf3TabnAAAAAElFTkSuQmCC',
        GIVING_IMG = 'data:image/gif;base64,R0lGODlhEgASAMQSAPvuJv7+/suPSvnsAvz3rvvxS/nth55hAO3Fb/+oAfvJAKpkAO3Sfv374PzxTCAVBvzJAAYEAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgASACwAAAAAEgASAAAFZ6AkjuITSdFJriXURBD0sOzjynQNOc+ck7YGg+H7SWwOh6D4C/KMIyeTlnoIGrwpCRaDDBzEXCRA9iYdOFYE0I0VlCo1m72DLMWQOYQAidMeC4ARgX4rEQeDKQuFhgkwKX1QKZMpKyEAIfkECQoAEgAsAAAAABIAEgAABWqgJI5j9EgmqZYNFEHGuapR20TzajYPnpO1B8P3E0UWjIWsiGogicWag7HURUxSRBWogHgjgykBaoQEzmCHGrJFBQDeeMHhmr3gcIhD0DbiIXAEdTkmSgtHPT8RB0c4jYoJL46DhFeOVyQhACH5BAkKABIALAAAAAASABIAAAVroCSOYhQ90kmupdNAEWSgLBm5UBPV69k8Op7N8WAwdsLSgrGkJW/LY7LVcDCcNdPD5UBgexCYY2AlIHuBwI3scEC+JUB4XnCfbRG5HOIQwEcxehAEMEInCw8LEYh3LCaKj409MSaUT5WYJCEAIfkECQoAEgAsAAAAABIAEgAABWegJI5SZD4lSq6R4zRQBBnqOrYv1EQ2+zQPyIPXE7UejGStGFkwnI4l08mIFkm4hvVaym6ZMdeAIZCSFibHwFE1jxaQeLx9jQAgd4ijXMf7CTFcDwuDTW4kDw9lfFwSiUJCjSKJlDYhACH5BAkKABIALAAAAAASABIAAAVtoCSKTySV5qiOjwFFUOOkqxo18VzX9yPTO0mEQXTogsIFY2FsAHcRJcPhRLKmjar1hKA6UMgIYTqYQV7BB8ToKEcCgacI5iic7wA5SeA4AyB5ekIQBICGgkIPC1GKJWGLEVGRVjCRlYhClporIQAh+QQJCgASACwAAAAAEgASAAAFa6AkSk9EmmOaPgYUQQ2qqlEDy3MaMYyD56IdIwZUPXq+oq5HVIqOjqbzgYhGSpHfKELoDSBgiEJLgjjO34DaNXs5CmEwIEB+CBxyCICdexH0gABkElcLEQsPiIOEhowRB4svJpIJkVmEWVohACH5BAkKABIALAAAAAASABIAAAVhoCSKUSRFz6iuDwRFDZSudBvPNMs4cl4zNx/LwcMJJQ9H8ChKLo8PJ6oE3Q1cLlOuRXRcA2DtKgJxFLAugJgl4EEA7/UYQnjb5SrUIrJ49Jl8JXsHeHkvZBEJhSMljVQrIQAh+QQFCgASACwAAAAAEgASAAAFZ6Akik8klZE5rqQBRVDjOCo7Rk0817YYPZAZrWd7zBhD4uiBZCx4RCaDAY02ptWiQ8Z4KU8CxmAG8UYdyEEjt1Aau+VyOypwlAEQQNYHIeT/eyRPCw+EXyQCD4kPhycQQA+Mh5GUNiEAOw==',
        SUCCESS_IMG = 'data:image/gif;base64,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',
        ERROR_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABB0lEQVR4Ad2PJVAFQAAF8QaRnn+nVzLu7g4N14K7u7tTcXd3d3e4yH5PeP1v5vx2Z56WBoeuLkva26doazP+P9zebkRLywZLS9DQkPZvgQyKYWoKXl6gquqRkhKTv8M1NRLKy+85PYXdXVhbg4KCHnJy9H+FZaCObNSyuAibm+DmBufnkJn5QUqK+e+CvDxTOjrg+BhFBVdXWFmBjQ1ITNwgJsbwezg11UA25hSAbCgE6rG3B729EBYW870gKcmfvj75ZzWoqKDeK6r4+Fzj6Sn5WhARccbFBd+OpycYGAAnp9avBWFhdwQGCsXw8REEBAh8fQVeXgJPT4G9vcDWVmBlNaqlWZECabv2vhLg7aAAAAAASUVORK5CYII=',
        ALREADY_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAwNjowMzoxMiAyMTo1MDowMLaxMywAAADOSURBVDhP3ZIxTsNAEEWfU4bUkQjmDlyFYq/gSwCRD5AKOl9hezqLVEipuAESSEACIjLC7LK24wmpPQ1y55Gmm3nSvD+RiNCnRn2WD7sDAESqxJvT2d95CbvG0NZQBUvtM66a146zA6DT13Eq9wuRp1zk8VZkORd/QarN6hLb2nByBu8reL6DyZQfj9ES0wHhF3wB7guaAKHk2+mB64DaWV4e4CiG8TEUb6y3WA2hSqwuo5kLJL7ClB42Bfbjk+w8l45EPYV/vOcAPrH3CXt/UHWW2YdNOAAAAABJRU5ErkJggg==',
        SPAM_IMG = 'data:image/gif;base64,R0lGODlhGQAVAPcAAP//////zP//mf//Zv//M///AP/M///MzP/Mmf/MZv/MM//MAP+Z//+ZzP+Zmf+ZZv+ZM/+ZAP9m//9mzP9mmf9mZv9mM/9mAP8z//8zzP8zmf8zZv8zM/8zAP8A//8AzP8Amf8AZv8AM/8AAMz//8z/zMz/mcz/Zsz/M8z/AMzM/8zMzMzMmczMZszMM8zMAMyZ/8yZzMyZmcyZZsyZM8yZAMxm/8xmzMxmmcxmZsxmM8xmAMwz/8wzzMwzmcwzZswzM8wzAMwA/8wAzMwAmcwAZswAM8wAAJn//5n/zJn/mZn/Zpn/M5n/AJnM/5nMzJnMmZnMZpnMM5nMAJmZ/5mZzJmZmZmZZpmZM5mZAJlm/5lmzJlmmZlmZplmM5lmAJkz/5kzzJkzmZkzZpkzM5kzAJkA/5kAzJkAmZkAZpkAM5kAAGb//2b/zGb/mWb/Zmb/M2b/AGbM/2bMzGbMmWbMZmbMM2bMAGaZ/2aZzGaZmWaZZmaZM2aZAGZm/2ZmzGZmmWZmZmZmM2ZmAGYz/2YzzGYzmWYzZmYzM2YzAGYA/2YAzGYAmWYAZmYAM2YAADP//zP/zDP/mTP/ZjP/MzP/ADPM/zPMzDPMmTPMZjPMMzPMADOZ/zOZzDOZmTOZZjOZMzOZADNm/zNmzDNmmTNmZjNmMzNmADMz/zMzzDMzmTMzZjMzMzMzADMA/zMAzDMAmTMAZjMAMzMAAAD//wD/zAD/mQD/ZgD/MwD/AADM/wDMzADMmQDMZgDMMwDMAACZ/wCZzACZmQCZZgCZMwCZAABm/wBmzABmmQBmZgBmMwBmAAAz/wAzzAAzmQAzZgAzMwAzAAAA/wAAzAAAmQAAZgAAMwAAAAAyZvTNM9Wzm9Snqs63iMyIYZ9LLJxfQY89IWU4JGUAADgNEGMJDUsSFtSnqk81PDopRSAfTwAALj9AUgAqYi1HZgAxZggtVKiOMEpHQ8eKT8SVd8yPbYpJKJ1fQI89IZ5KLp+AdpuDgKtrZrh0biwODXdOTP///yH5BAEAAP8ALAAAAAAZABUAAAjRAGcIHEiwoEGC2BIqXMiwoUNs2SJClAgxocSI8BxmU7hxYsWLHTVujDjy4seHFiumHMmRoTuLHUOylPlQXTpuOOd129nNm09v/tBZa/guHk6c9Hj29Ibvp89zDNsd5abUqVWfDKdWvWo138KjSr+JFWtvrFl9X7nJM8uWbZd9/NYtFEe3rl1ydsU9elRXYV66e/8KVqitsOHDiLWBW8wYXELE4SJLllxu3Lh6jR1jMzzZsufP4/qBTjhZMujT47ap3paQXWfUnlfLxnawtu0ZAQEAOw==',
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
                    var devID = /Badges\.buildModal\(\'llama\', (\d+)\)/.exec(this.response),
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