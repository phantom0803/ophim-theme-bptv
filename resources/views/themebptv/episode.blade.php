@extends('themes::themebptv.layout')

@section('breadcrumb')
    <ol class="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a class="" itemProp="item" title="{{ setting('site_brand') }}" href="/">
                <span class="" itemProp="name">
                    <i class="fa fa-home"></i> {{ setting('site_brand') }}
                </span>
                <meta itemProp="position" content="1" />
            </a>
        </li>
        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
            <a class="" itemprop="item"
                href="/danh-sach/{{ $currentMovie->type == 'single' ? 'phim-le' : 'phim-bo' }}"
                title="{{ $currentMovie->type == 'single' ? 'Phim lẻ' : 'Phim bộ' }}">
                <span itemprop="name">
                    {{ $currentMovie->type == 'single' ? 'Phim lẻ' : 'Phim bộ' }}
                </span>
            </a>
            <meta itemprop="position" content="2">
        </li>

        @foreach ($currentMovie->regions as $region)
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a class="" itemprop="item" href="{{ $region->getUrl() }}" title="{{ $region->name }}">
                    <span itemprop="name">
                        {{ $region->name }}
                    </span>
                </a>
                <meta itemprop="position" content="3">
            </li>
        @endforeach
        @foreach ($currentMovie->categories as $category)
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                <a class="" itemprop="item" href="{{ $category->getUrl() }}" title="{{ $category->name }}">
                    <span itemprop="name">
                        {{ $category->name }}
                    </span>
                </a>
                <meta itemprop="position" content="3">
            </li>
        @endforeach
        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
            <a class="" itemprop="item" href="{{ $currentMovie->getUrl() }}" title="{{ $currentMovie->name }}">
                <span itemprop="name">
                    {{ $currentMovie->name }}
                </span>
            </a>
            <meta itemprop="position" content="4">
        </li>
        <li class="active" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
            <span itemprop="item">
                <span class="breadcrumb_last" itemprop="name">
                    Tập {{ $episode->name }}
                </span>
            </span>
            <meta itemprop="position" content="4">
        </li>
    </ol>
@endsection

