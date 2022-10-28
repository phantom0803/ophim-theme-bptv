var ajaxFailedHandle = function (jqXHR, textStatus, errorThrown) {
    return false;
};
var fx = {
    alertMessage: function (title, text, theme) {
        $.notiny({
            title: title,
            text: text,
            theme: theme,
            position: "right-top",
        });
    },
    showLoad: function () {
        jQuery(
            "#fxloading,#fxLoading,#fx-loading,._fxLoading,.fx-loading"
        ).fadeIn("fast");
    },
    hideLoad: function (handler) {
        jQuery(
            "#fxloading,#fxLoading,#fx-loading,._fxLoading,.fx-loading"
        ).fadeOut("fast");
    },
    removeMessage: function (messageId) {
        jQuery("#" + messageId).slideUp("slow", function () {
            jQuery(this).remove();
        });
    },
    errorStatusHandler: function (data) {
        console.log("errorStatusHandler:");
        console.log(data);
        if (typeof data != "object") {
            console.error("data phải là 1 đối tượng:");
            console.error(data);
            return false;
        }
        if (
            typeof data._fxErrorHandled != "undefined" &&
            data._fxErrorHandled
        ) {
            return false;
        }
        if (
            typeof data._fxError == "string" &&
            jQuery.trim(data._fxError) != ""
        ) {
            fx.alertMessage("Có lỗi xảy ra", data._fxError, "error");
        } else if (
            typeof data._fxErrors == "object" &&
            data._fxErrors.length > 0
        ) {
            var errorStr = data._fxErrors.join("<br />");
            fx.alertMessage("Có lỗi xảy ra", errorStr, "error");
            console.log(data._fxErrors);
        } else if (
            typeof data._fxHtml == "string" &&
            jQuery.trim(data._fxHtml) != ""
        ) {
            alert(data._fxHtml);
        } else {
            alert(
                "Xảy ra lỗi không mong muốn, bật cửa sổ consolse để xem chi tiết."
            );
        }
    },
    scrollTo: function (selector, scrollTime) {
        if (typeof scrollTime != "number" || scrollTime < 1000)
            var scrollTime = 1000;
        if (jQuery(selector).length == 0) {
            console.error(
                "Không xác định được selector: " +
                    selector +
                    " để tìm vị trí cuộn."
            );
            return false;
        }
        var boxOffset = jQuery(selector).offset();
        var currentScrollTop = jQuery(document).scrollTop();
        if (
            typeof boxOffset == "object" &&
            typeof currentScrollTop == "number" &&
            boxOffset.top != currentScrollTop
        ) {
            jQuery("body,html").animate(
                { scrollTop: boxOffset.top },
                scrollTime
            );
        } else {
            console.error("boxOffset:");
            console.log(boxOffset);
            console.error("currentScrollTop");
            console.log(currentScrollTop);
        }
    },
};
fx.getCookie = function (name) {
    var regStr = "/" + name + "=([^;]*)/i";
    eval("var cookieReg=" + regStr);
    var results = cookieReg.exec(document.cookie);
    if (results != null && results.length > 1) return results[1];
    return "";
};
fx.localStorage = {
    check: function () {
        if (typeof window.localStorage == "undefined") {
            console.error(
                "Trình duyệt của bạn không hỗ trợ localStorage của Html5"
            );
            return false;
        }
        return true;
    },
    set: function (name, value) {
        if (!fx.localStorage.check()) return false;
        if (typeof name != "string" || typeof value != "string") {
            console.error(
                "name và value  muốn lưu trong localStorage phải là string"
            );
            return false;
        }
        window.localStorage.setItem(name, value);
        return true;
    },
    get: function (name) {
        if (!fx.localStorage.check()) return false;
        if (typeof name != "string") {
            console.error(
                "name của record muốn lấy từ localStorage phải là string"
            );
            return false;
        }
        var value = window.localStorage.getItem(name);
        if (value == null) return "";
        return value;
    },
};
fx.callReady = function () {
    jQuery(document).ready();
};
fx.fireReadyDelay = function () {
    setTimeout("fx.callReady()", 2000);
};
jQuery.ajaxSetup({
    beforeSend: function (jqXHR, settings) {
        if (typeof fx.token == "string") {
            if (settings.url.indexOf("?") == -1)
                settings.url += "?_fxToken=" + escape(fx.token);
            else settings.url += "&_fxToken=" + escape(fx.token);
        }
        if (typeof settings.silentLoad == "undefined" || !settings.silentLoad) {
            fx.showLoad();
        }
    },
    complete: function (jqXHR, textStatus) {
        fx.hideLoad();
        if (textStatus == "success") {
        }
    },
    success: function (data) {
        if (typeof data._fxStatus != "undefined" && !data._fxStatus) {
            console.error("Xảy ra lỗi khi xử lý trên server !");
            fx.errorStatusHandler(data);
        }
    },
});
var isToutchDevice = null;
var FX_DEVICE_TOUTCH = false;
var FX_DEVICE_SMALL = false;
jQuery(document).ready(function () {
    if (jQuery("#fxloading").length == 0) {
        jQuery("body").append(
            '<div id="fxloading" style="display:none"></div>'
        );
    }
    isToutchDevice = function () {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {}
        try {
            return "ontouchstart" in document.documentElement;
        } catch (e) {}
        return false;
    };
    if (isToutchDevice()) {
        jQuery("body").addClass("fx-device-toutch");
        FX_DEVICE_TOUTCH = true;
    } else {
        FX_DEVICE_TOUTCH = false;
    }
    try {
        if (jQuery(window).width() <= 480 || jQuery(window).height() <= 480) {
            jQuery("body").addClass("fx-device-small");
            FX_DEVICE_SMALL = true;
        } else {
            FX_DEVICE_SMALL = false;
        }
    } catch (e) {
        FX_DEVICE_SMALL = false;
    }
});
