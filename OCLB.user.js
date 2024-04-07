// ==UserScript==
// @name            One Click Llama Button
// @namespace       http://www.door2windows.com/
// @description     Adds a give Llama button after the names of every deviant and group.
// @author          Kishan Bagaria | kishanbagaria.com | https://www.deviantart.com/kishan-bagaria
// @version         6.0.4
// @icon            https://kishanbagaria.com/-/oclb.png
// @match           *://*.deviantart.com/*
// @match           *://*.sta.sh/*
// @match           *://kishanbagaria.com/userscripts/one-click-llama-button/*
// @match           *://kishan.org/userscripts/one-click-llama-button/*
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
// Troubleshooter   Chipster-roo | https://www.deviantart.com/chipster-roo
// 100kllamas       AgnosticDragon | https://www.deviantart.com/agnosticdragon | https://www.deviantart.com/100kllamas
// Patreon          Liamb135 | https://www.deviantart.com/liamb135

try {
  gmSet = GM_setValue; // eslint-disable-line camelcase
  gmGet = GM_getValue; // eslint-disable-line camelcase
} catch (e) {
  console.error(e);
  // continue
}

function addJS(source) {
  var s = document.createElement('script');
  s.textContent = '(' + source + ')();';
  document.body.appendChild(s).remove();
}
addJS(function () {
  var VERSION = '6.0.4',
    IMG_1X = {
      ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR4Aa2OxUHFQBCGvxXctQl62jbCBS0lR/qhBC7x5MXXcCrgH/cR8eVme3rTz1FKg7P4zZwesXMvHl9XAP1ZVCcHidzZJowz0cekLVqAWwCJVEbubqOO92FLgxQIrQw/0NGt+GEmWkeYlg/rCc7zC/l501YdtmjxTY/vR+K0pH8bPh9q6w1OCIP3H0Wbnl1c30PO/+AdWxpL8w9v1MsAAAAASUVORK5CYII=',
      SPAM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAMAAACE9bUqAAAAe1BMVEUAMmb0zTM4DRCcX0HOt4ifSyxmAADMmWZlOCSojjDMiGGPPSFlAADVs5vElXfUp6oAAC5KR0NPNTyeSi6fgHYgH0+dX0Cbg4AAMWaZZmara2a4dG4/QFLHik9jCQ13Tkw6KUUAADMILVRLEhbMj22KSSgsDg0tR2YAKmIz6elIAAAAj0lEQVR4AX3LBRrDMAxDYSdlGDMz3P+Es6tF4/1lva+S/SL/OeeaS+y014JFOKJIgE9cOAhfXB3GafPLR4HuKI7jdqkStdnuBPa9WB0RBonpo1xihZ1QXgMMURAiM45gci8rfAaz+WIppqZ1bdJUbwz4JpQWUAWh5MHB+xMLdk9nb7TkgBU6SsuVO2eU7JcbjM8Lv+nDU0gAAAAASUVORK5CYII=',
      ENOUGH: 'data:image/gif;base64,R0lGODlhDwASAPQYALAUFHNzc97KzIeHh8K2qu3t7fn5+cgmJuXl5WNjY+95eXh4ePr6+rscHKsPDz09PexiYvOenjc3Nzs7O+7u7s/PzwAAAPTt5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAABgALAAAAAAPABIAAAV4ICaOYxBgJqkGhcC64oHJJcIgJ9YoQESjE8Qj14AoFL+A4MHIYRyQH4pwcz5XFwJOtSIICgPuYDwIeMGqgWFtCFwEl4tT/Za/4WjRoB7vX/J6dXBxFFYYA3CJcYAjEgQVBAQJkRZcFgmXlZmWCxadGJ6VlhakoKUhADs=',
      ERROR: 'data:image/gif;base64,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',
      GIVE: 'data:image/gif;base64,R0lGODlhDwASAPQaAO6oQy4kHAAAAJRPC0onDfbhbl0yEO+pQtGBKdGMJcJaKpVgLrFtJ+qwNFkrFuqpJvjGROOKJFUyEmNjPNWUNOzJYnx8Sl0xDXFFLnV1Pv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAPABIAQAWJoKYFgiCKhKGl5ym9EjEgh9qOWWAF466VgUKAhIIYCoSbZKFgLhYJgGoYFAxRjUIjKQK2CIzBgSuSVCKICBiBSNRuAQfGMQgMHLyu8EQ4UPp/AgWDgyYrFw0GZEF5KAMFEGQ3jjQ2LhWYFWsJD2QDTk9PCW4DLQNNqAsPB6VwEwGvI7GTVDxUGiEAOw==',
      GIVING: 'data:image/gif;base64,R0lGODlhEgASAPQLAAYEASAVBvzJAPnsAvz3rqpkAO3Sfv374MuPSvvuJvzxTPnth/+oAf7+/vvxS55hAO3Fb/vJAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgALACwAAAAAEgASAEAFZuAijmIALMBJrigQIIcSBOwIMICQ6jUbCAeDgdYDJARHgUKAIPYWv4PA+YQCZU9AYysYKL7TZ6AwBpBVYmAuXLXKqOlvs22NwVdrQVcxLCb1Ag4KCGh4SIcEPEUPZikFhTUpkikrIQAh+QQJCgASACwDAAAADAASAAAFYaAkjkAglSN5CICwmOm5HkAslkdQ20Bu7DFAwVCABQ9DYKqnMBgBUN1BAYEBIoIsYNAkQAWN8FZBFugaiazaoWCdBOm0QIGwxuECgvsWKBaEOiQPQjWEJAwthXs3UIVQEiEAIfkECQoADAAsBAAAAAsAEgAABVwgIzIAEJDnCCiHAAhLKq7tAYxzcOg3vgYGQ09VMBRlM0VRiCOxFAZZKfCEpF4uxQBKKDUaq61CIQgAEoJ02kEunQVogQJxhdsJrlwhUADshyV9gYAvbnkzbokMIQAh+QQJCgAMACwFAAAACgASAAAFViDDAGQwmqOiHAIgLCigsgcgnkcgBHYaGEDUqGAgKoRD4PGWWi1FpNnTJVMMDAhTITpQGJYFgVj8NQESArRAkR2l34SWKFCgA+q3QCDbzuv+TAx6gzchACH5BAkKAAwALAMAAAAMABIAAAViIMMEwAiUohgsAiAcCpoCxxun8xHAsggYQMVtVjAUhIceA1A0KJI4lfMAjQYgTwVJBiA4BzFBSyUQKsCARqPkUjjE8AQqgFCIEwI5ykXI+7kBBUyBJEQnTCc4LoctPYePKCEAIfkECQoAEgAsAwAAAAwAEgAABWCgFAAiKZ1nsAiAcJioBBwuHAOGodgobrwxVEC3C55wCqBxmOSlIM0RwAQg6AaCrCBCCggUYGxjzGopHNpsotFFKNSCBOsoIMTvCWqgACjsRz18MnwPMC0khwyGUzJTMCEAIfkECQoACwAsAwAAAAsAEgAABVbgsgDAGIhoIAjAIZzoorpwHBjKG4s3vcuKXC2l8O0CRZ0NeQAESCncYLUqqYKKaWNLEigc1FXCisgJEufSSEA4u9XOAqAQoMfmJPlDve4CGHwkglALIQAh+QQFCgAMACwEAAAACgASAAAFViATACJgMuIiAMKhKCQDHO0by4HwwmgfvAaeL2go3ESG5FF0UPZECpdhhQogDIOXgPoLDg60AnS63Yqtim1CkCCxCOx4LGAs0ANPqx7vE+QCfFWAgCghADs=',
      SUCCESS: 'data:image/gif;base64,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',
      UNKNOWN: 'data:image/gif;base64,R0lGODlhDAASAPABAJOpjwAAACH5BAUAAAEALAAAAAAMABIAAAImjA8QeWi62nNyKVZvzFTC7XXJSH2g1Zho5aglC44yFmnaZJ+ypRQAOw==',
      TOKEN_MISS: 'data:image/gif;base64,R0lGODlhDAASAPABAJOpjwAAACH5BAUAAAEALAAAAAAMABIAAAImjA8QeWi62nNyKVZvzFTC7XXJSH2g1Zho5aglC44yFmnaZJ+ypRQAOw==',
    },
    IMG_2X = {
      ALREADY: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR4Ae2StQFCMRCGL8HdWYKd3hrQoKO8kn0YgQZ3j94FqZ90fE083x9hatpJg+E6T05sqTj3wPJ6YiGON9+WJcgMbMlGswf8wCEkybc5USl0bckzGAjk5YalEgr796s9OHrRJgCewDPzLJkTpTwleL6cgmHBkjQv+gTqRZcqzu7Mziyvd9cW1H5RSUSZAN8ZDZJeIZkg84OSiNOF2te7H0+C9w/bb4/0ARnzSC2c+YnmWqM9AGQZXQLijwatI00/CG2LBwAAAABJRU5ErkJggg==',
      SPAM: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAMAAADGZPh1AAAAe1BMVEXMmWaojjAAMWYAAC4gH0/Ot4ifSyx3Tkw6KUUAADMILVRKR0PMj22eSi5PNTycX0GdX0Cbg4DHik+ZZmara2a4dG4/QFJjCQ1LEhY4DRCKSSgsDg0AKmJlOCSfgHbElXctR2aPPSHVs5sAMmZmAADMiGH0zTPUp6plAAAgrURUAAAAwElEQVR4Xr3OBw6CQBBAUem9947d+59QAgvjBMTIKC/ZEnZ+wmEf569RkltvOjvDDl85jpbAAB4cFuz0BB7xCes3CX7Co/SE5+G3/pYwgiCKUq9prozMKIqqaho10XXDkBjTfA0sS57YNi1p2zGA8SW0ZD0AdU1NIHAmrusgnkdNfN9ZEQRhGEVxTEkeC5IE7pfOcNueQICfMWpy+uCI0JNqJk2zTp7TEzyeLSgKuG9NKiR7485sTcpyDNaGackunhdb2EEVJnAeAAAAAElFTkSuQmCC',
      ENOUGH: 'data:image/gif;base64,R0lGODlhHgAkAPQAAAAAADc3Nzs7Oz09PWNjY3Nzc3h4eKsPD7AUFLscHMgmJuxiYu95eYeHh/OensK2qs/Pz97KzOXl5e3t7e7u7vTt5fn5+fr6+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAABgALAAAAAAeACQAAAX+ICaOZDkWaCGmquma7Jq+NIZOUxTd+d7WJJ5O6CMpFKLjCyWRXC5NlEmJocIKzWf0h0kkGAwEwuGwngoCQXMwkI68YDHZLEuv21zvYgEG020FOmxPbiJ6fH1/KIIDhFwiBwd7fzIPD1oShSORk0guKJaYmiSRNSgVFZZbL6U0p6kPq0BLBZY6OA0Ns7S2Ebi6QLnCwqAPtxO5s8PDxcfJNLkW0tPSrzqoqKMj0dTT1hHYFdrcqNfiBeU64BW/JuQV5t/m7SW56eH4+PQk9vDr+fn21Wtwz18+ChS08SNosGE4hAq3NTBH8R87ZMBe5KpYEJXAFwECWIIAwZIlAgRCTD4AAGBWyJElTaJUyXIWS5Q3CdTEkHNnjZ4AcLbkGVTn0J8ADBhgqXQn06VHaTydOpTqLqIss1bVGhUp161aRYQAADs=',
      ERROR: 'data:image/gif;base64,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',
      GIVE: 'data:image/gif;base64,R0lGODlhHgAkAPQaAOzJYi4kHEonDV0xDVkrFlUyEl0yEHFFLmNjPHV1Pnx8SpRPC5VgLrFtJ8JaKtGMJdGBKdWUNOOKJOqpJuqwNO+pQu6oQ/jGRAAAAPbhbv///wAAAAAAAAAAAAAAAAAAACH5BAUAABoALAAAAAAeACQAQAX/oCZqQYCd2KhqgmAYYvuKKFZmWVmeantdL1xrRdQUjshja7GAQCqVWVF0ZDAcDivWan08LBbpVFRKJEoKRYkcSK9JulvmFO8JKBQcfriqvYktDQ1MUHxERwAAEhJOi4ENTk5eUGJFJQQEBweYTCVMmH8jJzihMQJQEREtqKoCoziwsTwjLQMDeC+GI3KltAJMOD+6Y0VLTU9RMGOIic2Jj5IPExPDGkxaWVzaXV4PUExTTFtX2ePT3wvEbAgIJexv7u0B6rtxOmx1KzsoUzLK/kRe9VpVIRVBgwLsBcBB554vPHoo8HkVS1YKX7ZwGZiIgpeOWaZ+BMlQzWO/XwuCZl2o5mdeMQGCCFWoRs8UEyeUlBFLksQYzmQ7CzhzBg2Cl2nVmC1qJKFotJxErpHbtq2btwrgilSZypUbmEpRF4wbm+0c1nTqLmXaRKBTgE8EehGJR9dlXXplzrRRY3evXEsK++YLAQA7',
      GIVING: 'data:image/gif;base64,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',
      SUCCESS: 'data:image/gif;base64,R0lGODlhNAAkAPU3AAAAAA4JACIUAGt7MahiALdwAHuMOoSUIYylIZStIZy1KaW9Kf+tAK3FMa3FOv/IAP/TAP/mB//tI5SlQsSQUq3FQrXFQrXOQrXOSrXOUrXFWr3OWr3OY//zQv/2U8XWa8XWc8XWe8Xee87ee+zNb+aljOa9pc7ehMXWjM7ejNbejNbelNbmlNbmnN7mnP//jt7mpd7mrd7vrf//qebvte/31v//5v///////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUAADgAIf8LTkVUU0NBUEUyLjADAQAAACH/C3htcCBkYXRheG1w/z94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3Lncub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJmOmFib3V0PSIiIP94bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbjp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjL/MDE0LTA0LTMwVDAxOjQyOjM3KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNC0wNC0zMFQwMTo0MzozLTE4OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE0LTA0LTMwVDAxOjQzOjM3LTE4OjMwIiBkY2Zvcm1hdD0iaW1hZ2UvZ2lmIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGQkM2OEU5Q0ZEQTFFM0IxQjNFRkU0NTBFRTlCQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCNjhFQUNGREExMUUzQjFCM0VGRTQ1MEVFOUJDNyI+IDx4/21wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD14bXAuaWlkOkJGQkM2OEU3Q0ZEQTExRTNCMUIzRUZFNDUwRTlCQzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCQzY4RThDRkRBMTFFM0IxQjNFRkU0NTBFRTlCQzciLz4gL3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bGxcTDwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAALAAAAAA0ACQAAAb+QJxwSBQGAgKBEaksOp/QqPOYXFal2Ow0YLM9Hsfv63XURg/oQ/bY/YYf47L5mVZr2d5HVz4volksNDRoa1x5ewF9Tn+Bg3ZSVAJdSXxDE5eYmYsHDg6AhFiRkwKVQpmnE5udn49ReEkkJHKZISEuLoKCMTGaQ3VmrwKxs5i1t7k0u71Cv3RpSwQEsQUFR2gaGicnKSkrK4AtLcfJvKlazUfR09UB19nb3d8s4ePK5lKMgmh46rIBFRVAgDBggBu4FjASwthF0B6+A4D0HeAnzR9AgQQNzkOokKEBh2c4eWKxz5AHD7GSdBoxQpsKFQQJDpg5QJAMGYIuPVxFcqL+SZQkVDpg6RJmTJo1adzMee/JkadQf6YUsLLlCW8xDSCtUUPXrnJQokbtcnJqVW1Yj9Lk6hUkkTdf4oIJECFCWRIzZhwheuJlVqQ2ZSRkukWu3CN17+bda9Wv2pmBB9PQOeTNjcuYEds96aFDhy9JRIjQxu0vzV0KYRCuHOAL5sx0N5/0DFqAaNIpTM9ErXD1kssSJBg27Jn2XG24TSg3gfTWLXouKP++EXy43OKfjyPntpw5TecuoEtn/aX6A/NfPFOgkESBgg0bkJ8oUaL7zHCAAKFAMX5JeeHnAZheB+u19158yNFn3wD45bdffzgcYd6EAOblRgAJJNBAA53EcMABffQh5c1LAoGyBYX/fWHhXBlu2OGHIIq4AokgmPgEAAAkEY2OBOC4owA4ZrjAAi46oKB3M33wQQYZYICBjU7gyCOPPhKQRJAJDFnkkUgpyaSTUBZR5ZgACEEmGhm6VyRAFlhwwQVOgtkKFGRGg6OZANgJAJoJqMmhA2y6CWecYUYJAAMM4AgBBHfioCijZeJQBwIIpOnepc1kgSOijzbaaaSTVtrnpe5lqgWOqKKKZ6qb1GFqH6my6misrbpa6BNBAAAh+QQFAAACACwCABQACgAOAIH/7SP///////8AAAACGEwAomu4D6NkYRp7Emx6Ovk9lzROSgghBQAh+QQFAAAEACwCABIACgAQAIKoYgD/yAD/7SP///////8AAAAAAAAAAAADKEg0I6JwtQdDYC5aTKPinpRV16SVo+JsJrGiHcSE3xACQB3hOj37gwQAIfkEBQAABQAsBAASAAwAEACCqGIA/8gA/9MA/+0j////////AAAAAAAAAzEYGkQzJZbFHJSx4V00l1TzYKGFPYp4RWg1bq16DqkpAUBGcLj+Fb0fMCcUCIQFIyYBACH5BAUAAAQALAgAEgAMABAAgqhiAP/IAP/tI////////wAAAAAAAAAAAAMvGBpEIq0t5mC8Y7yLtb1TtkWhdz2K+FWpyaGBegrt2ABAk3EErg883i74IxaNmQQAIfkEBQAACQAsDAAOAAoAFACDqGIA/8gA/9MA/+YH/+0j//NC//ZT//+p////////AAAAAAAAAAAAAAAAAAAAAAAABDswJYQIkXjWm7XtHpcNA/VhpMmRhqFKrLtlQVAUb1Lf+Y4jNNsPdDjUiMYACAAASZhODNQ5BQkE0askAgAh+QQFAAAGACwOAAgACAASAIL/7SPEkFL/80L/9lP//+b///////8AAAADLVhl3NquAADVhMzSeA0hGvOFHjEMT3mmzCptbncKQjrXS0Ozxp4zgQDGEGQkAAAh+QQFAAAHACwOAAgACAAQAIKoYgD/yAD/9lPszW///6n//+b///////8DKFh1Z8aKOQbAGPPUm6kdjHeFhyCMoYmSa9gyF0Gwg0wyQXAf+d7fuQQAIfkEBMgAAAAsEgAIAAIABACAt3AA7M1vAgSMAwkFADs=',
      UNKNOWN: 'data:image/gif;base64,R0lGODlhGAAkAPABAJOpjwAAACH5BAUAAAEALAAAAAAYACQAAAJqjI8GC8oJD2thxrRQlvRup3VXJYJjCH0nuVmr0z4vaapnbL42Pe+7V+Lpgr+ILwhMESdMpZIpQ3GSRkrxGsUgOdhbdsbdDnM9UZFKHk/BwjD0vYTDnTxcu2bNp+t6Pt1u99TE8uUmA2VQAAA7',
      TOKEN_MISS: 'data:image/gif;base64,R0lGODlhGAAkAPABAJOpjwAAACH5BAUAAAEALAAAAAAYACQAAAJqjI8GC8oJD2thxrRQlvRup3VXJYJjCH0nuVmr0z4vaapnbL42Pe+7V+Lpgr+ILwhMESdMpZIpQ3GSRkrxGsUgOdhbdsbdDnM9UZFKHk/BwjD0vYTDnTxcu2bNp+t6Pt1u99TE8uUmA2VQAAA7',
    },
    IMG = (window.devicePixelRatio > 1) ? IMG_2X : IMG_1X,
    STYLE =
            'span.oclb        {display:inline-block;pointer-events:all;width:18px;height:18px;vertical-align:middle;margin:0 3px;cursor:default;transition:.3s all}' +
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
            'span.oclb-100k:after{color:#f6e16e;background:#4A270D;content:"100k";font:10px/17px Trebuchet MS;text-align:center;letter-spacing:0;vertical-align:top;border-radius:4px;padding:0 3px;display:block}',
    STYLE_2X =
            'span.oclb        {background-size:auto 18px}' +
            'span.oclb-already{background-size:auto 8px}' +
            'span.oclb-spam   {background-size:auto 21px}',
    CSS = (window.devicePixelRatio > 1) ? STYLE + STYLE_2X : STYLE,
    NO_TRANSITION_STYLE = 'span.oclb{transition:none}',
    UNKNOWN_TITLE = 'This deviant\'s Llama status is a mystery!',
    TOKEN_MISSING_TITLE = 'CSRF token not found. Please refresh the page and try again.';
  var TITLES = {
      give: 'Give a Llama',
      giving: 'Giving Llama...',
      already: 'Already gave a Llama',
      enough: 'Has Llamas enough for love',
      token_miss: TOKEN_MISSING_TITLE,
      unknown: {
        loading: UNKNOWN_TITLE + ' (Loading...)',
        err_network: UNKNOWN_TITLE + ' (Network error)',
        err_dev_id: UNKNOWN_TITLE + ' (Invalid response, unable to find deviant ID)',
        err_server_response: UNKNOWN_TITLE + ' (Invalid response, unable to find llama status)',
      },
    },
    HAS_100K_LLAMAS = [
      'aenea-jones',
      'alitn',
      'anpcreations',
      'autumniv',
      'beckykidus',
      'canonics',
      'championx91',
      'chateaugrief',
      'cheriibat',
      'coccineus',
      'damaimikaz',
      'darksena',
      'derfeldwebel',
      'epicsaveroom',
      'eve-jennifer',
      'eviejulia',
      'evuie',
      'finakiyomo',
      'fizzypinkbubbles',
      'hyliabeilschmidt',
      'iamsorry87',
      'internetwaifu',
      'ioulaum',
      'kalmakamala',
      'koiransielu',
      'liamb135',
      'leonorachris',
      'lombarsi',
      'luke-crowe',
      'metorou-de',
      'naiuou',
      'natures-studio',
      'neekothefox2',
      'nekodawnlight',
      'niotabunny',
      'noire-ighaan',
      'novakaru',
      'raadollistunut',
      'seasidehill',
      'savagefrog',
      'seviyummy',
      'shintaurashura',
      'shinigamiookamiryuu',
      'spook-a-palooza',
      'strawberriesinhell',
      'thegalleryofeve',
      'timing2',
      'toby512',
      'tree-pencil',
      'unexpectedtoy',
      'unibat',
      'vibrant-snow',
      'vibrantsnow',
      'wytherwing',
      'zestylimey',
    ],
    DEFAULTS = {
      showIn: '*',
      showPos: 'after',
      addForGroups: 'true',
      animation: 'true',
    },
    IS_FIREFOX = navigator.userAgent.includes('Firefox');

  var errorTimeouts = {},
    lastStates = {},
    devIDs = {},
    xhrCallbacks = {},
    xdCommunicator;

  try {
    if (!String.prototype.endsWith) {
      String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !Number.isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
          position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
    }
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
    // Not polyfilling Array#includes because DA has buggy JS that
    // breaks the notification center in older browsers
    var $includes = function (array, search) {
      return array.indexOf(search) !== -1;
    };
    var $forEach = function (array, callback) {
      if (array && callback) {
        for (var i = 0; i < array.length; i++) callback(array[i], i);
      }
    };

    var addCSS = function (css) {
      document.head.appendChild(document.createElement('style')).textContent = css;
    };
    // taken from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
    var isLSSupported = (function () {
      var mod = 'ls-supported';
      try {
        window.localStorage.setItem(mod, mod);
        window.localStorage.removeItem(mod);
        return true;
      } catch (e) {
        return false;
      }
    }());
    var storage = function (action, key, value) {
      if (!isLSSupported) return;
      try {
        return window.localStorage[action + 'Item'](key, value);
      } catch (er) {
        // This code is terrible, but this saves me from helping
        // FF users having LS trouble (probably a bug in FF).
        window.localStorage.clear();
      }
    };
    var setting = function (key, value) {
      if (value) {
        if (typeof gmSet !== 'undefined') gmSet(key, value);
      } else {
        if (typeof gmGet !== 'undefined' && gmGet(key)) return gmGet(key);
        return DEFAULTS[key];
      }
    };

    var getToken = function (document) {
      var scripts = document.scripts;
      for (let i = 0; i < document.scripts.length; i++) {
        const current = scripts[i];
        if (current.innerHTML.includes('window.__CSRF_TOKEN__ ')) {
          const htmlChunks = current.innerHTML.split('window.__CSRF_TOKEN__ ');
          const splitForToken = htmlChunks[1].split(/'/);
          return splitForToken[1];
        }
      }
    };

    var getLoggedInDeviantName = function () {
      if (window.deviantART && window.deviantART.deviant) {
        var u = window.deviantART.deviant.username;
        if (u) return u.toLowerCase();
      }
      var eclipseElement = document.querySelector('header a[data-username]');
      if (eclipseElement) {
        var username = eclipseElement.getAttribute('data-username');
        return username.toLowerCase();
      }
    };
    var loggedInDev = getLoggedInDeviantName();

    var setButtonState = function (llamaButton, className, title) {
      llamaButton.className = 'oclb oclb-' + className;
      if (!title) title = TITLES[className];
      if (title) llamaButton.title = title;
    };
    var saveLastState = function (devName, className, title) {
      if (className === 'unknown') return;
      lastStates[devName] = { className: className, title: title };
    };
    var spamTimeouts = {};
    var setButtonsState = function (devName, className, title, dontTellOtherTabs) {
      if (!dontTellOtherTabs) {
        storage('set', 'sbsCall', JSON.stringify({
          loggedInDev: loggedInDev,
          devName: devName,
          className: className,
          title: title,
        }));
      }
      if ({}.hasOwnProperty.call(spamTimeouts, devName)) clearTimeout(spamTimeouts[devName]);
      if (className === 'spam') {
        spamTimeouts[devName] = setTimeout(function () {
          setButtonsState(devName, 'give', true);
        }, 60e3);
      }
      saveLastState(devName, className, title);
      var llamaButtons = document.querySelectorAll('span[devName="' + devName + '"]');
      $forEach(llamaButtons, function (llamaButton) {
        setButtonState(llamaButton, className, title);
      });
    };

    var insertInvisibleIframe = function (src, id) {
      var iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = src;
      if (id) iframe.id = id;
      return document.body.appendChild(iframe);
    };

    var llamaButtonClicked = function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!$includes(['give', 'error', 'spam'], this.className.slice(10))) return; // 10 === 'oclb oclb-'.length
      var devName = this.getAttribute('devName');
      var devNameReg = this.getAttribute('devNameReg');
      setButtonsState(devName, 'giving');

      var token = getToken(document); // get token from normal page if applicable, much faster this way
      var iframe = null;

      if (token) {
        processLlamaGiven(token, devNameReg, devName);
      } else {
        var userUrl = 'https://www.deviantart.com/' + devName;
        iframe = insertInvisibleIframe(userUrl, 'oclb-frame-' + devName);
        iframe.addEventListener('load', function () {
          token = getToken(iframe.contentDocument);
          if (!token) {
            getCsrfToken().then((csrfToken) => {
              processLlamaGiven(csrfToken, devNameReg, devName, iframe);
            });
          } else {
            processLlamaGiven(token, devNameReg, devName, iframe);
          }
        });
      }
      clearTimeout(errorTimeouts[devName]);
      errorTimeouts[devName] = setTimeout(function () {
        if (iframe) {
          iframe.remove();
        }
        setButtonsState(devName, 'error', 'Timeout');
      }, 45e3);
    };

    var processLlamaGiven = function (token, devNameReg, devName, iframe) {
      var url = 'https://www.deviantart.com/_puppy/dashared/give_llama';
      var params = JSON.stringify({
        foruser: devNameReg,
        csrf_token: token,
      });
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (!xhr.responseText.includes('errorDescription')) {
            clearTimeout(errorTimeouts[devName]);
            setButtonsState(devName, 'success', 'success');
            if (iframe) {
              iframe.remove();
            }
            return;
          } else if (xhr.response.includes('errorDescription') && xhr.responseText.includes('quickly')) {
            clearTimeout(errorTimeouts[devName]);
            setButtonsState(devName, 'spam');
            if (iframe) {
              iframe.remove();
            }
            return;
          }
        }
        if (iframe) {
          iframe.remove();
        }
      };

      xhr.send(params);
    };

    var xhrCounter = 0;
    var get = function (url, callbacks) {
      if (!xdCommunicator) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
          callbacks.success.call(this.response);
        };
        xhr.onerror = function () {
          callbacks.error.call('');
        };
        xhr.send();
      } else {
        xhrCallbacks[++xhrCounter] = callbacks;
        xdCommunicator.postMessage(JSON.stringify({
          oclb: {
            id: xhrCounter,
            url: url,
          },
        }), '*');
      }
    };
    // Define a variable to cache the CSRF token
    let cachedCsrfTokenPromise = storage('get', 'cached_csrf');
    let requestedForToken = false;
    // Function to get the CSRF token
    const getCsrfToken = async () => {
      if (cachedCsrfTokenPromise) {
        // If the token is already being fetched, return the existing promise
        return cachedCsrfTokenPromise;
      }

      // Create a new promise for fetching and caching the CSRF token
      const csrfTokenPromise = new Promise(async (resolve, reject) => {
        // Attempt to get the CSRF token from the current page
        const csrfTokenInput = document.querySelector("#logout-form input[type='hidden']");
        const csrfToken = csrfTokenInput ? csrfTokenInput.value : null;

        if (csrfToken) {
          storage('set', 'cached_csrf', csrfToken);
          // Cache the token for future use
          cachedCsrfTokenPromise = Promise.resolve(csrfToken);
          resolve(csrfToken);
        } else if (!requestedForToken) {
          // If not found on the current page, fetch it from the alternate URL
          const apiUrl = 'https://www.deviantart.com/kishan-bagaria/art/One-Click-Llama-Button-450957519';

          try {
            const response = await fetch(apiUrl);
            requestedForToken = true;
            if (!response.ok) {
              throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            const htmlContent = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlContent;

            const altCsrfTokenInput = tempDiv.querySelector("#logout-form input[type='hidden']");
            const altCsrfToken = altCsrfTokenInput ? altCsrfTokenInput.value : null;

            storage('set', 'cached_csrf', altCsrfToken);

            if (altCsrfToken) {
              // Cache the token for future use
              cachedCsrfTokenPromise = Promise.resolve(altCsrfToken);
              resolve(altCsrfToken);
            } else {
              // If still not found, handle the error
              throw new Error('CSRF token not found in the alternate source.');
            }
          } catch (error) {
            // Handle any errors that occurred during the process
            console.error('Error:', error);
            reject(error); // Reject the promise with the error
          }
        }
      });

      // Return the promise for fetching the CSRF token
      return csrfTokenPromise;
    };

    var getGiveMenu = function (devName, callback) {
      getCsrfToken()
        .then((csrfToken) => {
          if (csrfToken) {
            get('https://www.deviantart.com/_puppy/dauserprofile/give_menu/status?username=' + devName + '&csrf_token=' + csrfToken, {
              success: function () {
                var resultJSON = JSON.parse(this);
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
              error: function () {
                callback(0, 'unknown', TITLES.unknown.err_network);
              },
            });
          } else {
            // Handle the case where CSRF token is still not found
            console.error('CSRF token not found.');
            setButtonsState(devName, 'token_miss', 'Token not found! Refresh and retry..');
          }
        })
        .catch((error) => {
          // Handle any errors that occurred during the process
          console.error('Error:', error);
        });
    };
    var llamaButtonsToUpdate = {};
    var askServerForStatus = function (llamaButton, devName) {
      if ({}.hasOwnProperty.call(llamaButtonsToUpdate, devName)) {
        llamaButtonsToUpdate[devName].push(llamaButton);
      } else {
        llamaButtonsToUpdate[devName] = [llamaButton];
        getGiveMenu(devName, function (devID, className, title) {
          saveLastState(devName, className, title);
          if (devID) devIDs[devName] = devID;
          // if (className === 'already') storage('set', loggedInDev + '|' + devName, 0);
          llamaButtonsToUpdate[devName].forEach(function (button) {
            setButtonState(button, className, title);
          });
          delete llamaButtonsToUpdate[devName];
        });
      }
    };
    var initLlamaButton = function (llamaButton, devName) {
      llamaButton.onclick = llamaButtonClicked;
      if ({}.hasOwnProperty.call(lastStates, devName)) {
        setButtonState(llamaButton, lastStates[devName].className, lastStates[devName].title);
      } else if ($includes(HAS_100K_LLAMAS, devName)) {
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
    var getDevName = function (link, needLowerCase) {
      var eclipseUsername = link.getAttribute('data-username');
      if (eclipseUsername && needLowerCase) return eclipseUsername.toLowerCase();
      if (eclipseUsername && !needLowerCase) return eclipseUsername;
      var devNameOld = /([a-zA-Z0-9-]+)\.deviantart\.com/.exec(link.href);
      if (devNameOld && devNameOld[1] !== 'www') {
        if (needLowerCase) {
          return devNameOld[1].toLowerCase();
        }
        return devNameOld[1];
      }
      var devNameNew = /www\.deviantart\.com\/([a-zA-Z0-9-]+)/.exec(link.href);
      if (devNameNew) {
        if (needLowerCase) {
          return devNameNew[1].toLowerCase();
        }
        return devNameNew[1];
      }
    };

    var addLlamaButton = function (devNameLink) {
      var isSpan = false;
      if (devNameLink.nodeType === Node.ELEMENT_NODE &&
                devNameLink.tagName.toLowerCase() === 'span') {
        isSpan = true;
      }
      if (devNameLink.className.includes('banned')) return;
      var devName = isSpan ? devNameLink.innerText : getDevName(devNameLink, true);
      var devNameReg = isSpan ? devNameLink.innerText : getDevName(devNameLink, false);

      if (!devName) return;
      if (!loggedInDev) {
        document.cookie.split(';').forEach(function (c) {
          if (c.split('=')[0].trim() === 'userinfo') {
            loggedInDev = JSON.parse(decodeURIComponent(c).split(';')[1]).username.toLowerCase();
          }
        });
      }
      if (devName === loggedInDev) return;
      var llamaButton = document.createElement('span');
      llamaButton.setAttribute('devName', devName);
      llamaButton.setAttribute('devNameReg', devNameReg);

      initLlamaButton(llamaButton, devName);
      var refEl = setting('showPos') === 'before' ? devNameLink : devNameLink.nextSibling;
      if (setting('showPos') === 'after') {
        if (refEl && refEl.className && refEl.className.includes('user-symbol')) {
          refEl = refEl.nextSibling;
        }
      }
      devNameLink.parentNode.insertBefore(llamaButton, refEl);
    };
    var addMessageListener = function (callback) {
      window.addEventListener('message', function (e) {
        if (e.data && e.data.slice && e.data.slice(0, 6) !== '{"oclb') return;
        callback(JSON.parse(e.data).oclb, e.origin);
      });
    };
    var addStylesAndMsgListener = function () {
      addCSS(CSS);
      if (setting('animation') !== 'true') addCSS(NO_TRANSITION_STYLE);
      addMessageListener(function (data, origin) {
        if (origin !== 'https://www.deviantart.com') return;
        var oclbFrame = document.getElementById('oclb-frame-' + data.devName);
        clearTimeout(errorTimeouts[data.devName]);
        delete errorTimeouts[data.devName];
        var callback = function (className, setStorage) {
          // if (setStorage) storage('set', loggedInDev + '|' + data.devName, 0);
          setButtonsState(data.devName, className, className === 'success' ? data.successText : data.errorText);
        };
        if (data.successText.includes('Success!')) {
          callback('success', true);
        } else if (data.errorText.includes('You cannot give any more llama badges to') || data.errorText.includes('Cannot give badge to this user')) {
          callback('already', true);
        } else if (data.errorText.includes('Badges have been given too quickly, and have tripped a spam filter')) {
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
    var addFooterLinks = function () {
      var footer = document.querySelector('.footer-menu-list');
      if (!footer) return;
      var LINKS = {
        'One Click Llama Button': '//kishanbagaria.com/userscripts/one-click-llama-button/',
      };
      Object.keys(LINKS).forEach(function (link) {
        var li = document.createElement('li');
        li.className = 'footer-menu-list-item';
        li.innerHTML = link.link(LINKS[link]);
        footer.appendChild(li);
      });
    };
    var addLlamaButtonsInDA = function () {
      var waitForElements = function (parentNode, selector, callback) {
        var callbackOnlyOnce = function (n) {
          if (n.getAttribute('data-oclb-found')) return;
          callback(n);
          n.setAttribute('data-oclb-found', '1');
        };
        var callForChildren = function () {
          if (parentNode.matches && parentNode.matches(selector)) callbackOnlyOnce(parentNode);
          if (!parentNode.querySelectorAll) return;
          $forEach(parentNode.querySelectorAll(selector), callbackOnlyOnce);
        };
        callForChildren();
        new MutationObserver(function (mutations) {
          mutations.forEach(function (m) {
            $forEach(m.addedNodes, callForChildren);
          });
        }).observe(parentNode, {
          childList: true,
          subtree: true,
        });
      };
      var storageListener = function (e) {
        if (e.key !== 'sbsCall') return;
        var data = JSON.parse(e.newValue);
        if (data.loggedInDev === loggedInDev) {
          setButtonsState(data.devName, data.className, data.title, true);
        }
      };
      var usernameLinkSelector = (setting('addForGroups') === 'true'
        ? 'a.username, a[data-username]'
        : 'a.username:not(.group), a[data-username]:not([data-usertype=group])'
      );
      var addEverywhere = function () {
        var badgesLinkSelector = 'a[href*=".deviantart.com/"][href*="/badges/"]';
        var watchersSelector = '#watchers div > span';
        var watchingSelector = '#watching div > span';
        waitForElements(document.body, badgesLinkSelector + ',' + usernameLinkSelector +
                    (document.querySelectorAll(watchersSelector).length > 0 ? ',' + watchersSelector : '') +
                    (document.querySelectorAll(watchingSelector).length > 0 ? ',' + watchingSelector : ''), addLlamaButton);
      };
      var addInCatBar = function () {
        var devNameLink = document.querySelector('div.gruserbadge ' + usernameLinkSelector);
        if (devNameLink) addLlamaButton(devNameLink);
        return devNameLink;
      };
      var isNotifyCenter = function () {
        return window.location.href.includes('/notifications/');
      };
      var showIn = setting('showIn');
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
        if (!isNotifyCenter) return;
        addEverywhere();
      } else if (showIn === 'notifycenter+profile') {
        if (isNotifyCenter) addEverywhere();
        else if (!addInCatBar()) return;
      }
      if (showIn !== 'profile') window.addEventListener('storage', storageListener);
      addStylesAndMsgListener();
      addFooterLinks();
    };
    var postParent = function (obj) {
      window.parent.postMessage(JSON.stringify({ oclb: obj }), '*');
    };
    if (!window.location.host.includes('deviantart.com') && !window.location.host.includes('sta.sh')) { // is KishanBagaria.com
      window.postMessage('oclb-loaded', window.location.href);
      if (window.location.href.includes('/preferences/')) {
        var inputs = document.querySelectorAll('input.oclb');
        $forEach(inputs, function (input) {
          if (input.type === 'checkbox') {
            if (setting(input.name) === 'true') input.checked = true;
            input.onchange = function () {
              setting(input.name, input.checked.toString());
            };
          } else if (input.type === 'radio') {
            if (setting(input.name) === input.value) input.checked = true;
            input.onchange = function () {
              setting(input.name, input.value);
            };
          }
        });
        addCSS(CSS);
      } else if (window.location.href.includes('/exchangers/')) {
        xdCommunicator = insertInvisibleIframe('//deviantart.com/global/difi/?oclb').contentWindow;
        addStylesAndMsgListener();
        addMessageListener(function (data) {
          if (data.loggedInDev) {
            loggedInDev = data.loggedInDev;
            window.postMessage('oclb.loggedInDev|' + loggedInDev, window.location.href);
            $forEach(document.querySelectorAll('span.oclb'), function (button) {
              var devName = button.getAttribute('devName');
              if (devName) initLlamaButton(button, devName);
            });
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
      var fillForm = function () {
        if (!document.give_form) return window.location.reload();
        if (document.give_form.tos) document.give_form.tos.checked = true;
        document.give_form.submit();
      };
      if (IS_FIREFOX) {
        document.addEventListener('DOMContentLoaded', fillForm);
      } else {
        fillForm();
      }
    } else if (window.location.href.includes('/modal/badge/process_trade')) {
      if (document.getElementsByClassName('badge-llama').length > 0) {
        var usernameElement = document.querySelector('.username'),
          successElement = document.querySelector('#badgeReceiptBody > div'),
          errorElement = document.querySelector('#error_messages > ul > li'),
          successText = successElement ? successElement.textContent.replace(/\s+/g, ' ').trim() : '',
          errorText = errorElement ? errorElement.textContent.replace(/\s+/g, ' ').trim() : '';
        if (usernameElement) {
          postParent({
            devName: usernameElement.textContent.toLowerCase(),
            successText: successText,
            errorText: errorText,
          });
        }
      }
    } else if (window.location.href.includes('://deviantart.com/global/difi/?oclb')) {
      document.cookie.split(';').forEach(function (c) {
        if (c.split('=')[0].trim() === 'userinfo') {
          loggedInDev = JSON.parse(decodeURIComponent(c).split(';')[1]).username.toLowerCase();
          postParent({ loggedInDev: loggedInDev });
        }
      });
      addMessageListener(function (data) {
        var _ = function () {
          postParent({ id: data.id, data: this });
        };
        if (data.url) {
          get(data.url, { success: _, error: _ });
        }
      });
    } else if (window.location.host !== 'llamatrade.deviantart.com') {
      if (loggedInDev || window.location.href.includes('/notifications')) addLlamaButtonsInDA();
    }
  } catch (err) {
    var heading = 'One Click Llama Button v' + VERSION + ' encountered an error:\n';
    console.error(heading, err);
    alert(heading + '\n---\n' + err + '\n---\n\nPlease email a screenshot of this to hi@kishan.info, or post it as a comment on Kishan-Bagaria.DeviantArt.com (unless someone has already posted the same comment).\n\n---\nURL: ' + window.location.href + '\nUser-Agent: ' + navigator.userAgent);
  }
});
