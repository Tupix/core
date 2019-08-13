The core of the ecosystem is his main part. All others features need the core to work.

It gets also many features that you can use in your project !

## Download it

### Last version

Youc can integrate it in your website with the cdn : 

`<script src="http://easylife.ovh/cdn/core.js"></script>`

Or the minified version : 

`<script src="http://easylife.ovh/cdn/core.min.js"></script>`

### A specific version

Vou can also choose your version like

`<script src="http://easylife.ovh/cdn/cor#1.0.0e.js"></script>`

`<script src="http://easylife.ovh/cdn/core#1.0.0.min.js"></script>`

But it you don't specify it, it will be the last version !

Version available : 
* 1.0.0

## Features

### Class **Emitter**

It is a simple emitter.
you can intanciate it with : 
`let emitter = new Emitter()`

After you can emit data on it with `emitter.emit('Your data here')`

You can listen data on it with 
`emitter.listen((data) => {console.log(data)})`
You can listen it as many times that you want.

Finally, you can pipe it with `emitter.pipe(yourfunction(data))`
And Your function **must** return the data because the value returned will became the new value of the data emitted.

To Recap : 

* emit (data)
* data = pipe1(data) -> data = pipe2(data) -> ...
* listen1(data) -> listen2(data) -> ...
 
