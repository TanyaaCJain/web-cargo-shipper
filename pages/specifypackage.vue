<template>
    <div class="arrow-grid">
        <div class="arrow-grid-child-fw specify-package">
            <BackLinkArrow/>
            <div class="specify-package__h1">
                <h1>Booking a cargo flight</h1>
            </div>
            <div class="specify-package__p">
                <p>Here you can specify the types of packages (like their weight and size) and the amount of packages per type for the chosen flight.</p>
            </div>
            <CommuteLocation
                :departureLocation="'Stockholm'"
                :arrivalLocation="'London'"
            />
            <div class="divider"></div>

            <div class="accordion" id="accordionPanelsStayOpenExample">
                <Packages
                    :numericWeight="''"
                    :scaleWeight="''"
                    :sizeWidth="''"
                    :sizeHeight="''"
                    :sizeDepth="''"
                    :numericWeightError="''"
                    :scaleWeightError="''"
                    :sizeWidthError="''"
                    :sizeHeightError="''"
                    :sizeDepthError="''"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
