 $(document).ready(function(){
    $("#submitWeather").click(function(){
        
        var city = $("#city").val();
        
        if(city != ''){
            $.ajax({
                
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial"+"&APPID=eff993066c59737d6b0f5cc71e63f575",
                type: "GET",
                dataType:"jsonp",
                success: function(data){
                    var widget = show(data);
                    
                    $("#show").html(widget);
                    
                    $("#city").val('');
                }
                });
            } else {
            $("#error").html('Field cannot be empty...');
        }
    })
});

function show(data){
    console.log(data.weather[0].description)
    return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>"+
           "<h3><img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>" + data.weather[0].description +" "+ data.main.temp +"&deg;F</h3>" +
           "<h3><strong>Low of </strong> " + data.main.temp_min +"&deg;F</h3>" +
           "<h3><strong>High of </strong> " + data.main.temp_max +"&deg;F</h3>" +
           "<h3><strong>Humidity </strong>: " + data.main.humidity +"%</h3>" + 
           "<h3><strong>Wind Speed </strong>: " + data.wind.speed +"mph</h3>"+
           "</div>"
        ;
}






