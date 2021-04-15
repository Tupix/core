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
