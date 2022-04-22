# Multi Platform Template System

This is html and xml template system. It is created to be used in multiple programming languages.

It's like Twig, but better.

## Demo

<iframe style="border:none;"></iframe>

## Usage in code

### PHP

```bash
composer require mkrawczyk/mpts
```

```php
use MKrawczyk\Mpts\Environment;
use MKrawczyk\Mpts\Parser\XMLParser;

$template = XMLParser::Parse(file_get_contents(__DIR__ . '/file.mpts'));
$env = new Environment();
$env->variables = ['foo' => 'bar'];
echo $template->executeToString($env);
```

### JS

```js
let parsed = XMLParser.Parse(code);
let env = new Environment();
env.variables = {foo: 'bar'}
document.body.append(parsed.execute(env));
```

### JS with webpack