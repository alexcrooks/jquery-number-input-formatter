# jQuery Number Input Formatter

A jQuery library to dynamically display a numeric input's formatted value in a
label.

This library will take the value of an HTML input, format it, and place the
formatted representation into a label. The purpose is to give the end user an
opportunity to more easily identify their numeric inputs for large numbers.

For example, an input value of `12345.678` will be displayed on the page as
`12,345.678`.

A sample use case here is an application with a high number of numeric inputs,
or international applications where different styles of number formatting is
used (such as European numbers using the comma as a decimal separator). By
presenting a simple label below the textbox, we can make it painfully obvious
how the system is interpreting the inputted number. And by not directly
formatting the textbox or applying a mask we increase flexibility and reduce the
possibility of bugs.

## Usage

1. Include jQuery

```html
<script type="text/javascript" src="http://code.jquery.com/jquery.js"></script>
```

2. Include jQuery Number Input Formatter

```html
<script src="dist/jquery.environmentbar.min.js"></script>
```

3. Find an input that is expecting a numeric input

```html
<input class="number-input" value="12345.678">
```

4. Add a label to it

```html

<!-- this library will detect a span label by default using $.next -->
<input class="number-input" value="12345.678">
<span></span>

<!-- if you specify a selector in the options, any element may be used and found using $.next -->
<input class="number-input" value="12345.678">
<div class="custom-confirmation-text"></div>
```

5. Initialize the formatter
 
```html
<script>
// default when using a span as the label
$('.number-input').numberInputFormatter();

// if the label is something other than a span next
$('.number-input').numberInputFormatter({confirmationSelector: '.custom-confirmation-text'});
</script>
```

## Options

You may provide options into the library to alter its behaviour.

- `confirmationSelector` - a CSS selector to identify the label on the page on
which the formatted number should be set. Set to `span` by default.

- `errorSelector` - a CSS selector to identify a DOM element whose "text" value
will be set to an error if the input is invalid. This is `null` by default so
no error will be explicitly reported if not set.

- `errorMessage` - a custom string error 
