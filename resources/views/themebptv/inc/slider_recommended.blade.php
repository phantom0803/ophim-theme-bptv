@if (count($recommendations))
    <div class="MovieListTopCn">
        <div class="MovieListTop owl-carousel">
            @foreach ($recommendations ?? [] as $movie)
                <li class="TPostMv">
                    <article id="post-{{ $movie->id }}"
                        class="TPost C post-{{ $movie->id }} post type-post status-publish format-standard has-post-thumbnail hentry">
                        <a href="{{ $movie->getUrl() }}">
                            <div class="Image">
                                <figure class="Objf TpMvPlay AAIco-play_arrow"><img width="215" height="320"
                                        src="{{ $movie->getThumbUrl() }}"
                                        class="attachment-thumbnail size-thumbnail wp-post-image"
                                        alt="{{ $movie->name }} - {{ $movie->origin_name }} ({{ $movie->publish_year }})"
                                        title="{{ $movie->name }} - {{ $movie->origin_name }} ({{ $movie->publish_year }})" />
                                </figure>
                                <span class="mli-quality">
                                    @if ($movie->type == 'series')
                                        {{ $movie->episode_current }}
                                    @else
                                        {{ $movie->quality }} {{ $movie->language }}
                                    @endif
                                </span>
                            </div>
                            <h2 class="Title">{{ $movie->name }}</h2> <span class="Year">{{ $movie->origin_name }}
                                ({{ $movie->publish_year }})
                            </span>
                        </a>
                    </article>
                </li>
            @endforeach
        </div>
    </div>
@endif
