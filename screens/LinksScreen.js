import React from 'react';
import { ScrollView, StyleSheet, WebView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      link: 'https://www.24h.com.vn/'
    }
  }
  
  static navigationOptions = {
    title: 'Links',
  };



  render() {
    return (
      
      <WebView style={{marginTop: 20}}
        source={
          {html: `
          <!DOCTYPE html>
          <html lang="vi">
          <head><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /><title>Chơi ở hồ nước gần nhà, 2 trẻ đuối nước thương tâm</title><meta name="news_keywords" content="chết đuối, hồ nước, tin nóng xã hội, đuối nước" /><meta name="keywords" content="chết đuối, hồ nước, tin nóng xã hội, đuối nước" /><meta name="description" content="S&#225;ng 3.6, l&#227;nh đạo UBND x&#227; Hải L&#226;m (huyện Hải Lăng, tỉnh Quảng Trị) đ&#227; đến thăm hỏi, trao tiền hỗ trợ cho gia đ&#236;nh 2 nạn nh&#226;n bị đuối nước." /><meta property="og:title" content="Chơi ở hồ nước gần nh&#224;, 2 trẻ đuối nước thương t&#226;m"/><meta property="og:description" content="S&#225;ng 3.6, l&#227;nh đạo UBND x&#227; Hải L&#226;m (huyện Hải Lăng, tỉnh Quảng Trị) đ&#227; đến thăm hỏi, trao tiền hỗ trợ cho gia đ&#236;nh 2 nạn nh&#226;n bị đuối nước."/><meta property="og:image" content="http://kenh14cdn.com/thumb_w/600/2019/6/3/2abde3f506b4efeab6a5-1559535725481728609495-crop-15595357305072053609361.jpg"/><meta property="og:url" content="http://kenh14.vn/choi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn"/><meta name="robots" content="index,follow,all" /><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" /><meta name="MobileOptimized" content="100" /><meta name="generator" content="VCCorp.vn" /><meta name="copyright" content="Công ty cổ phần Truyền Thông Việt Nam - Vccorp" /><meta name="author" content="VCCorp.vn" /><meta name="google-site-verification" content="XgyQeQB03FjD7tYPTfURGI294W9Ec_DBIvTB6xPrL6Q" /><meta property="og:locale" content="vi_VN" /><meta property="fb:app_id" content="1506977592847257" /><meta property="fb:admins" content="1133617216" /><meta property="og:type" content="article" /><meta property="og:site_name" content="Kenh14.vn" /><meta name="apple-mobile-web-app-title" content="Kenh14.vn" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-touch-fullscreen" content="yes" /><meta name="format-detection" content="telephone=no" /><meta name="msapplication-TileColor" content="#ff6d15" /><meta name="msapplication-TileImage" content="http://kenh14cdn.com/channel-icon/kenh14-144.png" /><script type="text/javascript">
          var _ADM_Channel = '%2fxa-hoi%2fdetail%2f';
          var tagparam = ["chet-duoi","ho-nuoc","tin-nong-xa-hoi","duoi-nuoc"];
          </script>
          <link rel="canonical" href="http://kenh14.vn/choi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn" />
              <script async src="http://static.amcdn.vn/core/mbtk.js"></script>
              
          
          
          
          <link rel="apple-touch-icon" href="http://kenh14cdn.com/channel-icon/kenh14-60.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="http://kenh14cdn.com/channel-icon/kenh14-57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="http://kenh14cdn.com/channel-icon/kenh14-72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="http://kenh14cdn.com/channel-icon/kenh14-76.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="http://kenh14cdn.com/channel-icon/kenh14-120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="http://kenh14cdn.com/channel-icon/kenh14-152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="http://kenh14cdn.com/channel-icon/kenh14-180.png" />
          <link rel="apple-touch-icon-precomposed" href="http://kenh14cdn.com/channel-icon/kenh14-152.png" />
          <link rel="icon" type="image/png" href="http://kenh14cdn.com/channel-icon/kenh14-16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="http://kenh14cdn.com/channel-icon/kenh14-32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="http://kenh14cdn.com/channel-icon/kenh14-57.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="http://kenh14cdn.com/channel-icon/kenh14-128.png" sizes="128x128" />
          <link rel="icon" type="image/png" href="http://kenh14cdn.com/channel-icon/kenh14-192.png" sizes="192x192" />
          <link rel="manifest" href="http://kenh14cdn.com/channel-icon/kenh14-manifest.json">
          <link rel="mask-icon" href="http://kenh14cdn.com/channel-icon/kenh14-192.png" color="#ff6d15" />
          <link rel="shortcut icon" href="http://kenh14cdn.com/channel-icon/kenh14-32.png" type="image/png" />
          <script>
              (function () {
                  var img = new Image();
                  img.src = 'https://lg1.logging.admicro.vn/ftest?url=' + encodeURIComponent(document.URL);
              })();
          </script>
          <!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M42S846');</script>
          <!-- End Google Tag Manager -->
          
          <!-- Begin comScore Tag -->
          
          <noscript>
              <img src="http://b.scorecardresearch.com/p?c1=2&c2=17793284&cv=2.0&cj=1" alt="" />
          </noscript>
          <!-- End comScore Tag -->
          <script type="text/javascript">
              var pageSetting = {
                  apiDomain: 'https://kenh14s.cnnd.vn'
              };
          </script>
              <script async src="https://adminplayer.sohatv.vn/resource/init-script/playerInitScript.js"></script>
              <script async src="https://ovp.sohatv.vn/lib/initPlayer/OVPPlayerInitScript.js" type="text/javascript"></script>
              
          
          <link rel="stylesheet" href="http://kenh14cdn.com/mob_css/css.detail.min.02.05.2019.css" />
          <script async src="http://kenh14cdn.com/mob_js/main.detail.min.27.05.2019.v1.js"></script>
          
          
          
          
          
              <script async src="http://adi.admicro.vn/adt/cpc/tvcads/files/others/1016/playerinlinek14/200417/tvc_player_video_inline_1.js"></script>
              <script async src="http://adi.admicro.vn/adt/cpc/tvcads/files/js/test/group_site_k14.js"></script>
          
              <script type="text/javascript">
                   var admicroMAD = admicroMAD || {}; admicroMAD.unit = admicroMAD.unit || [];
              </script>
              <script src="http://media1.admicro.vn/core/mb_core.js" async></script>
          </head>
          <body>
              <noscript>
                  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W9QF9DL"
                      height="0" width="0" style="display: none; visibility: hidden"></iframe>
              </noscript>
              <!-- End Google Tag Manager (noscript) -->
              <div id="admwrapper">
                  
              <div class="clearfix adv-box adv" id="adm-slot-7282"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-7282') }) : admicroMAD.show('adm-slot-7282');</script>
          
                  
          <div class="trending-wrapper new-update-wrapper clearfix" id="topnews-wrapper" style="height:0px;">
              <div class="trending-container">
                  
                  <div class="trending-header"><label>Mới nhất</label></div>
                  <div class="trending-content new-update-content" data-role="popup-content">
                      <div>
                          <ul class="list-news-update"></ul>
                          <a id="autoLoadNotify" max-page="4" class="view_more mb-10" href="javascript:void(0)" rel="nofollow" onclick="loadMoreNotifyNews(this,'#topnews-wrapper .list-news-update');">Xem thêm</a>
                      </div>
                  </div>
              </div>
          </div>
                  <div class="body-wrapper">
                      
                      
          <div class="top-header-wrapper">
              <div id="header_menu" class="top-header clearfix">
                  
                  <a href="javascript:void(0)" class="back-to-home fl" rel="nofollow" onclick="backToHome();">Về trang chủ</a>
                  
                  <ul class="list-top-menu fr clearfix">
                      <li class="lastest-news">
                          <a class="new-update" id="topnews_menu">
                              Mới nhất
                              <span class="x-line line1"></span>
                              <span class="x-line line2"></span>
                          </a>
                      </li>
                      <li class="ming-menu">
                          <a href="javascript:void(0)" rel="nofollow" onclick="LoginVietId('/dang-nhap.chn')" class="mingid-login sprites" id="login_menu" style="display: none;"></a>
                      </li>
                      
                      <li>
                          <a rel="nofollow" class="extend" id="expand_tab">
                              <span class="x-line line1"></span>
                              <span class="x-line line2"></span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
                      <div id="king-live-top"></div>
                      <div class="clearfix" id="wrapper_mn" style="display: none">
                          
          <div class="menu-container">
              <div style="padding: 10px 6px;background-color: #fff;">
                  <div class="search-container">
                      <input id="txt_topkey" type="text" value="" placeholder="Nhập nội dung tìm kiếm ..." />
                      <input type="button" class="btn-search" onclick="onSearchTop()" />
                  </div> <!-- End .search-container -->
              </div>
              <div id="vietid_container">
                  <a href="javascript:void(0)" rel="nofollow" onclick="LoginVietId('/dang-nhap.chn')" class="btn-login-vietid">
                      <span class="login-text">Đăng nhập bằng</span>
                      <span class="login-vietid-logo"></span>
                  </a>
              </div>
              <div class="menu-tabs-container">
                  <ul class="menu-tabs clearfix">
                      <li>
                          <a href="javascript:void(0)" onclick="ActiveTab(this,'.tab_danhmuc')" class="active">chuyên mục</a>
                      </li>
                      <li>
                          <a href="javascript:void(0)" onclick="ActiveTab(this,'.tab_khac')">khác</a>
                      </li>
                      <li>
                          <a href="javascript:void(0)" onclick="ActiveTab(this,'.tab_ungdung')">apps</a>
                      </li>
                  </ul>
                  <div id="category-tab" class="menu-content">
                      <ul class="menu-tab-item category-list tab_danhmuc clearfix">
                          <li>
                              <a href="/star.chn">Star</a>
                          </li>
                          <li>
                              <a href="/musik.chn">Musik</a>
                          </li>
                          <li>
                              <a href="/cine.chn">Ciné</a>
                          </li>
                          <li>
                              <a href="/tv-show.chn">TV Show</a>
                          </li>
                          <li>
                              <a href="/fashion.chn">Fashion</a>
                          </li>
                          <li>
                              <a href="/doi-song.chn">Đời sống</a>
                          </li>
                          <li>
                              <a href="/xa-hoi.chn">Xã hội</a>
                          </li>
                          <li>
                              <a href="/the-gioi.chn">Thế giới</a>
                          </li>
                           <li>
                              <a href="/suc-khoe-gioi-tinh.chn">Sức khỏe-Giới tính</a>
                          </li>
                          <li>
                              <a href="/an-ca-the-gioi.chn">Ăn cả thế giới</a>
                          </li>
                          <li>
                              <a href="/sport.chn">Sport</a>
                          </li>
                           
                          <li>
                              <a href="/2-tek.chn">2-Tek</a>
                          </li>
                         
                          
                          <li>
                              <a href="/hoc-duong.chn">Học đường</a>
                          </li>
                          
                         
                          <li>
                              <a href="/video.chn">Video</a>
                          </li>
                      </ul>
                      <ul class="menu-tab-item tab_khac clearfix" style="display: none;">
                          <li><a href="http://linkhay.com" target="_blank" rel="nofollow"><span class="avatar-channel linkhay"></span>
                              <span>LinkHay.com</span> <span class="des">Cộng đồng chia sẻ tin tức</span> </a>
                          </li>
                          <li><a href="http://m.soha.vn" target="_blank" rel="nofollow"><span class="avatar-channel soha"></span>
                              <span>Soha.vn</span> <span class="des">Tổng hợp tin</span> </a></li>
                          <li><a href="http://m.autopro.com.vn" target="_blank" rel="nofollow"><span class="avatar-channel auto"></span><span>Autopro.vn</span> <span class="des">Cổng thông tin ô tô - xe máy</span>
                          </a></li>
                          <li><a href="http://m.afamily.vn" target="_blank" rel="nofollow"><span class="avatar-channel afamily"></span><span>Afamily.vn</span> <span class="des">Chuyên trang gia đình </span></a>
                          </li>
                          <li><a href="http://m.cafebiz.vn/" target="_blank" rel="nofollow"><span class="avatar-channel biz"></span><span>Cafebiz.vn</span> <span class="des">Sự kiện nổi bật </span></a></li>
                          <li><a href="http://m.cafef.vn" target="_blank" rel="nofollow"><span class="avatar-channel cafef"></span>
                              <span>CafeF.vn</span> <span class="des">Trang tin tức tài chính</span> </a></li>
                      </ul>
                      <div class="menu-tab-item tab_ungdung clearfix" style="display: none;">
                          <ul class="clearfix">
                              <li class="sprite-x"><a href="javascript:void(0)" onclick="installApp('pega')" rel="nofollow">
                                  <div class="left">
                                      <div class="logoapp pega">
                                      </div>
                                      <div class="fl">
                                          <span>Đọc tin Pega</span>
                                          <div class="star">
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                          </div>
                                          <div class="sprite-app btn">
                                          </div>
                                      </div>
                                  </div>
                              </a>
                                  <div class="right">
                                      <a class="sprite-app" href="javascript:void(0)" onclick="installApp('pega')" rel="nofollow"></a>
                                  </div>
                              </li>
                              
                              <li class="sprite-x"><a href="javascript:void(0)" onclick="installApp('kenh14')" rel="nofollow">
                                  <div class="left">
                                      <div class="logoapp kenh14">
                                      </div>
                                      <div class="fl">
                                          <span>Kênh14 App</span>
                                          <div class="star">
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="off">
                                              </div>
                                          </div>
                                          <div class="sprite-app btn">
                                          </div>
                                      </div>
                                  </div>
                              </a>
                                  <div class="right">
                                      <a class="sprite-app" href="javascript:void(0)" onclick="installApp('kenh14')" rel="nofollow"></a>
                                  </div>
                              </li>
                              <li class="sprite-x"><a href="javascript:void(0)" onclick="installApp('afamily')" rel="nofollow">
                                  <div class="left">
                                      <div class="logoapp afamily"></div>
          
                                      <div class="fl">
                                          <span>Afamily App</span>
                                          <div class="star">
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="off">
                                              </div>
                                          </div>
                                          <div class="sprite-app btn">
                                          </div>
                                      </div>
                                  </div>
                              </a>
                                  <div class="right">
                                      <a class="sprite-app" href="javascript:void(0)" onclick="installApp('afamily')" rel="nofollow"></a>
                                  </div>
                              </li>
                              <li class="sprite-x"><a href="javascript:void(0)" onclick="installApp('muachung')" rel="nofollow">
                                  <div class="left">
                                      <div class="logoapp muachung">
                                      </div>
                                      <div class="fl">
                                          <span>Mua Chung</span>
                                          <div class="star">
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="on">
                                              </div>
                                              <div class="off">
                                              </div>
                                          </div>
                                          <div class="sprite-app btn">
                                          </div>
                                      </div>
                                  </div>
                              </a>
                                  <div class="right">
                                      <a class="sprite-app" href="javascript:void(0)" onclick="installApp('muachung')" rel="nofollow"></a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="k14mth-list">
                  <h3 class="container-title">Nhóm chủ đề</h3>
                  
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2017/26-lgbt-flag-get-1484799676476.jpg');">
                              <a href="/nhom-chu-de/lgbt.chn"><span class="k14mth-name">LGBT</span></a>
                          </div>
                      
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2016/cover-nha-la-noi-de-ve-1-1462877251353.jpg');">
                              <a href="/nhom-chu-de/nha-la-noi-de-ve.chn"><span class="k14mth-name">Nhà là nơi để về</span></a>
                          </div>
                      
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2016/magazine-cover-1470901702968.jpg');">
                              <a href="/nhom-chu-de/magazine.chn"><span class="k14mth-name">Magazine</span></a>
                          </div>
                      
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2016/cover-doc-cham-1477989772612.jpg');">
                              <a href="/nhom-chu-de/doc-cham.chn"><span class="k14mth-name">Đọc Chậm</span></a>
                          </div>
                      
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2018/6/22/photo2018-06-2219-12-24-15296695688472127023524.jpg');">
                              <a href="/nhom-chu-de/photo-story.chn"><span class="k14mth-name">Photo Story</span></a>
                          </div>
                      
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2018/6/22/banner-nhom-chu-de-1510648725712-15296379064181439771679.jpg');">
                              <a href="/nhom-chu-de/hanh-trinh-wechoice-2018.chn"><span class="k14mth-name">Hành trình WeChoice 2018</span></a>
                          </div>
                      
                          <div class="k14mth-cover" style="background-image: url('http://kenh14cdn.com/thumb_w/640/2019/5/8/livegreen-1557287994278931103238.jpg');">
                              <a href="/nhom-chu-de/live-green.chn"><span class="k14mth-name">Live Green</span></a>
                          </div>
                      
              </div>
          </div>
          
          
          
                      </div>
                      <div id="wrapper_ct">
                           <div id="vinfast_live"></div>
                          
              <div class="clearfix adv-box " id="adm-slot-7279"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-7279') }) : admicroMAD.show('adm-slot-7279');</script>
          
                          
              <input type="hidden" name="hdNewsUrl" id="hdNewsUrl" value="/xa-hoi/choi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn" />
              <input type="hidden" name="hdNewsId" id="hdNewsId" value="20190603112143061" />
              <input type="hidden" name="hdBrandContentUrl" id="hdBrandContentUrl" value="http://m.kenh14.vn/xa-hoi.chn" />
              <input type="hidden" id="txtVideoToken" value="L3NlY3VyZS92ZXJpZnkveHZxcmNhZGhlYmZpMHY1dm5zM2Ywd3d3a3Y2MDdkMDgvMTAwMTAyL2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5WldZaU9pSWlMQ0poY0hCclpYa2lPaUo0ZG5GeVkyRmthR1ZpWm1rd2RqVjJibk16WmpCM2QzZHJkall3TjJRd09DSXNJbkJzWVhsbGNpSTZJakV3TURFd01pSXNJbWxuYm05eVpVVjRjR2x5WVhScGIyNGlPblJ5ZFdVc0ltbGhkQ0k2TVRVeU5ESTRNRGN6T1N3aVpYaHdJam94TlRJME1qZ3dOems1ZlEuRHZpSzNzS2V5N3lUbkFqam9jN2lWb2kyM2hESzdFWEw1QWVvSWhEOWx2UQ==" />
              
              <script async src='//media1.admicro.vn/js_boxapp/tagsponsorz_41452.js'></script>
              
              <div id="detail_content" class="news-detail-wrapper ">
                  
          
          <div class="breadcrumb-container clearfix">
              <ul class="category-nav nav-lss clearfix" itemscope itemtype="http://schema.org/BreadcrumbList">
                  <li class="small-logo" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                      <a itemprop="item" href="http://m.kenh14.vn" class="sprites"><span itemprop="name">Kênh14.vn</span></a>
                      <meta itemprop="position" content="1" />
                  </li>
                  <li class="arrow">›</li>
                  <li class="main-category" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" href="/xa-hoi.chn"><span itemprop="name">Xã hội</span></a><meta itemprop="position" content="2" /></li>
              </ul>
          </div>
          
          <div class="skw-submenu-wrapper clearfix">
              <div class="clearfix ">
                  <div class="ssmw-wrapper swiper-container">
                      <ul class="ssmw-list swiper-wrapper">
                          
                          <li class="ssmwli swiper-slide subcate-aff-2018" style="display: none">
                              <a href="/sport/uefa-champions-league.chn" style="background-color: transparent !important;">
                                  <img src="http://kenh14cdn.com/web_images/uefa-menu-icon.png" style="width: 234px;height: 26px;">
                              </a>
                          </li>
                          <li class="ssmwli swiper-slide subcate-ngoaihanganh" style="display: none;">
                              <a href="/sport/ngoai-hang-anh.chn">
                                  <img src="http://kenh14cdn.com/mob_images/icon-epl.jpg">
                              </a>
                          </li>
                          
                          
                           <li class="ssmwli swiper-slide subcate-doisong" style="display: none;">
                              <a href="https://hwgsurvey.kenh14.vn/" target="_blank" style="background: transparent; height: 100%">
                                  <img src="http://kenh14cdn.com/web_images/hwg-doisong-menu-logo.png" style="display: block;width: 179px; height: 100%">
                              </a>
                          </li>
                         
                          
          
                          <li class="ssmwli swiper-slide subcate-2tek" style="display: none;">
                              <a href="https://chuyengiachandung.kenh14.vn/" target="_blank" style="background: transparent; height: 100%">
                                  <img src="https://kenh14cdn.com/web_images/OppoTabK14.png" style="display: block;width: 149px; height: 100%">
                              </a>
                          </li>
                          
                                  <li class="ssmwli swiper-slide" data-id="213"><a href="/xa-hoi/song-xanh.chn"><span>Sống xanh</span></a></li>
                              
                                  <li class="ssmwli swiper-slide" data-id="159"><a href="/xa-hoi/chum-anh.chn"><span>Chùm ảnh</span></a></li>
                              
                                  <li class="ssmwli swiper-slide" data-id="195"><a href="/xa-hoi/phap-luat.chn"><span>Pháp luật</span></a></li>
                              
                                  <li class="ssmwli swiper-slide" data-id="196"><a href="/xa-hoi/nong-tren-mang.chn"><span>Nóng trên mạng</span></a></li>
                              
                      </ul>
                  </div>
              </div>
          </div>
          
          
          <script type="text/javascript">
              (runinit = window.runinit || []).push(function () {
                  $('.ssmw-list').find('li[data-id='+ -1+'] a').addClass('currentSubcat');
                  if (142 == '118') {
                      $('.subcate-ngoaihanganh').show();
                      $('.ssmw-list').find('li[data-id=193]').hide();
                  };
                  if (window.location.pathname == "/doi-song.chn") {
                      $('.subcate-doisong').show();
                      setTimeout(function () {
                         $('.breadcrumb-container .main-category').find('a').trigger("click");
                      },200);
                  };
                  if (window.location.pathname == "/hoc-duong.chn") {
                      $('.subcate-hocduong').show();
                      setTimeout(function () {
                         $('.breadcrumb-container .main-category').find('a').trigger("click");
                      },200);
                  };
                  if (window.location.pathname == "/2-tek.chn") {
                      $('.subcate-2tek').show();
                      setTimeout(function () {
                         $('.breadcrumb-container .main-category').find('a').trigger("click");
                      },200);
                      
                      //$(".skw-submenu-wrapper").show();
                  };
                  if (142 == '118') {
                       $('.subcate-aff-2018').show();
                       $('.ssmw-list').find('li[data-id=204]').hide();
                  };
                  if (142 == '5') {
                      $('.sub-fashion').show();
                      setTimeout(function () {
                         $('.breadcrumb-container .main-category').find('a').trigger("click");
                      },200);
                  };
                  //comment dinh duong
                  if (142 == '79') {
                       $('.ssmw-list').find('li[data-id=205]').hide();
                  };
              });        
          </script>
          
          
          <div class="news-detail-container">
              <div class="top-info">
                  
                  
                  <h1 class="post-title">Chơi ở hồ nước gần nhà, 2 trẻ đuối nước thương tâm</h1>
              </div>
              <div class="author-container">
                  <span class="author">Hưng Thi</span>
                  <span class="source">Theo Lao Động</span>
                  <span class="time">• <span title="2019-06-03T11:46:14" class="timeago"></span></span>
              </div>
              
                  
              <div class="detail-cover rectangle-cover">
                          <img src="http://kenh14cdn.com/crop/640_360/2019/6/3/2abde3f506b4efeab6a5-1559535725481728609495-crop-15595357305072053609361.jpg" alt="" />
              </div>
          
                     
                  
              <div id='admsection1' class='ovh'></div>
              
              <div class="sapo">Sáng 3.6, lãnh đạo UBND xã Hải Lâm (huyện Hải Lăng, tỉnh Quảng Trị) đã đến thăm hỏi, trao tiền hỗ trợ cho gia đình 2 nạn nhân bị đuối nước.</div>
              
              <div class="clearfix adv-box " id="adm-slot-484639"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-484639') }) : admicroMAD.show('adm-slot-484639');</script>
          
              
              
              
          
              <div class="relate-news-container">
                  
              </div>
              
              <script type="text/javascript">
                  var relatedNews = [{"NewsId":2019060214211489,"EncryptId":0,"ZoneId":142,"Type":0,"Title":"Bé 4 tuổi đuối nước thương tâm khi được mẹ dẫn đi tắm","Url":"/be-4-tuoi-duoi-nuoc-thuong-tam-khi-duoc-me-dan-di-tam-2019060214211489.chn","Avatar":"2019/photo1559460002139-1559460002324-crop-1559460098712529878860.jpg","Thumb":"http://kenh14cdn.com/zoom/200_120/2019/photo1559460002139-1559460002324-crop-1559460098712529878860.jpg","DistributionDate":"2019-06-02T14:26:30","DisplayStyle":1,"NewsSource":"Theo Công Lý","Source":null,"OriginalId":null,"Author":"Trần Sỹ","CoverImg":"http://kenh14cdn.com/crop/640_360/2019/photo1559460002139-1559460002324-crop-1559460098712529878860.jpg","PublishDate":"2019-06-02T14:26:30","TitleEncode":"B&#233; 4 tuổi đuối nước thương t&#226;m khi được mẹ dẫn đi tắm","CateUrl":"xa-hoi","CateName":"Xã hội"},{"NewsId":20190530152511577,"EncryptId":0,"ZoneId":142,"Type":0,"Title":"Nghệ An: Rủ nhau đi liên hoan, 5 học sinh lớp 8 đuối nước thương tâm","Url":"/nghe-an-ru-nhau-di-lien-hoan-5-hoc-sinh-lop-8-duoi-nuoc-thuong-tam-20190530152511577.chn","Avatar":"2019/5/30/duoi-1559204613166638520719-crop-15592046479671229256506.jpg","Thumb":"http://kenh14cdn.com/zoom/200_120/2019/5/30/duoi-1559204613166638520719-crop-15592046479671229256506.jpg","DistributionDate":"2019-05-30T15:33:00","DisplayStyle":1,"NewsSource":"Theo Tổ quốc","Source":null,"OriginalId":null,"Author":"Văn Nguyễn","CoverImg":"http://kenh14cdn.com/crop/640_360/2019/5/30/duoi-1559204613166638520719-crop-15592046479671229256506.jpg","PublishDate":"2019-05-30T15:33:00","TitleEncode":"Nghệ An: Rủ nhau đi li&#234;n hoan, 5 học sinh lớp 8 đuối nước thương t&#226;m","CateUrl":"xa-hoi","CateName":"Xã hội"},{"NewsId":20190527094534136,"EncryptId":0,"ZoneId":142,"Type":0,"Title":"Nghệ An: Trắng đêm tìm kiếm nam sinh 11 tuổi đuối nước tử vong","Url":"/nghe-an-trang-dem-tim-kiem-nam-sinh-11-tuoi-duoi-nuoc-tu-vong-20190527094534136.chn","Avatar":"2019/5/27/610340526800156657794878019241010112495616n-15589250331621233217124-crop-15589250696821691042761.jpg","Thumb":"http://kenh14cdn.com/zoom/200_120/2019/5/27/610340526800156657794878019241010112495616n-15589250331621233217124-crop-15589250696821691042761.jpg","DistributionDate":"2019-05-27T09:52:28.603","DisplayStyle":1,"NewsSource":"Theo Tổ quốc","Source":null,"OriginalId":null,"Author":"Văn Nguyễn","CoverImg":"http://kenh14cdn.com/crop/640_360/2019/5/27/610340526800156657794878019241010112495616n-15589250331621233217124-crop-15589250696821691042761.jpg","PublishDate":"2019-05-27T09:52:28","TitleEncode":"Nghệ An: Trắng đ&#234;m t&#236;m kiếm nam sinh 11 tuổi đuối nước tử vong","CateUrl":"xa-hoi","CateName":"Xã hội"}];
              </script>  
              
              <div class="post-content">
                  <p>Trước đó, vào chiều ngày 2.6, tại khu vực hồ Bàu Đầy (thôn Thượng Nguyên, xã Hải Lâm), 2 em Nguyễn Thị Mỵ Nương (SN 2013) và Vương Thị Kiều Oanh (SN 2011) cùng trú tại thôn Tân Chính, xã Hải Lâm bị đuối nước.</p><div class="VCSortableInPreviewMode active" type="Photo" style=""><div><img src="http://kenh14cdn.com/thumb_w/660/2019/6/3/2abde3f506b4efeab6a5-1559535725481728609495.jpg" id="img_24290c10-85b7-11e9-a32b-b38744a42769" w="888" h="592" alt="Chơi ở hồ nước gần nhà, 2 trẻ đuối nước thương tâm - Ảnh 1." title="Chơi ở hồ nước gần nhà, 2 trẻ đuối nước thương tâm - Ảnh 1." rel="lightbox" photoid="24290c10-85b7-11e9-a32b-b38744a42769" type="photo" style="max-width:100%;" data-original="http://kenh14cdn.com/2019/6/3/2abde3f506b4efeab6a5-1559535725481728609495.jpg" width="" height=""></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]" class="">Dạy bơi cho trẻ để hạn chế tình trạng đuối nước ở Quảng Trị. Ảnh: Hưng Thơ.</p></div></div><div id="admsection2"></div><div id="admsection3"></div><p>Theo ông Nguyễn Minh Hoàng - Chủ tịch UBND xã Hải Lâm, nguyên nhân ban đầu do bố mẹ các cháu đi làm, 2 cháu tự chơi với nhau gần khu vực hồ nước nên bị trượt chân rơi xuống hồ đuối nước và tử vong. Đến 17h cùng ngày, gia đình mới phát hiện và tìm kiếm được thi thể.</p><p>Ngay sau khi vụ tai nạn đuối nước xảy ra, xã Hải Lâm cũng đã kịp thời thăm hỏi, động viên, hỗ trợ 2 gia đình làm thủ tục mai táng theo phong tục.</p>
                  <div class="clearfix ovh" id="end-post-content" style="width: 100%;"></div>
                  
          <div class="link-content-footer skip-append-related">
              
                      <a href="/phat-hien-nhieu-vu-khach-nuoc-ngoai-trom-cap-tren-may-bay-20190603094622155.chn" title="Ph&#225;t hiện nhiều vụ kh&#225;ch nước ngo&#224;i trộm cắp tr&#234;n m&#225;y bay">Phát hiện nhiều vụ khách nước ngoài trộm cắp trên máy bay</a>
                  
          </div>
              </div>
              
              <div class="fb-like-share-container bottom">
                  <a href="javascript:void(0)" onclick="share_facebook('http://kenh14.vn/choi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn')" class="fb_share" rel="nofollow">
                      <b>0</b><span> Chia sẻ</span>
                  </a>
                  
                      <a href="javascript:void(0)" class="comment_count" rel="nofollow" onclick="showCommentBox('20190603112143061')">
                          <b>0</b><span> Bình luận</span>
                      </a>
                  
              </div>
              
              
              <!-- End .post-content -->
              
                  <div class="post-tags-container">
                      <span class="tag-keyword">Tags</span><div class="swiper-container" data-slide="{'slidesPerView': 'auto','spaceBetween': 10, 'direction': 'horizontal', 'mousewheelControl': true}"><ul class="swiper-wrapper"><li class="swiper-slide"><a href="/chet-duoi.html">chết đuối</a></li><li class="swiper-slide"><a href="/ho-nuoc.html">hồ nước</a></li><li class="swiper-slide"><a href="/tin-nong-xa-hoi.html">tin nóng xã hội</a></li><li class="swiper-slide"><a href="/duoi-nuoc.html">đuối nước</a></li></ul></div>
                  </div>
              
              <!-- End .post-tags-container -->
          </div>
          <script type="text/javascript">
              (runinit = window.runinit || []).push(function () {
                  fbPhoto.init();
                  poll.init();
                  (function (d, s, id) {
                      var js, pjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) {
                          window.IMSMediaUnit && window.IMSMediaUnit.Init({});
                          return;
                      }
                      js = d.createElement(s);
                      js.id = id;
                      js.src = 'http://ccd.mediacdn.vn/mediaunit/media-plugin.min.js?v3';
                      js.addEventListener('load', function () {
                          window.IMSMediaUnit && window.IMSMediaUnit.Init({});
                      });
                      pjs.parentNode.insertBefore(js, pjs);
                  }(document, 'script', 'media-unit-jssdk'));
              });        
          </script>
          
          
          <div id="othernews-bycate" class="other-news-bycate-container">
              <div class="box-header">
              <span class="box-header-title mr-20 active" tab-rel="0">Cùng mục</span>
                  <span class="box-header-title" tab-rel="1">Đang hot</span>
            </div>
              <div class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide">
                          <ul class="list-news">
                          
                                  <li class="news-item">
                                      <a href="/bi-don-khang-cao-vu-truyen-tranh-than-dong-dat-viet-chuan-bi-duoc-dua-ra-xet-xu-phuc-tham-20190603104914952.chn" title="Bị đơn kh&#225;ng c&#225;o, vụ truyện tranh &quot;Thần đồng đất Việt&quot; chuẩn bị được đưa ra x&#233;t xử ph&#250;c thẩm" class="post-ava">
                                              <img src="http://kenh14cdn.com/zoom/160_160/2019/6/3/6156340823717165831105785549200563654098944n-1559533601662115764864-crop-1559533710598459365368.png" alt=""/>
                                          </a>
                                  <h3 class="news-title">
                                    <a href="/bi-don-khang-cao-vu-truyen-tranh-than-dong-dat-viet-chuan-bi-duoc-dua-ra-xet-xu-phuc-tham-20190603104914952.chn">Bị đơn kháng cáo, vụ truyện tranh "Thần đồng đất Việt" chuẩn bị được đưa ra xét xử phúc thẩm</a>
                                  </h3>
                                </li>
                                      
                              
                                  <li class="news-item">
                                      <a href="/phat-hien-nhieu-vu-khach-nuoc-ngoai-trom-cap-tren-may-bay-20190603094622155.chn" title="Ph&#225;t hiện nhiều vụ kh&#225;ch nước ngo&#224;i trộm cắp tr&#234;n m&#225;y bay" class="post-ava">
                                              <img src="http://kenh14cdn.com/zoom/160_160/2019/photo1559529870917-1559529871080-crop-15595300202801315590519.jpg" alt=""/>
                                          </a>
                                  <h3 class="news-title">
                                    <a href="/phat-hien-nhieu-vu-khach-nuoc-ngoai-trom-cap-tren-may-bay-20190603094622155.chn">Phát hiện nhiều vụ khách nước ngoài trộm cắp trên máy bay</a>
                                  </h3>
                                </li>
                                      
                              
                                  <li class="news-item">
                                      <a href="/tieng-khoc-xe-long-cua-be-gai-3-tuoi-mac-benh-hiem-ngheo-ba-oi-chau-dau-lam-sao-bo-me-mai-khong-ve-ha-ba-20190603085316608.chn" title="Tiếng kh&#243;c x&#233; l&#242;ng của b&#233; g&#225;i 3 tuổi mắc bệnh hiểm ngh&#232;o: &quot;B&#224; ơi, ch&#225;u đau lắm, sao bố mẹ m&#227;i kh&#244;ng về hả b&#224;?&quot;" class="post-ava">
                                              <img src="http://kenh14cdn.com/zoom/160_160/2019/6/3/photo-3-15595265154011867759158-crop-1559526699503464379059.jpg" alt=""/>
                                          </a>
                                  <h3 class="news-title">
                                    <a href="/tieng-khoc-xe-long-cua-be-gai-3-tuoi-mac-benh-hiem-ngheo-ba-oi-chau-dau-lam-sao-bo-me-mai-khong-ve-ha-ba-20190603085316608.chn">Tiếng khóc xé lòng của bé gái 3 tuổi mắc bệnh hiểm nghèo: "Bà ơi, cháu đau lắm, sao bố mẹ mãi không về hả bà?"</a>
                                  </h3>
                                </li>
                                      
              <div class="clearfix adv-box " id="adm-slot-473531"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-473531') }) : admicroMAD.show('adm-slot-473531');</script>
          
                              
                        </ul>
                      </div>
                      <div class="swiper-slide">
                          <ul class="list-news">
                          
                                  <li class="news-item">
                                      <a href="/bi-don-khang-cao-vu-truyen-tranh-than-dong-dat-viet-chuan-bi-duoc-dua-ra-xet-xu-phuc-tham-20190603104914952.chn" title="Bị đơn kh&#225;ng c&#225;o, vụ truyện tranh &quot;Thần đồng đất Việt&quot; chuẩn bị được đưa ra x&#233;t xử ph&#250;c thẩm" class="post-ava">
                                              <img src="http://kenh14cdn.com/zoom/480_300/2019/6/3/6156340823717165831105785549200563654098944n-1559533601662115764864-crop-1559533710598459365368.png" alt=""/>
                                          </a>
                                  <h3 class="news-title">
                                    <a href="/bi-don-khang-cao-vu-truyen-tranh-than-dong-dat-viet-chuan-bi-duoc-dua-ra-xet-xu-phuc-tham-20190603104914952.chn">Bị đơn kháng cáo, vụ truyện tranh "Thần đồng đất Việt" chuẩn bị được đưa ra xét xử phúc thẩm</a>
                                  </h3>
                                </li> 
                              
                                  <li class="news-item">
                                      <a href="/xon-xao-clip-nguoi-phu-nu-cam-gach-dap-kinh-roi-ngoi-truoc-dau-o-to-an-va-nghi-do-phat-hien-chong-cho-bo-nhi-2019060309212328.chn" title="X&#244;n xao clip người phụ nữ cầm gạch đập k&#237;nh rồi ngồi chặn đầu &#244; t&#244; nghi của chồng" class="post-ava">
                                              <img src="http://kenh14cdn.com/zoom/480_300/2019/6/3/photo-1-155952824824247743044-crop-155952836726616309931.gif.png" alt=""/>
                                          </a>
                                  <h3 class="news-title">
                                    <a href="/xon-xao-clip-nguoi-phu-nu-cam-gach-dap-kinh-roi-ngoi-truoc-dau-o-to-an-va-nghi-do-phat-hien-chong-cho-bo-nhi-2019060309212328.chn">Xôn xao clip người phụ nữ cầm gạch đập kính rồi ngồi chặn đầu ô tô nghi của chồng</a>
                                  </h3>
                                </li> 
                              
                                  <li class="news-item">
                                      <a href="/loi-ke-cua-cac-co-gai-bi-ban-vao-to-quy-2019060308423953.chn" title="Lời kể của c&#225;c c&#244; g&#225;i bị b&#225;n v&#224;o tổ quỷ" class="post-ava">
                                              <img src="http://kenh14cdn.com/zoom/480_300/2019/photo1559526012468-1559526012785-crop-15595260795101410941791.jpg" alt=""/>
                                          </a>
                                  <h3 class="news-title">
                                    <a href="/loi-ke-cua-cac-co-gai-bi-ban-vao-to-quy-2019060308423953.chn">Lời kể của các cô gái bị bán vào tổ quỷ</a>
                                  </h3>
                                </li> 
                              
                        </ul>
                      </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
              </div>
          </div>
          
                  
                  
                  
                  
                  <div id="admsection4"></div>
                  <div class="adv" style="width: 100%; overflow: hidden; margin-top: 15px;">
                      
              <div class="clearfix adv-box " id="adm-slot-7280"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-7280') }) : admicroMAD.show('adm-slot-7280');</script>
          
                  </div>
                  
              <div class="comment-form-container" id="mingid_comment_wrapper_20190603112143061" style="width:100%; padding-top:10px; margin-top:5px;clear:both;overflow:hidden" data-url="http://kenh14.vn/news-20190603112143061.chn" >
                  <div id="mingid_comments_content"></div>
              </div>
              <script type="text/javascript">
                  (runinit = window.runinit || []).push(function () {
                      renderCommentIframe('d9c694bd04eb35d96f1d71a84141d075', 'http://kenh14.vn/news-20190603112143061.chn', 'Q2glYzYlYTFpKyVlMSViYiU5ZitoJWUxJWJiJTkzK24lYzYlYjAlZTElYmIlOWJjK2clZTElYmElYTduK25oJWMzJWEwJTJjKzIrdHIlZTElYmElYmIrJWM0JTkxdSVlMSViYiU5MWkrbiVjNiViMCVlMSViYiU5YmMrdGglYzYlYjAlYzYlYTFuZyt0JWMzJWEybQ==', 'http://m.kenh14.vn/choi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn', "100%", "200px");
                  });
              </script> 
              
          
              </div>
              <div class="body-content">
                  <div class="end-post-news-stream">
                  </div>
              </div>
              <div class="adv-bottom clearfix" style="display: none;">
                  
              <div class="clearfix adv-box " id="adm-slot-7281"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-7281') }) : admicroMAD.show('adm-slot-7281');</script>
          
              </div>
              <div class="adv-bottom clearfix" style="display: none;">
                  
              <div class="clearfix adv-box " id="adm-slot-7282"></div>
              <script type="text/javascript">'undefined' == typeof admicroMAD.show ? admicroMAD.unit.push(function () { admicroMAD.show('adm-slot-7282') }) : admicroMAD.show('adm-slot-7282');</script>
          
              </div>    
              <script type="text/javascript">
                  var cateUrl = 'xa-hoi', pCate = '';
                  
                  (runinit = window.runinit || []).push(function () {
                      initDetail('20190603112143061', '142', 'xa-hoi', '', '1559537174977','http://kenh14.vn/choi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn');
                      initCmsQuiz('https://kenh14s.cnnd.vn');
          
                      
                      if ($("div[type='TheRemixVote']").length > 0) {
                          theRemixVoteBox.init('20190603112143061');
                      }
                      
                      if ($(".wechoice-award").length > 0 || $(".wechoice-member").length > 0) {
                          loadCss('http://kenh14cdn.com/mob_css/wechoice.min.30.06.2016.css');
                          loadJsAsync("http://kenh14cdn.com/mob_js/wechoice.min.30.06.2016.js", function() {
                              initWechoice2015();
                          });
                      }
                  });
              </script>
              
              
              
              <input type="hidden" id="hidUrlLogin" value="http://m.vietid.net/OauthMobileV3/Login?app_key=d9c694bd04eb35d96f1d71a84141d075&check_sum=a1a26054974370407d2ed221e141b243&call_back=http%3a%2f%2fm.kenh14.vn%2fCached%2fRenderCacheDetails.ashx%3fSecret%3dm.kenh14.vn%26newsId%3d20190603112143061%26url%3d%2fchoi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn%26catId%3d142%26oldUrl%3d%2fchoi-o-ho-nuoc-gan-nha-2-tre-duoi-nuoc-thuong-tam-20190603112143061.chn" />
              
              <script async type="text/javascript" src="http://media1.admicro.vn/js_tvc/replayVideo_min.js"></script>
              
              
          
                      </div>
                      
          <div class="footer" id="page-footer" style="display:none;">
              <div class="footer-content">
                  <div class="new-footer">
                      
                      
                      <div class="footer-group footer-report clearfix">
                          <h3 class="footer-group-title">Chịu trách nhiệm quản lý nội dung</h3>
                          <div>Bà Nguyễn Bích Minh</div>
                      </div>
                      <div class="footer-group footer-report clearfix">
                          <h3 class="footer-group-title">ý kiến bài viết</h3>
                          <a href="mailto:bandoc@kenh14.vn" class="footer-email fl" rel="nofollow"><i class="sprites"></i>bandoc@kenh14.vn</a>
                          <a href="javascript:void(0)" class="footer-faq fr" rel="nofollow" onclick="openPopup_FQA()"><i class="sprites"></i>Câu hỏi thường gặp</a>
                      </div>
                      <div class="footer-group footer-associate clearfix">
                          <h3 class="footer-group-title">Hợp tác nội dung</h3>
                          <a href="mailto:marketing@kenh14.vn" class="footer-email fl" rel="nofollow"><i class="sprites"></i>marketing@kenh14.vn</a>
                  
                          <a href="tel:+842473095555" class="footer-admicro fr" rel="nofollow"><i class="sprites"></i>024 7309 5555</a>
                      </div>
          
                      <div class="footer-group footer-advertise clearfix">
                          <h3 class="footer-group-title">Hỗ trợ quảng cáo</h3>
                          <a href="mailto:giaitrixahoi@admicro.vn" class="footer-email fl" rel="nofollow"><i class="sprites"></i>giaitrixahoi@admicro.vn</a>
                          
                          <a href="tel:+84942861133" class="footer-phone fl" rel="nofollow" style="margin-top: 10px; width: 100%"><i class="sprites"></i>0942.86.11.33</a>
                      </div>
                      <div class="footer-group footer-report clearfix">
                          <h3 class="footer-group-title">Trụ sở Hà Nội</h3>
                          <div>Tầng 17, 19, 20, 21 Toà nhà Center Building - Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.</div>
                      </div>
                      <div class="footer-group footer-report clearfix">
                          <div>Giấy phép số 2215/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày 10 tháng 4 năm 2019</div>
                      </div>
                      <div class="footer-group footer-report clearfix">
                          <a href="https://vccorp.vn/" class="runbyvcc" rel="nofollow" style="padding: 0; text-align: left">© Copyright 2007 - 2019 – Công ty Cổ phần VCCorp</a>
                      </div>
                  </div>
              </div>
              <div class="clearfix">
                  <a href="javascript:void(0)" onclick="redirectToWeb()" rel="nofollow" class="btn-switch-to-desk">Xem bản Desktop</a>
                  <a href="#" class="btn-back-to-top" rel="nofollow"><i class="sprites"></i></a>
              </div>
          </div>
          <style>
          .footer-admicro:after{    content: '(máy lẻ 037)';}
          </style>
          
                  </div>
              </div>
              <script type="text/javascript" async>
                  //var _laq = _laq || [];
                  //_laq.push(['_setApp', 'LA-140926062-20']);
                  //_laq.push(['_trackPageview']);
                  //(function () {
                  //    var la = document.createElement('script'); la.type = 'text/javascript'; la.async = true;
                  //    la.src = "http://log1.channelvn.net/scripts/log.js?v=20151122";
                  //    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(la, s);
                  //})();
                  (runinit = window.runinit || []).push(function () {
                      poll.mingLoginUrl = 'http://m.vietid.net/OauthMobileV3/Login?app_key=d9c694bd04eb35d96f1d71a84141d075&check_sum=a1a26054974370407d2ed221e141b243&call_back=CALLBACK';
                      checkLazyImages(0);
                  });
              </script>
          </body>
          </html><!--s: 6/3/2019 11:47:08 AM-->`}
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
