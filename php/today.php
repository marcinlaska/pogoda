<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$location = array_shift(json_decode(file_get_contents("https://www.metaweather.com/api/location/search/?lattlong={$_GET['latitude']},{$_GET['longitude']}")));
$weather  = array_shift(json_decode(file_get_contents('https://www.metaweather.com/api/location/' . $location->woeid))->consolidated_weather);
$response = [
	'temperature' => $weather->the_temp,
	'icon'        => "https://www.metaweather.com/static/img/weather/{$weather->weather_state_abbr}.svg"
];

switch ($weather->weather_state_abbr) {
	case 'sn': $weather_name = 'Śnieg';              break;
	case 'sl': $weather_name = 'Deszcz ze śniegiem'; break;
	case 'h':  $weather_name = 'Grad';               break;
	case 't':  $weather_name = 'Burza z piorunami';  break;
	case 'hr': $weather_name = 'Intensywny deszcz';  break;
	case 'lr': $weather_name = 'Niewielki deszcz';   break;
	case 's':  $weather_name = 'Przelotny deszcz';   break;
	case 'hc': $weather_name = 'Zachmurzenie';       break;
	case 'lc': $weather_name = 'Zachmurzenie małe';  break;
	case 'c':  $weather_name = 'Słonecznie';         break;
	default:   $weather_name = 'brak danych';        break;
}

$response = json_encode(array_merge(['location' => $location->title, 'name' => $weather_name], $response));
echo $response;