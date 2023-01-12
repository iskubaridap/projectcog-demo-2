! function($, window, document, undefined) {
    function Plugin(element, options) {
        this.element = element, this.settings = $.extend(!0, {}, default_settings, options), this.root = $(element), this.wrap = undefined, this.shapeContainer = undefined, this.shapeSvgContainer = undefined, this.fullscreenTooltipsContainer = undefined, this.visibleTooltip = undefined, this.visibleTooltipIndex = undefined, this.highlightedShape = undefined, this.highlightedShapeIndex = undefined, this.clickedShape = undefined, this.clickedShapeIndex = undefined, this.initTimeout = undefined, this.touch = !1, this.fullscreenTooltipVisible = !1, this.init()
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    }

    function isPointInsideRect(x, y, rx, ry, rw, rh) {
        return x >= rx && rx + rw >= x && y >= ry && ry + rh >= y ? !0 : !1
    }

    function isPointInsidePolygon(x, y, vs) {
        for (var inside = !1, i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            var xi = vs[i][0],
                yi = vs[i][1],
                xj = vs[j][0],
                yj = vs[j][1],
                intersect = yi > y != yj > y && (xj - xi) * (y - yi) / (yj - yi) + xi > x;
            intersect && (inside = !inside)
        }
        return inside
    }

    function isPointInsideEllipse(x, y, ex, ey, rx, ry) {
        var a = (x - ex) * (x - ex),
            b = rx * rx,
            c = (y - ey) * (y - ey),
            d = ry * ry;
        return 1 >= a / b + c / d ? !0 : !1
    }

    function fitRectToScreen(x, y, w, h) {
        return 0 > x && (x = 0), 0 > y && (y = 0), x > $(document).width() - w && (x = $(document).width() - w), y > $(document).height() - h && (y = $(document).height() - h), {
            x: x,
            y: y
        }
    }

    function shuffle(array) {
        for (var temporaryValue, randomIndex, currentIndex = array.length; 0 !== currentIndex;) randomIndex = Math.floor(Math.random() * currentIndex), currentIndex -= 1, temporaryValue = array[currentIndex], array[currentIndex] = array[randomIndex], array[randomIndex] = temporaryValue;
        return array
    }

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? !0 : !1
    }
    $.imageMapProInitialized = function(imageMapName) {}, $.imageMapProEventHighlightedShape = function(imageMapName, shapeID) {}, $.imageMapProEventClickedShape = function(imageMapName, shapeID) {}, $.imageMapProEventOpenedTooltip = function(imageMapName, shapeID) {}, $.imageMapProHighlightShape = function(imageMapName, shapeID) {
        var i = $("#" + shapeID).data("index");
        instances[imageMapName].highlightedShapeIndex != i && (instances[imageMapName].highlightedShape && instances[imageMapName].unhighlightShape(), instances[imageMapName].manuallyHighlightedShape = !0, instances[imageMapName].highlightShape(i, !1))
    }, $.imageMapProUnhighlightShape = function(imageMapName) {
        instances[imageMapName].highlightedShape && instances[imageMapName].unhighlightShape()
    }, $.imageMapProOpenTooltip = function(imageMapName, shapeID) {
        var i = $("#" + shapeID).data("index");
        instances[imageMapName].manuallyShownTooltip = !0, instances[imageMapName].showTooltip(i), instances[imageMapName].updateTooltipPosition(i)
    }, $.imageMapProReInitMap = function(imageMapName) {
        instances[imageMapName].init()
    }, $.imageMapProIsMobile = function() {
        return isMobile()
    };
    var pluginName = "imageMapPro",
        default_settings = {
            id: Math.round(1e4 * Math.random()) + 1,
            editor: {
                previewMode: 0,
                selected_shape: -1,
                tool: "spot"
            },
            general: {
                name: "",
                shortcode: "",
                width: 1050,
                height: 700,
                responsive: 1,
                sticky_tooltips: 0,
                constrain_tooltips: 1,
                image_url: "https://webcraftplugins.com/uploads/image-map-pro/demo.jpg",
                tooltip_animation: "grow",
                pageload_animation: "none",
                fullscreen_tooltips: "none",
                late_initialization: 0
            },
            spots: []
        },
        default_spot_settings = {
            id: "spot-0",
            type: "spot",
            x: -1,
            y: -1,
            width: 44,
            height: 44,
            actions: {
                mouseover: "show-tooltip",
                click: "no-action",
                link: "#",
                open_link_in_new_window: 1
            },
            default_style: {
                opacity: 1,
                border_radius: 50,
                background_color: "#000000",
                background_opacity: .4,
                border_width: 0,
                border_style: "solid",
                border_color: "#ffffff",
                border_opacity: 1,
                fill: "#000000",
                fill_opacity: .4,
                stroke_color: "#ffffff",
                stroke_opacity: .75,
                stroke_width: 0,
                stroke_dasharray: "10 10",
                stroke_linecap: "round",
                use_icon: 0,
                icon_type: "library",
                icon_svg_path: "M409.81,160.113C409.79,71.684,338.136,0,249.725,0C161.276,0,89.583,71.684,89.583,160.113     c0,76.325,119.274,280.238,151.955,334.638c1.72,2.882,4.826,4.641,8.178,4.641c3.351,0,6.468-1.759,8.168-4.631     C290.545,440.361,409.81,236.438,409.81,160.113z M249.716,283.999c-68.303,0-123.915-55.573-123.915-123.895     c0-68.313,55.592-123.895,123.915-123.895s123.876,55.582,123.876,123.895S318.029,283.999,249.716,283.999z",
                icon_svg_viewbox: "0 0 499.392 499.392",
                icon_fill: "#000000",
                icon_url: "",
                icon_is_pin: 0,
                icon_shadow: 0
            },
            mouseover_style: {
                opacity: 1,
                border_radius: 50,
                background_color: "#ffffff",
                background_opacity: .4,
                border_width: 0,
                border_style: "solid",
                border_color: "#ffffff",
                border_opacity: 1,
                fill: "#ffffff",
                fill_opacity: .4,
                stroke_color: "#ffffff",
                stroke_opacity: .75,
                stroke_width: 0,
                stroke_dasharray: "10 10",
                stroke_linecap: "round",
                icon_fill: "#000000"
            },
            tooltip_style: {
                border_radius: 5,
                padding: 20,
                background_color: "#000000",
                background_opacity: .9,
                position: "top",
                width: 300,
                auto_width: 0
            },
            tooltip_content: {
                content_type: "plain-text",
                plain_text: "Lorem Ipsum",
                plain_text_color: "#ffffff",
                squares_json: '{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}',
                squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
            },
            points: [],
            vs: []
        },
        instances = new Array;
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var mutationObserver;
    $.extend(Plugin.prototype, {
        init: function() {
            var self = this;
            instances[this.settings.general.name] = this, this.id = 100 * Math.random();
            for (var i = 0; i < self.settings.spots.length; i++) {
                var s = self.settings.spots[i],
                    d = $.extend(!0, {}, default_spot_settings);
                s = $.extend(!0, d, s), self.settings.spots[i] = $.extend(!0, {}, s)
            }
            self.root.addClass("imp-initialized"), self.root.html('<div class="imp-wrap"></div>'), self.wrap = self.root.find(".imp-wrap");
            var img = new Image;
            img.src = self.settings.general.image_url, self.loadImage(img, function() {}, function() {
                var html = "";
                html += '<img src="' + self.settings.general.image_url + '">', self.wrap.html(html), self.adjustSize(), self.drawShapes(), self.addTooltips(), self.events(), self.animateShapesLoop(), $.imageMapProInitialized(self.settings.general.name)
            }), $(window).on("resize", function() {
                self.adjustSize()
            })
        },
        loadImage: function(image, cbLoading, cbComplete) {
            image.complete && image.naturalWidth !== undefined && image.naturalHeight !== undefined ? cbComplete() : (cbLoading(), $(image).on("load", function() {
                $(image).off("load"), cbComplete()
            }))
        },
        adjustSize: function() {
            var self = this;
            if (1 == parseInt(self.settings.general.responsive, 10)) {
                for (var containerWidth = self.root.width(), el = self.root; 0 == containerWidth && (el = el.parent(), containerWidth = el.width(), !el.is("body")););
                var ratio = self.settings.general.width / self.settings.general.height;
                self.wrap.css({
                    width: containerWidth,
                    height: containerWidth / ratio
                })
            } else self.wrap.css({
                width: self.settings.general.width,
                height: self.settings.general.height
            })
        },
        drawShapes: function() {
            for (var self = this, i = 0; i < self.settings.spots.length; i++) {
                var s = self.settings.spots[i];
                if (s.x = parseFloat(s.x), s.y = parseFloat(s.y), s.width = parseFloat(s.width), s.height = parseFloat(s.height), s.default_style.stroke_width = parseInt(s.default_style.stroke_width), s.mouseover_style.stroke_width = parseInt(s.mouseover_style.stroke_width), "poly" == s.type)
                    for (var j = 0; j < s.points.length; j++) s.points[j].x = parseFloat(s.points[j].x), s.points[j].y = parseFloat(s.points[j].y)
            }
            self.settings.general.width = parseInt(self.settings.general.width), self.settings.general.height = parseInt(self.settings.general.height), self.wrap.prepend('<div class="imp-shape-container"></div>'), self.shapeContainer = self.wrap.find(".imp-shape-container");
            for (var html = "", hasPolygons = !1, svgHtml = '<svg class="hs-poly-svg" viewBox="0 0 ' + self.settings.general.width + " " + self.settings.general.height + '" preserveAspectRatio="none">', i = 0; i < self.settings.spots.length; i++) {
                var s = self.settings.spots[i];
                if ("spot" == s.type)
                    if (1 == parseInt(s.default_style.use_icon, 10)) {
                        var style = "";
                        if (style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "px;", style += "height: " + s.height + "px;", style += "margin-left: -" + s.width / 2 + "px;", style += 1 == parseInt(s.default_style.icon_is_pin, 10) ? "margin-top: -" + s.height + "px;" : "margin-top: -" + s.height / 2 + "px;", style += "background-image: url(" + s.default_style.icon_url + ")", style += "background-position: center;", style += "background-repeat: no-repeat;", "fade" == self.settings.general.pageload_animation && (style += "opacity: 0;"), "grow" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";", style += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);", 1 == parseInt(s.default_style.icon_is_pin, 10) && (style += "transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;")), "none" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";"), html += '<div class="imp-shape imp-shape-spot" id="' + s.id + '" style="' + style + '" data-index=' + i + ">", "library" == s.default_style.icon_type ? (html += '   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="' + s.default_style.icon_svg_viewbox + '" xml:space="preserve" width="' + s.width + 'px" height="' + s.height + 'px">', html += '       <path style="fill:' + s.default_style.icon_fill + '" d="' + s.default_style.icon_svg_path + '"></path>', html += "   </svg>") : html += '<img src="' + s.default_style.icon_url + '">', 1 == parseInt(s.default_style.icon_shadow, 10)) {
                            var shadowStyle = "";
                            shadowStyle += "width: " + s.width + "px;", shadowStyle += "height: " + s.height + "px;", shadowStyle += "top: " + s.height / 2 + "px;", html += '<div style="' + shadowStyle + '" class="imp-shape-icon-shadow"></div>'
                        }
                        html += "</div>"
                    } else {
                        var style = "",
                            color_bg = hexToRgb(s.default_style.background_color),
                            color_border = hexToRgb(s.default_style.border_color);
                        style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "px;", style += "height: " + s.height + "px;", style += "margin-left: -" + s.width / 2 + "px;", style += "margin-top: -" + s.height / 2 + "px;", style += "border-radius: " + s.default_style.border_radius + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.default_style.background_opacity + ");", style += "border-width: " + s.default_style.border_width + "px;", style += "border-style: " + s.default_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.default_style.border_opacity + ");", "fade" == self.settings.general.pageload_animation && (style += "opacity: 0;"), "grow" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";", style += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);"), "none" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";"), html += '<div class="imp-shape imp-shape-spot" id="' + s.id + '" style="' + style + '" data-index=' + i + "></div>"
                    }
                if ("rect" == s.type) {
                    var style = "",
                        color_bg = hexToRgb(s.default_style.background_color),
                        color_border = hexToRgb(s.default_style.border_color);
                    style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "%;", style += "height: " + s.height + "%;", style += "border-radius: " + s.default_style.border_radius + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.default_style.background_opacity + ");", style += "border-width: " + s.default_style.border_width + "px;", style += "border-style: " + s.default_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.default_style.border_opacity + ");", "fade" == self.settings.general.pageload_animation && (style += "opacity: 0;"), "grow" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";", style += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);"), "none" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";"), html += '<div class="imp-shape imp-shape-rect" id="' + s.id + '" style="' + style + '" data-index=' + i + "></div>"
                }
                if ("oval" == s.type) {
                    var style = "",
                        color_bg = hexToRgb(s.default_style.background_color),
                        color_border = hexToRgb(s.default_style.border_color);
                    style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "%;", style += "height: " + s.height + "%;", style += "border-radius: 50% 50%;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.default_style.background_opacity + ");", style += "border-width: " + s.default_style.border_width + "px;", style += "border-style: " + s.default_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.default_style.border_opacity + ");", "fade" == self.settings.general.pageload_animation && (style += "opacity: 0;"), "grow" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";", style += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);"), "none" == self.settings.general.pageload_animation && (style += "opacity: " + s.default_style.opacity + ";"), html += '<div class="imp-shape imp-shape-oval" id="' + s.id + '" style="' + style + '" data-index=' + i + "></div>"
                }
                if ("poly" == s.type) {
                    hasPolygons = !0;
                    var c_fill = hexToRgb(s.default_style.fill),
                        c_stroke = hexToRgb(s.default_style.stroke_color),
                        svgStyle = "";
                    if (svgStyle += "width: 100%;", svgStyle += "height: 100%;", svgStyle += "fill: rgba(" + c_fill.r + ", " + c_fill.g + ", " + c_fill.b + ", " + s.default_style.fill_opacity + ");", svgStyle += "stroke: rgba(" + c_stroke.r + ", " + c_stroke.g + ", " + c_stroke.b + ", " + s.default_style.stroke_opacity + ");", svgStyle += "stroke-width: " + s.default_style.stroke_width + "px;", svgStyle += "stroke-dasharray: " + s.default_style.stroke_dasharray + ";", svgStyle += "stroke-linecap: " + s.default_style.stroke_linecap + ";", "fade" == self.settings.general.pageload_animation && (svgStyle += "opacity: 0;"), "grow" == self.settings.general.pageload_animation) {
                        svgStyle += "opacity: " + s.default_style.opacity + ";", svgStyle += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);";
                        var originX = s.x + s.width / 2,
                            originY = s.y + s.height / 2;
                        svgStyle += "transform-origin: " + originX + "% " + originY + "%;-moz-transform-origin: " + originX + "% " + originY + "%;-webkit-transform-origin: " + originX + "% " + originY + "%;"
                    }
                    "none" == self.settings.general.pageload_animation && (svgStyle += "opacity: " + s.default_style.opacity + ";");
                    var shapeWidthPx = self.settings.general.width * (s.width / 100),
                        shapeHeightPx = self.settings.general.height * (s.height / 100);
                    svgHtml += '           <polygon class="imp-shape imp-shape-poly" style="' + svgStyle + '" data-index=' + i + ' id="' + s.id + '" points="', s.vs = new Array;
                    for (var j = 0; j < s.points.length; j++) {
                        var x = self.settings.general.width * (s.x / 100) + s.points[j].x / 100 * shapeWidthPx,
                            y = self.settings.general.height * (s.y / 100) + s.points[j].y / 100 * shapeHeightPx;
                        svgHtml += x + "," + y + " ", s.vs.push([x, y])
                    }
                    svgHtml += '           "></polygon>'
                }
            }
            svgHtml += "</svg>", hasPolygons ? self.shapeContainer.html(html + svgHtml) : self.shapeContainer.html(html)
        },
        addTooltips: function() {
            var self = this;
            if ("always" == self.settings.general.fullscreen_tooltips || "mobile-only" == self.settings.general.fullscreen_tooltips && isMobile()) {
                self.fullscreenTooltipsContainer || ($('.imp-fullscreen-tooltips-container[data-image-map-id="' + self.settings.id + '"]').remove(), $("body").prepend('<div class="imp-fullscreen-tooltips-container" data-image-map-id="' + self.settings.id + '"></div>'), self.fullscreenTooltipsContainer = $('.imp-fullscreen-tooltips-container[data-image-map-id="' + self.settings.id + '"]'));
                for (var html = "", i = 0; i < self.settings.spots.length; i++) {
                    var s = self.settings.spots[i];
                    s.tooltip_content.plain_text = s.tooltip_content.plain_text.replace(/\n/g, "<br>");
                    var style = "",
                        color_bg = hexToRgb(s.tooltip_style.background_color);
                    if (style += "padding: " + s.tooltip_style.padding + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.tooltip_style.background_opacity + ");", "none" == self.settings.general.tooltip_animation && (style += "opacity: 0;"), "fade" == self.settings.general.tooltip_animation && (style += "opacity: 0;", style += "transition-property: opacity;-moz-transition-property: opacity;-webkit-transition-property: opacity;"), "grow" == self.settings.general.tooltip_animation && (style += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);", style += "transition-property: transform;-moz-transition-property: -moz-transform;-webkit-transition-property: -webkit-transform;", style += "transform-origin: 50% 50%;-moz-transform-origin: 50% 50%;-webkit-transform-origin: 50% 50%;"), html += '<div class="imp-fullscreen-tooltip" style="' + style + '" data-index="' + i + '">', html += '   <div class="imp-tooltip-close-button" data-index="' + i + '"><i class="fa fa-times" aria-hidden="true"></i></div>', "plain-text" == s.tooltip_content.content_type) {
                        var style = "";
                        style += "color: " + s.tooltip_content.plain_text_color + ";", html += '<div class="imp-tooltip-plain-text" style="' + style + '">' + s.tooltip_content.plain_text + "</div>"
                    } else html += s.tooltip_content.squares_content;
                    html += "</div>"
                }
                self.fullscreenTooltipsContainer.html(html)
            } else {
                for (var html = "", i = 0; i < self.settings.spots.length; i++) {
                    var s = self.settings.spots[i];
                    s.tooltip_content.plain_text = s.tooltip_content.plain_text.replace(/\n/g, "<br>");
                    var style = "",
                        color_bg = hexToRgb(s.tooltip_style.background_color),
                        tooltipBufferPolyClass = "poly" == s.type ? "imp-tooltip-buffer-large" : "";
                    if (style += "border-radius: " + s.tooltip_style.border_radius + "px;", style += "padding: " + s.tooltip_style.padding + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.tooltip_style.background_opacity + ");", "none" == self.settings.general.tooltip_animation && (style += "opacity: 0;"), "fade" == self.settings.general.tooltip_animation && (style += "opacity: 0;", style += "transition-property: opacity;-moz-transition-property: opacity;-webkit-transition-property: opacity;"), "grow" == self.settings.general.tooltip_animation && (style += "transform: scale(0, 0);-moz-transform: scale(0, 0);-webkit-transform: scale(0, 0);", style += "transition-property: transform;-moz-transition-property: -moz-transform;-webkit-transition-property: -webkit-transform;", "top" == s.tooltip_style.position && (style += "transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;"), "bottom" == s.tooltip_style.position && (style += "transform-origin: 50% 0%;-moz-transform-origin: 50% 0%;-webkit-transform-origin: 50% 0%;"), "left" == s.tooltip_style.position && (style += "transform-origin: 100% 50%;-moz-transform-origin: 100% 50%;-webkit-transform-origin: 100% 50%;"), "right" == s.tooltip_style.position && (style += "transform-origin: 0% 50%;-moz-transform-origin: 0% 50%;-webkit-transform-origin: 0% 50%;")), html += '<div class="imp-tooltip" style="' + style + '" data-index="' + i + '">', "top" == s.tooltip_style.position && (html += '   <div class="hs-arrow hs-arrow-bottom" style="border-top-color: rgba(' + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.tooltip_style.background_opacity + ');"></div>', 0 == parseInt(self.settings.general.sticky_tooltips, 10) && (html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-bottom ' + tooltipBufferPolyClass + '"></div>')), "bottom" == s.tooltip_style.position && (html += '   <div class="hs-arrow hs-arrow-top" style="border-bottom-color: rgba(' + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.tooltip_style.background_opacity + ');"></div>', 0 == parseInt(self.settings.general.sticky_tooltips, 10) && (html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-top ' + tooltipBufferPolyClass + '"></div>')), "left" == s.tooltip_style.position && (html += '   <div class="hs-arrow hs-arrow-right" style="border-left-color: rgba(' + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.tooltip_style.background_opacity + ');"></div>', 0 == parseInt(self.settings.general.sticky_tooltips, 10) && (html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-right ' + tooltipBufferPolyClass + '"></div>')), "right" == s.tooltip_style.position && (html += '   <div class="hs-arrow hs-arrow-left" style="border-right-color: rgba(' + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.tooltip_style.background_opacity + ');"></div>', 0 == parseInt(self.settings.general.sticky_tooltips, 10) && (html += '   <div class="imp-tooltip-buffer imp-tooltip-buffer-left ' + tooltipBufferPolyClass + '"></div>')), "plain-text" == s.tooltip_content.content_type) {
                        var style = "";
                        style += "color: " + s.tooltip_content.plain_text_color + ";", html += '<div class="imp-tooltip-plain-text" style="' + style + '">' + s.tooltip_content.plain_text + "</div>"
                    } else html += s.tooltip_content.squares_content;
                    html += "</div>"
                }
                self.wrap.prepend(html)
            }
        },
        measureTooltipSize: function(i) {
            if (!("always" == this.settings.general.fullscreen_tooltips || "mobile" == this.settings.general.fullscreen_tooltips && isMobile())) {
                var s = this.settings.spots[i],
                    t = this.wrap.find('.imp-tooltip[data-index="' + i + '"]');
                0 == parseInt(s.tooltip_style.auto_width, 10) && t.css({
                    width: s.tooltip_style.width
                }), t.data("imp-measured-width", t.outerWidth()), t.data("imp-measured-height", t.outerHeight())
            }
        },
        animateShapesLoop: function() {
            if ("none" != this.settings.general.pageload_animation)
                for (var interval = 750 / this.settings.spots.length, shapesRandomOrderArray = shuffle(this.settings.spots.slice()), i = 0; i < shapesRandomOrderArray.length; i++) this.animateShape(shapesRandomOrderArray[i], interval * i)
        },
        animateShape: function(shape, delay) {
            var self = this,
                spotEl = $("#" + shape.id);
            setTimeout(function() {
                "fade" == self.settings.general.pageload_animation && spotEl.css({
                    opacity: shape.default_style.opacity
                }), "grow" == self.settings.general.pageload_animation && spotEl.css({
                    transform: "scale(1, 1)",
                    "-moz-transform": "scale(1, 1)",
                    "-webkit-transform": "scale(1, 1)"
                })
            }, delay)
        },
        events: function() {
            var self = this;
            this.wrap.off("mousemove"), this.wrap.on("mousemove", function(e) {
                self.touch || self.handleEventMove(e)
            }), this.wrap.off("mouseup"), this.wrap.on("mouseup", function(e) {
                self.touch || self.handleEventEnd(e)
            }), this.wrap.off("touchstart"), this.wrap.on("touchstart", function(e) {
                self.touch = !0, self.handleEventMove(e)
            }), this.wrap.off("touchmove"), this.wrap.on("touchmove", function(e) {
                self.handleEventMove(e)
            }), this.wrap.off("touchend"), this.wrap.on("touchend", function(e) {
                self.handleEventEnd(e)
            }), $(document).off("mousemove." + this.settings.id), $(document).on("mousemove." + this.settings.id, function(e) {
                self.touch || self.manuallyHighlightedShape || self.manuallyShownTooltip || 0 == $(e.target).closest(".imp-wrap").length && 0 == $(e.target).closest(".imp-fullscreen-tooltips-container").length && (self.visibleTooltip && self.hideTooltip(), self.clickedShape && self.unclickShape(), self.highlightedShape && self.unhighlightShape())
            }), $(document).off("touchstart." + this.settings.id), $(document).on("touchstart." + this.settings.id, function(e) {
                self.manuallyHighlightedShape || self.manuallyShownTooltip || 0 == $(e.target).closest(".imp-wrap").length && 0 == $(e.target).closest(".imp-fullscreen-tooltips-container").length && (self.visibleTooltip && self.hideTooltip(), self.clickedShape && self.unclickShape(), self.highlightedShape && self.unhighlightShape())
            }), $(document).off("click." + this.settings.id, ".imp-tooltip-close-button"), $(document).on("click." + this.settings.id, ".imp-tooltip-close-button", function() {
                self.hideTooltip(), self.clickedShape && self.unclickShape(), self.highlightedShape && self.unhighlightShape()
            }), 1 == parseInt(this.settings.general.late_initialization, 10) ? mutationObserver || (mutationObserver = new MutationObserver(function(mutations, observer) {
                clearTimeout(self.initTimeout), self.initTimeout = setTimeout(function() {
                    for (var i = 0; i < mutations.length; i++)
                        if (0 == $(mutations[i].target).closest(".imp-initialized").length && !$(mutations[i].target).hasClass("imp-initialized")) {
                            self.init();
                            break
                        }
                }, 50)
            }), mutationObserver.observe(document, {
                subtree: !0,
                attributes: !0
            })) : mutationObserver && (mutationObserver.disconnect(), mutationObserver = undefined)
        },
        handleEventMove: function(e) {
            if (!this.fullscreenTooltipVisible && (0 == $(e.target).closest(".imp-tooltip").length && !$(e.target).hasClass("imp-tooltip") || 0 != parseInt(this.settings.general.sticky_tooltips, 10))) {
                (this.manuallyHighlightedShape || this.manuallyShownTooltip) && (this.manuallyHighlightedShape = !1, this.manuallyShownTooltip = !1);
                var c = this.getEventRelativeCoordinates(e),
                    i = this.matchShapeToCoords(c); - 1 != i && i != this.highlightedShapeIndex ? (this.highlightedShape && this.highlightedShapeIndex != this.clickedShapeIndex && this.unhighlightShape(), this.highlightShape(i, !0)) : -1 == i && this.highlightedShape && this.highlightedShapeIndex != this.clickedShapeIndex && this.unhighlightShape(), this.highlightedShape && this.visibleTooltipIndex != this.highlightedShapeIndex ? (this.clickedShape && this.unclickShape(), this.visibleTooltip && this.hideTooltip(), "show-tooltip" == this.highlightedShape.actions.mouseover && (this.showTooltip(this.highlightedShapeIndex), this.updateTooltipPosition(i, e))) : !this.visibleTooltip || this.highlightedShape || this.clickedShape || this.visibleTooltip && this.hideTooltip(), this.visibleTooltip && this.highlightedShape && 1 == parseInt(this.settings.general.sticky_tooltips, 10) && "show-tooltip" == this.highlightedShape.actions.mouseover && this.updateTooltipPosition(this.highlightedShapeIndex, e)
            }
        },
        handleEventEnd: function(e) {
            if (!this.fullscreenTooltipVisible) {
                (this.manuallyHighlightedShape || this.manuallyShownTooltip) && (this.manuallyHighlightedShape = !1, this.manuallyShownTooltip = !1);
                var c = this.getEventRelativeCoordinates(e),
                    i = this.matchShapeToCoords(c); - 1 != i && i != this.clickedShapeIndex ? (this.clickedShape && this.unclickShape(), this.clickShape(i, e)) : -1 == i && this.clickedShape && this.unclickShape()
            }
        },
        getEventRelativeCoordinates: function(e) {
            var x, y;
            if ("touchstart" == e.type || "touchmove" == e.type || "touchend" == e.type || "touchcancel" == e.type) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                x = touch.pageX, y = touch.pageY
            } else("mousedown" == e.type || "mouseup" == e.type || "mousemove" == e.type || "mouseover" == e.type || "mouseout" == e.type || "mouseenter" == e.type || "mouseleave" == e.type) && (x = e.pageX, y = e.pageY);
            return x -= this.wrap.offset().left, y -= this.wrap.offset().top, x = x / this.wrap.width() * 100, y = y / this.wrap.height() * 100, {
                x: x,
                y: y
            }
        },
        getEventCoordinates: function(e) {
            var x, y;
            if ("touchstart" == e.type || "touchmove" == e.type || "touchend" == e.type || "touchcancel" == e.type) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                x = touch.pageX, y = touch.pageY
            } else("mousedown" == e.type || "mouseup" == e.type || "mousemove" == e.type || "mouseover" == e.type || "mouseout" == e.type || "mouseenter" == e.type || "mouseleave" == e.type) && (x = e.pageX, y = e.pageY);
            return {
                x: x,
                y: y
            }
        },
        matchShapeToCoords: function(c) {
            for (var i = 0; i < this.settings.spots.length; i++) {
                var s = this.settings.spots[i];
                if ("poly" == s.type) {
                    var x = c.x / 100 * this.wrap.width(),
                        y = c.y / 100 * this.wrap.height();
                    if (x = x * this.settings.general.width / this.wrap.width(), y = y * this.settings.general.height / this.wrap.height(), isPointInsidePolygon(x, y, s.vs)) return i
                }
                if ("spot" == s.type) {
                    var x = c.x / 100 * this.wrap.width(),
                        y = c.y / 100 * this.wrap.height(),
                        rx = s.x / 100 * this.wrap.width() - s.width / 2,
                        ry = s.y / 100 * this.wrap.height() - s.height / 2,
                        rw = s.width,
                        rh = s.height;
                    if (1 == parseInt(s.default_style.icon_is_pin, 10) && (ry -= s.height / 2), isPointInsideRect(x, y, rx, ry, rw, rh)) return i
                }
                if ("rect" == s.type && isPointInsideRect(c.x, c.y, s.x, s.y, s.width, s.height)) return i;
                if ("oval" == s.type) {
                    var x = c.x,
                        y = c.y,
                        ex = s.x + s.width / 2,
                        ey = s.y + s.height / 2,
                        rx = s.width / 2,
                        ry = s.height / 2;
                    if (isPointInsideEllipse(x, y, ex, ey, rx, ry)) return i
                }
            }
            return -1
        },
        applyMouseoverStyles: function(i) {
            var self = this,
                s = self.settings.spots[i],
                el = this.wrap.find("#" + s.id),
                style = "";
            if ("spot" == s.type && 0 == parseInt(s.default_style.use_icon, 10)) {
                var color_bg = hexToRgb(s.mouseover_style.background_color),
                    color_border = hexToRgb(s.mouseover_style.border_color);
                style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "px;", style += "height: " + s.height + "px;", style += "margin-left: -" + s.width / 2 + "px;", style += "margin-top: -" + s.height / 2 + "px;", style += "opacity: " + s.mouseover_style.opacity + ";", style += "border-radius: " + s.mouseover_style.border_radius + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.mouseover_style.background_opacity + ");", style += "border-width: " + s.mouseover_style.border_width + "px;", style += "border-style: " + s.mouseover_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.mouseover_style.border_opacity + ");"
            }
            if ("spot" == s.type && 1 == parseInt(s.default_style.use_icon, 10) && (style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "px;", style += "height: " + s.height + "px;", style += "margin-left: -" + s.width / 2 + "px;", style += 1 == parseInt(s.default_style.icon_is_pin, 10) ? "margin-top: -" + s.height + "px;" : "margin-top: -" + s.height / 2 + "px;", style += "opacity: " + s.mouseover_style.opacity + ";"), "spot" == s.type && 1 == parseInt(s.default_style.use_icon, 10) && "library" == s.default_style.icon_type && el.find("path").attr("style", "fill:" + s.mouseover_style.icon_fill), "rect" == s.type) {
                var color_bg = hexToRgb(s.mouseover_style.background_color),
                    color_border = hexToRgb(s.mouseover_style.border_color);
                style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "%;", style += "height: " + s.height + "%;", style += "opacity: " + s.mouseover_style.opacity + ";", style += "border-radius: " + s.mouseover_style.border_radius + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.mouseover_style.background_opacity + ");", style += "border-width: " + s.mouseover_style.border_width + "px;", style += "border-style: " + s.mouseover_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.mouseover_style.border_opacity + ");"
            }
            if ("oval" == s.type) {
                var color_bg = hexToRgb(s.mouseover_style.background_color),
                    color_border = hexToRgb(s.mouseover_style.border_color);
                style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "%;", style += "height: " + s.height + "%;", style += "opacity: " + s.mouseover_style.opacity + ";", style += "border-radius: 50% 50%;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.mouseover_style.background_opacity + ");", style += "border-width: " + s.mouseover_style.border_width + "px;", style += "border-style: " + s.mouseover_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.mouseover_style.border_opacity + ");"
            }
            if ("poly" == s.type) {
                var c_fill = hexToRgb(s.mouseover_style.fill),
                    c_stroke = hexToRgb(s.mouseover_style.stroke_color);
                style += "opacity: " + s.mouseover_style.opacity + ";", style += "fill: rgba(" + c_fill.r + ", " + c_fill.g + ", " + c_fill.b + ", " + s.mouseover_style.fill_opacity + ");", style += "stroke: rgba(" + c_stroke.r + ", " + c_stroke.g + ", " + c_stroke.b + ", " + s.mouseover_style.stroke_opacity + ");", style += "stroke-width: " + s.mouseover_style.stroke_width + "px;", style += "stroke-dasharray: " + s.mouseover_style.stroke_dasharray + ";", style += "stroke-linecap: " + s.mouseover_style.stroke_linecap + ";"
            }
            el.attr("style", style)
        },
        applyDefaultStyles: function(i) {
            var self = this,
                s = self.settings.spots[i],
                el = this.wrap.find("#" + s.id),
                style = "";
            if ("spot" == s.type && 0 == parseInt(s.default_style.use_icon, 10)) {
                var color_bg = hexToRgb(s.default_style.background_color),
                    color_border = hexToRgb(s.default_style.border_color);
                style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "px;", style += "height: " + s.height + "px;", style += "margin-left: -" + s.width / 2 + "px;", style += "margin-top: -" + s.height / 2 + "px;", style += "opacity: " + s.default_style.opacity + ";", style += "border-radius: " + s.default_style.border_radius + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.default_style.background_opacity + ");", style += "border-width: " + s.default_style.border_width + "px;", style += "border-style: " + s.default_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.default_style.border_opacity + ");";
            }
            if ("spot" == s.type && 1 == parseInt(s.default_style.use_icon, 10) && (style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "px;", style += "height: " + s.height + "px;", style += "margin-left: -" + s.width / 2 + "px;", style += 1 == parseInt(s.default_style.icon_is_pin, 10) ? "margin-top: -" + s.height + "px;" : "margin-top: -" + s.height / 2 + "px;", style += "opacity: " + s.default_style.opacity + ";"), "spot" == s.type && 1 == parseInt(s.default_style.use_icon, 10) && "library" == s.default_style.icon_type && el.find("path").attr("style", "fill:" + s.default_style.icon_fill), "rect" == s.type) {
                var color_bg = hexToRgb(s.default_style.background_color),
                    color_border = hexToRgb(s.default_style.border_color);
                style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "%;", style += "height: " + s.height + "%;", style += "opacity: " + s.default_style.opacity + ";", style += "border-radius: " + s.default_style.border_radius + "px;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.default_style.background_opacity + ");", style += "border-width: " + s.default_style.border_width + "px;", style += "border-style: " + s.default_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.default_style.border_opacity + ");"
            }
            if ("oval" == s.type) {
                var color_bg = hexToRgb(s.default_style.background_color),
                    color_border = hexToRgb(s.default_style.border_color);
                style += "left: " + s.x + "%;", style += "top: " + s.y + "%;", style += "width: " + s.width + "%;", style += "height: " + s.height + "%;", style += "opacity: " + s.default_style.opacity + ";", style += "border-radius: 50% 50%;", style += "background: rgba(" + color_bg.r + ", " + color_bg.g + ", " + color_bg.b + ", " + s.default_style.background_opacity + ");", style += "border-width: " + s.default_style.border_width + "px;", style += "border-style: " + s.default_style.border_style + ";", style += "border-color: rgba(" + color_border.r + ", " + color_border.g + ", " + color_border.b + ", " + s.default_style.border_opacity + ");"
            }
            if ("poly" == s.type) {
                var c_fill = hexToRgb(s.default_style.fill),
                    c_stroke = hexToRgb(s.default_style.stroke_color);
                style += "opacity: " + s.default_style.opacity + ";", style += "fill: rgba(" + c_fill.r + ", " + c_fill.g + ", " + c_fill.b + ", " + s.default_style.fill_opacity + ");", style += "stroke: rgba(" + c_stroke.r + ", " + c_stroke.g + ", " + c_stroke.b + ", " + s.default_style.stroke_opacity + ");", style += "stroke-width: " + s.default_style.stroke_width + "px;", style += "stroke-dasharray: " + s.default_style.stroke_dasharray + ";", style += "stroke-linecap: " + s.default_style.stroke_linecap + ";"
            }
            el.attr("style", style)
        },
        highlightShape: function(i, sendEvent) {
            this.applyMouseoverStyles(i), this.highlightedShapeIndex = i, this.highlightedShape = this.settings.spots[i], sendEvent && $.imageMapProEventHighlightedShape(this.settings.general.name, this.highlightedShape.id)
        },
        unhighlightShape: function() {
            this.applyDefaultStyles(this.highlightedShapeIndex), this.highlightedShapeIndex = undefined, this.highlightedShape = undefined
        },
        clickShape: function(i, e) {
            "show-tooltip" == this.settings.spots[i].actions.click && (this.applyMouseoverStyles(i), this.showTooltip(i), this.updateTooltipPosition(i, e), this.clickedShapeIndex = i, this.clickedShape = this.settings.spots[i]), "follow-link" == this.settings.spots[i].actions.click && (0 == $("#imp-temp-link").length && $("body").append('<a href="" id="imp-temp-link" target="_blank"></a>'), $("#imp-temp-link").attr("href", this.settings.spots[i].actions.link), 1 == parseInt(this.settings.spots[i].actions.open_link_in_new_window, 10) ? $("#imp-temp-link").attr("target", "_blank") : $("#imp-temp-link").removeAttr("target"), $("#imp-temp-link")[0].click()), $.imageMapProEventClickedShape(this.settings.spots[i].id)
        },
        unclickShape: function() {
            this.applyDefaultStyles(this.clickedShapeIndex), "show-tooltip" == this.clickedShape.actions.click && this.hideTooltip(), this.clickedShapeIndex = undefined, this.clickedShape = undefined
        },
        showTooltip: function(i) {
            if ("mobile-only" == this.settings.general.fullscreen_tooltips && isMobile() || "always" == this.settings.general.fullscreen_tooltips) {
                this.visibleTooltip = $('.imp-fullscreen-tooltip[data-index="' + i + '"]'), this.visibleTooltipIndex = i, this.fullscreenTooltipsContainer.show();
                var self = this;
                setTimeout(function() {
                    self.visibleTooltip.addClass("imp-tooltip-visible")
                }, 20), this.fullscreenTooltipVisible = !0
            } else $(".imp-tooltip-visible").removeClass("imp-tooltip-visible"), this.visibleTooltip = this.wrap.find('.imp-tooltip[data-index="' + i + '"]'), this.visibleTooltipIndex = i, this.visibleTooltip.addClass("imp-tooltip-visible"), this.measureTooltipSize(i);
            $.imageMapProEventOpenedTooltip(this.settings.general.name, this.settings.spots[i].id)
        },
        hideTooltip: function() {
            if ($(".imp-tooltip-visible").removeClass("imp-tooltip-visible"), this.visibleTooltip = undefined, this.visibleTooltipIndex = undefined, "mobile-only" == this.settings.general.fullscreen_tooltips && isMobile() || "always" == this.settings.general.fullscreen_tooltips) {
                var self = this;
                setTimeout(function() {
                    self.fullscreenTooltipsContainer.hide()
                }, 200), this.fullscreenTooltipVisible = !1
            }
        },
        updateTooltipPosition: function(i, e) {
            if (!this.fullscreenTooltipVisible) {
                var t, tw, th, sx, sy, sw, sh, ex, ey, s, p = 20;
                if (t = this.visibleTooltip, tw = this.visibleTooltip.data("imp-measured-width"), th = this.visibleTooltip.data("imp-measured-height"), s = this.settings.spots[i], 1 == parseInt(this.settings.general.sticky_tooltips, 10) && "show-tooltip" == s.actions.mouseover && e) {
                    var c = this.getEventCoordinates(e);
                    ex = c.x, ey = c.y, sx = ex - this.wrap.offset().left, sy = ey - this.wrap.offset().top, sw = 0, sh = 0
                } else "spot" == s.type ? (sw = s.width, sh = s.height, sx = Math.round(10 * s.x) / 10 / 100 * this.wrap.width() - sw / 2, sy = Math.round(10 * s.y) / 10 / 100 * this.wrap.height() - sh / 2) : (sw = s.width / 100 * this.wrap.width(), sh = s.height / 100 * this.wrap.height(), sx = Math.round(10 * s.x) / 10 / 100 * this.wrap.width(), sy = Math.round(10 * s.y) / 10 / 100 * this.wrap.height());
                var x, y;
                "left" == s.tooltip_style.position && (x = sx - tw - p, y = sy + sh / 2 - th / 2), "right" == s.tooltip_style.position && (x = sx + sw + p, y = sy + sh / 2 - th / 2), "top" == s.tooltip_style.position && (x = sx + sw / 2 - tw / 2, y = sy - th - p), "bottom" == s.tooltip_style.position && (x = sx + sw / 2 - tw / 2, y = sy + sh + p), "spot" == s.type && 1 == parseInt(s.default_style.icon_is_pin, 10) && (y -= sh / 2);
                var pos = {
                    x: x,
                    y: y
                };
                1 == parseInt(this.settings.general.constrain_tooltips, 10) && (pos = fitRectToScreen(x + this.wrap.offset().left, y + this.wrap.offset().top, tw, th), pos.x -= this.wrap.offset().left, pos.y -= this.wrap.offset().top), t.css({
                    left: pos.x,
                    top: pos.y
                })
            }
        }
    }), $.fn[pluginName] = function(options) {
        return this.each(function() {
            $.data(this, "plugin_" + pluginName, new Plugin(this, options))
        })
    }
}(jQuery, window, document);