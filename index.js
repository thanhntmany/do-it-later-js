class DoItLater {
    queue(fn, args, _this) { this.tail = (this.tail || this).next = { fn: fn, args: args, _this: _this } }
    flush() { var o = this; while (o = o.next) o.fn.apply(o._this, o.args); this.tail = this.next = undefined }
}

module.exports = exports = DoItLater