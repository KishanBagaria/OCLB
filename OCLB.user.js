// ==UserScript==
// @name            One Click Llama Button
// @namespace       http://www.door2windows.com/
// @description     Adds a give Llama button after the names of every deviant and group.
// @author          Kishan Bagaria | kishanbagaria.com | https://www.deviantart.com/kishan-bagaria
// @version         6.1.0
// @icon            https://kishanbagaria.com/-/oclb.png
// @match           *://*.deviantart.com/*
// @match           *://*.sta.sh/*
// @match           *://kishanbagaria.com/userscripts/one-click-llama-button/*
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           unsafeWindow
// @run-at          document-end
// @downloadURL     https://raw.githubusercontent.com/KishanBagaria/OCLB/master/OCLB.user.js
// @updateURL       https://raw.githubusercontent.com/KishanBagaria/OCLB/master/OCLB.user.js
// ==/UserScript==

// Additional Credits:
// Code Update      Noushad Bhuiyan | https://www.fiverr.com/web_coder_nsd | https://www.deviantart.com/noushadbug
// Code Update      LlanellaWhatCake | https://www.deviantart.com/llanellawhatcake
// Code Update      Liamb135 | https://www.deviantart.com/liamb135
// Troubleshooter   Chipster-roo | https://www.deviantart.com/chipster-roo
// 100kllamas       AgnosticDragon | https://www.deviantart.com/agnosticdragon | https://www.deviantart.com/100kllamas

try {
    gmSet = GM_setValue;
    gmGet = GM_getValue;
} catch (e) {
    console.error(e);
}

function addJS(source) {
    const s = document.createElement('script');
    s.textContent = '(' + source + ')();';
    document.body.appendChild(s).remove();
}

