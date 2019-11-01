<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Organic. Gluten-free. Vegan. We only use premium ingredients with state of the art tools and techniques to deliver a treat like no other. Let us make the perfect cake for your next special occasion!">
        <title>Cakes By Toni | Welcome</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="react"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>
