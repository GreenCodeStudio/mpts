<?php

use MKrawczyk\Mpts\Environment;
use MKrawczyk\Mpts\Parser\XMLParser;

include_once __DIR__ . '/../vendor/autoload.php';

$data = json_decode(file_get_contents("https://en.wikipedia.org/w/api.php?action=query&list=recentchanges&format=json"));

$template = XMLParser::Parse(file_get_contents(__DIR__ . '/../src/change.mpts'));


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        html {
            font-family: Roboto, sans-serif;
        }

        article {
            margin-bottom: 2em;
        }

        h2 {
            margin: 0;
        }
    </style>
</head>
<body>
<?php

foreach ($data->query->recentchanges as $change) {
    $env = new Environment();
    $env->variables = ['change' => $change];
    echo $template->executeToString($env);
}
?>
<script src="dist/main.js"></script>
</body>
</html>