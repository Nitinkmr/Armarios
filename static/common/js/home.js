document.getElementById("submit_form").onClick() = function(num_days,location)
{

	var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=AIzaSyBnJ7zV4Q5aDyh-T4lgWZf4H7_7AIVMyLY";
	var lat,long;
  $.get(url, function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
           lat = data.results[0].geometry.location.lat;
           long = data.results[0].geometry.location.long;
         });
  /*
	now passing lat long to IBM
  */
  var xhttp = new XMLHttpRequest();
  url = "https://da88f2f4-1585-48bc-a193-c5180bdb3236:MNLeTN1JCw@twcservice.mybluemix.net/api/weather/v1/geocode/"+ lat + "/" + long + "/forecast/daily/";
  var json_data;
  if(num_days<=3)
  {
  	url += "3day.json";

  }else if(num_days<=5)
  {
  	
   url += "5day.json";
 }else
 {
  url += "10day.json";

}

$.getJSON('https://twcservice.mybluemix.net/api/weather/v1/geocode/33.40/-83.42/forecast/daily/5day.json', function(json) {
 json_data = json;
}); 

var average_temp = 0;
var num_clothe = num_days/2;
for(var i=0;i<num_days;i++)
{
 average_temp += (json_data.forecasts[i].max_temp + json_data.forecasts[i].min_temp)/2;
}

average_temp /= num_days;

$.ajax({
  type: 'POST',
  url: 'https://to.com/postHere.php',
  crossDomain: true,
  data: '{"avg_temp": avg_temp,"pairs":num_clothe}',
  success: function(responseData, textStatus, jqXHR) {
    var value = responseData.someKey;
  },
  error: function (responseData, textStatus, errorThrown) {
    alert('POST failed.');
  }
});


}