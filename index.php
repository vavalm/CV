<!DOCTYPE html>

<?php
//    Implémentation des langues

if (!empty($_COOKIE['lang']) && empty($currentLang) && empty($_GET['lang'])) { //Si on a changé la langue par le bouton alors nextLanguage prend cette nouvelle valeur
    $currentLang = $_COOKIE['lang'];
}

if (!empty($_GET['lang'])) { //Si on a changé la langue par le bouton alors nextLanguage prend cette nouvelle valeur
    $currentLang = $_GET['lang'];
}

if (!empty($_POST['nextLanguage'])) { //Si on a changé la langue par le bouton alors nextLanguage prend cette nouvelle valeur
    $currentLang = $_POST['nextLanguage'];
}

if (empty($currentLang) || $currentLang == "FRENCH") {
    $currentLang = "FRENCH";
    include_once 'translation/fr.php';
} elseif ($currentLang == "ENGLISH") {
    include_once 'translation/en.php';
} else {
    $currentLang = "ENGLISH";
    include_once 'translation/en.php';
}

if (empty($_COOKIE['lang'])) {
    setcookie('lang', $currentLang, time() + 365 * 24 * 3600, null, null, false, true);
} else {
    $_COOKIE['lang'] = $currentLang;
}
?>

<html lang="fr" class="theme-color-1a77d4 theme-skin-light">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php echo $tag['meta-description']; ?>
    <meta name="robots" content="all"/>
    <meta name="author" content="Valentin Maupin"/>
    <link rel="alternate" hreflang="en" href="index.php"/>
    <title><?php echo $menu['title']; ?></title>

    <!-- 	balises Open Graph pour les réseaux sociaux -->
    <meta property="fb:admins" content="10205598796318863"/>
    <?php echo $tag['og-title']; ?>
    <meta property="og:site_name" content="CV Valentin Maupin"/>
    <?php echo $tag['og-lang']; ?>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="www.valentin.maupin.eu"/>
    <meta property="og:image" content="www.valentin.maupin.eu/img/valentinmaupin.jpg"/>
    <?php echo $tag['og-description']; ?>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/ico" href="img/favicon.png"/>

    <!-- Google Fonts -->
    <link rel="stylesheet" type="text/css" href="fonts/fredoka-one.css">
    <link rel="stylesheet" type="text/css" href="fonts/cyrillic-ext.css">

    <!-- Icon Fonts -->
    <link rel="stylesheet" type="text/css" href="fonts/map-icons/css/map-icons.min.css">
    <link rel="stylesheet" type="text/css" href="fonts/icomoon/style.css">

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="js/plugins/jquery.bxslider/jquery.bxslider.css">
    <link rel="stylesheet" type="text/css" href="js/plugins/jquery.customscroll/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" type="text/css" href="js/plugins/jquery.mediaelement/mediaelementplayer.min.css">
    <link rel="stylesheet" type="text/css" href="js/plugins/jquery.fancybox/jquery.fancybox.css">
    <link rel="stylesheet" type="text/css" href="js/plugins/jquery.owlcarousel/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="js/plugins/jquery.owlcarousel/owl.theme.css">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="colors/blue-grey.css">
    <link rel="stylesheet" type="text/css" href="colors/blue.css">
    <link rel="stylesheet" type="text/css" href="perso.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Modernizer for detect what features the user’s browser has to offer -->
    <script type="text/javascript" src="js/libs/modernizr.js"></script>

    <!-- Google RreCaptcha -->
    <script src='https://www.google.com/recaptcha/api.js'></script>

    <!-- Start Google analytics -->
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-76800986-1', 'auto');
        ga('send', 'pageview');
    </script>
    <!-- End Google analytics -->

</head>

<body class="home header-has-img loading">

<div class="mobile-nav">
    <button class="btn-mobile mobile-nav-close"><i class="rsicon rsicon-close"></i></button>

    <div class="mobile-nav-inner">
        <nav id="mobile-nav" class="nav">
            <ul class="clearfix">
                <li><a href="#about"><?php echo $menu['description']; ?></a></li>
                <li><a href="#education"><?php echo $menu['education']; ?></a></li>
                <li><a href="#experience"><?php echo $menu['profExp']; ?></a></li>
                <li><a href="#skills"><?php echo $menu['skills']; ?></a></li>
                <li><a href="#qualities"><?php echo $menu['qualities']; ?></a></li>
                <li><a href="#hobbies"><?php echo $menu['hobbies']; ?></a></li>
                <li><a href="#contact"><?php echo $menu['contact']; ?><span></span></a></li>
            </ul>
        </nav>
    </div>
