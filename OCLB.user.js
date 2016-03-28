// ==UserScript==
// @name            One Click Llama Button
// @namespace       http://www.door2windows.com/
// @description     Adds a give Llama button after username of every deviant and group.
// @author          Kishan Bagaria | kishanbagaria.com | kishan-bagaria.deviantart.com
// @version         3.1
// @match           *://*.deviantart.com/*
// @match           *://kishanbagaria.com/userscripts/one-click-llama-button/preferences/
// @grant           GM_getValue
// @grant           GM_setValue
// @downloadURL     https://gist.github.com/KishanBagaria/3c6e25d4320ede9e1a2d/raw/OCLB.user.js
// @updateURL       https://gist.github.com/KishanBagaria/3c6e25d4320ede9e1a2d/raw/OCLB.user.js
// ==/UserScript==
try {gmSet = GM_setValue; gmGet = GM_getValue;} catch (e) {}
function runJS(source) {
    if ('function' === typeof source) source = '(' + source + ')();';
    var script = document.createElement('script');
    script.textContent = source;
    document.body.appendChild(script);
    document.body.removeChild(script);
}
runJS(function() {
    var
    GIVE_IMG = 'data:image/gif;base64,R0lGODlhDwASAPQaAO6oQy4kHAAAAJRPC0onDfbhbl0yEO+pQtGBKdGMJcJaKpVgLrFtJ+qwNFkrFuqpJvjGROOKJFUyEmNjPNWUNOzJYnx8Sl0xDXFFLnV1Pv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAPABIAQAWJoKYFgiCKhKGl5ym9EjEgh9qOWWAF466VgUKAhIIYCoSbZKFgLhYJgGoYFAxRjUIjKQK2CIzBgSuSVCKICBiBSNRuAQfGMQgMHLyu8EQ4UPp/AgWDgyYrFw0GZEF5KAMFEGQ3jjQ2LhWYFWsJD2QDTk9PCW4DLQNNqAsPB6VwEwGvI7GTVDxUGiEAOw==',
        GIVING_IMG = 'data:image/gif;base64,R0lGODlhEgASAPQLAAYEASAVBvzJAPnsAvz3rqpkAO3Sfv374MuPSvvuJvzxTPnth/+oAf7+/vvxS55hAO3Fb/vJAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEgASAEAFZuAijmIALMBJrigQIIcSBOwIMICQ6jUbCAeDgdYDJARHgUKAIPYWv4PA+YQCZU9AYysYKL7TZ6AwBpBVYmAuXLXKqOlvs22NwVdrQVcxLCb1Ag4KCGh4SIcEPEUPZikFhTUpkikrIQAh+QQJCgASACwDAAAADAASAAAFYaAkjkAglSN5CICwmOm5HkAslkdQ20Bu7DFAwVCABQ9DYKqnMBgBUN1BAYEBIoIsYNAkQAWN8FZBFugaiazaoWCdBOm0QIGwxuECgvsWKBaEOiQPQjWEJAwthXs3UIVQEiEAIfkECQoADAAsBAAAAAsAEgAABVwgIzIAEJDnCCiHAAhLKq7tAYxzcOg3vgYGQ09VMBRlM0VRiCOxFAZZKfCEpF4uxQBKKDUaq61CIQgAEoJ02kEunQVogQJxhdsJrlwhUADshyV9gYAvbnkzbokMIQAh+QQJCgAMACwFAAAACgASAAAFViDDAGQwmqOiHAIgLCigsgcgnkcgBHYaGEDUqGAgKoRD4PGWWi1FpNnTJVMMDAhTITpQGJYFgVj8NQESArRAkR2l34SWKFCgA+q3QCDbzuv+TAx6gzchACH5BAkKAAwALAMAAAAMABIAAAViIMMEwAiUohgsAiAcCpoCxxun8xHAsggYQMVtVjAUhIceA1A0KJI4lfMAjQYgTwVJBiA4BzFBSyUQKsCARqPkUjjE8AQqgFCIEwI5ykXI+7kBBUyBJEQnTCc4LoctPYePKCEAIfkECQoAEgAsAwAAAAwAEgAABWCgFAAiKZ1nsAiAcJioBBwuHAOGodgobrwxVEC3C55wCqBxmOSlIM0RwAQg6AaCrCBCCggUYGxjzGopHNpsotFFKNSCBOsoIMTvCWqgACjsRz18MnwPMC0khwyGUzJTMCEAIfkECQoACwAsAwAAAAsAEgAABVbgsgDAGIhoIAjAIZzoorpwHBjKG4s3vcuKXC2l8O0CRZ0NeQAESCncYLUqqYKKaWNLEigc1FXCisgJEufSSEA4u9XOAqAQoMfmJPlDve4CGHwkglALIQAh+QQFCgAMACwEAAAACgASAAAFViATACJgMuIiAMKhKCQDHO0by4HwwmgfvAaeL2go3ESG5FF0UPZECpdhhQogDIOXgPoLDg60AnS63Yqtim1CkCCxCOx4LGAs0ANPqx7vE+QCfFWAgCghADs=',
        SUCCESS_IMG = 'data:image/gif;base64,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',
        ERROR_IMG = 'data:image/gif;base64,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',
        ALREADY_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR4Aa2OxUHFQBCGvxXctQl62jbCBS0lR/qhBC7x5MXXcCrgH/cR8eVme3rTz1FKg7P4zZwesXMvHl9XAP1ZVCcHidzZJowz0cekLVqAWwCJVEbubqOO92FLgxQIrQw/0NGt+GEmWkeYlg/rCc7zC/l501YdtmjxTY/vR+K0pH8bPh9q6w1OCIP3H0Wbnl1c30PO/+AdWxpL8w9v1MsAAAAASUVORK5CYII=',
        SPAM_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAMAAACE9bUqAAAAe1BMVEUAMmb0zTM4DRCcX0HOt4ifSyxmAADMmWZlOCSojjDMiGGPPSFlAADVs5vElXfUp6oAAC5KR0NPNTyeSi6fgHYgH0+dX0Cbg4AAMWaZZmara2a4dG4/QFLHik9jCQ13Tkw6KUUAADMILVRLEhbMj22KSSgsDg0tR2YAKmIz6elIAAAAj0lEQVR4AX3LBRrDMAxDYSdlGDMz3P+Es6tF4/1lva+S/SL/OeeaS+y014JFOKJIgE9cOAhfXB3GafPLR4HuKI7jdqkStdnuBPa9WB0RBonpo1xihZ1QXgMMURAiM45gci8rfAaz+WIppqZ1bdJUbwz4JpQWUAWh5MHB+xMLdk9nb7TkgBU6SsuVO2eU7JcbjM8Lv+nDU0gAAAAASUVORK5CYII=',
        UNKNOWN_IMG = 'data:image/gif;base64,R0lGODlhDAASAPABAJOpjwAAACH5BAUAAAEALAAAAAAMABIAAAImjA8QeWi62nNyKVZvzFTC7XXJSH2g1Zho5aglC44yFmnaZJ+ypRQAOw==';

    var STYLE = 'span.oclb        {display:inline-block;width:18px;height:18px;vertical-align:middle;margin:0 3px;transition:.3s all}' +
        'span.oclb-give   {background:url(' + GIVE_IMG + ')    center no-repeat;cursor:pointer}' +
        'span.oclb-giving {background:url(' + GIVING_IMG + ')  center no-repeat;cursor:progress}' +
        'span.oclb-already{background:url(' + ALREADY_IMG + ') center no-repeat;margin:0}' +
        'span.oclb-success{background:url(' + SUCCESS_IMG + ') center no-repeat;               width:26px}' +
        'span.oclb-error  {background:url(' + ERROR_IMG + ')   center no-repeat;cursor:pointer}' +
        'span.oclb-spam   {background:url(' + SPAM_IMG + ')    center no-repeat;cursor:pointer;width:25px}' +
        'span.oclb-unknown{background:url(' + UNKNOWN_IMG + ') center no-repeat;cursor:help}',
        UNKNOWN_TITLE = 'This deviant\'s Llama status is a mystery!',
        U_LOADING_TITLE = UNKNOWN_TITLE + ' (Loading...)',
        U_NETERR_TITLE = UNKNOWN_TITLE + ' (Network error)',
        U_UNKERR_TITLE = UNKNOWN_TITLE + ' (Unknown error)',
        TITLES = {
            give: 'Give a Llama',
            giving: 'Giving Llama...',
            already: 'Already gave a Llama',
            unknown: UNKNOWN_TITLE
        },
        DEFAULTS = {
            showIn: '*',
            showPos: 'after'
        };

    var loggedInDev = window.deviantART ? window.deviantART.deviant.username.toLowerCase() : '',
        timeouts = {},
        lastStates = {},
        devIDs = {};

    try {
        var forEach = function(array, callback) {
            for (var i = 0; i < array.length; i++) callback(array[i], i);
        };
        var addCSS = function(css) {
            var style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        };
        var storage = function(action, key, value) {
            try {
                return window.localStorage[action + 'Item'](key, value);
            } catch (er) {
                // This code is terrible, but this saves me from helping
                // to FF users having LS trouble (probably a bug in FF).
                window.localStorage.clear();
            }
        };
        var setting = function(key, value) {
            if (value) {
                gmSet(key, value);
            } else {
                return gmGet(key) || DEFAULTS[key];
            }
        };

        var setButtonState = function(llamaButton, className, title) {
            llamaButton.className = 'oclb oclb-' + className;
            if (!title) title = TITLES[className];
            if (title) llamaButton.title = title;
        };
        var setButtonsState = function(devName, className, title, interTab) {
            if (!interTab) {
                storage('set', 'sbsCall', JSON.stringify({
                    loggedInDev: loggedInDev, devName: devName, className: className, title: title
                }));
            }
            lastStates[devName] = className;
            var llamaButtons = document.querySelectorAll('span[devName="' + devName + '"]');
            forEach(llamaButtons, function(llamaButton) {
                setButtonState(llamaButton, className, title);
            });
        };

        var llamaButtonClicked = function() {
            if (['give', 'error', 'spam'].indexOf(this.className.substr(10)) !== -1) {
                var devName = this.getAttribute('devName'),
                    url = 'https://www.deviantart.com/modal/badge/give?badgetype=llama&referrer=' +
                           window.location.protocol + '//' + window.location.hostname +
                           '&to_user=' + devIDs[devName],
                    iframe = document.createElement('iframe');
                setButtonsState(devName, 'giving');
                iframe.style.display = 'none';
                iframe.src = url;
                iframe.id = 'oclb-frame-' + devName;
                document.body.appendChild(iframe);
                clearTimeout(timeouts[devName]);
                timeouts[devName] = setTimeout(function() {
                    var oclbFrame = document.getElementById('oclb-frame-' + devName);
                    if (oclbFrame) oclbFrame.remove();
                    setButtonsState(devName, 'error', 'Timeout');
                }, 45e3);
            }
        };

        var askServerForStatus = function(llamaButton, devName) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/global/difi/?c[]="User","getGiveMenu",["' + devName + '"]&t=json&' + ~~(Date.now() / 1e4), true);
            xhr.onload = function() {
                var devID = /data-userid=\\"(\d+?)\\"/.exec(this.response);
                if (devID) {
                    devIDs[devName] = devID[1];
                    var alreadyGiven = (this.response.indexOf('Already gave a Llama') !== -1);
                    setButtonState(llamaButton, (alreadyGiven ? 'already' : 'give'));
                    if (alreadyGiven)
                        storage('set', loggedInDev + '|' + devName, 0);
                } else {
                    setButtonState(llamaButton, 'unknown', U_UNKERR_TITLE);
                }
            };
            xhr.onerror = function() {
                setButtonState(llamaButton, 'unknown', U_NETERR_TITLE);
            };
            xhr.send();
        };

        var addLlamaButton = function(devNameLink) {
            if (devNameLink.className.indexOf('banned') !== -1) return;
            var devName = /([a-zA-Z0-9\-]+)\.deviantart\.com/.exec(devNameLink.href);
            if (devName) {
                devName = devName[1].toLowerCase();
                if (devName !== loggedInDev) {
                    var llamaButton = document.createElement('span');
                    llamaButton.setAttribute('devName', devName);
                    llamaButton.onclick = llamaButtonClicked;
                    if (lastStates.hasOwnProperty(devName)) {
                        setButtonState(llamaButton, lastStates[devName]);
                    } else if (storage('get', loggedInDev + '|' + devName)) {
                        setButtonState(llamaButton, 'already');
                    } else {
                        setButtonState(llamaButton, 'unknown', U_LOADING_TITLE);
                        askServerForStatus(llamaButton, devName);
                    }
                    var el = setting('showPos') === 'after' ? devNameLink.nextSibling : devNameLink;
                    devNameLink.parentNode.insertBefore(llamaButton, el);
                }
            }
        };
        var addLlamaButtons = function() {
            var addEverywhere = function() {
                window.addEventListener('storage', storageListener);
                waitForElements('a.username', addLlamaButton);
                waitForElements('a[href*=".deviantart.com/badges/"]', addLlamaButton);
            };
            var showIn = setting('showIn');
            if (showIn === '*') {
                addEverywhere();
            } else if (showIn === 'profile') {
                var devNameLink = document.querySelector('div.gruserbadge a.username');
                if (devNameLink) addLlamaButton(devNameLink);
            } else if (showIn === 'notifycenter') {
                if (window.location.href.indexOf('/notifications/') < 0)
                    return;
                addEverywhere();
            }
            addCSS(STYLE);
            window.addEventListener('message', messageListener);
        };

        var waitForElements = function(selector, callback, notFirst) {
            var elements = document.querySelectorAll(selector);
            forEach(elements, function(el) {
                if (!el.getAttribute('data-already-found')) {
                    el.setAttribute('data-already-found', true);
                    callback(el);
                }
            });
            if (!notFirst) {
                setInterval(function() {
                    waitForElements(selector, callback, true);
                }, 400);
            }
        };

        var messageListener = function(e) {
            if (e.data.slice(0, 6) === '{\"oclb') {
                var data = JSON.parse(e.data),
                    devName = data.devName,
                    successText = data.successText,
                    errorText = data.errorText,
                    oclbFrame = document.getElementById('oclb-frame-' + devName);
                clearTimeout(timeouts[devName]);
                delete timeouts[devName];
                if (successText.indexOf('Success!') !== -1) {
                    setButtonsState(devName, 'success', successText);
                    storage('set', loggedInDev + '|' + devName, 0);
                } else if (errorText.indexOf('You cannot give any more llama badges to ') !== -1 || errorText === 'Cannot give badge to this user') {
                    setButtonsState(devName, 'already');
                    storage('set', loggedInDev + '|' + devName, 0);
                } else if (errorText.indexOf('Badges have been given too quickly, and have tripped a spam filter') !== -1) {
                    setButtonsState(devName, 'spam', errorText);
                } else {
                    setButtonsState(devName, 'error', errorText);
                    if (oclbFrame) {
                        if (errorText === 'Please enter a password.') {
                            alert('One Click Llama Button will start working after you give a Llama manually with the "Remember my password" option checked.');
                        } else {
                            alert(errorText + (successText ? '\n\n\n' + successText : ''));
                        }
                    }
                }
                oclbFrame.remove();
            }
        };

        var storageListener = function(e) {
            if (e.key === 'sbsCall') {
                var data = JSON.parse(e.newValue);
                if (data.loggedInDev === loggedInDev)
                    setButtonsState(data.devName, data.className, data.title, true);
            }
        };

        if (window.location.host === 'kishanbagaria.com') {
            var no_oclb = document.getElementById('no-oclb');
            if (no_oclb) no_oclb.remove();
            var inputs = document.getElementsByTagName('input');
            forEach(inputs, function(input) {
                input.onchange = function() {
                    setting(input.name, input.value);
                };
            });
            forEach(['showIn', 'showPos'], function(key) {
                var radio = document.querySelector('input[value="' +  setting(key) + '"]');
                if (radio) radio.checked = true;
            });
        } else {
            if (window.location.href.indexOf('badge/give?badgetype=llama') > -1) {
                document.give_form.tos.checked = true;
                document.give_form.password_remembered.checked = true;
                document.give_form.submit();
            } else if (window.location.href.indexOf('badge/process_trade') > -1) {
                if (document.getElementsByClassName('badge-llama').length > 0) {
                    var sEle = document.querySelector('#badgeReceiptBody > div'),
                        eEle = document.querySelector('#error_messages > ul > li'),
                        successText = sEle ? sEle.textContent.replace(/\s+/g, ' ').trim() : '',
                        errorText = eEle ? eEle.textContent : '';
                    window.parent.postMessage(JSON.stringify({
                        oclb: '1',
                        devName: document.getElementsByClassName('username')[0].textContent.toLowerCase(),
                        successText: successText,
                        errorText: errorText
                    }), document.getElementById('referrer').value);
                }
            } else if (window.location.host !== 'llamatrade.deviantart.com') {
                if (loggedInDev) addLlamaButtons();
            }
        }
    } catch (err) {
        var heading = 'One Click Llama Button encountered an error:\n';
        console.error(heading, err);
        alert(heading + '\n---\n' + err + '\n---\n\nPlease report this to Kishan-Bagaria.DeviantArt.com');
    }
});