addJS(function() {
    const VERSION = '6.1.0';

    const IMG = {
        ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR4Aa2OxUHFQBCGvxXctQl62jbCBS0lR/qhBC7x5MXXcCrgH/cR8eVme3rTz1FKg7P4zZwesXMvHl9XAP1ZVCcHidzZJowz0cekLVqAWwCJVEbubqOO92FLgxQIrQw/0NGt+GEmWkeYlg/rCc7zC/l501YdtmjxTY/vR+K0pH8bPh9q6w1OCIP3H0Wbnl1c30PO/+AdWxpL8w9v1MsAAAAASUVORK5CYII=',
        SPAM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAMAAACE9bUqAAAAe1BMVEUAMmb0zTM4DRCcX0HOt4ifSyxmAADMmWZlOCSojjDMiGGPPSFlAADVs5vElXfUp6oAAC5KR0NPNTyeSi6fgHYgH0+dX0Cbg4AAMWaZZmara2a4dG4/QFLHik9jCQ13Tkw6KUUAADMILVRLEhbMj22KSSgsDg0tR2YAKmIz6elIAAAAj0lEQVR4AX3LBRrDMAxDYSdlGDMz3P+Es6tF4/1lva+S/SL/OeeaS+y014JFOKJIgE9cOAhfXB3GafPLR4HuKI7jdqkStdnuBPa9WB0RBonpo1xihZ1QXgMMURAiM45gci8rfAaz+WIppqZ1bdJUbwz4JpQWUAWh5MHB+xMLdk9nb7TkgBU6SsuVO2eU7JcbjM8Lv+nDU0gAAAAASUVORK5CYII=',
        ENOUGH: 'data:image/gif;base64,R0lGODlhDwASAPQYALAUFHNzc97KzIeHh8K2qu3t7fn5+cgmJuXl5WNjY+95eXh4ePr6+rscHKsPDz09PexiYvOenjc3Nzs7O+7u7s/PzwAAAPTt5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAABgALAAAAAAPABIAAAV4ICaOYxBgJqkGhcC64oHJJcIgJ9YoQESjE8Qj14AoFL+A4MHIYRyQH4pwcz5XFwJOtSIICgPuYDwIeMGqgWFtCFwEl4tT/Za/4WjRoB7vX/J6dXBxFFYYA3CJcYAjEgQVBAQJkRZcFgmXlZmWCxadGJ6VlhakoKUhADs=',
        ERROR: 'data:image/gif;base64,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',
        GIVE: 'data:image/gif;base64,R0lGODlhDwASAPQaAO6oQy4kHAAAAJRPC0onDfbhbl0yEO+pQtGBKdGMJcJaKpVgLrFtJ+qwNFkrFuqpJvjGROOKJFUyEmNjPNWUNOzJYnx8Sl0xDXFFLnV1Pv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAPABIAQAWJoKYFgiCKhKGl5ym9EjEgh9qOWWAF466VgUKAhIIYCoSbZKFgLhYJgGoYFAxRjUIjKQK2CIzBgSuSVCKICBiBSNRuAQfGMQgMHLyu8EQ4UPp/AgWDgyYrFw0GZEF5KAMFEGQ3jjQ2LhWYFWsJD2QDTk9PCW4DLQNNqAsPB6VwEwGvI7GTVDxUGiEAOw==',
        GIVING: 'data:image/gif;base64,R0lGODlhEgASAPQLAAYEASAVBvzJAPnsAvz3rqpkAO3Sfv374MuPSvvuJvzxTPnth/+oAf7+/vvxS55hAO3Fb/vJAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEgASAEAFZuAijmIALMBJrigQIIcSBOwIMICQ6jUbCAeDgdYDJARHgUKAIPYWv4PA+YQCZU9AYysYKL7TZ6AwBpBVYmAuXLXKqOlvs22NwVdrQVcxLCb1Ag4KCGh4SIcEPEUPZikFhTUpkikrIQAh+QQJCgASACwDAAAADAASAAAFYaAkjkAglSN5CICwmOm5HkAslkdQ20Bu7DFAwVCABQ9DYKqnMBgBUN1BAYEBIoIsYNAkQAWN8FZBFugaiazaoWCdBOm0QIGwxuECgvsWKBaEOiQPQjWEJAwthXs3UIVQEiEAIfkECQoADAAsBAAAAAsAEgAABVwgIzIAEJDnCCiHAAhLKq7tAYxzcOg3vgYGQ09VMBRlM0VRiCOxFAZZKfCEpF4uxQBKKDUaq61CIQgAEoJ02kEunQVogQJxhdsJrlwhUADshyV9gYAvbnkzbokMIQAh+QQJCgAMACwFAAAACgASAAAFViDDAGQwmqOiHAIgLCigsgcgnkcgBHYaGEDUqGAgKoRD4PGWWi1FpNnTJVMMDAhTITpQGJYFgVj8NQESArRAkR2l34SWKFCgA+q3QCDbzuv+TAx6gzchACH5BAkKAAwALAMAAAAMABIAAAViIMMEwAiUohgsAiAcCpoCxxun8xHAsggYQMVtVjAUhIceA1A0KJI4lfMAjQYgTwVJBiA4BzFBSyUQKsCARqPkUjjE8AQqgFCIEwI5ykXI+7kBBUyBJEQnTCc4LoctPYePKCEAIfkECQoAEgAsAwAAAAwAEgAABWCgFAAiKZ1nsAiAcJioBBwuHAOGodgobrwxVEC3C55wCqBxmOSlIM0RwAQg6AaCrCBCCggUYGxjzGopHNpsotFFKNSCBOsoIMTvCWqgACjsRz18MnwPMC0khwyGUzJTMCEAIfkECQoACwAsAwAAAAsAEgAABVbgsgDAGIhoIAjAIZzoorpwHBjKG4s3vcuKXC2l8O0CRZ0NeQAESCncYLUqqYKKaWNLEigc1FXCisgJEufSSEA4u9XOAqAQoMfmJPlDve4CGHwkglALIQAh+QQFCgAMACwEAAAACgASAAAFViATACJgMuIiAMKhKCQDHO0by4HwwmgfvAaeL2go3ESG5FF0UPZECpdhhQogDIOXgPoLDg60AnS63Yqtim1CkCCxCOx4LGAs0ANPqx7vE+QCfFWAgCghADs=',
        SUCCESS: 'data:image/gif;base64,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',
        UNKNOWN: 'data:image/gif;base64,R0lGODlhDAASAPABAJOpjwAAACH5BAUAAAEALAAAAAAMABIAAAImjA8QeWi62nNyKVZvzFTC7XXJSH2g1Zho5aglC44yFmnaZJ+ypRQAOw==',
        TOKEN_MISS: 'data:image/gif;base64,R0lGODlhDAASAPABAJOpjwAAACH5BAUAAAEALAAAAAAMABIAAAImjA8QeWi62nNyKVZvzFTC7XXJSH2g1Zho5aglC44yFmnaZJ+ypRQAOw=='
    };

    const STYLE =
        'span.oclb        {display:inline-block;pointer-events:all;image-rendering:pixelated;width:18px;height:18px;vertical-align:middle;margin:0 3px;cursor:default;transition:.3s all}' +
        'span.oclb-give   {background:url(' + IMG.GIVE + ')    center no-repeat;cursor:pointer}' +
        'span.oclb-giving {background:url(' + IMG.GIVING + ')  center no-repeat;cursor:progress}' +
        'span.oclb-already{background:url(' + IMG.ALREADY + ') center no-repeat;margin:0}' +
        'span.oclb-success{background:url(' + IMG.SUCCESS + ') center no-repeat;width:26px}' +
        'span.oclb-error  {background:url(' + IMG.ERROR + ')   center no-repeat;cursor:pointer}' +
        'span.oclb-token_miss  {background:url(' + IMG.TOKEN_MISS + ')   center no-repeat;cursor:pointer}' +
        'span.oclb-spam   {background:url(' + IMG.SPAM + ')    center no-repeat;cursor:pointer;width:25px}' +
        'span.oclb-unknown{background:url(' + IMG.UNKNOWN + ') center no-repeat;cursor:help}' +
        'span.oclb-enough {background:url(' + IMG.ENOUGH + ') center no-repeat}' +
        'span.oclb-100k   {width:28px}' +
        'span.oclb-100k:after{color:#f6e16e;background:#4A270D;content:"100k";font:10px/17px Trebuchet MS;text-align:center;letter-spacing:0;vertical-align:top;border-radius:4px;padding:0 3px;display:block}';

    const CSS = STYLE;
    const NO_TRANSITION_STYLE = 'span.oclb{transition:none}';
    const UNKNOWN_TITLE = 'This deviant\'s Llama status is a mystery!';
    const TOKEN_MISSING_TITLE = 'CSRF token not found. Please clear site data and try again.';

    const TITLES = {
        give: 'Give a Llama',
        giving: 'Giving Llama...',
        already: 'Already gave a Llama',
        success: 'Llama given successfully!',
        enough: 'Has Llamas enough for love',
        spam: 'You\'re giving Llamas too quickly!',
        error: 'Error giving Llama. Click to retry.',
        '100k': 'This Deviant has received 100,000 Llamas!',
        token_miss: TOKEN_MISSING_TITLE,
        unknown: {
            loading: UNKNOWN_TITLE + ' (Loading...)',
            err_network: UNKNOWN_TITLE + ' (Network error)',
            err_dev_id: UNKNOWN_TITLE + ' (Invalid response, unable to find deviant ID)',
            err_server_response: UNKNOWN_TITLE + ' (Llama status error: Invalid server response)'
        }
    };

    const HAS_100K_LLAMAS = [
        'aenea-jones', 'agnosticdragon', 'alitn', 'anpcreations', 'autumniv',
        'beckykidus', 'canonics', 'championx91', 'chateaugrief', 'cheriibat',
        'coccineus', 'damaimikaz', 'darksena', 'derfeldwebel', 'epicsaveroom',
        'eve-jennifer', 'eviejulia', 'evuie', 'finakiyomo', 'fizzypinkbubbles',
        'gh0std0lls', 'hyliabeilschmidt', 'iamsorry87', 'internetwaifu', 'ioulaum',
        'kalmakamala', 'koiransielu', 'liamb135', 'leonorachris', 'lombarsi',
        'luke-crowe', 'metorou-de', 'naiuou', 'natures-studio', 'neekothefox2',
        'nekodawnlight', 'niotabunny', 'noire-ighaan', 'novakaru', 'raadollistunut',
        'seasidehill', 'savagefrog', 'senzune', 'seviyummy', 'shintaurashura',
        'shinigamiookamiryuu', 'spook-a-palooza', 'strawberriesinhell', 'thegalleryofeve',
        'timing2', 'toby512', 'tree-pencil', 'unexpectedtoy', 'unibat',
        'unreal-forever', 'vibrant-snow', 'vibrantsnow', 'wytherwing',
        'zestylimey', 'zjeroxytz'
    ];

    const DEFAULTS = {
        showIn: '*',
        showPos: 'after',
        addForGroups: 'true',
        animation: 'true'
    };

    const errorTimeouts = {};
    const lastStates = {};
    const devIDs = {};
    const xhrCallbacks = {};
    let xdCommunicator;

    let csrfTokenCache = null;
    let csrfTokenCacheTime = 0;
    const CSRF_CACHE_DURATION = 30 * 60 * 1000;

    try {
        const addCSS = css => {
            document.head.appendChild(document.createElement('style')).textContent = css;
        };

        const isLSSupported = (() => {
            const mod = 'ls-supported';
            try {
                window.localStorage.setItem(mod, mod);
                window.localStorage.removeItem(mod);
                return true;
            } catch (e) {
                return false;
            }
        })();

        const storage = (action, key, value) => {
            if (!isLSSupported) return;
            try {
                return window.localStorage[action + 'Item'](key, value);
            } catch (er) {
                window.localStorage.clear();
            }
        };

        const setting = (key, value) => {
            if (value) {
                if (typeof gmSet !== 'undefined') gmSet(key, value);
            } else {
                if (typeof gmGet !== 'undefined' && gmGet(key)) return gmGet(key);
                return DEFAULTS[key];
            }
        };

        const getToken = doc => {
            let token = null;

            const scripts = doc.scripts;
            if (scripts) {
                for (const current of scripts) {
                    if (current.innerHTML && current.innerHTML.includes('window.__CSRF_TOKEN__')) {
                        const htmlChunks = current.innerHTML.split('window.__CSRF_TOKEN__');
                        const splitForToken = htmlChunks[1].split(/'/);
                        token = splitForToken[1];
                        if (token) break;
                    }
                }
            }

            if (!token) {
                try {
                    const logoutForm = doc.querySelector("#logout-form input[type='hidden']");
                    if (logoutForm) token = logoutForm.value;
                } catch (e) {}
            }

            if (!token) {
                try {
                    const metaToken = doc.querySelector('meta[name="csrf-token"]');
                    if (metaToken) token = metaToken.getAttribute('content');
                } catch (e) {}
            }

            return token;
        };

        const getLoggedInDeviantName = () => {
            if (window.deviantART && window.deviantART.deviant) {
                const u = window.deviantART.deviant.username;
                if (u) return u.toLowerCase();
            }
            const eclipseElement = document.querySelector('header a[data-username]');
            if (eclipseElement) {
                return eclipseElement.getAttribute('data-username').toLowerCase();
            }
        };

        const waitForLoggedInDevName = (timeoutMs = 5000) => {
            return new Promise(resolve => {
                const intervalMs = 100;
                let elapsed = 0;

                const check = () => {
                    const u = getLoggedInDeviantName();
                    if (u) {
                        resolve(u);
                    } else if (elapsed >= timeoutMs) {
                        resolve(null);
                    } else {
                        elapsed += intervalMs;
                        setTimeout(check, intervalMs);
                    }
                };

                check();
            });
        };

        let loggedInDev = null;

        const initOCLB = async () => {
            loggedInDev = getLoggedInDeviantName();
            if (!loggedInDev) {
                loggedInDev = await waitForLoggedInDevName();
            }
            if (!loggedInDev && !window.location.href.includes('/notifications')) return;
            addLlamaButtonsInDA();
        };

        const setButtonState = (llamaButton, className, title) => {
            llamaButton.className = 'oclb oclb-' + className;
            if (!title) title = TITLES[className];
            if (title) llamaButton.title = title;
        };

        const saveLastState = (devName, className, title) => {
            if (className === 'unknown') return;
            lastStates[devName] = { className, title };
        };

        const spamTimeouts = {};

        const setButtonsState = (devName, className, title, dontTellOtherTabs) => {
            if (!dontTellOtherTabs) {
                storage('set', 'sbsCall', JSON.stringify({
                    loggedInDev,
                    devName,
                    className,
                    title
                }));
            }

            if (spamTimeouts.hasOwnProperty(devName)) clearTimeout(spamTimeouts[devName]);

            if (className === 'spam') {
                spamTimeouts[devName] = setTimeout(() => {
                    setButtonsState(devName, 'give', TITLES.give);
                }, 60000);
            }

            saveLastState(devName, className, title);

            const llamaButtons = document.querySelectorAll('span[devName="' + devName + '"]');
            for (const llamaButton of llamaButtons) {
                setButtonState(llamaButton, className, title);
            }
        };

        const insertInvisibleIframe = (src, id) => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = src;
            if (id) iframe.id = id;
            return document.body.appendChild(iframe);
        };

        const llamaButtonClicked = function(event) {
            event.preventDefault();
            event.stopPropagation();

            const stateClass = this.className.slice(10);
            if (!['give', 'error', 'spam', 'token_miss'].includes(stateClass)) return;

            const devName = this.getAttribute('devName');
            const devNameReg = this.getAttribute('devNameReg');
            setButtonsState(devName, 'giving');

            getCsrfToken().then(token => {
                if (!token) {
                    setButtonsState(devName, 'token_miss', 'CSRF token not found. Please refresh the page.');
                    return;
                }
                processLlamaGiven(token, devNameReg, devName);
            }).catch(() => {
                setButtonsState(devName, 'token_miss', 'Failed to get CSRF token. Please refresh the page.');
            });

            clearTimeout(errorTimeouts[devName]);
            errorTimeouts[devName] = setTimeout(() => {
                setButtonsState(devName, 'error', 'Timeout');
            }, 45000);
        };

        const processLlamaGiven = (token, devNameReg, devName, iframe) => {
            const url = 'https://www.deviantart.com/_puppy/dashared/give_llama';
            const params = JSON.stringify({
                foruser: devNameReg,
                csrf_token: token
            });

            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    try {
                        const response = JSON.parse(xhr.responseText);

                        if (response.status === 'error' && response.errorCode === 400 &&
                            response.errorDescription &&
                            (response.errorDescription.includes('quickly') ||
                                response.errorDescription.includes('Whoa there') ||
                                response.errorDescription.includes('spam filter'))) {
                            clearTimeout(errorTimeouts[devName]);
                            setButtonsState(devName, 'spam');
                            if (iframe) iframe.remove();
                            return;
                        }

                        if (!response.error || response.status !== 'error') {
                            clearTimeout(errorTimeouts[devName]);
                            setButtonsState(devName, 'success');
                            if (iframe) iframe.remove();

                            errorTimeouts[devName] = setTimeout(() => {
                                getGiveMenu(devName, (devID, className, title) => {
                                    saveLastState(devName, className, title);
                                    if (devID) devIDs[devName] = devID;
                                    const llamaButtons = document.querySelectorAll('span[devName="' + devName + '"]');
                                    for (const llamaButton of llamaButtons) {
                                        setButtonState(llamaButton, className, title);
                                    }
                                });
                            }, 5000);

                            return;
                        }
                    } catch (e) {}
                }

                clearTimeout(errorTimeouts[devName]);
                setButtonsState(devName, 'error');
                if (iframe) iframe.remove();
            };

            xhr.send(params);
        };

        let xhrCounter = 0;

        const get = (url, callbacks) => {
            if (!xdCommunicator) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);
                xhr.onload = () => callbacks.success.call(xhr.response);
                xhr.onerror = () => callbacks.error.call('');
                xhr.send();
            } else {
                xhrCallbacks[++xhrCounter] = callbacks;
                xdCommunicator.postMessage(JSON.stringify({
                    oclb: {
                        id: xhrCounter,
                        url
                    }
                }), '*');
            }
        };

        const getCsrfToken = () => {
            return new Promise(resolve => {
                const now = Date.now();

                if (csrfTokenCache && (now - csrfTokenCacheTime) < CSRF_CACHE_DURATION) {
                    resolve(csrfTokenCache);
                    return;
                }

                const currentLoggedInDev = getLoggedInDeviantName();
                const prevLoggedInDev = storage('get', 'oclb_last_user');

                if (currentLoggedInDev !== prevLoggedInDev) {
                    csrfTokenCache = null;
                    csrfTokenCacheTime = 0;
                    storage('set', 'oclb_last_user', currentLoggedInDev);
                    Object.keys(lastStates).forEach(key => delete lastStates[key]);
                }

                const token = getToken(document);
                if (token) {
                    csrfTokenCache = token;
                    csrfTokenCacheTime = now;
                    storage('set', 'cached_csrf', token);
                    resolve(token);
                    return;
                }

                fetch('https://www.deviantart.com/', {
                    credentials: 'include',
                    cache: 'no-store'
                }).then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch CSRF token. Status: ${response.status}`);
                    }
                    return response.text();
                }).then(htmlContent => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = htmlContent;

                    const tokenInput = tempDiv.querySelector("#logout-form input[type='hidden']") ||
                        tempDiv.querySelector("input[name='validate_token']") ||
                        tempDiv.querySelector("[name='csrf_token']");

                    if (tokenInput && tokenInput.value) {
                        csrfTokenCache = tokenInput.value;
                        csrfTokenCacheTime = now;
                        storage('set', 'cached_csrf', tokenInput.value);
                        resolve(tokenInput.value);
                        return;
                    }

                    const tokenFromScripts = getToken(tempDiv);
                    if (tokenFromScripts) {
                        csrfTokenCache = tokenFromScripts;
                        csrfTokenCacheTime = now;
                        storage('set', 'cached_csrf', tokenFromScripts);
                        resolve(tokenFromScripts);
                        return;
                    }

                    tryFetchSessionToken();
                }).catch(error => {
                    console.error('Error fetching CSRF token:', error);
                    tryFetchSessionToken();
                });

                const tryFetchSessionToken = () => {
                    try {
                        const sessionToken = window.sessionStorage.getItem('csrf_token');
                        if (sessionToken) {
                            csrfTokenCache = sessionToken;
                            csrfTokenCacheTime = now;
                            resolve(sessionToken);
                            return;
                        }
                    } catch (e) {}
                    resolve(null);
                };
            });
        };

        const getGiveMenu = (devName, callback) => {
            getCsrfToken().then(csrfToken => {
                if (csrfToken) {
                    get('https://www.deviantart.com/_puppy/dauserprofile/give_menu/status?username=' + devName + '&csrf_token=' + csrfToken, {
                        success: function() {
                            const resultJSON = JSON.parse(this);
                            if (!this || this.includes('fail')) {
                                callback(0, 'unknown', TITLES.unknown.err_dev_id);
                                return;
                            }

                            if (!resultJSON.canGiveLlama) {
                                callback(devIDs[devName], 'already');
                            } else if (resultJSON.canGiveLlama) {
                                callback(devIDs[devName], 'give');
                            } else {
                                callback(devIDs[devName], 'unknown', TITLES.unknown.err_server_response);
                            }
                        },
                        error: () => {
                            callback(0, 'unknown', TITLES.unknown.err_network);
                        }
                    });
                } else {
                    console.error('CSRF token not found.');
                    setButtonsState(devName, 'token_miss', 'Token not found! Refresh and retry..');
                }
            }).catch(error => {
                console.error('Error:', error);
            });
        };

        const llamaButtonsToUpdate = {};

        const askServerForStatus = (llamaButton, devName) => {
            if (llamaButtonsToUpdate.hasOwnProperty(devName)) {
                llamaButtonsToUpdate[devName].push(llamaButton);
            } else {
                llamaButtonsToUpdate[devName] = [llamaButton];
                getGiveMenu(devName, (devID, className, title) => {
                    saveLastState(devName, className, title);
                    if (devID) devIDs[devName] = devID;
                    for (const button of llamaButtonsToUpdate[devName]) {
                        setButtonState(button, className, title);
                    }
                    delete llamaButtonsToUpdate[devName];
                });
            }
        };

        const initLlamaButton = (llamaButton, devName) => {
            llamaButton.onclick = llamaButtonClicked;

            if (lastStates.hasOwnProperty(devName)) {
                setButtonState(llamaButton, lastStates[devName].className, lastStates[devName].title);
            } else if (HAS_100K_LLAMAS.includes(devName)) {
                setButtonState(llamaButton, '100k');
            } else if (storage('get', loggedInDev + '|' + devName)) {
                setButtonState(llamaButton, 'already');
            } else if (loggedInDev === devName) {
                setButtonState(llamaButton, 'enough');
            } else {
                setButtonState(llamaButton, 'unknown', TITLES.unknown.loading);
                askServerForStatus(llamaButton, devName);
            }
        };

        const getDevName = (link, needLowerCase) => {
            const eclipseUsername = link.getAttribute('data-username');

            if (eclipseUsername) {
                return needLowerCase ? eclipseUsername.toLowerCase() : eclipseUsername;
            }

            const devNameOld = /([a-zA-Z0-9-]+)\.deviantart\.com/.exec(link.href);
            if (devNameOld && devNameOld[1] !== 'www') {
                return needLowerCase ? devNameOld[1].toLowerCase() : devNameOld[1];
            }

            const devNameNew = /www\.deviantart\.com\/([a-zA-Z0-9-]+)/.exec(link.href);
            if (devNameNew) {
                return needLowerCase ? devNameNew[1].toLowerCase() : devNameNew[1];
            }
        };

        const addLlamaButton = devNameLink => {
            let isSpan = false;

            if (devNameLink.nodeType === Node.ELEMENT_NODE &&
                devNameLink.tagName.toLowerCase() === 'span') {
                isSpan = true;
            }

            if (devNameLink.className.includes('banned')) return;

            const devName = isSpan ? devNameLink.innerText : getDevName(devNameLink, true);
            const devNameReg = isSpan ? devNameLink.innerText : getDevName(devNameLink, false);

            if (!devName) return;

            if (!loggedInDev) {
                document.cookie.split(';').forEach(c => {
                    if (c.split('=')[0].trim() === 'userinfo') {
                        loggedInDev = JSON.parse(decodeURIComponent(c).split(';')[1]).username.toLowerCase();
                    }
                });
            }

            if (devName === loggedInDev) return;

            const llamaButton = document.createElement('span');
            llamaButton.setAttribute('devName', devName);
            llamaButton.setAttribute('devNameReg', devNameReg);

            initLlamaButton(llamaButton, devName);

            let refEl = setting('showPos') === 'before' ? devNameLink : devNameLink.nextSibling;

            if (setting('showPos') === 'after') {
                if (refEl && refEl.className && refEl.className.includes('user-symbol')) {
                    refEl = refEl.nextSibling;
                }
            }

            devNameLink.parentNode.insertBefore(llamaButton, refEl);
        };

        const addMessageListener = callback => {
            window.addEventListener('message', e => {
                if (e.data && e.data.slice && e.data.slice(0, 6) !== '{"oclb') return;
                callback(JSON.parse(e.data).oclb, e.origin);
            });
        };

        const addStylesAndMsgListener = () => {
            addCSS(CSS);
            if (setting('animation') !== 'true') addCSS(NO_TRANSITION_STYLE);

            addMessageListener((data, origin) => {
                if (origin !== 'https://www.deviantart.com') return;

                const oclbFrame = document.getElementById('oclb-frame-' + data.devName);
                clearTimeout(errorTimeouts[data.devName]);
                delete errorTimeouts[data.devName];

                const callback = (className, setStorage) => {
                    setButtonsState(data.devName, className,
                        className === 'success' ? data.successText : data.errorText);
                };

                if (data.successText.includes('Success!')) {
                    callback('success', true);
                } else if (data.errorText.includes('You cannot give any more llama badges to') ||
                    data.errorText.includes('Cannot give badge to this user')) {
                    callback('already', true);
                } else if (data.errorText.includes('Badges have been given too quickly, and have tripped a spam filter') ||
                    data.errorText.includes('Whoa there')) {
                    callback('spam');
                } else {
                    callback('error');
                    if (oclbFrame) {
                        if (data.errorText.includes('Please enter a password')) {
                            data.errorText = 'One Click Llama Button will start working after you give a Llama manually (the normal way) with the "Remember my password" option checked.';
                        }
                        alert(data.errorText + (data.successText ? '\n\n' + data.successText : ''));
                    }
                }

                if (oclbFrame) oclbFrame.remove();
            });
        };

        const addFooterLinks = () => {
            const footer = document.querySelector('.footer-menu-list');
            if (!footer) return;

            const LINKS = {
                'One Click Llama Button': '//kishanbagaria.com/userscripts/one-click-llama-button/'
            };

            Object.keys(LINKS).forEach(link => {
                const li = document.createElement('li');
                li.className = 'footer-menu-list-item';
                li.innerHTML = link.link(LINKS[link]);
                footer.appendChild(li);
            });
        };

        const addLlamaButtonsInDA = () => {
            const waitForElements = (parentNode, selector, callback) => {
                const callbackOnlyOnce = n => {
                    if (n.getAttribute('data-oclb-found')) return;
                    callback(n);
                    n.setAttribute('data-oclb-found', '1');
                };

                const callForChildren = () => {
                    if (parentNode.matches && parentNode.matches(selector)) callbackOnlyOnce(parentNode);
                    if (!parentNode.querySelectorAll) return;
                    parentNode.querySelectorAll(selector).forEach(callbackOnlyOnce);
                };

                callForChildren();

                new MutationObserver(mutations => {
                    for (const m of mutations) {
                        m.addedNodes.forEach(callForChildren);
                    }
                }).observe(parentNode, { childList: true, subtree: true });
            };

            const storageListener = e => {
                if (e.key !== 'sbsCall') return;
                const data = JSON.parse(e.newValue);
                if (data.loggedInDev === loggedInDev) {
                    setButtonsState(data.devName, data.className, data.title, true);
                }
            };

            const usernameLinkSelector = setting('addForGroups') === 'true'
                ? 'a.username, a[data-username]'
                : 'a.username:not(.group), a[data-username]:not([data-usertype=group])';

            const addEverywhere = () => {
                const badgesLinkSelector = 'a[href*=".deviantart.com/"][href*="/badges/"]';
                const watchersSelector = '#watchers div > span';
                const watchingSelector = '#watching div > span';
                const membersSelector = '#group_members div > span';
                const adminSelector = '#group_admins div > span';

                waitForElements(document.body, [
                    badgesLinkSelector,
                    usernameLinkSelector,
                    watchersSelector,
                    watchingSelector,
                    membersSelector,
                    adminSelector
                ].join(','), addLlamaButton);
            };

            const addInCatBar = () => {
                const devNameLink = document.querySelector('div.gruserbadge ' + usernameLinkSelector);
                if (devNameLink) addLlamaButton(devNameLink);
                return devNameLink;
            };

            const isNotifyCenter = () => window.location.href.includes('/notifications/');

            const showIn = setting('showIn');

            if (showIn === '*') {
                if (window.location.href.endsWith('/badges/')) {
                    addInCatBar();
                    waitForElements(document.querySelector('.ll'), usernameLinkSelector, addLlamaButton);
                } else {
                    addEverywhere();
                }
            } else if (showIn === 'profile') {
                if (!addInCatBar()) return;
            } else if (showIn === 'notifycenter') {
                if (!isNotifyCenter()) return;
                addEverywhere();
            } else if (showIn === 'notifycenter+profile') {
                if (isNotifyCenter()) addEverywhere();
                else if (!addInCatBar()) return;
            }

            if (showIn !== 'profile') window.addEventListener('storage', storageListener);

            addStylesAndMsgListener();
            addFooterLinks();
        };

        const postParent = obj => {
            window.parent.postMessage(JSON.stringify({ oclb: obj }), '*');
        };

        if (!window.location.host.includes('deviantart.com') && !window.location.host.includes('sta.sh')) {
            window.postMessage('oclb-loaded', window.location.href);

            if (window.location.href.includes('/preferences/')) {
                const inputs = document.querySelectorAll('input.oclb');
                for (const input of inputs) {
                    if (input.type === 'checkbox') {
                        if (setting(input.name) === 'true') input.checked = true;
                        input.onchange = () => setting(input.name, input.checked.toString());
                    } else if (input.type === 'radio') {
                        if (setting(input.name) === input.value) input.checked = true;
                        input.onchange = () => setting(input.name, input.value);
                    }
                }
                addCSS(CSS);
            } else if (window.location.href.includes('/exchangers/')) {
                xdCommunicator = insertInvisibleIframe('//deviantart.com/global/difi/?oclb').contentWindow;
                addStylesAndMsgListener();

                addMessageListener(data => {
                    if (data.loggedInDev) {
                        loggedInDev = data.loggedInDev;
                        window.postMessage('oclb.loggedInDev|' + loggedInDev, window.location.href);
                        for (const button of document.querySelectorAll('span.oclb')) {
                            const devName = button.getAttribute('devName');
                            if (devName) initLlamaButton(button, devName);
                        }
                    } else if (data.id) {
                        if (data.data) {
                            xhrCallbacks[data.id].success.call(data.data);
                        } else {
                            xhrCallbacks[data.id].error();
                        }
                        delete xhrCallbacks[data.id];
                    }
                });
            }
        } else if (window.location.href.includes('/modal/badge/give?badgetype=llama')) {
            const fillForm = () => {
                if (!document.give_form) return window.location.reload();
                if (document.give_form.tos) document.give_form.tos.checked = true;
                document.give_form.submit();
            };
            fillForm();
        } else if (window.location.href.includes('/modal/badge/process_trade')) {
            if (document.getElementsByClassName('badge-llama').length > 0) {
                const usernameElement = document.querySelector('.username');
                const successElement = document.querySelector('#badgeReceiptBody > div');
                const errorElement = document.querySelector('#error_messages > ul > li');
                const successText = successElement ? successElement.textContent.replace(/\s+/g, ' ').trim() : '';
                const errorText = errorElement ? errorElement.textContent.replace(/\s+/g, ' ').trim() : '';

                if (usernameElement) {
                    postParent({
                        devName: usernameElement.textContent.toLowerCase(),
                        successText,
                        errorText
                    });
                }
            }
        } else if (window.location.href.includes('://deviantart.com/global/difi/?oclb')) {
            document.cookie.split(';').forEach(c => {
                if (c.split('=')[0].trim() === 'userinfo') {
                    loggedInDev = JSON.parse(decodeURIComponent(c).split(';')[1]).username.toLowerCase();
                    postParent({ loggedInDev });
                }
            });

            addMessageListener(data => {
                const _ = function() {
                    postParent({
                        id: data.id,
                        data: this
                    });
                };

                if (data.url) {
                    get(data.url, { success: _, error: _ });
                }
            });
        } else if (window.location.host !== 'llamatrade.deviantart.com') {
            if (window.location.href.includes('/notifications')) {
                initOCLB();
            } else {
                loggedInDev = getLoggedInDeviantName();
                if (loggedInDev) {
                    addLlamaButtonsInDA();
                } else {
                    initOCLB();
                }
            }
        }
    } catch (err) {
        const heading = 'One Click Llama Button v' + VERSION + ' encountered an error:\n';
        console.error(heading, err);
        alert(heading + '\n---\n' + err + '\n---\n\nPlease email a screenshot of this to hi@kishan.info, or post it as a comment on deviantart.com/Kishan-Bagaria (unless someone has already posted the same comment).\n\n---\nURL: ' + window.location.href + '\nUser-Agent: ' + navigator.userAgent);
    }
});
