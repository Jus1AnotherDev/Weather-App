(()=>{let e=localStorage.getItem("placeName");async function t(e){const t="https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=b33c66c29c98341b615178783182c065";""==e&&(e="Delhi"),await fetch(t).then((e=>e.json())).then((function(t){console.log(t);let n=t.main;document.getElementById("placeName").innerText=e,document.getElementById("temp").innerHTML="Temp: "+n.temp+"&deg;C",document.getElementById("feels_like").innerHTML="Feels Like: "+n.feels_like+"&deg;C",document.getElementById("temp_min").innerHTML="Temp Min: "+n.temp_min+"&deg;C",document.getElementById("temp_max").innerHTML="Temp Max: "+n.temp_max+"&deg;C",document.getElementById("pressure").innerText="Pressure: "+n.pressure+" hPa",document.getElementById("humidity").innerText="Humidity: "+n.humidity+"%"}))}t(e),document.getElementById("getNameForm").addEventListener("submit",(n=>{n.preventDefault(),e=document.getElementById("name").value,localStorage.setItem("placeName",e),t(e)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwbGFjZU5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXN5bmMiLCJnZXRXZWF0aGVyIiwicmVxdWVzdFVybCIsImFwaSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudE9iamVjdCIsIm1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiaW5uZXJIVE1MIiwidGVtcCIsImZlZWxzX2xpa2UiLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwicHJlc3N1cmUiLCJodW1pZGl0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiTUFJQSxJQUFJQSxFQUFZQyxhQUFhQyxRQUFRLGFBRXJDQyxlQUFlQyxFQUFXSixHQUN0QixNQUFNSyxFQVBFLHFEQU9pQkwsRUFBTk0sdURBQ0YsSUFBYk4sSUFDQUEsRUFBWSxlQUVWTyxNQUFNRixHQUNQRyxNQUFLQyxHQUFZQSxFQUFTQyxTQUMxQkYsTUFBSyxTQUFTRyxHQUNYQyxRQUFRQyxJQUFJRixHQUNaLElBQUlHLEVBQWdCSCxFQUFLSSxLQUN6QkMsU0FBU0MsZUFBZSxhQUFhQyxVQUFZbEIsRUFDakRnQixTQUFTQyxlQUFlLFFBQVFFLFVBQVksU0FDNUNMLEVBQWNNLEtBQU8sU0FDckJKLFNBQVNDLGVBQWUsY0FBY0UsVUFBWSxlQUNsREwsRUFBY08sV0FBYSxTQUMzQkwsU0FBU0MsZUFBZSxZQUFZRSxVQUFZLGFBQ2hETCxFQUFjUSxTQUFXLFNBQ3pCTixTQUFTQyxlQUFlLFlBQVlFLFVBQVksYUFDaERMLEVBQWNTLFNBQVcsU0FDekJQLFNBQVNDLGVBQWUsWUFBWUMsVUFBWSxhQUNoREosRUFBY1UsU0FBVyxPQUN6QlIsU0FBU0MsZUFBZSxZQUFZQyxVQUFZLGFBQ2hESixFQUFjVyxTQUFXLE9BSXJDckIsRUFBV0osR0FFT2dCLFNBQVNDLGVBQWUsZUFFOUJTLGlCQUFpQixVQUFXQyxJQUNwQ0EsRUFBTUMsaUJBQ041QixFQUFZZ0IsU0FBU0MsZUFBZSxRQUFRWSxNQUM1QzVCLGFBQWE2QixRQUFRLFlBQWE5QixHQUNsQ0ksRUFBV0osTyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiO1xuXG5jb25zdCBhcGlLZXkgPSBcImIzM2M2NmMyOWM5ODM0MWI2MTUxNzg3ODMxODJjMDY1XCI7XG5cbmxldCBwbGFjZU5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYWNlTmFtZVwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihwbGFjZU5hbWUpIHtcbiAgICBjb25zdCByZXF1ZXN0VXJsID0gYXBpICsgcGxhY2VOYW1lICsgXCImdW5pdHM9bWV0cmljXCIgKyBcIiZhcHBpZD1cIiArIGFwaUtleTtcbiAgICBpZiAocGxhY2VOYW1lID09IFwiXCIpIHtcbiAgICAgICAgcGxhY2VOYW1lID0gXCJEZWxoaVwiO1xuICAgIH1cbiAgICBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRPYmplY3QgPSBkYXRhLm1haW47XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNlTmFtZVwiKS5pbm5lclRleHQgPSBwbGFjZU5hbWU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIikuaW5uZXJIVE1MID0gXCJUZW1wOiBcIiArIFxuICAgICAgICAgICAgY3VycmVudE9iamVjdC50ZW1wICsgXCImZGVnO0NcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNfbGlrZVwiKS5pbm5lckhUTUwgPSBcIkZlZWxzIExpa2U6IFwiICsgXG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LmZlZWxzX2xpa2UgKyBcIiZkZWc7Q1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wX21pblwiKS5pbm5lckhUTUwgPSBcIlRlbXAgTWluOiBcIiArIFxuICAgICAgICAgICAgY3VycmVudE9iamVjdC50ZW1wX21pbiArIFwiJmRlZztDXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBfbWF4XCIpLmlubmVySFRNTCA9IFwiVGVtcCBNYXg6IFwiICsgXG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0LnRlbXBfbWF4ICsgXCImZGVnO0NcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVcIikuaW5uZXJUZXh0ID0gXCJQcmVzc3VyZTogXCIgKyBcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QucHJlc3N1cmUgKyBcIiBoUGFcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIikuaW5uZXJUZXh0ID0gXCJIdW1pZGl0eTogXCIgKyBcbiAgICAgICAgICAgIGN1cnJlbnRPYmplY3QuaHVtaWRpdHkgKyBcIiVcIjtcbiAgICAgICAgfSlcbn1cblxuZ2V0V2VhdGhlcihwbGFjZU5hbWUpO1xuXG5sZXQgZ2V0TmFtZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldE5hbWVGb3JtXCIpO1xuXG5nZXROYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGxhY2VOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxhY2VOYW1lXCIsIHBsYWNlTmFtZSk7XG4gICAgZ2V0V2VhdGhlcihwbGFjZU5hbWUpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==