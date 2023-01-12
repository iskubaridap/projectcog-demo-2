function GA_Get_Cookie(e) {
    var t = document.cookie.split(";"),
        n = "",
        r = "",
        i = "",
        s = !1,
        o = "";
    for (o = 0; o < t.length; o++) {
        if (n = t[o].split("="), r = n[0].replace(/^\s+|\s+$/g, ""), r == e) return s = !0, n.length > 1 && (i = unescape(n[1].replace(/^\s+|\s+$/g, ""))), i;
        n = null, r = ""
    }
    return s ? void 0 : null
}

function GA_Set_Cookie(e, t, n, r, i, s) {
    var o = new Date;
    o.setTime(o.getTime()), n && (n = 1e3 * n * 60 * 60 * 24);
    var u = new Date(o.getTime() + n);
    document.cookie = e + "=" + escape(t) + (n ? ";expires=" + u.toGMTString() : "") + (r ? ";path=" + r : "") + (i ? ";domain=" + i : "") + (s ? ";secure" : "")
}! function($, window, document, undefined) {
    function setupZoomableImages() {
        $(".zoomable-image").each(function() {
            if (IsImageOk(this)) {
                $(this).wrap('<div class="zoomable-image-wrap"></div>');
                var wrap = $(this).parent();
                wrap.css({
                    width: $(this).width(),
                    height: $(this).height()
                }), wrap.data("width", wrap.width()), wrap.data("height", wrap.height()), wrap.data("image", $(this)), $(this).addClass("zoomable-loaded")
            } else {
                var img = new Image,
                    self = this;
                img.onload = function() {
                    $(self).wrap('<div class="zoomable-image-wrap"></div>');
                    var wrap = $(self).parent();
                    wrap.css({
                        width: $(self).width(),
                        height: $(self).height()
                    }), wrap.data("width", wrap.width()), wrap.data("height", wrap.height()), wrap.data("image", $(self)), $(self).addClass("zoomable-loaded")
                }, img.src = $(this).attr("src")
            }
        }), $(document).on("mouseover", ".zoomable-image-wrap", function(e) {
            $(this).data("image").addClass("zoomed"), $(this).data("image-width") || $(this).data("image-width", $(this).data("image").width()), $(this).data("image-height") || $(this).data("image-height", $(this).data("image").height())
        }), $(document).on("mousemove", ".zoomable-image-wrap", function(e) {
            var x = (e.pageX - $(this).offset().left) / $(this).data("width"),
                y = (e.pageY - $(this).offset().top) / $(this).data("height");
            x = 2 * x - .5, y = 2 * y - .5, x = 0 > x ? 0 : x, y = 0 > y ? 0 : y, x = x > 1 ? 1 : x, y = y > 1 ? 1 : y;
            var left = x * ($(this).data("image-width") - $(this).data("width")),
                top = y * ($(this).data("image-height") - $(this).data("height"));
            $(this).data("image").css({
                left: -left,
                top: -top
            })
        }), $(document).on("mouseout", ".zoomable-image-wrap", function(e) {
            $(this).data("image").removeClass("zoomed"), $(this).data("image").css({
                left: 0,
                top: 0
            })
        })
    }

    function smoothScroll(destination, start, firstFrameTime) {
        start || (start = $(window).scrollTop()), firstFrameTime || (firstFrameTime = (new Date).getTime());
        var firstFrameTime = firstFrameTime,
            start = start;
        window.requestAnimationFrame(function() {
            var currentTime = (new Date).getTime(),
                interpolated = easeInOutQuad(currentTime - firstFrameTime, start, destination - start, 400);
            Math.abs(interpolated - destination) > 1 && 400 > currentTime - firstFrameTime ? smoothScroll(destination, start, firstFrameTime) : interpolated = destination, $(window).scrollTop(interpolated)
        })
    }

    function easeInOutQuad(t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b
    }

    function validate_email(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    }

    function IsImageOk(img) {
        return img.complete ? "undefined" != typeof img.naturalWidth && 0 === img.naturalWidth ? !1 : !0 : !1
    }

    function updateURLs() {
        var marketplace = "codecanyon",
            username = "nickys",
            cookieName = "webcraft_adwords",
            urlAttachment = "?ref=" + username;
        if (QueryString.gclid) {
            var today = new Date,
                expires = new Date(today.getTime() + 2592e6);
            document.cookie = cookieName + "=" + QueryString.gclid + "; expires=" + expires
        }
        var c = getCookie(cookieName);
        c && (urlAttachment += "&gclid=" + c), $("a").each(function() {
            $(this).attr("href") && -1 != $(this).attr("href").search(marketplace) && $(this).attr("href", $(this).attr("href") + urlAttachment)
        })
    }

    function getCookie(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++)
            if (x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("=")), y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1), x = x.replace(/^\s+|\s+$/g, ""), x == c_name) return unescape(y)
    }
    $(document).ready(function() {
        $("#header-fixed-mobile-button").on("touchend, click", function() {
            $("#header-fixed-centered").addClass("active")
        }), $("#header-fixed-centered a").on("touchend, click", function() {
            $("#header-fixed-centered").removeClass("active")
        }), $(document).on("touchend.nav, click.nav", function(e) {
            0 == $(e.target).closest("#header-fixed-centered").length && $("#header-fixed-centered").removeClass("active")
        }), $("[data-inner-link-target]").on("click", function() {
            var target = $(this).data("inner-link-target"),
                scroll = $('[data-inner-link="' + target + '"]').offset().top - 150;
            smoothScroll(scroll)
        }), $("#button-send-message").on("click", function() {
            var error = undefined;
            if (0 == $("#textarea-footer-message").val().length && (error = "Please enter a message!"), validate_email($("#input-footer-email").val()) || (error = "Please enter a valid email!"), error) $("#message-success").hide(), $("#message-error").show(), $("#message-error").html(error);
            else {
                $("#message-error").hide(), $(this).find("a").html("Sending..."), $(this).attr("disabled", "disabled");
                var btn = $(this);
                $.post("ajax_contact_form.php", {
                    text: $("#textarea-footer-message").val(),
                    from: $("#input-footer-email").val()
                }, function(res) {
                    $("#message-success").show(), $("#textarea-footer-message").val(""), $("#input-footer-email").val(""), btn.find("a").html("Send"), btn.removeAttr("disabled")
                })
            }
        });
        var articleOffsets = new Array;
        $("[data-side-nav-index]").each(function() {
            $(this).find(".article-badge").length > 0 ? scroll = $(this).find(".article-badge").offset().top - 150 : scroll = $(this).offset().top - 150, articleOffsets.push(scroll)
        });
        var currentArticleIndex = 0;
        $(window).on("scroll", function() {
            var scrollTop = $(window).scrollTop();
            scrollTop > articleOffsets[currentArticleIndex + 1] && currentArticleIndex++, scrollTop < articleOffsets[currentArticleIndex] && (currentArticleIndex--, 0 > currentArticleIndex && (currentArticleIndex = 0)), $("[data-side-nav-target-index].active").removeClass("active"), $("[data-side-nav-target-index=" + currentArticleIndex + "]").addClass("active")
        }), $("[data-purchase-link]").on("click", function() {
            fbq("track", "InitiateCheckout"), ga("send", "event", "Conversion", "Went to CodeCanyon")
        }), setupZoomableImages(), updateURLs()
    });
    var QueryString = function() {
        for (var query_string = {}, query = window.location.search.substring(1), vars = query.split("&"), i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if ("undefined" == typeof query_string[pair[0]]) query_string[pair[0]] = decodeURIComponent(pair[1]);
            else if ("string" == typeof query_string[pair[0]]) {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr
            } else query_string[pair[0]].push(decodeURIComponent(pair[1]))
        }
        return query_string
    }()
}(jQuery, window, document);
var ga_get_params = function(e) {
        var t = function(e, n) {
            var r = n[0],
                i = r.split("="),
                s = decodeURIComponent(i[0]),
                o = decodeURIComponent(i.slice(1).join("="));
            return "undefined" == typeof e[s] ? e[s] = o : e[s] = [].concat(e[s], o), 1 == n.length ? e : t(e, n.slice(1))
        };
        return 0 == e.length ? {} : t({}, e.substr(1).split("&"))
    },
    params = ga_get_params(location.search);
if ("undefined" != typeof JSON && "undefined" != typeof JSON.stringify) {
    params && "undefined" != typeof params.utm_source && GA_Set_Cookie("webcraft_utm", JSON.stringify(params));
    var c = JSON.parse(GA_Get_Cookie("webcraft_utm"));
    if (c && "undefined" != typeof c.utm_source) {
        var extra_params = "",
            capture_params = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
        for (var i in capture_params) capture_params.hasOwnProperty(i) && "undefined" != typeof c[capture_params[i]] && (extra_params += capture_params[i] + "=" + c[capture_params[i]].replace(/[\W\s]+/g, "") + "&");
        jQuery('a[href^="http://codecanyon.net"]').each(function() {
            var h = jQuery(this).attr("href");
            h += (h.match(/\?/) ? "&" : "?") + extra_params, jQuery(this).attr("href", h)
        })
    }
}