@section('content')
    <main>
        <article class="TPost Single">
            <header>
                <h1 class="Title">{{ $currentMovie->name }}</h1>
                <h2 class="SubTitle">{{ $currentMovie->origin_name }}</h2>
                <div class="Image">
                    <figure class="Objf">
                        <img width="180" height="260" src="{{ $currentMovie->thumb_url }}"
                            class="attachment-img-mov-md size-img-mov-md wp-post-image"
                            alt="{{ $currentMovie->name }} - {{ $currentMovie->origin_name }}" />
                    </figure>

                    <ul class="ListPOpt">
                        <li>
                            <a title="Chia sẻ qua Facebook" rel="nofollow"
                                onclick="window.open ('http://www.facebook.com/share.php?u={{ $currentMovie->getUrl() }}&amp;title={{ $currentMovie->name }}', 'Facebook', 'toolbar=0, status=0, width=650, height=450');"
                                href="javascript: void(0);" class="Fcb fa-facebook"></a>
                        </li>
                        <li>
                            <a title="Chia sẻ qua Twitter" rel="nofollow"
                                onclick="window.open ('http://twitter.com/intent/tweet?status={{ $currentMovie->name }}+{{ $currentMovie->getUrl() }}', 'Twitter', 'toolbar=0, status=0, width=650, height=450');"
                                href="javascript: void(0);" class="Twt fa-twitter"></a>
                        </li>
                        <li>
                            <a title="Chia sẻ qua Google" rel="nofollow"
                                onclick="window.open ('https://plus.google.com/share?url={{ $currentMovie->getUrl() }}', 'Google', 'toolbar=0, status=0, width=650, height=450');"
                                href="javascript: void(0);" class="Ggl fa-google-plus"></a>
                        </li>
                    </ul>
                </div>
                <div class="Description">
                    @if ($currentMovie->content)
                        {!! $currentMovie->content !!}
                    @else
                        Đang cập nhật...
                    @endif
                </div>
            </header>
            <footer class="ClFx">
                <div class="VotesCn">
                    <div class="Prct">
                        <div id="TPVotes" data-percent="{{ number_format($currentMovie->rating_star * 10 ?? 0, 0) }}">
                        </div>
                    </div>
                    <div class="post-ratings" itemscope itemtype="http://schema.org/Article">
                        <input id="hint_current" type="hidden" value="">
                        <input id="score_current" type="hidden"
                            value="{{ number_format($currentMovie->rating_star ?? 0, 1) }}">
                        <div id="star" data-score="{{ number_format($currentMovie->rating_star ?? 0, 1) }}"
                            style="cursor: pointer;"></div>
                        <br />
                        (<strong class="num-rating">{{ $currentMovie->rating_count ?? 0 }}</strong> lượt, đánh giá: <strong
                            id="average_score">{{ number_format($currentMovie->rating_star ?? 0, 1) }}</strong>
                        trên 10)<br />
                        <span class="post-ratings-text" id="hint"></span>
                    </div>
                    <div style="display: none;" itemprop="aggregateRating" itemscope
                        itemtype="http://schema.org/AggregateRating">
                        <span itemprop="ratingValue">{{ number_format($currentMovie->rating_star ?? 0, 1) }}</span>
                        <meta itemprop="ratingcount" content="{{ $currentMovie->rating_count ?? 0 }}">
                        <meta itemprop="bestRating" content="10" />
                        <meta itemprop="worstRating" content="1" />
                    </div>
                </div>
                <p class="Info">
                    <span class="Time AAIco-access_time">{{ $currentMovie->episode_time ?? 'N/A' }}</span>
                    <span class="Date AAIco-date_range">{{ $currentMovie->publish_year }}</span>
                    <span class="View AAIco-remove_red_eye">{{ $currentMovie->view_total }} lượt xem</span>
                </p>
            </footer>
            @if ($currentMovie->poster_url)
                <div class="TPostBg Objf">
                    <img class="TPostBg" src="{{ $currentMovie->poster_url }}"
                        alt="{{ $currentMovie->name }} - {{ $currentMovie->origin_name }}">
                </div>
            @endif
        </article>

        @if ($currentMovie->notify && $currentMovie->notify != '')
            <div class="watch-notice">
                <div class="box-content alerts">
                    <div class="alert alert-danger">
                        <strong>Thông báo: </strong>{{ strip_tags($currentMovie->notify) }}
                    </div>
                </div>
            </div>
        @endif
        @if ($currentMovie->showtimes && $currentMovie->showtimes != '')
            <div class="watch-notice">
                <div class="box-content alerts">
                    <div class="alert alert-success">
                        <strong>Lịch chiếu: </strong>{{ strip_tags($currentMovie->showtimes) }}
                    </div>
                </div>
            </div>
        @endif

        <div id="watch-block">
            <div class="media-player uniad-player" id="media-player-box">
                <div id="media-player" style="width: 100%;height: 100%;background:#1D1D1D;text-align: center">
                    <p style="height: 300px">Đang tải, đợi tí nhé ...</p>
                </div>
                <div id="player-loading" class="player-loading">
                    <div class="status"></div>
                </div>
                <span class="AAIco-input btn-re-expand" id="btn-re-expand"></span>
            </div>
            <div class="MovieTabNav ControlPlayer">
                <div class="Lnk AAIco-lightbulb_outline" id="btn-light" title="Tắt đèn nền">Tắt đèn</div>
                <div class="Lnk AAIco-launch" id="btn-expand"><span id="expand-status">Phóng to</span></div>
                <div class="Lnk AAIco-error" id="btn-toggle-error" title="Báo lỗi cho admin!">Báo lỗi</div>
            </div>
        </div>

        <div id="change-server">
            <center>
                <ul class="server-list">
                    <li class="backup-server"> <span class="server-title">Đổi Sever</span>
                        <ul class="list-episode">
                            <li class="episode">
                                @foreach ($currentMovie->episodes->where('slug', $episode->slug)->where('server', $episode->server) as $server)
                                    <a data-id="{{ $server->id }}" data-link="{{ $server->link }}"
                                        data-type="{{ $server->type }}" onclick="chooseStreamingServer(this)"
                                        class="streaming-server btn-link-backup btn-episode black episode-link">VIP
                                        #{{ $loop->index + 1 }}</a>
                                @endforeach
                            </li>
                        </ul>
                    </li>
                </ul>
            </center>
        </div>

        <div class="Wdgt list-server" id="list-server">
            @foreach ($currentMovie->episodes->sortBy([['server', 'asc']])->groupBy('server') as $server => $data)
                <div class="server clearfix server-group">
                    <h3 class="server-name"> {{ $server }} </h3>
                    <ul class="list-episode">
                        @foreach ($data->sortByDesc('name', SORT_NATURAL)->groupBy('name') as $name => $item)
                            <li class="episode">
                                <a class="btn-episode episode-link btn3d black @if ($item->contains($episode)) active @endif"
                                    title="{{ $name }}"
                                    href="{{ $item->sortByDesc('type')->first()->getUrl() }}">{{ $name }}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            @endforeach
        </div>
        <div class="Wdgt">
            <div class="Title">Bình luận</div>
            <div class="fb-comments" data-href="{{ $currentMovie->getUrl() }}" data-width="100%"
                data-colorscheme="dark" data-numposts="5" data-order-by="reverse_time" data-lazy="true"></div>
        </div>
        <div class="Wdgt">
            <div class="Title">Có thể bạn muốn xem?</div>
            <div class="MovieListRelated owl-carousel">
                @foreach ($movie_related as $movie)
                    <div class="TPostMv">
                        <div class="TPost B">
                            <a href="{{ $movie->getUrl() }}">
                                <div class="Image">
                                    <figure class="Objf TpMvPlay AAIco-play_arrow"><img width="215" height="320"
                                            src="{{ $movie->thumb_url }}"
                                            class="attachment-thumbnail size-thumbnail wp-post-image"
                                            alt="{{ $movie->name }} - {{ $movie->origin_name }} ({{ $movie->publish_year }})"
                                            title="{{ $movie->name }} - {{ $movie->origin_name }} ({{ $movie->publish_year }})" />
                                    </figure>
                                    <span class="mli-quality">{{ $movie->quality }}</span>
                                    <div class="Title">{{ $movie->name }}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <div id="mv-keywords">
            <strong class="mr10">Từ khóa:</strong>
            @foreach ($currentMovie->tags as $tag)
                <a href="{{ $tag->getUrl() }}" rel="follow, index"
                    title="{{ $tag->name }}">{{ $tag->name }},</a>
            @endforeach
        </div>
    </main>
