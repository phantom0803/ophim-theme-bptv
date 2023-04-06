@extends('themes::themebptv.layout')

@section('breadcrumb')
    <ol class="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <a class="" itemProp="item" title="Xem Phim" href="/">
                <span class="" itemProp="name">
                    <i class="fa fa-home"></i> Xem Phim
                </span>
            </a>
            <meta itemProp="position" content="1" />
        </li>

        @foreach ($currentMovie->regions as $region)
            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <a class="" itemProp="item" href="{{ $region->getUrl() }}" title="{{ $region->name }}">
                    <span itemProp="name">
                        {{ $region->name }}
                    </span>
                </a>
                <meta itemProp="position" content="3" />
            </li>
        @endforeach
        @foreach ($currentMovie->categories as $category)
            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                <a class="" itemProp="item" href="{{ $category->getUrl() }}" title="{{ $category->name }}">
                    <span itemProp="name">
                        {{ $category->name }}
                    </span>
                </a>
                <meta itemProp="position" content="3" />
            </li>
        @endforeach
        <li class="active" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            <span itemProp="item">
                <span class="breadcrumb_last" itemProp="name">
                    {{ $currentMovie->name }}
                </span>
                <meta itemProp="position" content="4" />
            </span>
        </li>
    </ol>
@endsection

