<template>
    <section id="CONTACT" class="elementor-section elementor-section-ptb invisible has-pad">
        <div class="elementor-title">
            <h2 class="heading">Liên hệ</h2>
            <div class="heading__sub">Có sẵn để làm việc tự do
                <!-- Available for freelance -->
            </div>
        </div>
        <form id="contact-form" role="form">
            <div class="contact-wrapper">

                <!-- Left contact -->
                <div id="contact-wrapper-content">
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="*NAME" name="name" value=""
                                required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="email" class="form-control" id="email" placeholder="*EMAIL" name="email" value=""
                                required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <input type="phone" class="form-control" id="phone" placeholder="*PHONE" name="phone" value=""
                                required>
                        </div>
                    </div>
                    <textarea class="form-control" rows="10" placeholder="*MESSAGE" name="message" required></textarea>
                </div>

                <!-- Right contact -->
                <div class="direct-contact-container">
                    <div class="contact-heading-title">Let's talk</div>
                    <div class="contact-heading-quote">Got a project? don’t
                        hesitate to contact.</div>
                    <ul class="contact-list">
                        <li class="list-item"><i class="bi bi-geo-alt-fill"><span class="contact-text place">City,
                                    State</span></i></li>
                        <li class="list-item"><i class="bi bi-telephone-fill"><span class="contact-text place"><a
                                        href="tel:1-212-555-5555" title="Give me a call">(212)
                                        555-2368</a></span></i></li>
                        <li class="list-item"><i class="bi bi-envelope-fill"><span class="contact-text place"><a
                                        href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i>
                        </li>
                    </ul>
                    <hr>
                    <ul class="social-media-list">
                        <li><a href="#" target="_blank" class="contact-icon">
                                <i class="bi bi-github"></i></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                                <i class="bi bi-github"></i></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                                <i class="bi bi-github"></i></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                                <i class="bi bi-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div class="alt-send-button">
                    <i class="bi bi-send"></i><span class="send-text">SEND</span>
                </div>
            </button>
        </form>
    </section>
</template>
<style scoped></style>