// ==UserScript==
// @name            One Click Llama Button
// @namespace       http://www.door2windows.com/
// @description     Adds a give Llama button after the names of every deviant and group.
// @author          Kishan Bagaria | kishan.org | https://www.deviantart.com/kishan-bagaria
// @version         6.4.0
// @icon            https://kishan.org/-/oclb.png
// @match           *://*.deviantart.com/*
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           unsafeWindow
// @run-at          document-end
// @downloadURL     https://raw.githubusercontent.com/KishanBagaria/OCLB/master/OCLB.user.js
// @updateURL       https://raw.githubusercontent.com/KishanBagaria/OCLB/master/OCLB.user.js
// ==/UserScript==

// Additional Credits

// Code Update      Noushad Bhuiyan  | https://www.deviantart.com/noushadbug       | https://www.fiverr.com/web_coder_nsd
// Code Update      LlanellaWhatCake | https://www.deviantart.com/llanellawhatcake |
// Code Update      Liamb135         | https://www.deviantart.com/liamb135         |
// Troubleshooter   Chipster-roo     | https://www.deviantart.com/chipster-roo     |
// 100kllamas       AgnosticDragon   | https://www.deviantart.com/agnosticdragon   | https://www.deviantart.com/100kllamas

(() => {
    'use strict';

    if (!window.location.host.includes('deviantart.com')) return;

    const VERSION = '6.4.0';

    const IMG = {
        ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR4Aa2OxUHFQBCGvxXctQl62jbCBS0lR/qhBC7x5MXXcCrgH/cR8eVme3rTz1FKg7P4zZwesXMvHl9XAP1ZVCcHidzZJowz0cekLVqAWwCJVEbubqOO92FLgxQIrQw/0NGt+GEmWkeYlg/rCc7zC/l501YdtmjxTY/vR+K0pH8bPh9q6w1OCIP3H0Wbnl1c30PO/+AdWxpL8w9v1MsAAAAASUVORK5CYII=',
        SPAM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAMAAACE9bUqAAAAe1BMVEUAMmb0zTM4DRCcX0HOt4ifSyxmAADMmWZlOCSojjDMiGGPPSFlAADVs5vElXfUp6oAAC5KR0NPNTyeSi6fgHYgH0+dX0Cbg4AAMWaZZmara2a4dG4/QFLHik9jCQ13Tkw6KUUAADMILVRLEhbMj22KSSgsDg0tR2YAKmIz6elIAAAAj0lEQVR4AX3LBRrDMAxDYSdlGDMz3P+Es6tF4/1lva+S/SL/OeeaS+y014JFOKJIgE9cOAhfXB3GafPLR4HuKI7jdqkStdnuBPa9WB0RBonpo1xihZ1QXgMMURAiM45gci8rfAaz+WIppqZ1bdJUbwz4JpQWUAWh5MHB+xMLdk9nb7TkgBU6SsuVO2eU7JcbjM8Lv+nDU0gAAAAASUVORK5CYII=',
        ENOUGH: 'data:image/gif;base64,R0lGODlhDwASAPQYALAUFHNzc97KzIeHh8K2qu3t7fn5+cgmJuXl5WNjY+95eXh4ePr6+rscHKsPDz09PexiYvOenjc3Nzs7O+7u7s/PzwAAAPTt5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAABgALAAAAAAPABIAAAV4ICaOYxBgJqkGhcC64oHJJcIgJ9YoQESjE8Qj14AoFL+A4MHIYRyQH4pwcz5XFwJOtSIICgPuYDwIeMGqgWFtCFwEl4tT/Za/4WjRoB7vX/J6dXBxFFYYA3CJcYAjEgQVBAQJkRZcFgmXlZmWCxadGJ6VlhakoKUhADs=',
        ERROR: 'data:image/gif;base64,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',
        GIVE: 'data:image/gif;base64,R0lGODlhDwASAPQaAO6oQy4kHAAAAJRPC0onDfbhbl0yEO+pQtGBKdGMJcJaKpVgLrFtJ+qwNFkrFuqpJvjGROOKJFUyEmNjPNWUNOzJYnx8Sl0xDXFFLnV1Pv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAPABIAQAWJoKYFgiCKhKGl5ym9EjEgh9qOWWAF466VgUKAhIIYCoSbZKFgLhYJgGoYFAxRjUIjKQK2CIzBgSuSVCKICBiBSNRuAQfGMQgMHLyu8EQ4UPp/AgWDgyYrFw0GZEF5KAMFEGQ3jjQ2LhWYFWsJD2QDTk9PCW4DLQNNqAsPB6VwEwGvI7GTVDxUGiEAOw==',
        GIVING: 'data:image/gif;base64,R0lGODlhEgASAPQLAAYEASAVBvzJAPnsAvz3rqpkAO3Sfv374MuPSvvuJvzxTPnth/+oAf7+/vvxS55hAO3Fb/vJAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEgASAEAFZuAijmIALMBJrigQIIcSBOwIMICQ6jUbCAeDgdYDJARHgUKAIPYWv4PA+YQCZU9AYysYKL7TZ6AwBpBVYmAuXLXKqOlvs22NwVdrQVcxLCb1Ag4KCGh4SIcEPEUPZikFhTUpkikrIQAh+QQJCgASACwDAAAADAASAAAFYaAkjkAglSN5CICwmOm5HkAslkdQ20Bu7DFAwVCABQ9DYKqnMBgBUN1BAYEBIoIsYNAkQAWN8FZBFukaiazaoWCdBOm0QIGwxuECgvsWKBaEOiQPQjWEJAwthXs3UIVQEiEAIfkECQoADAAsBAAAAAsAEgAABVwgIzIAEJDnCCiHAAhLKq7tAYxzcOg3vgYGQ09VMBRlM0VRiCOxFAZZKfCEpF4uxQBKKDUaq61CIQgAEoJ02kEunQVogQJxhdsJrlwhUADshyV9gYAvbnkzbokMIQAh+QQJCgAMACwFAAAACgASAAAFViDDAGQwmqOiHAIgLCigsgcgnkcgBHYaGEDUqGAgKoRD4PGWWi1FpNnTJVMMDAhTITpQGJYFgVj8NQESArRAkR2l34SWKFCgA+q3QCDbzuv+TAx6gzchACH5BAkKAAwALAMAAAAMABIAAAViIMMEwAiUohgsAiAcCpoCxxun8xHAsggYQMVtVjAUhIceA1A0KJI4lfMAjQYgTwVJBiA4BzFBSyUQKsCARqPkUjjE8AQqgFCIEwI5ykXI+7kBBUyBJEQnTCc4LoctPYePKCEAIfkECQoAEgAsAwAAAAwAEgAABWCgFAAiKZ1nsAiAcJioBBwuHAOGodgobrwxVEC3C55wCqBxmOSlIM0RwAQg6AaCrCBCCggUYGxjzGopHNpsotFFKNSCBOsoIMTvCWqgACjsRz18MnwPMC0khwyGUzJTMCEAIfkECQoACwAsAwAAAAsAEgAABVbgsgDAGIhoIAjAIZzoorpwHBjKG4s3vcuKXC2l8O0CRZ0NeQAESCncYLUqqYKKaWNLEigc1FXCisgJEufSSEA4u9XOAqAQoMfmJPlDve4CGHwkglALIQAh+QQFCgAMACwEAAAACgASAAAFViATACJgMuIiAMKhKCQDHO0by4HwwmgfvAaeL2go3ESG5FF0UPZECpdhhQogDIOXgPoLDg60AnS63Yqtim1CkCCxCOx4LGAs0ANPqx7vE+QCfFWAgCghADs=',
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
        'span.oclb-removing { opacity: 0 !important; transition: opacity 0.2s ease !important; }' +
        'span.oclb-100k   {width:28px}' +
        'span.oclb-100k:after{color:#f6e16e;background:#4A270D;content:"100k";font:10px/17px Trebuchet MS;text-align:center;letter-spacing:0;vertical-align:top;border-radius:4px;padding:0 3px;display:block}' +
        '.oclb-row { display: flex; flex-direction: row; align-items: center; flex-wrap: wrap; }';

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

    const HAS_100K_LLAMAS = new Set(`
        aenea-jones
        agnosticdragon
        alitn
        anpcreations
        autumniv
        beckykidus
        canonics
        championx91
        chateaugrief
        cheriibat
        coccineus
        crystalenceladus
        damaimikaz
        darksena
        derfeldwebel
        epicsaveroom
        eve-jennifer
        eviejulia
        evuie
        finakiyomo
        fizzypinkbubbles
        gh0std0lls
        hyliabeilschmidt
        iamsorry87
        internetwaifu
        ioulaum
        kalmakamala
        koiransielu
        liamb135
        leonorachris
        lombarsi
        luke-crowe
        metorou-de
        naiuou
        natures-studio
        neekothefox2
        nekodawnlight
        niotabunny
        noire-ighaan
        novakaru
        raadollistunut
        seasidehill
        savagefrog
        senzune
        seviyummy
        shintaurashura
        shinigamiookamiryuu
        spook-a-palooza
        strawberriesinhell
        thegalleryofeve
        timing2
        toby512
        tree-pencil
        unexpectedtoy
        unibat
        unreal-forever
        vibrant-snow
        vibrantsnow
        wytherwing
        zestylimey
        zjeroxytz
    `.trim().split(/\s+/));

    const DEFAULTS = {
        showIn: '*',
        showPos: 'after',
        addForGroups: 'true',
        animation: 'true'
    };

    const LLAMA_GIVE_CACHE_DURATION = 30 * 24 * 60 * 60 * 1000;
    const NETWORK_RETRY_MAX = 3;
    const NETWORK_RETRY_DELAY = 10000;

    const humanDelay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 400 + 100));

    const delayedXHRSend = (xhr, params, callback) => {
        humanDelay().then(() => {
            if (params !== undefined) xhr.send(params);
            else xhr.send();
            if (callback) callback();
        });
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
            if (typeof GM_setValue !== 'undefined') GM_setValue(key, value);
        } else {
            if (typeof GM_getValue !== 'undefined' && GM_getValue(key)) return GM_getValue(key);
            return DEFAULTS[key];
        }
    };

    const getCacheKey = (loggedInDev) => `llama-cache-${loggedInDev}`;
    const getCleanupLastKey = (loggedInDev) => `llama-cleanup-last-${loggedInDev}`;
    const getMigrationFlagKey = (loggedInDev) => `llama-migrated-${loggedInDev}`;

    const getCachedLlamaStatus = (devName) => {
        if (!loggedInDev) return null;
        const raw = storage('get', getCacheKey(loggedInDev));
        if (!raw) return null;
        try {
            const cache = JSON.parse(raw);
            const entry = cache[devName];
            if (!entry || typeof entry.status !== 'string') return null;
            if (entry.status === 'give' && typeof entry.timestamp === 'number') {
                if (Date.now() - entry.timestamp >= LLAMA_GIVE_CACHE_DURATION) return null;
            }
            return entry;
        } catch { return null; }
    };

    const setCachedLlamaStatus = (devName, status) => {
        if (!loggedInDev || !status) return;
        const key = getCacheKey(loggedInDev);
        let cache = {};
        try {
            const raw = storage('get', key);
            if (raw) cache = JSON.parse(raw);
        } catch { cache = {}; }
        cache[devName] = {
            status,
            timestamp: Date.now()
        };
        storage('set', key, JSON.stringify(cache));
    };

    const cleanupOldLlamaCacheEntries = () => {
        if (!loggedInDev || !isLSSupported) return;

        const lastKey = getCleanupLastKey(loggedInDev);
        const last = parseInt(storage('get', lastKey) || '0');
        if (Date.now() - last < 3600000) return;
        storage('set', lastKey, String(Date.now()));

        const key = getCacheKey(loggedInDev);
        const raw = storage('get', key);
        if (!raw) return;
        try {
            const cache = JSON.parse(raw);
            const now = Date.now();
            let changed = false;
            for (const [devName, entry] of Object.entries(cache)) {
                if (entry.status === 'give' && (now - entry.timestamp) >= LLAMA_GIVE_CACHE_DURATION) {
                    delete cache[devName];
                    changed = true;
                }
            }
            if (changed) {
                storage('set', key, JSON.stringify(cache));
            }
        } catch {}
    };

    const migrateOldLlamaCache = () => {
        if (!loggedInDev || !isLSSupported) return;
        const flagKey = getMigrationFlagKey(loggedInDev);
        if (storage('get', flagKey) === 'true') return;

        const prefix1 = `llama-status-${loggedInDev}-`;
        const prefix2 = `${loggedInDev}|`;

        const toRemove = [];
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && (key.startsWith(prefix1) || key.startsWith(prefix2))) {
                    toRemove.push(key);
                }
            }

            for (const key of toRemove) {
                localStorage.removeItem(key);
            }

            storage('set', flagKey, 'true');
            if (toRemove.length > 0) {
                console.log(`OCLB: Removed ${toRemove.length} old cache entries for ${loggedInDev}.`);
            }
        } catch (err) {
            console.warn('OCLB migration encountered an error, will retry later:', err);
        }
    };

    const errorTimeouts = {};
    const lastStates = {};
    const devIDs = {};
    const spamTimeouts = {};
    const llamaButtonsToUpdate = {};
    const networkRetries = {};

    let csrfTokenCache = null;
    let csrfTokenCacheTime = 0;
    const CSRF_CACHE_DURATION = 30 * 60 * 1000;

    let loggedInDev = null;

    let scrollTimeout;
    let processThrottle = null;
    let scrollBindDebounce;
    let pendingRoots = [];
    let rootsThrottle = null;

    const addCSS = css => {
        document.head.appendChild(document.createElement('style')).textContent = css;
    };

    const getLoggedInDeviantName = () => {
        const eclipseElement = document.querySelector('header a[data-username]');
        return eclipseElement?.getAttribute('data-username')?.toLowerCase();
    };

    const getDevName = (link, needLowerCase) => {
        const eclipseUsername = link.getAttribute('data-username');
        if (eclipseUsername) {
            return needLowerCase ? eclipseUsername.toLowerCase() : eclipseUsername;
        }

        const devNameOld = /([a-zA-Z0-9-]+)\.deviantart\.com/.exec(link.href);
        if (devNameOld?.[1] !== 'www' && devNameOld?.[1]) {
            return needLowerCase ? devNameOld[1].toLowerCase() : devNameOld[1];
        }

        const devNameNew = /www\.deviantart\.com\/([a-zA-Z0-9-]+)/.exec(link.href);
        if (devNameNew?.[1]) {
            return needLowerCase ? devNameNew[1].toLowerCase() : devNameNew[1];
        }
    };

    const DEV_NAME_REGEX = /^[a-z0-9-]+$/i;
    const isValidDevName = name => DEV_NAME_REGEX.test(name);

    const isAvatarEl = el => {
        if (el.querySelector('img')) return true;
        for (const svg of el.querySelectorAll('svg')) {
            const w = svg.getAttribute('width');
            const h = svg.getAttribute('height');
            if ((w && w !== '0') || (h && h !== '0')) return true;
        }
        return false;
    };

    const getToken = doc => {
        let token = null;

        const { scripts } = doc;
        if (scripts) {
            for (const current of scripts) {
                if (current.innerHTML?.includes('window.__CSRF_TOKEN__')) {
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

    const getCsrfToken = () => new Promise(resolve => {
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

            if (tokenInput?.value) {
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
    });

    const getGiveMenu = (devName, callback) => {
        getCsrfToken().then(csrfToken => {
            if (!csrfToken) {
                setButtonsState(devName, 'token_miss', 'Token not found! Refresh and retry..');
                return;
            }
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `https://www.deviantart.com/_puppy/dauserprofile/give_menu/status?username=${devName}&csrf_token=${csrfToken}`, true);
            xhr.onload = function() {
                if (xhr.status === 403) {
                    callback(0, 'spam', TITLES.spam);
                    return;
                }

                let resultJSON;
                try {
                    resultJSON = JSON.parse(this.response);
                } catch (e) {
                    callback(0, 'unknown', TITLES.unknown.err_network);
                    return;
                }

                if (!this.response || this.response.includes('fail')) {
                    callback(0, 'unknown', TITLES.unknown.err_dev_id);
                    return;
                }

                if (!resultJSON.canGiveLlama) {
                    setCachedLlamaStatus(devName, 'already');
                    callback(devIDs[devName], 'already');
                } else if (resultJSON.canGiveLlama) {
                    setCachedLlamaStatus(devName, 'give');
                    callback(devIDs[devName], 'give');
                } else {
                    callback(devIDs[devName], 'unknown', TITLES.unknown.err_server_response);
                }
            };
            xhr.onerror = () => {
                callback(0, 'unknown', TITLES.unknown.err_network);
            };
            delayedXHRSend(xhr);
        }).catch(error => {
            console.error('Error:', error);
        });
    };

    const processLlamaGiven = (token, devNameReg, devName) => {
        const url = 'https://www.deviantart.com/_puppy/dashared/badges/give';
        const params = JSON.stringify({
            foruser: devNameReg,
            type: 'llama',
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
                        return;
                    }

                    if (!response.error || response.status !== 'error') {
                        clearTimeout(errorTimeouts[devName]);
                        setButtonsState(devName, 'success');
                        setCachedLlamaStatus(devName, 'already');

                        errorTimeouts[devName] = setTimeout(() => {
                            getGiveMenu(devName, (devID, className, title) => {
                                saveLastState(devName, className, title);
                                if (devID) devIDs[devName] = devID;
                                const llamaButtons = document.querySelectorAll(`span[devName="${devName}"]`);
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
        };

        delayedXHRSend(xhr, params);
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

    const setButtonsState = (devName, className, title, dontTellOtherTabs) => {
        if (!dontTellOtherTabs) {
            storage('set', 'sbsCall', JSON.stringify({
                loggedInDev,
                devName,
                className,
                title
            }));
        }

        if (Object.hasOwn(spamTimeouts, devName)) clearTimeout(spamTimeouts[devName]);

        if (className === 'spam') {
            spamTimeouts[devName] = setTimeout(() => {
                setButtonsState(devName, 'give', TITLES.give);
            }, 60000);
        }

        saveLastState(devName, className, title);

        const llamaButtons = document.querySelectorAll(`span[devName="${devName}"]`);
        for (const llamaButton of llamaButtons) {
            setButtonState(llamaButton, className, title);
        }
    };

    const askServerForStatus = (llamaButton, devName) => {
        if (Object.hasOwn(llamaButtonsToUpdate, devName)) {
            llamaButtonsToUpdate[devName].push(llamaButton);
            return;
        }

        llamaButtonsToUpdate[devName] = [llamaButton];

        const cached = getCachedLlamaStatus(devName);
        if (cached) {
            const { status } = cached;
            const className = status === 'give' ? 'give' : 'already';
            const title = className === 'give' ? TITLES.give : TITLES.already;
            saveLastState(devName, className, title);
            for (const button of llamaButtonsToUpdate[devName]) {
                setButtonState(button, className, title);
            }
            delete llamaButtonsToUpdate[devName];
            return;
        }

        getGiveMenu(devName, (devID, className, title) => {
            saveLastState(devName, className, title);
            if (devID) devIDs[devName] = devID;
            for (const button of llamaButtonsToUpdate[devName]) {
                setButtonState(button, className, title);
            }
            delete llamaButtonsToUpdate[devName];

            if (className === 'unknown' && title === TITLES.unknown.err_network) {
                scheduleNetworkRetry(devName);
            } else {
                clearNetworkRetry(devName);
            }
        });
    };

    const clearNetworkRetry = devName => {
        const state = networkRetries[devName];
        if (!state) return;
        if (state.timer) clearTimeout(state.timer);
        delete networkRetries[devName];
    };

    const scheduleNetworkRetry = devName => {
        const state = networkRetries[devName] || (networkRetries[devName] = { count: 0, timer: null });

        if (state.timer) {
            clearTimeout(state.timer);
            state.timer = null;
        }

        if (state.count >= NETWORK_RETRY_MAX) {
            delete networkRetries[devName];
            return;
        }

        state.count++;

        state.timer = setTimeout(() => {
            state.timer = null;

            const buttons = document.querySelectorAll(`span[devName="${devName}"]`);
            if (buttons.length === 0) {
                delete networkRetries[devName];
                return;
            }

            delete lastStates[devName];

            for (const button of buttons) {
                setButtonState(button, 'unknown', TITLES.unknown.loading);
                askServerForStatus(button, devName);
            }
        }, NETWORK_RETRY_DELAY);
    };

    const initLlamaButton = (llamaButton, devName) => {
        llamaButton.onclick = llamaButtonClicked;

        if (Object.hasOwn(lastStates, devName)) {
            setButtonState(llamaButton, lastStates[devName].className, lastStates[devName].title);
        } else if (HAS_100K_LLAMAS.has(devName)) {
            setButtonState(llamaButton, '100k');
        } else if (storage('get', `${loggedInDev}|${devName}`)) {
            setButtonState(llamaButton, 'already');
        } else if (loggedInDev === devName) {
            setButtonState(llamaButton, 'enough');
        } else {
            setButtonState(llamaButton, 'unknown', TITLES.unknown.loading);
            askServerForStatus(llamaButton, devName);
        }
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
            requestAnimationFrame(() => {
                processLlamaGiven(token, devNameReg, devName);
            });
        }).catch(() => {
            setButtonsState(devName, 'token_miss', 'Failed to get CSRF token. Please refresh the page.');
        });

        clearTimeout(errorTimeouts[devName]);
        errorTimeouts[devName] = setTimeout(() => {
            setButtonsState(devName, 'error', 'Timeout');
        }, 45000);
    };

    const findOwnButton = (el, devName) => {
        let sib = el.nextElementSibling;
        if (sib?.classList?.contains('user-symbol')) {
            sib = sib.nextElementSibling;
        }
        if (sib?.classList?.contains('oclb') && sib.getAttribute('devName') === devName) {
            return sib;
        }
        return null;
    };

    const insertButton = (llamaButton, devNameLink) => {
        const parent = devNameLink.parentNode;
        if (!parent) return;

        const isColumn = getComputedStyle(parent).flexDirection === 'column';
        const alreadyWrapped = parent.classList.contains('oclb-row');

        if (isColumn && !alreadyWrapped) {
            const wrapper = document.createElement('div');
            wrapper.className = 'oclb-row';
            parent.insertBefore(wrapper, devNameLink);
            if (setting('showPos') === 'before') {
                wrapper.appendChild(llamaButton);
                wrapper.appendChild(devNameLink);
            } else {
                wrapper.appendChild(devNameLink);
                wrapper.appendChild(llamaButton);
            }
            return;
        }

        let refEl = setting('showPos') === 'before' ? devNameLink : devNameLink.nextSibling;

        if (setting('showPos') === 'after') {
            if (refEl?.className?.includes('user-symbol')) {
                refEl = refEl.nextSibling;
            }
        }

        parent.insertBefore(llamaButton, refEl);
    };

    const addLlamaButton = devNameLink => {
        const isSpan = devNameLink.nodeType === Node.ELEMENT_NODE &&
            devNameLink.tagName.toLowerCase() === 'span';

        if (devNameLink.className.includes('banned')) return;
        if (isSpan && devNameLink.children.length > 0) return;

        const devName = isSpan ? devNameLink.textContent.trim().toLowerCase() : getDevName(devNameLink, true);
        const devNameReg = isSpan ? devNameLink.textContent.trim() : getDevName(devNameLink, false);

        if (!devName || !isValidDevName(devName)) return;

        if (!loggedInDev) {
            const userinfo = document.cookie.split(';').find(c => c.trim().startsWith('userinfo='));
            if (userinfo) {
                try {
                    loggedInDev = JSON.parse(decodeURIComponent(userinfo.split('=')[1])).username.toLowerCase();
                } catch {}
            }
        }

        if (devName === loggedInDev) return;

        const llamaButton = document.createElement('span');
        llamaButton.setAttribute('devName', devName);
        llamaButton.setAttribute('devNameReg', devNameReg);

        initLlamaButton(llamaButton, devName);

        insertButton(llamaButton, devNameLink);
    };

    const isInOrNearViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight + 1500 && rect.bottom > -1500;
    };

    const getUsernameLinkSelector = () => setting('addForGroups') === 'true'
        ? 'a.username, a[data-username]'
        : 'a.username:not(.group), a[data-username]:not([data-usertype=group])';

    const getAllSelectors = () => [
        'a[href*=".deviantart.com/"][href*="/badges/"]',
        getUsernameLinkSelector(),
        'section[data-module-type="watchers"] div > span',
        'section[data-module-type="watching"] div > span',
        'section[data-module-type="active_members"] div > span',
        'section[data-module-type="newest_members"] div > span',
        'section[data-module-type="group_members"] div > span',
        'section[data-module-type="group_admins"] div > span'
    ];

    const collectCandidates = roots => {
        const candidates = [];
        const seen = new Set();
        const allSelectors = getAllSelectors();

        const consider = el => {
            if (seen.has(el)) return;
            seen.add(el);

            const isSpan = el.tagName.toLowerCase() === 'span';
            if (isSpan && el.children.length > 0) return;

            const devName = isSpan ? el.textContent.trim().toLowerCase() : getDevName(el, true);
            if (!devName || !isValidDevName(devName) || devName === loggedInDev) return;

            candidates.push({
                el,
                devName,
                isAvatar: isAvatarEl(el)
            });
        };

        if (roots === null) {
            allSelectors.forEach(sel => {
                document.querySelectorAll(sel).forEach(consider);
            });
        } else {
            for (const node of roots) {
                if (node.nodeType !== 1) continue;
                for (const sel of allSelectors) {
                    if (node.matches?.(sel)) consider(node);
                    if (node.querySelectorAll) {
                        node.querySelectorAll(sel).forEach(consider);
                    }
                }
            }
        }

        return candidates;
    };

    const partitionByAvatarPreference = candidates => {
        const devsWithUsername = new Set();
        for (const c of candidates) {
            if (!c.isAvatar) devsWithUsername.add(c.devName);
        }
        const keep = [];
        const skip = [];
        for (const c of candidates) {
            if (c.isAvatar && devsWithUsername.has(c.devName)) {
                skip.push(c);
            } else {
                keep.push(c);
            }
        }
        return { keep, skip };
    };

    const removeOwnButton = (el, devName) => {
        const ownBtn = findOwnButton(el, devName);
        if (ownBtn) ownBtn.remove();
        el.removeAttribute('data-oclb-found');
    };

    const flushPendingRoots = () => {
        rootsThrottle = null;
        const roots = pendingRoots;
        pendingRoots = [];
        if (roots.length === 0) return;

        const candidates = collectCandidates(roots);
        const { keep, skip } = partitionByAvatarPreference(candidates);

        for (const c of skip) {
            removeOwnButton(c.el, c.devName);
        }

        for (const c of keep) {
            const { el, devName } = c;
            const hasFound = el.getAttribute('data-oclb-found');
            const ownBtn = findOwnButton(el, devName);
            const inViewport = isInOrNearViewport(el);

            if (inViewport) {
                if (!hasFound) {
                    el.setAttribute('data-oclb-found', '1');
                    if (!ownBtn) {
                        addLlamaButton(el);
                        const newBtn = findOwnButton(el, devName);
                        if (newBtn) {
                            newBtn.style.opacity = '0';
                            newBtn.style.transition = 'opacity 0.3s ease';
                            requestAnimationFrame(() => {
                                newBtn.style.opacity = '1';
                            });
                        }
                    }
                }
            } else if (ownBtn && !ownBtn._removing) {
                ownBtn._removing = true;
                ownBtn.classList.add('oclb-removing');
                setTimeout(() => {
                    ownBtn.remove();
                }, 200);
                el.removeAttribute('data-oclb-found');
            }
        }
    };

    const processVisibleElements = () => {
        if (processThrottle) return;
        processThrottle = requestAnimationFrame(() => {
            processThrottle = null;
            const candidates = collectCandidates(null);
            const { keep, skip } = partitionByAvatarPreference(candidates);

            for (const c of skip) {
                removeOwnButton(c.el, c.devName);
            }

            for (const c of keep) {
                const { el, devName } = c;
                const hasFound = el.getAttribute('data-oclb-found');
                const ownBtn = findOwnButton(el, devName);
                const inViewport = isInOrNearViewport(el);

                if (inViewport) {
                    if (!hasFound) {
                        el.setAttribute('data-oclb-found', '1');
                        if (!ownBtn) {
                            addLlamaButton(el);
                            const newBtn = findOwnButton(el, devName);
                            if (newBtn) {
                                newBtn.style.opacity = '0';
                                newBtn.style.transition = 'opacity 0.3s ease';
                                requestAnimationFrame(() => {
                                    newBtn.style.opacity = '1';
                                });
                            }
                        }
                    }
                } else if (ownBtn && !ownBtn._removing) {
                    ownBtn._removing = true;
                    ownBtn.classList.add('oclb-removing');
                    setTimeout(() => {
                        ownBtn.remove();
                    }, 200);
                    el.removeAttribute('data-oclb-found');
                }
            }
        });
    };

    const attachScrollListeners = () => {
        const onScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(processVisibleElements, 150);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('scroll', onScroll, { passive: true, capture: true });

        const findAndBindScrollables = () => {
            clearTimeout(scrollBindDebounce);
            scrollBindDebounce = setTimeout(() => {
                const allElements = document.querySelectorAll('div, section, main, article, [role="main"]');
                for (const el of allElements) {
                    if (el._oclbScrollBound) continue;
                    if (el.scrollHeight > el.clientHeight && el.clientHeight > 0) {
                        el._oclbScrollBound = true;
                        el.addEventListener('scroll', onScroll, { passive: true });
                    }
                }
            }, 500);
        };

        findAndBindScrollables();

        new MutationObserver(() => {
            findAndBindScrollables();
        }).observe(document.body, { childList: true, subtree: true });
    };

    const waitForLoggedInDevName = (timeoutMs = 5000) => new Promise(resolve => {
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

    const addLlamaButtonsInDA = () => {
        const storageListener = e => {
            if (e.key !== 'sbsCall') return;
            const data = JSON.parse(e.newValue);
            if (data.loggedInDev === loggedInDev) {
                setButtonsState(data.devName, data.className, data.title, true);
            }
        };

        const addInCatBar = () => {
            const devNameLink = document.querySelector('div.gruserbadge ' + getUsernameLinkSelector());
            if (devNameLink) processVisibleElements();
            return devNameLink;
        };

        const isNotifyCenter = () => window.location.href.includes('/notifications/');

        const showIn = setting('showIn');

        processVisibleElements();
        attachScrollListeners();

        new MutationObserver(mutations => {
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (node.nodeType === 1) pendingRoots.push(node);
                }
            }
            if (pendingRoots.length === 0 || rootsThrottle) return;
            rootsThrottle = requestAnimationFrame(flushPendingRoots);
        }).observe(document.body, { childList: true, subtree: true });

        if (showIn === '*') {
            if (window.location.href.endsWith('/badges/')) {
                addInCatBar();
            }
        } else if (showIn === 'profile') {
            if (!addInCatBar()) return;
        } else if (showIn === 'notifycenter') {
            if (!isNotifyCenter()) return;
        } else if (showIn === 'notifycenter+profile') {
            if (!isNotifyCenter() && !addInCatBar()) return;
        }

        if (showIn !== 'profile') window.addEventListener('storage', storageListener);

        addCSS(CSS);
        if (setting('animation') !== 'true') addCSS(NO_TRANSITION_STYLE);
    };

    const initOCLB = async () => {
        loggedInDev = getLoggedInDeviantName();
        if (!loggedInDev) {
            loggedInDev = await waitForLoggedInDevName();
        }
        if (loggedInDev) {
            const doMigrationAndCleanup = () => {
                migrateOldLlamaCache();
                cleanupOldLlamaCacheEntries();
            };
            if (window.requestIdleCallback) {
                requestIdleCallback(doMigrationAndCleanup);
            } else {
                setTimeout(doMigrationAndCleanup, 0);
            }
        }
        if (!loggedInDev && !window.location.href.includes('/notifications')) return;
        addLlamaButtonsInDA();
    };

    try {
        if (window.location.href.includes('/notifications')) {
            initOCLB();
        } else {
            loggedInDev = getLoggedInDeviantName();
            if (loggedInDev) {
                const doMigrationAndCleanup = () => {
                    migrateOldLlamaCache();
                    cleanupOldLlamaCacheEntries();
                };
                if (window.requestIdleCallback) {
                    requestIdleCallback(doMigrationAndCleanup);
                } else {
                    setTimeout(doMigrationAndCleanup, 0);
                }
                addLlamaButtonsInDA();
            } else {
                initOCLB();
            }
        }
    } catch (err) {
        const heading = `One Click Llama Button v${VERSION} encountered an error:\n`;
        console.error(heading, err);
        alert(`${heading}---\n${err}\n---\n\nPlease email a screenshot of this to hi@kishan.info, or post it as a comment on deviantart.com/Kishan-Bagaria (unless someone has already posted the same comment).\n\n---\nURL: ${window.location.href}\nUser-Agent: ${navigator.userAgent}`);
    }
})();