</div><!-- .mobile-nav -->

<div class="sidebar sidebar-fixed">
    <button class="btn-sidebar btn-sidebar-close"><i class="rsicon rsicon-close"></i></button>

    <div class="widget-area">
        <aside class="widget widget-profile">
            <div class="profile-photo">
                <img src="img/valentinmaupin.jpg" alt="<?php echo $menu['name']; ?>"/>
            </div>
            <div class="profile-info">
                <h2 class="profile-title"><?php echo $menu['name']; ?></h2>
                <h3 class="profile-position"><?php echo $text['position']; ?></h3>
            </div>
        </aside><!-- .widget-profile -->

        <aside class="widget widget_search">
            <h2 class="widget-title"><?php echo $keywords['search']; ?></h2>
            <form class="search-form">
                <label class="ripple">
                    <span class="screen-reader-text"><?php echo $keywords['search']; ?> :</span>
                    <input class="search-field" type="search" placeholder="<?php echo $keywords['search']; ?>">
                </label>
                <input type="submit" class="search-submit" value="<?php echo $keywords['search']; ?>">
            </form>
        </aside><!-- .widget_search -->

        <aside class="widget widget_contact">
            <h2 class="widget-title">Contact</h2>
            <form class="contactForm" action="recaptcha.php" method="post" data-captcha="true">
                <div class="input-field">
                    <input class="contact-name" type="text" name="name"/>
                    <span class="line"></span>
                    <label><?php echo $keywords['name']; ?></label>
                </div>

                <div class="input-field">
                    <input class="contact-email" type="email" name="email"/>
                    <span class="line"></span>
                    <label><?php echo $keywords['email']; ?></label>
                </div>

                <div class="input-field">
                    <input class="contact-subject" type="text" name="subject"/>
                    <span class="line"></span>
                    <label><?php echo $keywords['subject']; ?></label>
                </div>

                <div class="input-field">
                    <textarea class="contact-message" rows="4" name="message"></textarea>
                    <span class="line"></span>
                    <label><?php echo $keywords['message']; ?></label>
                </div>

                <span class="btn-outer btn-primary-outer ripple">
                            <input class="contact-submit btn btn-lg btn-primary" type="submit" value="Envoyer"/>
                        </span>

                <div class="contact-response"></div>
            </form>
        </aside><!-- .widget_contact -->


        <aside class="widget widget_tag_cloud">
            <h2 class="widget-title"><?php echo $keywords['keywords']; ?></h2>
            <div class="tagcloud">
                <a href="" title="1 topic"><?php echo $keywords['it']; ?></a>
                <a href="" title="9 topics"><?php echo $keywords['programming']; ?></a>
                <a href="" title="10 topics"><?php echo $keywords['linux']; ?></a>
                <a href="" title="6 topics"><?php echo $keywords['sport']; ?></a>
            </div>
        </aside><!-- .widget_tag_cloud -->


    </div><!-- .widget-area -->
</div><!-- .sidebar -->

