<template>
    <div class="getting-started-bg">
        <div class="arrow-grid">
            <div class="arrow-grid-child-fw getting-started">
                <div class="arrow-logo">
                    <img :src="arrowLogo" alt="Arrow Logo">
                </div>
            </div>
        </div>
        <div class="homepage-card">
            <h3>Welcome!</h3>
            <div class="button primary-btn-light-bg primary-btn-sm">
                <div class="btn-small" @click="startAuth">Get Started</div>
            </div> 
            <div class="lighting-mode"></div>
        </div>
    </div>
</template>

<script setup>
const arrowLogo = '/logo/primary_combination_mark.png';
const startAuth = () => {
    window.location.href = '/authenticate/email';
}
</script>

<style scoped lang="scss">
.getting-started-bg {
    background-image: url('/images/arrow_background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    padding: none;

    .getting-started {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: none;

        .arrow-logo {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: none;
            position: absolute;
            top: 53px;

            img {
                width: 150px;
            }
        }
    }

    // homepage-card should stick to bottom of page
    .homepage-card {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 28px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: $primary_arrow_light;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 24px 24px 0px 0px;

        .button {
            margin: 1rem 0;
        }
    }
}
</style>