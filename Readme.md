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

### .NET
https://www.nuget.org/packages/MPTS

## Manual
### Text 
MPTS allows You to use expressions that returns text.
```MPTS
<h1>{{title}}</h1>
<p>{{description}}</p>
```
Expressions can also be more complicated
```MTPS
{{sampleFunction(obj.property.subPropertry)}}
```
Everythink written using {{ }} is XSS safe, ho html injection is possible.
### Elements
All attribute's values are threated as expressions, but text in quotes " " or ' ' is threated as static string  
```MPTS
<div class="2+2" title=2+2/>
```
will produce
```html
<div class="2+2" title="4"></div>
```

### Expressions
Expressions is everythink you can write:
* between {{ and }}
* as element's attribute value

Becouse MPTS is language-agnostic, all available expressions are identical for all platforms and languages.

#### Variable
You can use variables provided from external source or scoped variable (by `<:variable/>` `<:foreach/>` or `<:loop/>`)

#### Property
You can extract property of variable using `.`. The same symbol is used for all programming languagfes you use MPTS with.

Using with PHP you can use `.` both for arrays and objects.
#### Method call
With variables You can provide functions (in C# delegates, in PHP callables), or objects, that have methods.

Methods/functions can get parameters.
```MPTS
function1()
```
```MPTS
obj.method(param1, param2)
```

You can use what method returned as parameter to other method, also method can return other method.
```MPTS
function1(function2(), function2().property)()
```