@endsection

@push('scripts')
    <script src="/themes/bptv/player/js/p2p-media-loader-core.min.js"></script>
    <script src="/themes/bptv/player/js/p2p-media-loader-hlsjs.min.js"></script>

    <script src="/js/jwplayer-8.9.3.js"></script>
    <script src="/js/hls.min.js"></script>
    <script src="/js/jwplayer.hlsjs.min.js"></script>

    <script>
        $(document).ready(function() {
            $('html, body').animate({
                scrollTop: $('#media-player-box').offset().top
            }, 'slow');
        });
    </script>

    <script>
        const wrapper = document.getElementById('media-player');
        const vastAds = "{{ Setting::get('jwplayer_advertising_file') }}";

        function chooseStreamingServer(el) {
            const type = el.dataset.type;
            const link = el.dataset.link;
            const id = el.dataset.id;

            const newUrl =
                location.protocol +
                "//" +
                location.host +
                location.pathname +
                "?id=" + id;

            history.pushState({
                path: newUrl
            }, "", newUrl);


            Array.from(document.getElementsByClassName('streaming-server')).forEach(server => {
                server.classList.remove('active');
            })
            el.classList.add('active');

            link.replace('http://', 'https://');
            renderPlayer(type, link, id);
        }

        function renderPlayer(type, link, id) {
            if (type == 'embed') {
                if (vastAds) {
                    wrapper.innerHTML = `<div id="fake_jwplayer"></div>`;
                    const fake_player = jwplayer("fake_jwplayer");
                    const objSetupFake = {
                        key: "{{ Setting::get('jwplayer_license') }}",
                        aspectratio: "16:9",
                        width: "100%",
                        height: "100%",
                        file: "/themes/bptv/player/1s_blank.mp4",
                        volume: 100,
                        mute: false,
                        autostart: true,
                        advertising: {
                            tag: "{{ Setting::get('jwplayer_advertising_file') }}",
                            client: "vast",
                            vpaidmode: "insecure",
                            skipoffset: {{ (int) Setting::get('jwplayer_advertising_skipoffset') ?: 5 }}, // Bỏ qua quảng cáo trong vòng 5 giây
                            skipmessage: "Bỏ qua sau xx giây",
                            skiptext: "Bỏ qua"
                        }
                    };
                    fake_player.setup(objSetupFake);
                    fake_player.on('complete', function(event) {
                        $("#fake_jwplayer").remove();
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                        fake_player.remove();
                    });

                    fake_player.on('adSkipped', function(event) {
                        $("#fake_jwplayer").remove();
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                        fake_player.remove();
                    });

                    fake_player.on('adComplete', function(event) {
                        $("#fake_jwplayer").remove();
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                        fake_player.remove();
                    });
                } else {
                    if (wrapper) {
                        wrapper.innerHTML = `<iframe width="100%" height="100%" src="${link}" frameborder="0" scrolling="no"
                    allowfullscreen="" allow='autoplay'></iframe>`
                    }
                }
                return;
            }

            if (type == 'm3u8' || type == 'mp4') {
                wrapper.innerHTML = `<div id="jwplayer"></div>`;
                const player = jwplayer("jwplayer");
                const objSetup = {
                    key: "{{ Setting::get('jwplayer_license') }}",
                    aspectratio: "16:9",
                    width: "100%",
                    height: "100%",
                    image: "{{ $currentMovie->poster_url ?: $currentMovie->thumb_url }}",
                    file: link,
                    playbackRateControls: true,
                    playbackRates: [0.25, 0.75, 1, 1.25],
                    sharing: {
                        sites: [
                            "reddit",
                            "facebook",
                            "twitter",
                            "googleplus",
                            "email",
                            "linkedin",
                        ],
                    },
                    volume: 100,
                    mute: false,
                    autostart: true,
                    logo: {
                        file: "{{ Setting::get('jwplayer_logo_file') }}",
                        link: "{{ Setting::get('jwplayer_logo_link') }}",
                        position: "{{ Setting::get('jwplayer_logo_position') }}",
                    },
                    advertising: {
                        tag: "{{ Setting::get('jwplayer_advertising_file') }}",
                        client: "vast",
                        vpaidmode: "insecure",
                        skipoffset: {{ (int) Setting::get('jwplayer_advertising_skipoffset') ?: 5 }}, // Bỏ qua quảng cáo trong vòng 5 giây
                        skipmessage: "Bỏ qua sau xx giây",
                        skiptext: "Bỏ qua"
                    }
                };

                if (type == 'm3u8') {
                    const segments_in_queue = 50;

                    var engine_config = {
                        debug: !1,
                        segments: {
                            forwardSegmentCount: 50,
                        },
                        loader: {
                            cachedSegmentExpiration: 864e5,
                            cachedSegmentsCount: 1e3,
                            requiredSegmentsPriority: segments_in_queue,
                            httpDownloadMaxPriority: 9,
                            httpDownloadProbability: 0.06,
                            httpDownloadProbabilityInterval: 1e3,
                            httpDownloadProbabilitySkipIfNoPeers: !0,
                            p2pDownloadMaxPriority: 50,
                            httpFailedSegmentTimeout: 500,
                            simultaneousP2PDownloads: 20,
                            simultaneousHttpDownloads: 2,
                            // httpDownloadInitialTimeout: 12e4,
                            // httpDownloadInitialTimeoutPerSegment: 17e3,
                            httpDownloadInitialTimeout: 0,
                            httpDownloadInitialTimeoutPerSegment: 17e3,
                            httpUseRanges: !0,
                            maxBufferLength: 300,
                            // useP2P: false,
                        },
                    };
                    if (Hls.isSupported() && p2pml.hlsjs.Engine.isSupported()) {
                        var engine = new p2pml.hlsjs.Engine(engine_config);
                        player.setup(objSetup);
                        jwplayer_hls_provider.attach();
                        p2pml.hlsjs.initJwPlayer(player, {
                            liveSyncDurationCount: segments_in_queue, // To have at least 7 segments in queue
                            maxBufferLength: 300,
                            loader: engine.createLoaderClass(),
                        });
                    } else {
                        player.setup(objSetup);
                    }
                } else {
                    player.setup(objSetup);
                }


                const resumeData = 'OPCMS-PlayerPosition-' + id;
                player.on('ready', function() {
                    if (typeof(Storage) !== 'undefined') {
                        if (localStorage[resumeData] == '' || localStorage[resumeData] == 'undefined') {
                            console.log("No cookie for position found");
                            var currentPosition = 0;
                        } else {
                            if (localStorage[resumeData] == "null") {
                                localStorage[resumeData] = 0;
                            } else {
                                var currentPosition = localStorage[resumeData];
                            }
                            console.log("Position cookie found: " + localStorage[resumeData]);
                        }
                        player.once('play', function() {
                            console.log('Checking position cookie!');
                            console.log(Math.abs(player.getDuration() - currentPosition));
                            if (currentPosition > 180 && Math.abs(player.getDuration() - currentPosition) >
                                5) {
                                player.seek(currentPosition);
                            }
                        });
                        window.onunload = function() {
                            localStorage[resumeData] = player.getPosition();
                        }
                    } else {
                        console.log('Your browser is too old!');
                    }
                });

                player.on('complete', function() {
                    if (typeof(Storage) !== 'undefined') {
                        localStorage.removeItem(resumeData);
                    } else {
                        console.log('Your browser is too old!');
                    }
                })

                function formatSeconds(seconds) {
                    var date = new Date(1970, 0, 1);
                    date.setSeconds(seconds);
                    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
                }
            }
        }
    </script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const episode = urlParams.get('id')
            let playing = document.querySelector(`[data-id="${episode}"]`);
            if (playing) {
                playing.click();
                return;
            }

            const servers = document.getElementsByClassName('streaming-server');
            if (servers[0]) {
                servers[0].click();
            }
        });
    </script>

    <script type="text/javascript">
        var URL_POST_RATING = '{{ route('movie.rating', ['movie' => $currentMovie->slug]) }}';
        var URL_POST_REPORT_ERROR =
            '{{ route('episodes.report', ['movie' => $currentMovie->slug, 'episode' => $episode->slug]) }}';
        var rated = false;
    </script>
    <script type="text/javascript" src="/themes/bptv/js/film.notiny.js"></script>
    <script type="text/javascript" src="/themes/bptv/js/jquery.raty.js"></script>
    <script type="text/javascript" src="/themes/bptv/js/film.rating.js"></script>
    <script type="text/javascript" src="/themes/bptv/js/watch.js"></script>

    {!! setting('site_scripts_facebook_sdk') !!}
@endpush