@section('content')
    <main>
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
        <article class="TPost Single">
            <header>
                <h1 class="Title">{{ $currentMovie->name }}</h1>
                <h2 class="SubTitle">{{ $currentMovie->origin_name }}</h2>
                <div class="Image">
                    <figure class="Objf">
                        <img width="180" height="260" src="{{ $currentMovie->getThumbUrl() }}"
                            class="attachment-img-mov-md size-img-mov-md wp-post-image"
                            alt="{{ $currentMovie->name }} - {{ $currentMovie->origin_name }}" />
                    </figure>
                    @if (!$currentMovie->is_copyright && count($currentMovie->episodes) && $currentMovie->episodes[0]['link'] != '')
                        <a
                            href="{{ $currentMovie->episodes->sortBy([['server', 'asc']])->groupBy('server')->first()->sortByDesc('name', SORT_NATURAL)->groupBy('name')->last()->sortByDesc('type')->first()->getUrl() }}"><i
                                class="TpMvPlay AAIco-play_arrow show"></i></a>
                        <a class="watch_button_more" title="{{ $currentMovie->name }} - {{ $currentMovie->origin_name }}"
                            href="{{ $currentMovie->episodes->sortBy([['server', 'asc']])->groupBy('server')->first()->sortByDesc('name', SORT_NATURAL)->groupBy('name')->last()->sortByDesc('type')->first()->getUrl() }}">Xem
                            phim
                        </a>
                    @endif
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
                        <div id="TPVotes" data-percent="{{$currentMovie->getRatingStar() * 10}}">
                        </div>
                    </div>
                    <div class="post-ratings" itemscope itemtype="http://schema.org/Article">
                        <input id="hint_current" type="hidden" value="">
                        <input id="score_current" type="hidden"
                            value="{{$currentMovie->getRatingStar()}}">
                        <div id="star" data-score="{{$currentMovie->getRatingStar()}}"
                            style="cursor: pointer;"></div>
                        <br />
                        (<strong class="num-rating">{{$currentMovie->getRatingCount()}}</strong> lượt, đánh giá: <strong
                            id="average_score">{{$currentMovie->getRatingStar()}}</strong>
                        trên 10)<br />
                        <span class="post-ratings-text" id="hint"></span>
                    </div>
                    <div style="display: none;" itemprop="aggregateRating" itemscope
                        itemtype="http://schema.org/AggregateRating">
                        <span itemprop="ratingValue">{{$currentMovie->getRatingStar()}}</span>
                        <meta itemprop="ratingCount" content="{{$currentMovie->getRatingCount()}}">
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
            @if ($currentMovie->getPosterUrl())
                <div class="TPostBg Objf">
                    <img class="TPostBg" src="{{ $currentMovie->getPosterUrl() }}"
                        alt="{{ $currentMovie->name }} - {{ $currentMovie->origin_name }}">
                </div>
            @endif
        </article>
        <div class="MovieInfo TPost Single">
            <div class="MovieTabNav">
                <div class="Lnk on AAIco-description" data-Mvtab="MvTb-Info">Thông tin phim</div>
                @if (count($currentMovie->actors))
                <div class="Lnk AAIco-movie_filter" data-Mvtab="MvTb-Cast">Diễn viên</div>
                @endif
                @if ($currentMovie->trailer_url)
                <div class="Lnk AAIco-video_call" data-Mvtab="MvTb-Trailer">Trailer</div>
                @endif
                <div class="Lnk AAIco-collections" data-Mvtab="MvTb-Image">Hình ảnh</div>
            </div>
            <div class="MvTbCn on anmt" id="MvTb-Info">
                <div class="mvici-left">
                    <ul class="InfoList">
                        <li class="AAIco-adjust latest_eps"><strong>Tập mới:</strong>
                            @if (!$currentMovie->is_copyright && count($currentMovie->episodes) && $currentMovie->episodes[0]['link'] != '')
                                @php
                                    $currentMovie->episodes
                                        ->sortBy([['name', 'desc'], ['type', 'desc']])
                                        ->sortByDesc('name', SORT_NATURAL)
                                        ->unique('name')
                                        ->take(3)
                                        ->map(function ($episode) {
                                            echo '<a href="' . $episode->getUrl() . '">' . $episode->name . '</a>';
                                        });
                                @endphp
                            @else
                                Phim đang được cập nhật...
                            @endif
                        </li>
                        <li class="AAIco-adjust"><strong>Trạng thái:</strong>
                            {{ $currentMovie->episode_current }}
                        </li>
                        <li class="AAIco-adjust"><strong>Thể loại:</strong>
                            {!! $currentMovie->categories->map(function ($category) {
                                    return '<a href="' . $category->getUrl() . '" title="' . $category->name . '">' . $category->name . '</a>';
                                })->implode(', ') !!}
                        </li>
                        @if (count($currentMovie->directors))
                            <li class="AAIco-adjust"><strong>Đạo diễn:</strong>
                                {!! $currentMovie->directors->map(function ($director) {
                                        return '<a href="' .
                                            $director->getUrl() .
                                            '" tite="Đạo diễn ' .
                                            $director->name .
                                            '">' .
                                            $director->name .
                                            '</a>';
                                    })->implode(', ') !!}
                            </li>
                        @endif
                        <li class="AAIco-adjust"><strong>Quốc gia:</strong>
                            {!! $currentMovie->regions->map(function ($region) {
                                    return '<a href="' . $region->getUrl() . '" title="' . $region->name . '">' . $region->name . '</a>';
                                })->implode(', ') !!}
                        </li>
                    </ul>
                </div>
                <div class="mvici-right">
                    <ul class="InfoList">
                        <li class="AAIco-adjust"><strong>Thời lượng:</strong>
                            {{ $currentMovie->episode_time ?: "Đang cập nhật" }}
                        </li>
                        <li class="AAIco-adjust"><strong>Tổng số tập:</strong>
                            {{ $currentMovie->episode_total ?: "Đang cập nhật" }}
                        </li>
                        <li class="AAIco-adjust"><strong>Độ phân giải:</strong> <span
                                class="quality">{{ $currentMovie->quality }}</span></li>
                        <li class="AAIco-adjust"><strong>Ngôn ngữ:</strong> <span
                                class="imdb">{{ $currentMovie->language }}</span>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
            @if (count($currentMovie->actors))
                <div class="MvTbCn anmt" id="MvTb-Cast">
                    <ul class="ListCast Rows AF A06 B03 C02 D20 E02">
                        {!! $currentMovie->actors->map(function ($actor) {
                                return '<li><a href="' .
                                    $actor->getUrl() .
                                    '" title="Diễn viên ' .
                                    $actor->name .
                                    '"><figure> <span class="Objf"><img src="/themes/bptv/images/cast-image.png" alt="Diễn viên ' .
                                    $actor->name .
                                    '"></span><figcaption>' .
                                    $actor->name .
                                    '</figcaption></figure></a></li>';
                            })->implode('') !!}
                    </ul>
                </div>
            @endif
            @if ($currentMovie->trailer_url)
            <div class="MvTbCn anmt clearfix" id="MvTb-Trailer">
                @php
                    parse_str(parse_url($currentMovie->trailer_url, PHP_URL_QUERY), $parse_url);
                    $trailer_id = $parse_url['v'];
                @endphp
                <div class="TPlayerCn BgA">
                    <div class="EcBgA">
                        <div class="TPlayer">
                            <div class="TPlayerTb Current clearfix" id="Opt1">

                                <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/{{ $trailer_id }}"></iframe>
                            </div>
                            <span class="AAIco-lightbulb_outline lgtbx-lnk"></span>
                        </div>
                    </div>
                </div>
            </div>
            @endif
            <div class="MvTbCn anmt" id="MvTb-Image">
                <div class="ImageMovieList owl-carousel">
                    <div class="item active">
                        @if ($currentMovie->getPosterUrl())
                            <center>
                                <img src="{{ $currentMovie->getPosterUrl() }}" alt="Hình ảnh {{ $currentMovie->name }}"
                                    class="img-responsive">
                            </center>
                            <div class="carousel-caption"> Hình ảnh {{ $currentMovie->name }}</div>
                        @endif

                    </div>
                </div>
            </div>
            <div class="TPostBg Objf"></div>
        </div>

        <div class="Wdgt">
            <div class="Title">Bình luận</div>
            <div style="width: 100%; background-color: #fff">
                <div class="fb-comments" data-href="{{ $currentMovie->getUrl() }}" data-width="100%"
                    data-colorscheme="light" data-numposts="5" data-order-by="reverse_time" data-lazy="true"></div>
            </div>
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
                                            src="{{ $movie->getThumbUrl() }}"
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
    <script type="text/javascript">
        const URL_POST_RATING = '{{ route('movie.rating', ['movie' => $currentMovie->slug]) }}';
        var rated = false;
    </script>
    <script type="text/javascript" src="/themes/bptv/js/film.notiny.js"></script>
    <script type="text/javascript" src="/themes/bptv/js/jquery.raty.js"></script>
    <script type="text/javascript" src="/themes/bptv/js/film.rating.js"></script>

    {!! setting('site_scripts_facebook_sdk') !!}
@endpush
