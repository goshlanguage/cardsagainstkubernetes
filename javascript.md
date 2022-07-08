# Javascript and you!

To start, you should navigate to your javascript console in your browser, where you can run this code. 

`Chrome` users can use their toolbar to navigate to `View` -> `Developer` -> `Developer Tools`, then click `Console` in the frame that appears, found in it's toolbar.

## Variables

In javascript, there is a `let` keyword that `let`s you assign value to a given name. For instance:

```javascript
let hello = "world";
```

In this example, `"world"` is a string, assigned to `hello`. Let's print it to the console:

```javascript
console.log("Hello " + hello);
```

If we were to open a browser, and enter our javascript console and run these two lines, we would get back:

```
"Hello world"
```

Try this now!

## Functions

It's fun to print things to console, but that's not going to do much for us. Let's create a function now, and call it!

To turn our previous example into its own function, we can enter:

```javascript
function HelloWorld() {
    let hello = "world";
    console.log("Hello " + hello);
}
```

This assigns a function to our variable, `HelloWorld`, and in that function, executes the code we've run in the `Variables` section. Let's call our function now:

```javascript
HelloWorld()
Hello world
```

What if we want to variably say hello to different people? Let's add a `parameter` to our function call:

```javascript
function Hello(name) {
    console.log("Hello " + name);
}
```

Call `Hello` given your name now, here's an example:

```javascript
Hello("Barnaby");
```
