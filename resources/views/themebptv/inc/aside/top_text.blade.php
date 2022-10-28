<section class="Wdgt">
    <div class="Title">{{ $item['label'] }}</div>
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
