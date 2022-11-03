<section class="Wdgt">
    <div class="Title"><div class="Lnk AAIco-movie_filter">&nbsp; &nbsp;{{ $item['label'] }}</div></div>
    <ul class="MovieList Newepisode">
        @foreach ($item['data'] as $movie)
            <li>
                <a href="{{ $movie->getUrl() }}" title="{{ $movie->name }}">
                    <span>{{ $movie->name }}</span><span>{{ $movie->episode_current }}</span>
                </a>
            </li>
        @endforeach
    </ul>
</section>
