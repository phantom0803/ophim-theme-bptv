@if ($paginator->hasPages())
    <ul class="wp-pagenavi">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
        @else
            <a class="page larger" title="Trang trước" href="{{ $paginator->previousPageUrl() }}"> &larr;</a>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <span class="page-link disabled">{{ $element }}</span>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <span class="current" title="Trang {{$page}}">{{$page}}</span>
                    @else
                        <a class="page larger" title="Trang {{$page}}" href="{{$url}}"> {{$page}}</a>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <a class="page larger" title="Trang tiếp" href="{{ $paginator->nextPageUrl() }}"> &rarr;</a>
        @else
        @endif
    </ul>
@endif
