# Multi Platform Template System

This is html and xml template system. It is created to be used in multiple programming languages.

It's like Twig, but better.

## Demo
https://greencodestudio.github.io/mpts/demo/
<iframe style="border:none; width:100%" src="https://greencodestudio.github.io/mpts/demo/"></iframe>

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

## Language supported
### PHP
https://packagist.org/packages/mkrawczyk/mpts

### JS
Main package
https://www.npmjs.com/package/mpts-core

Webpack loader:
https://www.npmjs.com/package/mpts-loader
