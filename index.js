class DoItLater {
    _setter(key, value) { this[key] = value }
    queue(_this, fn, ...args) { this.tail = (this.tail || this).next = typeof fn === 'function' ? { _this: _this, fn: fn, args: args } : { _this: _this, fn: this._setter, args: [fn, args[0]] } }
    flush() { var o = this; while (o = o.next) o.fn.apply(o._this, o.args); this.tail = this.next = undefined }
}

module.exports = exports = DoItLater