<div class="wrapper">
    <header class="header">
        <div class="head-bg" style="background-image: url('img/computer.jpg')"></div>

        <div class="head-bar">
            <div class="head-bar-inner">
                <div class="row">
                    <div class="col-sm-3 col-xs-6">
                        <form action="" method="post" name="formChangeLang" id="formChangeLang">
                            <INPUT type="hidden" name="nextLanguage" value="<?php
                            if ($currentLang == "ENGLISH") {
                                echo "FRENCH";
                            } else {
                                echo "ENGLISH";
                            }
                            ?>">
                            <a class="logo" href="#">
                                        <span onClick=formChangeLang.submit()><?php
                                            if ($currentLang == "ENGLISH") {
                                                echo "FRENCH";
                                            } else {
                                                echo "ENGLISH";
                                            }
                                            ?>
                                        </span>
                            </a>
                            <!-- 							<a class="head-logo" href=""><img src="img/rs-logo.png" alt="version"/></a> -->
                        </form>
                    </div>

                    <div class="col-sm-9 col-xs-6">
                        <div class="nav-wrap">
                            <nav id="nav" class="nav">
                                <ul class="clearfix">
                                    <li><a href="#about"><?php echo $menu['description']; ?></a></li>
                                    <li><a href="#education"><?php echo $menu['education']; ?></a></li>
                                    <li><a href="#experience"><?php echo $menu['profExp']; ?></a></li>
                                    <li><a href="#skills"><?php echo $menu['skills']; ?></a></li>
                                    <li><a href="#qualities"><?php echo $menu['qualities']; ?></a></li>
                                    <li><a href="#hobbies"><?php echo $menu['hobbies']; ?></a></li>
                                    <li><a href="#contact"><?php echo $menu['contact']; ?><span></span></a></li>
                                </ul>
                            </nav>

                            <button class="btn-mobile btn-mobile-nav"><?php echo $keywords['menu']; ?></button>
                            <button class="btn-sidebar btn-sidebar-open"><i class="rsicon rsicon-menu"></i></button>
                        </div><!-- .nav-wrap -->
                    </div>
                </div>
            </div>
        </div>
    </header><!-- .header -->

    <div class="content">
        <div class="container">

            <!-- START: PAGE CONTENT -->
            <section id="about" class="section section-about">
                <div class="animate-up">
                    <div class="section-box">
                        <div class="profile">
                            <div class="row">
                                <div class="col-xs-5">
                                    <div class="profile-photo"><img src="img/valentinmaupin.jpg" alt="Valentin Maupin"/>
                                    </div>
                                </div>
                                <div class="col-xs-7">
                                    <div class="profile-info">
                                        <div class="profile-preword"><span><?php echo $keywords['welcome']; ?></span>
                                        </div>
                                        <h1 class="profile-title"><span><?php echo $keywords['iam']; ?></span>
                                            <strong><?php echo $menu['name']; ?></strong></h1>
                                        <h2 class="profile-position"><?php echo $text['position']; ?></h2></div>
                                    <ul class="profile-list">
                                        <li class="clearfix">
                                            <b class="title"><?php echo $keywords['age']; ?></b>
                                            <span class="cont">20</span>
                                        </li>
                                        <li class="clearfix">
                                            <b class="title"><?php echo $keywords['address']; ?></b>
                                            <span class="cont"><?php echo $contact['address']; ?></span>
                                        </li>
                                        <li class="clearfix">
                                            <b class="title"><?php echo $keywords['email']; ?></b>
                                            <span class="cont"><a
                                                        href="mailto:valentin@maupin.eu"><?php echo $contact['email']; ?></a></span>
                                        </li>
                                        <li class="clearfix">
                                            <b class="title"><?php echo $keywords['tel']; ?></b>
                                            <span class="cont"><a
                                                        href="tel:+33662956844)"><?php echo $contact['tel']; ?></a></span>
                                        </li>
                                        <!--                                                 <li class="clearfix"> -->
                                        <!--                                                     <strong class="title"><span class="button">On Vacation</span></strong> -->
                                        <!--                                                     <span class="cont"><i class="icon icon-calendar"></i>till March 25, 2016</span> -->
                                        <!--                                                 </li> -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="profile-social">
                            <ul class="social">
                                <li><font color="white"><b><?php echo $text['description'] ?></b></font></li>
                                <!-- 					<li><a class="ripple-centered" href="https://www.facebook.com/MaupinValentin/" target="_blank"><i class="rsicon rsicon-facebook"></i></a></li> -->
                                <!--<li><a class="ripple-centered" href="https://twitter.com/Valentin_Maupin" target="_blank"><i class="rsicon rsicon-twitter"></i></a></li>-->
                                <li><a class="ripple-centered"
                                       href="https://www.linkedin.com/in/valentin-maupin-13019b139/" target="_blank"><i
                                                class="rsicon rsicon-linkedin"></i></a></li>
                                <!--<li><a class="ripple-centered" href="https://plus.google.com/u/0/+ValentinMaupin" target="_blank"><i class="rsicon rsicon-google-plus"></i></a></li>-->
                                <!-- 					<li><a class="ripple-centered" href="https://dribbble.com" target="_blank"><i class="rsicon rsicon-dribble"></i></a></li> -->
                                <!--<li><a class="ripple-centered" href="https://www.instagram.com/valentin_maupin/" target="_blank"><i class="rsicon rsicon-instagram"></i></a></li>-->
                            </ul>
                        </div>
                    </div>

                    <div class="section-txt-btn">
                        <p><b><?php echo $text['download']; ?></b></p>
                        <a class="btn btn-border ripple" style="color: #1a77d4" target="_blank"
                           href="<?php echo $text['downloadDoc']; ?>"><b><?php echo $keywords['download']; ?></b></a>
                    </div>

                </div>
            </section><!-- #about -->

            <section id="text-section" class="section section-text">
                <div class="animate-up animated">
                    <h2 class="section-title"><?php echo $menu['description']; ?></h2>
                    <div class="section-box">
                        <p class="justify"><?php echo $text['bio']; ?></p>
                    </div>
                </div>
            </section><!-- #about -->

            <section id="education" class="section section-education">
                <div class="animate-up">
                    <h2 class="section-title animate"><?php echo $menu['education']; ?></h2>
                    <div class="timeline">
                        <div class="timeline-bar"></div>
                        <div class="timeline-inner clearfix">

                            <div class="timeline-box timeline-box-compact timeline-box-left">
                                <span class="dot"></span>

                                <div class="timeline-box-inner animate-right">
                                    <?php echo $education['inge']; ?>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-compact timeline-box-right">
                                <span class="dot"></span>

                                <div class="timeline-box-inner animate-left">
                                    <?php echo $education['prepa']; ?>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-compact timeline-box-left">
                                <span class="dot"></span>

                                <div class="timeline-box-inner animate-right">
                                    <?php echo $education['bac']; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!-- #education -->

            <section id="experience" class="section section-experience">
                <div class="animate-up">
                    <h2 class="section-title animate"><?php echo $menu['profexp']; ?></h2>

                    <div class="timeline">
                        <div class="timeline-bar"></div>
                        <div class="timeline-inner clearfix">

                            <div class="timeline-box timeline-box-left">
                                <span class="dot"></span>
                                <div class="timeline-box-inner animate-right">
                                    <span class="arrow"></span>
                                    <?php echo $skills['partpol']; ?>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-right">
                                <span class="dot"></span>
                                <div class="timeline-box-inner animate-left">
                                    <span class="arrow"></span>
                                    <?php echo $skills['erd']; ?>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-left">
                                <span class="dot"></span>
                                <div class="timeline-box-inner animate-right">
                                    <span class="arrow"></span>
                                    <?php echo $skills['manorga']; ?>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-right">
                                <span class="dot"></span>
                                <div class="timeline-box-inner animate-left">
                                    <span class="arrow"></span>
                                    <?php echo $skills['flint']; ?>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-right">
                                <span class="dot"></span>
                                <div class="timeline-box-inner animate-left">
                                    <span class="arrow"></span>
                                    <?php echo $skills['decathlon']; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!-- #experience -->

            <section id="clients" class="section section-clients">
                <!-- start : clients | entreprises citées | company quotes -->
                <div class="animate-up">
                    <h2 class="section-title"><?php echo $company['title']; ?></h2>

                    <div class="clients-carousel">

                        <div class="client-logo">
                            <a href="http://partenairepologne.com" target="_blank"><img
                                        src="img/logos/partenairepologne.png" title="<?php echo $company['partpol']; ?>"
                                        alt="Partenaire Pologne"/></a>
                        </div>

                        <div class="client-logo">
                            <a href="http://ereputationdefender.com" target="_blank"><img
                                        src="img/logos/ereputationdefender.png" title="<?php echo $company['erd']; ?>"
                                        alt="EReputationDefender"/></a>
                        </div>

                        <div class="client-logo">
                            <a href="http://manorga.com" target="_blank"><img src="img/logos/manorga.jpg"
                                                                              title="<?php echo $company['manorga']; ?>"
                                                                              alt="Manorga"/></a>
                        </div>

                        <div class="client-logo">
                            <a href="http://decathlon.com" target="_blank"><img src="img/logos/decathlon.png"
                                                                                title="<?php echo $company['decathlon']; ?>"
                                                                                alt="Décathlon"/></a>
                        </div>

                        <div class="client-logo">
                            <a href="http://www.flintgrp.com/" target="_blank"><img src="img/logos/flintgroup.png"
                                                                                    title="<?php echo $company['flint']; ?>"
                                                                                    alt="Flint Group"/></a>
                        </div>
                    </div>
                </div>
            </section><!-- #clients -->
            <section id="skills" class="section section-skills">
                <div class="animate-up">
                    <h2 class="section-title"><?php echo $menu['skills']; ?></h2>
                    <div class="section-box">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="progress-bar">
                                    <div class="bar-data">
                                        <span class="bar-title"><?php echo $skills['dev']; ?></span>
                                        <span class="bar-value">Good skills</span>
                                    </div>
                                    <div class="bar-line">
                                        <span class="bar-fill" data-width="60%"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="progress-bar">
                                    <div class="bar-data">
                                        <span class="bar-title"><?php echo $skills['web']; ?></span>
                                        <span class="bar-value">Going to mastering</span>
                                    </div>
                                    <div class="bar-line">
                                        <span class="bar-fill" data-width="77%"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="progress-bar">
                                    <div class="bar-data">
                                        <span class="bar-title"><?php echo $skills['windows']; ?></span>
                                        <span class="bar-value">Master</span>
                                    </div>
                                    <div class="bar-line">
                                        <span class="bar-fill" data-width="90%"></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="progress-bar">
                                    <div class="bar-data">
                                        <span class="bar-title"><?php echo $skills['linux']; ?></span>
                                        <span class="bar-value">Good skills</span>
                                    </div>
                                    <div class="bar-line">
                                        <span class="bar-fill" data-width="70%"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="progress-bar">
                                    <div class="bar-data">
                                        <span class="bar-title"><?php echo $skills['srv']; ?></span>
                                        <span class="bar-value">In progress</span>
                                    </div>
                                    <div class="bar-line">
                                        <span class="bar-fill" data-width="65%"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">

                            </div>
                        </div>

                    </div>
                </div>
            </section><!-- #skills -->

            <section id="qualities" class="section section-skills">
                <div class="animate-up">
                    <h2 class="section-title"><?php echo $menu['qualities']; ?></h2>
                    <div class="section-box">
                        <div class="row">
                            <div class="col-sm-6">
                                <ul class="listetexteg">
                                    <li><?php echo $qualities['adaptability']; ?></li>
                                    <li><?php echo $qualities['rigor']; ?></li>
                                </ul>
                            </div>
                            <div class="col-sm-6">
                                <ul class="listetexteg">
                                    <li><?php echo $qualities['openminded']; ?></li>
                                    <li><?php echo $qualities['autonomous']; ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section><!-- #qualites -->

            <section id="interests" class="section section-interests">
                <div class="animate-up">
                    <h2 class="section-title" id="hobbies"><?php echo $interests['title']; ?></h2>

                    <div class="section-box">
                        <div class="row">
                            <div class="col-sm-6">
                                <?php echo $interests['IT']; ?>
                            </div>
                            <div class="col-sm-6">
                                <?php echo $interests['health']; ?>
                            </div>
                        </div>
                        <br>
                        <ul class="interests-list">
                            <li>
                                <i class="map-icon map-icon-gym"></i>
                                <span><?php echo $interests['sport']; ?></span>
                            </li>
                            <li>
                                <i class="map-icon map-icon-university"></i>
                                <span><?php echo $interests['learning']; ?></span>
                            </li>
                            <li>
                                <i class="map-icon map-icon-electronics-store"></i>
                                <span><?php echo $interests['technologies']; ?></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section><!-- #interests -->


            <section id="contact" class="section section-contact">
                <div class="animate-up">
                    <h2 class="section-title"><?php echo $menu['contact']; ?></h2>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="section-box contact-form">
                                <h3><?php echo $contact['title']; ?></h3>

                                <form class="contactForm" action="recaptcha.php" method="post" data-captcha="true">
                                    <div class="input-field">
                                        <input class="contact-name" type="text" name="name"
                                               title="Enter your family name and your first name"/>
                                        <span class="line"></span>
                                        <label><?php echo $keywords['name']; ?></label>
                                    </div>

                                    <div class="input-field">
                                        <input class="contact-email" type="email" name="email"
                                               title="Entrer your email address"/>
                                        <span class="line"></span>
                                        <label><?php echo $keywords['email']; ?></label>
                                    </div>

                                    <div class="input-field">
                                        <input class="contact-subject" type="text" name="subject"
                                               title="Enter the subject of your message"/>
                                        <span class="line"></span>
                                        <label><?php echo $keywords['subject']; ?></label>
                                    </div>

                                    <div class="input-field">
                                        <textarea class="contact-message" rows="4" name="message"
                                                  title="Enter your message to send to Valentin"></textarea>
                                        <span class="line"></span>
                                        <label><?php echo $keywords['message']; ?></label>
                                    </div>

                                    <span class="btn-outer btn-primary-outer ripple">
                                                <input class="contact-submit btn btn-lg btn-primary" type="submit"
                                                       value="Send"/>
                                            </span>
                                    <div class="contact-response"></div>
                                </form>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="section-box contact-info has-map">
                                <ul class="contact-list">
                                    <li class="clearfix">
                                        <strong><?php echo $keywords['address']; ?></strong>
                                        <span><?php echo $contact['address']; ?></span>
                                    </li>
                                    <li class="clearfix">
                                        <strong><?php echo $keywords['tel']; ?></strong>
                                        <span><a href="tel:+33662956844"><?php echo $contact['tel']; ?></a></span>
                                    </li>
                                    <li class="clearfix">
                                        <strong><?php echo $keywords['email']; ?></strong>
                                        <span><a href="mailto:valentin@maupin.eu"><?php echo $contact['email']; ?></a></span>
                                    </li>
                                </ul>
                                <div id="map" data-latitude="50.611281" data-longitude="3.138174"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!-- #contact -->
            <!-- END: PAGE CONTENT -->

        </div><!-- .container -->
    </div><!-- .content -->

    <footer class="footer">
        <div class="footer-social">
            <ul class="social">
                <!-- 					<li><a class="ripple-centered" href="https://www.facebook.com/MaupinValentin/" target="_blank"><i class="rsicon rsicon-facebook"></i></a></li> -->
                <!--<li><a class="ripple-centered" href="https://twitter.com/Valentin_Maupin" target="_blank"><i class="rsicon rsicon-twitter"></i></a></li>-->
                <li><a class="ripple-centered" href="https://www.linkedin.com/in/valentinmaupin" target="_blank"><i
                                class="rsicon rsicon-linkedin"></i></a></li>
                <!--<li><a class="ripple-centered" href="https://plus.google.com/u/0/+ValentinMaupin" target="_blank"><i class="rsicon rsicon-google-plus"></i></a></li>-->
                <!-- 					<li><a class="ripple-centered" href="https://dribbble.com" target="_blank"><i class="rsicon rsicon-dribble"></i></a></li> -->
                <!--<li><a class="ripple-centered" href="https://www.instagram.com/valentin_maupin/" target="_blank"><i class="rsicon rsicon-instagram"></i></a></li>-->
            </ul>
            <div class="clients-carousel">
                <p class="textecenter">
                    <small><?php echo $menu['name']; ?> | <?php echo $contact['copy']; ?> | <a
                                href="<?php echo $contact['mentionsLink']; ?>"><?php echo $contact['mentions']; ?></a>
                    </small>
                </p>
            </div>

        </div>
    </footer><!-- .footer -->
