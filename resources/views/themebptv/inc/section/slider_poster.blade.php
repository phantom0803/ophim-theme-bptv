<div class="MovieListSldCn">
    <div class="MovieListSld owl-carousel">
        @foreach ($item['data'] as $movie)
            <div class="TPostMv">
                <div class="TPost D">
                    <a href="{{$movie->getUrl()}}">
                        <div class="Image">
                            <figure class="Objf">
                                <img class="TPostBg"
                                    src="{{$movie->getPosterUrl()}}"
                                    alt="{{$movie->name}}" title="{{$movie->name}}">
                            </figure>
                        </div>
                    </a>
                    <div class="TPMvCn">
                        <a href="{{$movie->getUrl()}}">
                            <div class="Title">{{$movie->name}}</div>
                        </a>
                        <p class="Info">
                            <span class="Vote AAIco-star">{{$movie->getRatingStar()}}</span>
                            <span class="Time AAIco-access_time">{{$movie->episode_current}}</span>
                            <span class="Date AAIco-date_range">{{$movie->publish_year}}</span>
                            <span class="Qlty">{{$movie->quality}} {{$movie->language}}</span>
                        </p>
                        <div class="Description">
                            <p>{!! mb_substr($movie->content,0,160, "utf-8") !!}...</p>
                            <p class="Director AAIco-videocam">
                                <span>Đạo diễn:</span> {{ count($movie->directors) ? $movie->directors->first()['name'] : 'N/A' }}
                            </p>
                            <p class="Genre AAIco-movie_creation">
                                <span>Thể loại:</span>
                                {!! $movie->categories->map(function ($category) {
                                    return '<a href="' . $category->getUrl() . '" title="' . $category->name . '">' . $category->name . '</a>';
                                })->implode(', ') !!}
                                <i onclick="window.location.href='{{$movie->getUrl()}}'" class="Button STPa AAIco-more_horiz"></i>
                            </p>
                        </div>
                        <div class="Cast">
                            {!! $movie->actors->map(function ($actor, $key) {
                                if($key < 5) return '<img src="/themes/bptv/images/cast-image.png" alt="Diễn viên '.$actor->name.'" title="Diễn viên '.$actor->name.'">';
                            })->implode(', ') !!}
                            <button type="button" onclick="window.location.href='{{$movie->getUrl()}}'" class="Button STPa AAIco-more_horiz"></button>
                        </div>
                        <a href="{{$movie->getUrl()}}" class="Button TPlay AAIco-play_arrow">Xem <strong>Phim</strong>
                        </a>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</div>
