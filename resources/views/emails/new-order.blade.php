<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cakes By Toni - Thank You :)</title>
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Cabin+Sketch|Sacramento" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <div class="row justify-content-center align-items-center">
        <div class="text-center">
            <h1 class="display-1">Yay a new customer! :)</h1>
            <p>Here's the deets:</p>
            <ul class="list-group w-100 mx-auto">
                <li class="list-group-item">Name: {{ $order->first_name }} {{ $order->last_name }}</li>
                <li class="list-group-item">Email: {{ $order->email }}</li>
                <li class="list-group-item">Instructions: {{ $order->instructions }}</li>
                <li class="list-group-item">Due: {{ $order->due_date }}</li>
                <li class="list-group-item">Phone: {{ $order->phone_number }}</li>
                <li class="list-group-item">Product: {{ $order->product }}</li>
            </ul>
        </div>
    </div>
</div>
<script
    src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
    crossorigin="anonymous"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>