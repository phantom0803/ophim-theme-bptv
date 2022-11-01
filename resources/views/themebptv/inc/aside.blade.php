<aside class="widget-area" role="complementary">
    {{-- <div class="Dvr-300">
    </div> --}}
    @foreach ($tops as $item)
        @include('themes::themebptv.inc.aside.' . $item['template'])
    @endforeach
    {{-- <div class="Dvr-300">
    </div> --}}
    <div class="tag-list-main">
    </div>
</aside>
