class Emitter {

    constructor () {
        this.pipesList = [];
        this.listenList = [];
        return this;
    }

    emit (value) {
        this.pipesList.forEach(func => {
            value = func(value)
        });
        this.listenList.forEach(func => {
            func(value)
        });
        return this;
    }

    pipe (func) {
        this.pipesList.push(func);
        return this;
    }

    listen (func) {
        this.listenList.push(func);
        return this;
    }

}
