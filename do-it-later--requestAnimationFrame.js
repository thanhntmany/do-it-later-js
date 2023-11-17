class DoItLaterRAF {
    constructor() { this._flush = this.flush.bind(this); this.scheduler = this.queue.bind(this) }
    queue(fn, args, _this) { this.tail = (this.tail || this).next = { fn: fn, args: args, _this: _this }; if (!this.RAF_ID) this.RAF_ID = requestAnimationFrame(this._flush); }
    flush() { var o = this; while (o = o.next) o.fn.apply(o._this, o.args); this.tail = this.next = this.RAF_ID = undefined }
}
window.DIL = (new DoItLaterRAF()).scheduler
