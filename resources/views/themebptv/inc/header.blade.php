@php
    $logo = setting('site_logo', '');
    $brand = setting('site_brand', '');
    $title = isset($title) ? $title : setting('site_homepage_title', '');
@endphp

<header class="Header MnBrCn BgA">
    <div class="MnBr EcBgA">
        <div class="Container">
            <figure class="Logo" style="max-width: 268px;">
                <a href="/" title="{{ $title }}" rel="home">
                    @if ($logo)
                        {!! $logo !!}
                    @else
                        {!! $brand !!}
                    @endif
                </a>
            </figure> <span class="Button MenuBtn AAShwHdd-lnk CXHd" data-shwhdd="Tp-Wp"><i></i><i></i><i></i></span>
            <span class="MenuBtnClose AAShwHdd-lnk CXHd" data-shwhdd="Tp-Wp"></span>
            <div class="Rght BgA">
                <div class="Search">
                    <form method="GET" id="form-search" action="/">
                        <label class="Form-Icon">
                            <input type="text" name="search" placeholder="Tìm kiếm phim..." value="{{ request('search') }}">
                            <button id="searchsubmit" type="submit">
                                <i class="fa-search"></i>
                            </button>
                        </label>
                        <div class="search-suggest" style="display: none;width: 100%"></div>
                    </form>
                </div>

                <nav class="Menu">
                    <ul>
                        @foreach ($menu as $item)
                            @if (count($item['children']))
                                <li
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                    <a href="{{ $item['link'] }}">{{ $item['name'] }}</a>
                                    <ul class="sub-menu">
                                        @foreach ($item['children'] as $children)
                                            <li class="sub-menu-item"><a
                                                    href="{{ $children['link'] }}">{{ $children['name'] }}</a></li>
                                        @endforeach
                                    </ul>
                                </li>
                            @else
                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-490">
                                    <a href="{{ $item['link'] }}">{{ $item['name'] }}</a>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
