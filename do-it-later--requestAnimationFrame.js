class DoItLater {
    constructor() { this._flush = this.flush.bind(this); this.scheduler = this.queue.bind(this) }
    _setter(key, value) { this[key] = value }
    queue(_this, fn, ...args) { this.tail = (this.tail || this).next = typeof fn === 'function' ? { _this: _this, fn: fn, args: args } : { _this: _this, fn: this._setter, args: [fn, args[0]] }; if (!this.RAF_ID) this.RAF_ID = requestAnimationFrame(this._flush)}
    flush() { var o = this; while (o = o.next) o.fn.apply(o._this, o.args); this.tail = this.next = this.RAF_ID = undefined }
}
window.DIL = (new DoItLater()).scheduler
