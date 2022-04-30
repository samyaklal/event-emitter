class EventEmitter {
    handlers = {}

    on(event, handler) {
        if (this.handlers[event]) {
            this.handlers[event].push(handler);
        } else {
            this.handlers[event] = [handler];
        }
    }

    emit(event) {
        if (this.handlers[event]) {
            this.handlers[event].map(handler => handler());
        }
    }

    off(event, handler) {
        if (handler) {
            this.handlers[event] = this.handlers[event].filter(callback => callback !== handler);
        } else {
            this.handlers[event] = null;
        }
    };
}