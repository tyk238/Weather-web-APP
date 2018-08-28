var weatherTemp = $(".weather-temp");
var weatherCity = $(".weather-city");
var weatherIcon = $(".weather-icon");
var current = 273.15;
iconLink = "http://openweathermap.org/img/w/";
var weather = $(".weather");

$.getJSON("https://api.openweathermap.org/data/2.5/weather?id=524901&APPID=ca8c2c7970a09dc296d9b3cfc4d06940",
    function(data){
        var temp = data.main.temp - current;
        temp = temp.toFixed();


        weatherTemp.html(temp)
        weatherCity.html(data.name);
        weatherIcon.attr("src",iconLink + data.weather[0].icon + ".png");
        
    
        
        
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + data.name,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","b43052dc82e049d28fea7a43fd28e374");
            },
            type: "GET",
            // Request body
            data: "",
        })
        .done(function(data) {
            /* alert("success"); */
            
            console.log(data.value["0"].contentUrl);
            
            /* $(".weather").attr('style',  'background-image:red'); */
            
            /* $(".weather").css("background-image", "url('/css/images/css.jpg')"); */
            $(".weather").css("background-image", 'url(' + data.value["0"].contentUrl + ')');
            
        })
        
    }
)