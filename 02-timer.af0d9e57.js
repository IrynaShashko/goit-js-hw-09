!function(){var e,t={input:document.querySelector("datetime-picker"),startBtn:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")},n=6e4,a=36e5,o=864e5,r=function(e){document.querySelector("span").innerText=e};function c(e){return String(e).padStart(2,"0")}e=new Date("2022-06-03"),setInterval((function(){var u=new Date(e)-new Date,s=Math.floor(u/o),d=Math.floor(u%o/a),i=Math.floor(u%o%a/n),l=Math.floor(u%o%a%n/1e3),m="".concat(c(s));t.days.innerText="".concat(c(s)),t.hours.innerText="".concat(c(d)),t.minutes.innerText="".concat(c(i)),t.seconds.innerText="".concat(c(l)),r(m)}),1e3)}();
//# sourceMappingURL=02-timer.af0d9e57.js.map
