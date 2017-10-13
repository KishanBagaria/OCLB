'use strict';

/*
 * Two Click Llama Button
 * @author  Kishan Bagaria
 * @website http://kishanbagaria.com
 * @license MIT License (https://opensource.org/licenses/MIT)
 */
var IMG_1X = {
  ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR4Aa2OxUHFQBCGvxXctQl62jbCBS0lR/qhBC7x5MXXcCrgH/cR8eVme3rTz1FKg7P4zZwesXMvHl9XAP1ZVCcHidzZJowz0cekLVqAWwCJVEbubqOO92FLgxQIrQw/0NGt+GEmWkeYlg/rCc7zC/l501YdtmjxTY/vR+K0pH8bPh9q6w1OCIP3H0Wbnl1c30PO/+AdWxpL8w9v1MsAAAAASUVORK5CYII=',
  ENOUGH: 'data:image/gif;base64,R0lGODlhDwASAPQYALAUFHNzc97KzIeHh8K2qu3t7fn5+cgmJuXl5WNjY+95eXh4ePr6+rscHKsPDz09PexiYvOenjc3Nzs7O+7u7s/PzwAAAPTt5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAABgALAAAAAAPABIAAAV4ICaOYxBgJqkGhcC64oHJJcIgJ9YoQESjE8Qj14AoFL+A4MHIYRyQH4pwcz5XFwJOtSIICgPuYDwIeMGqgWFtCFwEl4tT/Za/4WjRoB7vX/J6dXBxFFYYA3CJcYAjEgQVBAQJkRZcFgmXlZmWCxadGJ6VlhakoKUhADs=',
  ERROR: 'data:image/gif;base64,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',
  GIVE: 'data:image/gif;base64,R0lGODlhDwASAPQaAO6oQy4kHAAAAJRPC0onDfbhbl0yEO+pQtGBKdGMJcJaKpVgLrFtJ+qwNFkrFuqpJvjGROOKJFUyEmNjPNWUNOzJYnx8Sl0xDXFFLnV1Pv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAPABIAQAWJoKYFgiCKhKGl5ym9EjEgh9qOWWAF466VgUKAhIIYCoSbZKFgLhYJgGoYFAxRjUIjKQK2CIzBgSuSVCKICBiBSNRuAQfGMQgMHLyu8EQ4UPp/AgWDgyYrFw0GZEF5KAMFEGQ3jjQ2LhWYFWsJD2QDTk9PCW4DLQNNqAsPB6VwEwGvI7GTVDxUGiEAOw==',
  GIVING: 'data:image/gif;base64,R0lGODlhEgASAPQLAAYEASAVBvzJAPnsAvz3rqpkAO3Sfv374MuPSvvuJvzxTPnth/+oAf7+/vvxS55hAO3Fb/vJAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEgASAEAFZuAijmIALMBJrigQIIcSBOwIMICQ6jUbCAeDgdYDJARHgUKAIPYWv4PA+YQCZU9AYysYKL7TZ6AwBpBVYmAuXLXKqOlvs22NwVdrQVcxLCb1Ag4KCGh4SIcEPEUPZikFhTUpkikrIQAh+QQJCgASACwDAAAADAASAAAFYaAkjkAglSN5CICwmOm5HkAslkdQ20Bu7DFAwVCABQ9DYKqnMBgBUN1BAYEBIoIsYNAkQAWN8FZBFugaiazaoWCdBOm0QIGwxuECgvsWKBaEOiQPQjWEJAwthXs3UIVQEiEAIfkECQoADAAsBAAAAAsAEgAABVwgIzIAEJDnCCiHAAhLKq7tAYxzcOg3vgYGQ09VMBRlM0VRiCOxFAZZKfCEpF4uxQBKKDUaq61CIQgAEoJ02kEunQVogQJxhdsJrlwhUADshyV9gYAvbnkzbokMIQAh+QQJCgAMACwFAAAACgASAAAFViDDAGQwmqOiHAIgLCigsgcgnkcgBHYaGEDUqGAgKoRD4PGWWi1FpNnTJVMMDAhTITpQGJYFgVj8NQESArRAkR2l34SWKFCgA+q3QCDbzuv+TAx6gzchACH5BAkKAAwALAMAAAAMABIAAAViIMMEwAiUohgsAiAcCpoCxxun8xHAsggYQMVtVjAUhIceA1A0KJI4lfMAjQYgTwVJBiA4BzFBSyUQKsCARqPkUjjE8AQqgFCIEwI5ykXI+7kBBUyBJEQnTCc4LoctPYePKCEAIfkECQoAEgAsAwAAAAwAEgAABWCgFAAiKZ1nsAiAcJioBBwuHAOGodgobrwxVEC3C55wCqBxmOSlIM0RwAQg6AaCrCBCCggUYGxjzGopHNpsotFFKNSCBOsoIMTvCWqgACjsRz18MnwPMC0khwyGUzJTMCEAIfkECQoACwAsAwAAAAsAEgAABVbgsgDAGIhoIAjAIZzoorpwHBjKG4s3vcuKXC2l8O0CRZ0NeQAESCncYLUqqYKKaWNLEigc1FXCisgJEufSSEA4u9XOAqAQoMfmJPlDve4CGHwkglALIQAh+QQFCgAMACwEAAAACgASAAAFViATACJgMuIiAMKhKCQDHO0by4HwwmgfvAaeL2go3ESG5FF0UPZECpdhhQogDIOXgPoLDg60AnS63Yqtim1CkCCxCOx4LGAs0ANPqx7vE+QCfFWAgCghADs=',
  SUCCESS: 'data:image/gif;base64,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',
  UNKNOWN: 'data:image/gif;base64,R0lGODlhDAASAPABAJOpjwAAACH5BAUAAAEALAAAAAAMABIAAAImjA8QeWi62nNyKVZvzFTC7XXJSH2g1Zho5aglC44yFmnaZJ+ypRQAOw=='
};
var IMG_2X = {
  ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4Ae2StQFCMRCGL8HdWYKd3hrQoKO8kn0YgQZ3j94FqZ90fE083x9hatpJg+E6T05sqTj3wPJ6YiGON9+WJcgMbMlGswf8wCEkybc5USl0bckzGAjk5YalEgr796s9OHrRJgCewDPzLJkTpTwleL6cgmHBkjQv+gTqRZcqzu7Mziyvd9cW1H5RSUSZAN8ZDZJeIZkg84OSiNOF2te7H0+C9w/bb4/0ARnzSC2c+YnmWqM9AGQZXQLijwatI00/CG2LBwAAAABJRU5ErkJggg==',
  ENOUGH: 'data:image/gif;base64,R0lGODlhHgAkAPQAAAAAADc3Nzs7Oz09PWNjY3Nzc3h4eKsPD7AUFLscHMgmJuxiYu95eYeHh/OensK2qs/Pz97KzOXl5e3t7e7u7vTt5fn5+fr6+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAABgALAAAAAAeACQAAAX+ICaOZDkWaCGmquma7Jq+NIZOUxTd+d7WJJ5O6CMpFKLjCyWRXC5NlEmJocIKzWf0h0kkGAwEwuGwngoCQXMwkI68YDHZLEuv21zvYgEG020FOmxPbiJ6fH1/KIIDhFwiBwd7fzIPD1oShSORk0guKJaYmiSRNSgVFZZbL6U0p6kPq0BLBZY6OA0Ns7S2Ebi6QLnCwqAPtxO5s8PDxcfJNLkW0tPSrzqoqKMj0dTT1hHYFdrcqNfiBeU64BW/JuQV5t/m7SW56eH4+PQk9vDr+fn21Wtwz18+ChS08SNosGE4hAq3NTBH8R87ZMBe5KpYEJXAFwECWIIAwZIlAgRCTD4AAGBWyJElTaJUyXIWS5Q3CdTEkHNnjZ4AcLbkGVTn0J8ADBhgqXQn06VHaTydOpTqLqIss1bVGhUp161aRYQAADs=',
  ERROR: 'data:image/gif;base64,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',
  GIVE: 'data:image/gif;base64,R0lGODlhHgAkAPQaAOzJYi4kHEonDV0xDVkrFlUyEl0yEHFFLmNjPHV1Pnx8SpRPC5VgLrFtJ8JaKtGMJdGBKdWUNOOKJOqpJuqwNO+pQu6oQ/jGRAAAAPbhbv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAeACQAQAX/oCZqQYCd2KhqgmAYYvuKKFZmWVmeantdL1xrRdQUjshja7GAQCqVWVF0ZDAcDivWan08LBbpVFRKJEoKRYkcSK9JulvmFO8JKBQcfriqvYktDQ1MUHxERwAAEhJOi4ENTk5eUGJFJQQEBweYTCVMmH8jJzihMQJQEREtqKoCoziwsTwjLQMDeC+GI3KltAJMOD+6Y0VLTU9RMGOIic2Jj5IPExPDGkxaWVzaXV4PUExTTFtX2ePT3wvEbAgIJexv7u0B6rtxOmx1KzsoUzLK/kRe9VpVIRVBgwLsBcBB554vPHoo8HkVS1YKX7ZwGZiIgpeOWaZ+BMlQzWO/XwuCZl2o5mdeMQGCCFWoRs8UEyeUlBFLksQYzmQ7CzhzBg2Cl2nVmC1qJKFotJxErpHbtq2btwrgilSZypUbmEpRF4wbm+0c1nTqLmXaRKBTgE8EehGJR9dlXXplzrRRY3evXEsK++YLAQA7',
  GIVING: 'data:image/gif;base64,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',
  SUCCESS: 'data:image/gif;base64,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',
  UNKNOWN: 'data:image/gif;base64,R0lGODlhGAAkAPABAJOpjwAAACH5BAUAAAEALAAAAAAYACQAAAJqjI8GC8oJD2thxrRQlvRup3VXJYJjCH0nuVmr0z4vaapnbL42Pe+7V+Lpgr+ILwhMESdMpZIpQ3GSRkrxGsUgOdhbdsbdDnM9UZFKHk/BwjD0vYTDnTxcu2bNp+t6Pt1u99TE8uUmA2VQAAA7'
};
var IMG = window.devicePixelRatio > 1 ? IMG_2X : IMG_1X;