</div><!-- .wrapper -->

<a class="btn-scroll-top" href="#"><i class="rsicon rsicon-arrow-up"></i></a>
<div id="overlay"></div>
<div id="preloader">
    <div class="preload-icon"><span></span><span></span></div>
    <div class="preload-text"><?php echo $keywords['loading']; ?> ...</div>
</div>

<!-- Scripts -->
<script type="text/javascript" src="ajax/jquery.js"></script>
<script type="text/javascript" src="ajax/maps-api.js"></script>
<script type="text/javascript" src="fonts/map-icons/js/map-icons.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.mousewheel-3.0.6.pack.js"></script>
<script type="text/javascript" src="js/plugins/imagesloaded.pkgd.min.js"></script>
<script type="text/javascript" src="js/plugins/isotope.pkgd.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.appear.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.onepagenav.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.bxslider/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.customscroll/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.mediaelement/mediaelement-and-player.min.js"></script>
<script type="text/javascript" src="js/plugins/jquery.fancybox/jquery.fancybox.pack.js"></script>
<script type="text/javascript" src="js/plugins/jquery.fancybox/helpers/jquery.fancybox-media.js"></script>
<script type="text/javascript" src="js/plugins/jquery.owlcarousel/owl.carousel.min.js"></script>
<script type="text/javascript" src="js/site.min.js"></script>
</body>
</html>