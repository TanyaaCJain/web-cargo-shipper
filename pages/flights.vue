<template>
    <div class="arrow-light-blue-bg mapper-container">
        <div class="arrow-cargo-body">
            <div class="arrow-grid white-bg-header">
                <div class="arrow-grid-child-fw specify-package">
                    <BackLinkArrow/>
                    <CommuteLocation/>
                </div>
            </div>
            <MapRoute />
            <div class="commute-card-background">
                <CommuteCard />
            </div>
        </div>
        <CargoStepper :step="2" />
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.mapper-container {
    min-height: 100vh;

    .arrow-cargo-body {
        margin-bottom: 120px;
        .commute-card-background {
            // background: $greys_blue_extra_light_muted;
            padding: 20px;
            height: 100%;
        }
    }
}
</style>