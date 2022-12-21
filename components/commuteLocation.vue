<template>
    <div class="commute-location">
        <h2 class="start">
            {{ departureLocation }}
        </h2>
        <div class="to-arrow">
            <img :src="`/_nuxt/assets/icons/icon_drop_right.svg`" />
        </div>
        <h2 class="end">
            {{ arrivalLocation }}
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        departureLocation: {
            type: String,
            required: true
        },
        arrivalLocation: {
            type: String,
            required: true
        }
    }
}
</script>

<style  scoped lang="scss">
.commute-location {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 16px;

    .start {
        text-align: center;
    }

    .to-arrow {
        width: 20px;
    }

    .end {
        text-align: center;
    }
}
</style>