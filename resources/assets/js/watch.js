if (!pautonext) {
    var pautonext = true;
}
if (!resizePlayer) {
    var resizePlayer = false;
}
if (!light) {
    var light = true;
}
if (!miniPlayer) {
    var miniPlayer = false;
}
var orgPlayerSize = { width: 0, height: 0 };
var docHeight = 17;
jQuery(document).ready(function (dataAndEvents) {
    jQuery("#btn-light").on("click", function () {
        if (light == true) {
            jQuery("body").append(
                '<div id="light-overlay" style="position: fixed; z-index: 999; background-color: rgb(0, 0, 0); opacity: 0.8; top: 0px; left: 0px; width: 100%; height: 100%;"></div>'
            );
            jQuery("#watch-block").css({
                "z-index": "1000",
                position: "relative",
            });
            jQuery(this).html("B\u1eadt \u0111\u00e8n");
            light = false;
        } else {
            jQuery("div#light-overlay").remove();
            jQuery("#watch-block").css({
                "z-index": "1000",
                position: "relative",
            });
            jQuery(this).html("T\u1eaft \u0111\u00e8n");
            light = true;
        }
        fx.scrollTo("#watch-block", 1e3);
        return false;
    });
    jQuery("#btn-toggle-error").on("click", function () {
        jQuery
            .ajax({
                url: URL_POST_REPORT_ERROR,
                type: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
                data: JSON.stringify({
                    message: "",
                }),
            })
            .done(function (data) {
                if (data.status)
                    fx.alertMessage(
                        "Thông báo",
                        "Báo cáo của bạn đã được gửi đi, BQT sẽ khắc phục trong thời gian sớm nhất. Thank!",
                        "success"
                    );
                else
                    fx.alertMessage(
                        "Rất tiếc",
                        "Máy chủ không tiếp nhận yêu cầu!",
                        "error"
                    );
            });
        jQuery(this).remove();
    });
    jQuery("#btn-expand").on("click", function () {
        if (resizePlayer == false) {
            orgPlayerSize.width = jQuery("#media-player-box").width();
            orgPlayerSize.height = jQuery("#media-player-box").height();
            var newWidth = 1106;
            var size = {
                width: newWidth,
                height: Math.ceil((newWidth / 16) * 9 - docHeight),
            };
            jQuery("#media-player-box").animate({
                width: size.width,
                height: size.height,
            });
            jQuery(".MovieTabNav.ControlPlayer").css({ display: "none" });
            jQuery("#watch-block")
                .animate({ width: newWidth })
                .addClass("expand");
            jQuery("body").append(
                '<div id="light-overlay" style="position: fixed; z-index: 999; background-color: rgb(0, 0, 0); opacity: 0.8; top: 0px; left: 0px; width: 100%; height: 100%;"></div>'
            );
            fx.scrollTo("#watch-block", 1e3);
            jQuery("#expand-status").html("Thu nhỏ");
            resizePlayer = true;
        } else {
        }
        return false;
    });
    jQuery("#btn-re-expand").on("click", function () {
        if (resizePlayer == true) {
            jQuery("#media-player-box").animate({
                width: "100%",
                height: "435px",
            });
            jQuery("#watch-block")
                .animate({ width: "100%" })
                .removeClass("expand");
            jQuery(".MovieTabNav.ControlPlayer").css({ display: "block" });
            jQuery("#watch-block").removeClass("expand");
            jQuery("div#light-overlay").remove();
            fx.scrollTo("#watch-block", 1e3);
            jQuery("#expand-status").html("Phóng to");
            resizePlayer = false;
        }
        return false;
    });
});
