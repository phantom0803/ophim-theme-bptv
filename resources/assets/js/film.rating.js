jQuery(document).ready(function (t) {
    var score_current = jQuery("#score_current").val();
    var hint_current = jQuery("#hint_current").val();
    jQuery("#hint").html(hint_current);
    jQuery("#score").html(score_current + " ĐIỂM");
    function scorehint(score) {
        var text = "";
        if (score == "1") {
            text = "Dở tệ";
        }
        if (score == "2") {
            text = "Dở";
        }
        if (score == "3") {
            text = "Không hay";
        }
        if (score == "4") {
            text = "Không hay lắm";
        }
        if (score == "5") {
            text = "Bình thường";
        }
        if (score == "6") {
            text = "Xem được";
        }
        if (score == "7") {
            text = "Có vẻ hay";
        }
        if (score == "8") {
            text = "Hay";
        }
        if (score == "9") {
            text = "Rất hay";
        }
        if (score == "10") {
            text = "Hay tuyệt";
        }
        return text;
    }
    jQuery("#star").raty({
        half: false,
        starOff: "/themes/bptv/img/star.svg",
        starOn: "/themes/bptv/img/star-on.svg",
        starHalf: "/themes/bptv/img/star-hf.svg",
        score: function () {
            return jQuery(this).attr("data-score");
        },
        mouseover: function (score, evt) {
            jQuery("#score").html(score + " ĐIỂM");
            jQuery("#hint").html(scorehint(score));
        },
        mouseout: function (score, evt) {
            var score_current = jQuery("#score_current").val();
            var hint_current = jQuery("#hint_current").val();
            jQuery("#hint").html(hint_current);
            jQuery("#score").html(score_current + " ĐIỂM");
        },
        click: function (score, evt) {
            if (!rated) {
                jQuery
                    .ajax({
                        url: URL_POST_RATING,
                        type: "POST",
                        dataType: "JSON",
                        headers: {
                            "Content-Type": "application/json",
                            "X-CSRF-TOKEN": document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute("content"),
                        },
                        data: JSON.stringify({
                            rating: score,
                        }),
                    })
                    .done(function (data) {
                        if (data.status == "success") {
                            fx.alertMessage(
                                "Chúc mừng",
                                "Bạn đã gửi đánh giá thành công!",
                                "success"
                            );

                            if (typeof data.rating_count != "undefined") {
                                jQuery(".post-ratings .num-rating").text(
                                    data.rating_count
                                );
                            }
                            if (typeof data.rating_star != "undefined") {
                                jQuery(".post-ratings #score_current").val(
                                    data.rating_star
                                );
                                jQuery(".post-ratings #average_score").html(
                                    data.rating_star
                                );
                                jQuery("#TPVotes").addClass(
                                    "data-percent",
                                    data.rating_star * 10
                                );
                                jQuery("#TPVotes").addClass("gt50");
                                jQuery(".slice .bar").css(
                                    "transform",
                                    "rotate(" + data.rating_star * 36 + "deg)"
                                );
                                jQuery("#TPVotes span").html(
                                    data.rating_star * 10
                                );
                            }
                            rated = true;
                        } else fx.alertMessage("Thông báo", "Có vấn đề hệ thóng, đánh giá chưa được gửi đi!", "error");
                    });
            } else {
                fx.alertMessage(
                    "Thông báo",
                    "Bạn đã đánh giá phim này rồi!",
                    "info"
                );
            }
        },
    });
    jQuery("#star").css("width", "170px");
    jQuery(".post-ratings #hint").css("font-size", "12px");
});
