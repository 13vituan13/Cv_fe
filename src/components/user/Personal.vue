<script>
export default {
  name: 'Personal',
  props: {
    personalInfo: {
      type: Object,
      default: null,
    },
  },
};
</script>
<template>
    <section id="PERSONAL" class="elementor-section mt-5 has-pad animated fadeIn">
        <div class="row">
            <div class="col-md-7 mb-5">
                <div class="elementor-widget-wrap">
                    <div class="elementor-element elementor-widget">
                        <div class="elementor-widget-container">
                            Xin chào, <span>tôi là</span>
                        </div>
                    </div>
                    <div class="elementor-element elementor-widget">
                        <div class="elementor-widget-container">
                            <h1 v-if="personalInfo" class="elementor-heading-title">
                                {{ personalInfo.user_name }}
                            </h1>
                        </div>
                    </div>
                    <div class="elementor-element elementor-widget elementor-widget-divider">
                        <div class="elementor-widget-container">
                            <div class="elementor-divider">
                                <span class="elementor-divider-separator"></span>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            Ngày Sinh: <span>{{ personalInfo.birthday }}</span>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            Điện Thoại: <span>{{ personalInfo.phone }}</span>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            Email: <span>{{ personalInfo.email }}</span>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            Địa chỉ: <span>{{ personalInfo.address }}</span>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            Nghề nghiệp: <span>Web Developer enginer</span>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            Kinh nghiệm: <span>{{ personalInfo.experience }} năm</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="elementor-widget-wrap">
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <img class="w-100" width="437" height="562" src="../../assets/image/vituan.png" alt="QVT"
                                fetchpriority="high" decoding="async">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>
  