var STYLE = '#modalspace .modal div.loading{position:absolute;top:50%;left:50%;margin-top:-10px;margin-left:-37px}div.iframe-container{width:450px;height:485px}iframe.modal-iframe{position:relative;width:450px;height:485px;z-index:100;border:0;display:none}@media only screen and (max-device-width:480px){div#modalspace{position:fixed;min-width:100%;min-height:100%;overflow:auto}div.loading{width:auto;text-align:center}div.iframe-container{width:auto;height:485px}iframe.modal-iframe{position:relative;max-width:100%;height:485px;z-index:100;border:0;display:none}}\nspan.tclb        {display:inline-block;pointer-events:all;width:18px;height:18px;vertical-align:middle;margin:0 3px;cursor:default;transition:.3s all}\nspan.tclb-give   {background:url(' + IMG.GIVE + ')   center no-repeat;cursor:pointer}\nspan.tclb-already{background:url(' + IMG.ALREADY + ')center no-repeat;margin:0}\nspan.tclb-giving {background:url(' + IMG.GIVING + ') center no-repeat;cursor:progress}\nspan.tclb-success{background:url(' + IMG.SUCCESS + ')center no-repeat;width:26px}\nspan.tclb-error  {background:url(' + IMG.ERROR + ')  center no-repeat;cursor:pointer}\nspan.tclb-unknown{background:url(' + IMG.UNKNOWN + ')center no-repeat;cursor:help}\nspan.tclb-enough {background:url(' + IMG.ENOUGH + ') center no-repeat}\nspan.tclb-100k {width:26px}\nspan.tclb-100k:after{color:#f6e16e;background:#4A270D;content:"100k";font:10px/17px Trebuchet MS;letter-spacing:0;vertical-align:top;border-radius:4px;padding:0 3px;display:inline-block}';
var RETINA_STYLE = 'span.tclb{background-size:auto 18px} span.tclb-already{background-size:auto 8px}';
var UNKNOWN_TITLE = 'This deviant\'s Llama status is a mystery!';
var TITLES = {
  give: 'Give a Llama',
  giving: 'Giving Llama...',
  already: 'Already gave a Llama',
  enough: 'Has Llamas enough for love',
  unknown: {
    loading: UNKNOWN_TITLE + ' (Loading...)',
    err_network: UNKNOWN_TITLE + ' (Network error)',
    err_dev_id: UNKNOWN_TITLE + ' (Invalid response, unable to find deviant ID)',
    err_server_response: UNKNOWN_TITLE + ' (Invalid response, unable to find llama status)'
  }
};
var HAS_100K_LLAMAS = ['aenea-jones', 'damaimikaz', 'luke-crowe', 'timing2', 'ioulaum', 'championx91', 'thegalleryofeve', 'eve-jennifer'];
var loggedInDev = window.deviantART && window.deviantART.deviant.username.toLowerCase();
var lastStates = {};
var devIDs = {};
try {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }
      if (start + search.length > this.length) {
        return false;
      }
      return this.indexOf(search, start) !== -1;
    };
  }
  if (!Array.prototype.includes) {
    Array.prototype.includes = function (search) {
      return this.indexOf(search) !== -1;
    };
  }
  var $forEach = function $forEach(array, callback) {
    if (array && callback) {
      for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
      }
    }
  };
  var addCSS = function addCSS(css) {
    document.head.appendChild(document.createElement('style')).textContent = css;
  };
  var setButtonState = function setButtonState(llamaButton, className, title) {
    llamaButton.className = 'tclb tclb-' + className;
    if (!title) title = TITLES[className];
    if (title) llamaButton.title = title;
  };
  var setButtonsState = function setButtonsState(devName, className, title) {
    if (className !== 'unknown') {
      lastStates[devName] = { className: className, title: title };
    }
    var llamaButtons = document.querySelectorAll('span[devName="' + devName + '"]');
    $forEach(llamaButtons, function (llamaButton) {
      setButtonState(llamaButton, className, title);
    });
  };
  var lastDevName = void 0;
  var pubSubCount = void 0;
  var askedServer = void 0;
  var getGiveMenu = function getGiveMenu(devName, _ref) {
    var load = _ref.load,
        error = _ref.error;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/global/difi/?c[]="User","getGiveMenu",["' + devName + '"]&t=json&' + ~~(Date.now() / 1e4), true);
    xhr.onload = load;
    xhr.onerror = error;
    xhr.send();
  };
  var askServerIfSuccess = function askServerIfSuccess(devName) {
    getGiveMenu(devName, {
      load: function load() {
        var success = this.response.includes('Already gave a Llama');
        setButtonsState(devName, success ? 'success' : 'error');
        if (success) {
          localStorage[loggedInDev + '|' + devName] = 0;
        }
      },
      error: function error() {
        setButtonsState(devName, 'unknown', TITLES.unknown.err_network);
      }
    });
  };
  var closeModal = function closeModal() {
    document.getElementById('modalspace').remove();
    document.getElementById('modalfade').remove();
    if (!askedServer) askServerIfSuccess(lastDevName);
  };
  var showModal = function showModal(devName, url) {
    var html = '<div id="modalspace" style="display:block">\n<div class="modal-cel">\n<div class="modal-wrapper">\n<div class="loading modal modal-rounded with-shadow">\n<a id="closeModal" class="x"></a>\n<h2>Give a Llama Badge</h2>\n<div class="loading"><img src="//st.deviantart.net/emoticons/e/eager.gif">Loading&hellip;</div>\n<div class="iframe-container">\n  <iframe id="badges_iframe" class="modal-iframe" src="' + url + '" frameborder="0" scrolling="no" onload="$(this).show()"></iframe>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id="modalfade" style="display:block"></div>';
    lastDevName = devName;
    pubSubCount = 0;
    askedServer = false;
    document.body.insertAdjacentHTML('beforeend', html);
    document.getElementById('closeModal').onclick = closeModal;
  };
  var messageListener = function messageListener(e) {
    if (e.data) {
      var d = JSON.parse(e.data);
      if (d.eventname === 'PubSubCrossFrame.loaded') {
        if (++pubSubCount % 3 === 0) {
          askedServer = !askServerIfSuccess(lastDevName);
          document.getElementsByClassName('modal-wrapper')[0].onclick = closeModal;
        }
      } else if (d.command === 'close') {
        closeModal();
      }
    }
  };
  var llamaButtonClicked = function llamaButtonClicked() {
    if (!['give', 'error'].includes(this.className.substr(10))) {
      return;
    }
    var devName = this.getAttribute('devName');
    setButtonsState(devName, 'giving');
    showModal(devName, 'https://www.deviantart.com/modal/badge/give?badgetype=llama&referrer=' + window.location.protocol + '//' + window.location.hostname + '&to_user=' + devIDs[devName]);
  };
  var llamaButtonsToUpdate = {};
  var askServerForStatus = function askServerForStatus(llamaButton, devName) {
    if ({}.hasOwnProperty.call(llamaButtonsToUpdate, devName)) {
      llamaButtonsToUpdate[devName].push(llamaButton);
    } else {
      llamaButtonsToUpdate[devName] = [llamaButton];
      var callback = function callback(devID, className, title) {
        if (className !== 'unknown') {
          lastStates[devName] = { className: className, title: title };
          if (devID) devIDs[devName] = devID;
        }
        if (className === 'already') {
          localStorage[loggedInDev + '|' + devName] = '0';
        }
        llamaButtonsToUpdate[devName].forEach(function (button) {
          setButtonState(button, className, title);
        });
        delete llamaButtonsToUpdate[devName];
      };
      getGiveMenu(devName, {
        load: function load() {
          var regexResult = /data-userid=\\"(\d+?)\\"/.exec(this.response);
          if (!regexResult) {
            callback(0, 'unknown', TITLES.unknown.err_dev_id);
            return;
          }
          var devID = regexResult[1];
          if (this.response.includes('Already gave a Llama')) {
            callback(devID, 'already');
          } else if (this.response.includes('Give a <span>Llama Badge')) {
            callback(devID, 'give');
          } else if (this.response.includes('Has Llamas enough for love')) {
            callback(devID, 'enough');
          } else {
            callback(devID, 'unknown', TITLES.unknown.err_server_response);
          }
        },
        error: function error() {
          callback(0, 'unknown', TITLES.unknown.err_network);
        }
      });
    }
  };
  var addLlamaButton = function addLlamaButton(devNameLink) {
    if (devNameLink.className.includes('banned')) return;
    var devName = /([a-zA-Z0-9-]+)\.deviantart\.com/.exec(devNameLink.href);
    if (!devName) return;
    devName = devName[1].toLowerCase();
    if (devName === loggedInDev) return;
    var llamaButton = document.createElement('span');
    llamaButton.setAttribute('devName', devName);
    llamaButton.onclick = llamaButtonClicked;
    if ({}.hasOwnProperty.call(lastStates, devName)) {
      setButtonState(llamaButton, lastStates[devName].className, lastStates[devName].title);
    } else if (HAS_100K_LLAMAS.includes(devName)) {
      setButtonState(llamaButton, '100k');
    } else if (localStorage[loggedInDev + '|' + devName]) {
      setButtonState(llamaButton, 'already');
    } else {
      setButtonState(llamaButton, 'unknown', TITLES.unknown.loading);
      askServerForStatus(llamaButton, devName);
    }
    // Remove .nextSibling to make buttons appear before username
    devNameLink.parentNode.insertBefore(llamaButton, devNameLink.nextSibling);
  };
  var waitForElements = function waitForElements(selector, callback) {
    var callbackOnlyOnce = function callbackOnlyOnce(n) {
      if (n.getAttribute('data-oclb-found')) return;
      callback(n);
      n.setAttribute('data-oclb-found', '1');
    };
    var callForChildren = function callForChildren(node) {
      if (node.matches && node.matches(selector)) callbackOnlyOnce(node);
      if (!node.querySelectorAll) return;
      $forEach(node.querySelectorAll(selector), callbackOnlyOnce);
    };
    callForChildren(document.body);
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        $forEach(m.addedNodes, callForChildren);
      });
    }).observe(document.body, { childList: true, subtree: true });
  };
  if (!window.location.host.includes('deviantart.com')) {
    alert('Works only on DeviantArt. Does any other website have Llamas?');
  } else if (window.location.host === 'llamatrade.deviantart.com') {
    alert("Doesn't work on LlamaTrade.");
  } else if (loggedInDev) {
    addCSS(STYLE);
    if (window.devicePixelRatio > 1) addCSS(RETINA_STYLE);
    waitForElements('a.u, a[href*=".deviantart.com/badges/"]', addLlamaButton);
    window.addEventListener('message', messageListener);
  } else {
    alert('You must log in to DeviantArt first.');
  }
} catch (err) {
  var heading = 'Two Click Llama Button encountered an error:\n';
  console.error(heading, err);
  alert(heading + '\n---\n' + err + '\n---\n\nPlease email a screenshot of this to hi@kishan.info, or\npost it as a comment on Kishan-Bagaria.DeviantArt.com (unless someone has already posted a comment about it).');
}
