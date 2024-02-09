<script setup>
import SidebarMenu from '../../components/user/SidebarMenu.vue'
import Personal from '../../components/user/Personal.vue'
import CvDownLoad from '../../components/user/CvDownLoad.vue'
import About from '../../components/user/About.vue'
import Skill from '../../components/user/Skill.vue'
import Resume from '../../components/user/Resume.vue'
import Hobbies from '../../components/user/Hobbies.vue'
import Projects from '../../components/user/Projects.vue'
import Counters from '../../components/user/Counters.vue'
import Contact from '../../components/user/Contact.vue'

// Style Css
import '../../assets/css/style.css'
import { onMounted } from 'vue'
import $ from 'jquery'

onMounted(() => {
    setupSmoothScroll()
    setupWaypoint()
    setupScroll()
    setupReveal()
})

function setupSmoothScroll() {
    // Smooth scrolling for menu links
    $("#top-menu a").on("click", function (event) {
        if (this.hash !== "") {
            $("#top-menu li").removeClass("active");
            $(this).parent().addClass("active");
            event.preventDefault();
            var hash = this.hash;
            if ($(hash).length) {
                $("html, body").animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () { });
            }
        }
    });
}

function setupWaypoint() {
    const handleScroll = () => {
        const sections = document.querySelectorAll('.elementor-section');
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < viewportHeight * 0.75) {
                section.classList.remove("invisible");
                section.classList.add("animated", "fadeIn");
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
}

function setupScroll() {
    // Scroll position handling
    $(window).scroll(() => {
        var scrollPos = $(document).scrollTop();
        $("#top-menu a").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (
                refElement.length &&
                refElement.position().top <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos
            ) {
                $("#top-menu li").removeClass("active");
                currLink.parent().addClass("active");
            }
        });
        if (scrollPos + $(window).height() === $(document).height()) {
            $("#scroll-down i").removeClass("bi-arrow-down").addClass("bi-arrow-up");
        } else if (scrollPos === 0) {
            $("#scroll-down i").removeClass("bi-arrow-up").addClass("bi-arrow-down");
        }
    });
}

function setupReveal() {
    // Initialize reveal functionality
    document.addEventListener("DOMContentLoaded", () => {
        var card = document.querySelector(".card");
        if (card) {
            var reveal = card.querySelector(".card-reveal");
            var showMoreBtn = card.querySelector(".show-more-btn");
            var closeBtn = reveal.querySelector(".close-btn");
            showMoreBtn.addEventListener("click", () => {
                reveal.style.height = reveal.scrollHeight + "px";
            });
            closeBtn.addEventListener("click", () => {
                reveal.style.height = "0";
            });
        }
    });
}
</script>

<template>
    <main id="site-main">
        <!-- <header id="masthead-mobile" class="site-main__header standard">
            <nav class="navbar fixed-bottom navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Fixed bottom</a>
                </div>
              </nav>
        </header> -->
        <section class="site-main__container">
            <div class="content">
                <div class="wrap">
                    <SidebarMenu />
                    <div class="primary-area">
                        <div class="right-wrap"></div>
                        <div class="primary-content">

                            <!-- Open Main Content-->
                            <div class="main-content">

                                <!-- Open Main Content Wrap-->
                                <div class="main-content__wrap">

                                    <!-- Open Cv -->
                                    <article>
                                        <!-- Open header -->
                                        <header class="entry-header">
                                            <h1 class="entry-title with-border"></h1>
                                        </header>
                                        <!-- Close header -->
                                        <!-- Open entry-content -->
                                        <div class="entry-content">
                                            <!-- Open elementor -->
                                            <div class="elementor">

                                                <Personal />

                                                <CvDownLoad />

                                                <About />

                                                <Skill />

                                                <Resume />

                                                <Hobbies />

                                                <Projects />

                                                <Counters />

                                                <Contact />
                                            </div>
                                            <!-- Close elementor -->
                                        </div>
                                        <!-- Close entry-content -->
                                    </article>
                                    <!-- Close Cv -->

                                </div>
                                <!-- Close Open Main Content Wrap -->

                                <!-- Open footer -->
                                <footer id="footer" class="site-footer standard" role="contentinfo">
                                    <div class="footer-wrap">
                                        <div class="site-info">
                                            <p class="copyright">
                                                © 2024 Quách Vĩ Tuấn
                                            </p>
                                        </div><!-- .site-info -->

                                        <nav class="footer-socials">
                                            <ul class="social-links-menu">
                                                <li>
                                                    <a href="#" target="&quot;_blank&quot;">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="&quot;_blank&quot;">
                                                        <i class="fab fa-x-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="&quot;_blank&quot;">
                                                        <i class="fab fa-pinterest-p"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </footer>
                                <!-- Close footer -->

                            </div>
                            <!-- Close Main Content-->

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div id="scroll-down" class="scroll-down">
        <i class="icon bi bi-arrow-down"></i>
    </div>
</template>