@extends('themes::themebptv.layout')

@php
    $years = Cache::remember('all_years', \Backpack\Settings\app\Models\Setting::get('site_cache_ttl', 5 * 60), function () {
        return \Ophim\Core\Models\Movie::select('publish_year')
            ->distinct()
            ->pluck('publish_year')
            ->sortDesc();
    });
@endphp

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

        <li class="" itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
            <a itemProp="item" href="{{ url()->current() }}" title="{{ $section_name ?? 'Danh Sách Phim' }}">
                <span class="breadcrumb_last" itemProp="name">
                    {{ $section_name ?? 'Danh Sách Phim' }}
                </span>
            </a>
            <meta itemProp="position" content="2" />
        </li>
    </ol>
@endsection

@section('catalog_filter')
    @include('themes::themebptv.inc.catalog_filter')
@endsection

@section('content')
    <main>
        <section>
            <div class="Top">
                <h2>{{ $section_name }}</h2>
            </div>
            @if (count($data))
                <ul class="MovieList Rows AX A06 B04 C03 E20">
                    @foreach ($data ?? [] as $movie)
                        @include('themes::themebptv.inc.section.section_thumb_item')
                    @endforeach
                </ul>
            @else
                <p>Rất tiếc, không có nội dung nào trùng khớp yêu cầu</p>
            @endif
        </section>
        {{ $data->appends(request()->all())->links('themes::themebptv.inc.pagination') }}
    </main>
@endsection
