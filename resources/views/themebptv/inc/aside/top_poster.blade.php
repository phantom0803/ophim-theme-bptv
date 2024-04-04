<section class="Wdgt" id="showChonLoc">
    <div class="Title">
        <div class="Lnk fa-film">&nbsp; &nbsp;{{ $item['label'] }}</div>
    </div>
    <ul class="MovieList block-movie">
        @foreach ($item['data'] as $movie)
            <li>
                <a title="{{ $movie->name }} - {{ $movie->origin_name }}" href="{{ $movie->getUrl() }}">
                    <img class="lazy" data-src="{{ $movie->getPosterUrl() }}"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjOHPmzH8ACDADZKt3GNsAAAAASUVORK5CYII="
                        alt="{{ $movie->name }} - {{ $movie->origin_name }}" border="0">
                    <span>
                        <h3>{{ $movie->name }}</h3>
                        <h4>{{ $movie->origin_name }} ({{ $movie->publish_year }})</h4>
                    </span>
                </a>
            </li>
        @endforeach
    </ul>
</section>
