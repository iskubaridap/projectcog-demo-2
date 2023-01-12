function MagicScroll(options) {
    var self = this,
        defaults = {
            scrollRange: [0, 0],
            domain: [0, 0],
            loop: !0,
            smooth: !0,
            smoothFactor: .2,
            onStart: function() {},
            onUpdate: function() {},
            onComplete: function() {}
        };
    self.options = $.extend(defaults, !0, options), self.currentVal = 0, self.targetVal = 0, self.currentScroll = 0, self.targetScroll = 0, self.started = !1, self.completed = !1, self.handleScroll($(window).scrollTop()), $(window).on("scroll", function() {
        self.handleScroll($(window).scrollTop())
    })
}
MagicScroll.prototype.handleScroll = function(scrollTop) {
    var self = this;
    if (scrollTop >= self.options.scrollRange[0] && scrollTop <= self.options.scrollRange[1]) {
        self.started || (self.started = !0, self.options.onStart(), self.options.onUpdate(self.options.domain[0]));
        var progress = (scrollTop - self.options.scrollRange[0]) / (self.options.scrollRange[1] - self.options.scrollRange[0]),
            v = self.options.domain[0] + progress * (self.options.domain[1] - self.options.domain[0]);
        (!self.completed || self.options.loop) && (self.options.smooth ? (self.targetVal = v, self.interpolate(self.currentVal, self.targetVal, self.options.smoothFactor, function(v) {
            self.options.onUpdate(v)
        })) : self.options.onUpdate(v))
    }
    if (scrollTop < self.options.scrollRange[0]) {
        var progress = 0,
            v = self.options.domain[0] + progress * (self.options.domain[1] - self.options.domain[0]);
        (!self.completed || self.options.loop) && (self.options.smooth ? (self.targetVal = v, self.interpolate(self.currentVal, self.targetVal, self.options.smoothFactor, function(v) {
            self.options.onUpdate(v)
        })) : self.options.onUpdate(v))
    }
    if (scrollTop > self.options.scrollRange[1]) {
        self.started || (self.started = !0, self.options.onStart(), self.options.onUpdate(self.options.domain[0]));
        var progress = 1,
            v = self.options.domain[0] + progress * (self.options.domain[1] - self.options.domain[0]);
        self.options.smooth ? (self.targetVal = v, self.interpolate(self.currentVal, self.targetVal, self.options.smoothFactor, function(v) {
            self.options.onUpdate(v), v == self.options.domain[1] && (self.completed || (self.completed = !0, self.options.onComplete()))
        })) : (self.options.onUpdate(v), self.completed || (self.completed = !0, self.options.onComplete()))
    }
    self.options.debug && console.log("Scroll position: " + scrollTop)
}, MagicScroll.prototype.interpolate = function(start, target, speed, cb) {
    var self = this;
    setTimeout(function() {
        self.currentVal = (1 - speed) * start + speed * target, Math.abs(self.currentVal - self.targetVal) > Math.abs(self.options.domain[0] - self.options.domain[1]) / 100 ? (cb(self.currentVal), self.interpolate(self.currentVal, self.targetVal, speed, cb)) : (self.currentVal = self.targetVal, cb(self.targetVal))
    }, 16)
};