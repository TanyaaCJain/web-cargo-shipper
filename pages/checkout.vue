<template>
    <div class="arrow-light-blue-bg checkout-container">     
        <div class="arrow-grid">
            <div class="arrow-grid-child-fw">
                <h2>Cargo flights checkout</h2>
                <h3> Flight 1</h3>
                <p>1 package</p>
                <CommuteCard />
                <div class="add-destination">
                    <ActionButton
                        :buttonText="'Add new destination'"
                        :buttonTextClass="'btn-medium'"
                        :buttonTypeClass="'secondary-btn-sm'"
                        :buttonBgClass="'secondary-btn-light-bg'"
                        :buttonIcon="'add'"
                        :buttonAction="addDestination"
                    />
                </div>
            </div>
        </div>
        <CargoStepper :step="3" />
    </div>
</template>

<script setup>
const addDestination = () => {
    $router.push('/checkout')
};
</script>

<style lang="scss" scoped>
.checkout-container {
    min-height: 100vh;

    .arrow-grid {
        margin-bottom: 120px;

        .add-destination {
            margin-top: 20px;
            max-width: 300px;
        }
    }
}
</style>