<template>
    <div>
        <div class="arrow-grid">
            <div class="arrow-grid-child-fw specify-package">
                <BackLinkArrow/>
                <CommuteLocation
                    :departureLocation="'Stockholm'"
                    :arrivalLocation="'London'"
                />
            </div>
        </div>
        <MapRoute />
    </div>
</template>

<script>
export default {
}
</script>
