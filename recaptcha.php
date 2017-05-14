<?php
include_once 'translation/en.php';
?>
<!DOCTYPE html>
<html lang="en" class="theme-color-1a77d4 theme-skin-light">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description"
          content="Valentin Maupin est un él&#232;ve ingénieur en réseaux et télécommunications à Télécom-Lille. Découvrez son CV."/>
    <meta name="robots" content="all"/>
    <link rel="alternate" hreflang="en-GB" href="index.php"/>
    <title>Captcha | Valentin Maupin </title>

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
    <link rel="stylesheet" type="text/css" href="colors/green.css">
    <link rel="stylesheet" type="text/css" href="colors/blue-grey.css">
    <link rel="stylesheet" type="text/css" href="colors/blue.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Modernizer for detect what features the user’s browser has to offer -->
    <script type="text/javascript" src="js/libs/modernizr.js"></script>

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


<div class="sidebar sidebar-fixed">
    <button class="btn-sidebar btn-sidebar-close"><i class="icon icon-close"></i></button>

    <div class="widget-area">
        <aside class="widget widget-profile">
            <div class="profile-photo">
                <img src="img/valentinmaupin.jpg" alt="Valentin Maupin"/>
            </div>
            <div class="profile-info">
                <h2 class="profile-title">Valentin Maupin</h2>
                <h3 class="profile-position">engineering student in <strong>computer networks</strong> and <strong>telecommunications</strong>
                </h3>
            </div>
        </aside><!-- .widget-profile -->

        <aside class="widget widget_search">
            <h2 class="widget-title">Search</h2>
            <form class="search-form">
                <label class="ripple">
                    <span class="screen-reader-text">Search for:</span>
                    <input class="search-field" type="search" placeholder="Chercher">
                </label>
                <input type="submit" class="search-submit" value="Search">
            </form>
        </aside><!-- .widget_search -->

        <aside class="widget widget_contact">
            <h2 class="widget-title">Contact</h2>
            <form class="contactForm" action="recaptcha-en.php" method="post" data-captcha="true">
                <div class="input-field">
                    <input class="contact-name" type="text" name="name"/>
                    <span class="line"></span>
                    <label>Nom</label>
                </div>

                <div class="input-field">
                    <input class="contact-email" type="email" name="email"/>
                    <span class="line"></span>
                    <label>Email</label>
                </div>

                <div class="input-field">
                    <input class="contact-subject" type="text" name="subject"/>
                    <span class="line"></span>
                    <label>Sujet</label>
                </div>

                <div class="input-field">
                    <textarea class="contact-message" rows="4" name="message"></textarea>
                    <span class="line"></span>
                    <label>Message</label>
                </div>

                <span class="btn-outer btn-primary-outer ripple">
                            <input class="contact-submit btn btn-lg btn-primary" type="submit" value="Envoyer"/>
                        </span>

                <div class="contact-response"></div>
            </form>
        </aside><!-- .widget_contact -->


        <aside class="widget widget_tag_cloud">
            <h2 class="widget-title">Tag cloud</h2>
            <div class="tagcloud">
                <a href="" title="1 topic">IT</a>
                <a href="" title="9 topics">Programming</a>
                <a href="" title="10 topics">Linux</a>
                <a href="" title="6 topics">Sport</a>
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
                        <a class="logo" href="index.php"><span>HOME</span></a>
                        <!-- 							<a class="head-logo" href=""><img src="img/rs-logo.png" alt="version"/></a> -->
                    </div>


                </div>
            </div>
        </div>
    </header><!-- .header -->

    <div class="content">
        <div class="container">

            <!-- START: PAGE CONTENT -->
            <?php
            require_once __DIR__ . '/php/recaptcha/autoload.php';
            $siteKey = '6LfrlB0TAAAAANFU3LcgSFfAxOit5hSkG3e3OpI5'; // visit https://www.google.com/recaptcha/admin to generate keys
            $secret = '6LfrlB0TAAAAAODdGM-NSDoTQPIiK92mZfTMUSJe';
            $lang = 'en'; // reCAPTCHA supported 40+ languages listed here: https://developers.google.com/recaptcha/docs/language
            ?>

            <section class="section section-text text-center">
                <div class="animate-up animated">
                    <h2 class="section-title" style="color: #1a77d4;">Are you a bot? Aren't you?</h2>
                    <div class="section-box">
                        <?php if ($siteKey === '' || $secret === ''): ?>
                            <h4>Add your keys</h4>
                            <p>If you do not have keys already then visit
                                <a href="https://www.google.com/recaptcha/admin">
                                    https://www.google.com/recaptcha/admin</a> to generate them.<br/>
                                Edit <strong>recaptcha.php</strong> file and set the respective keys in
                                <strong>$siteKey</strong> and
                                <strong>$secret</strong>. Reload the page after this.</p>
                            <?php
                        elseif (isset($_POST['g-recaptcha-response'])):
                            $recaptcha = new \ReCaptcha\ReCaptcha($secret);
                            $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
                            if ($resp->isSuccess()):
                                // If the response is a success, that's it!
                                ?>
                                <h3>Congratulation!</h3>
                                <p>Your email was sent successfully! <a href="index.php">Go Back</a></p>
                                <?php
                                require_once __DIR__ . '/php/mailsender.php';
                            else:
                                // If it's not successful, then one or more error codes will be returned.
                                ?>
                                <p>Something went wrong <a href="index.php#contact">please try again</a>.</p>
                                <?php
                            endif;
                        else:
                            // Add the g-recaptcha tag to the form you want to include the reCAPTCHA element
                            ?>
                            <p>Complete the reCAPTCHA then submit the form.</p>
                            <form action="" method="post">
                                <input type="hidden" value="<?php echo $_POST['name']; ?>" name="rsName">
                                <input type="hidden" value="<?php echo $_POST['email']; ?>" name="rsEmail">
                                <input type="hidden" value="<?php echo $_POST['subject']; ?>" name="rsSubject">
                                <input type="hidden" value="<?php echo $_POST['message']; ?>" name="rsMessage">

                                <div class="input-field">
                                    <div class="g-recaptcha " data-sitekey="<?php echo $siteKey; ?>"></div>
                                    <script type="text/javascript"
                                            src="https://www.google.com/recaptcha/api.js?hl=<?php echo $lang; ?>"></script>
                                </div>
                                <input type="submit" class="btn btn-lg btn-primary" value="Submit"/>
                            </form>
                        <?php endif; ?>
                    </div>
                </div>
            </section>
            <!-- END: PAGE CONTENT -->

        </div><!-- .container -->
    </div><!-- .content -->

    <a class="btn-scroll-top" href="#"><i class="icon icon-arrow-up"></i></a>
    <div id="overlay"></div>
    <div id="preloader">
        <div class="preload-icon"><span></span><span></span></div>
        <div class="preload-text">Loading ...</div>
    </div>
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