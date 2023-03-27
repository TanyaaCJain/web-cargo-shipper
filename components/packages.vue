<template>
    <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Package Type 1
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
                <div class="package__weight">
                    <InputDropdown
                        :id="'packageWeightNumeric'"
                        :label="'Weight'"
                        :type="'text'"
                        v-model="numericWeight"
                        :inputValue="numericWeight"
                        @input="numericWeight = $event"
                        :placeholder="'What\'s the weight?'"
                        :error="numericWeightError"
                    />
                    <InputDropdown
                        :id="'packageWeightScale'"
                        :label="'...'"
                        :type="'text'"
                        v-model="scaleWeight"
                        :inputValue="scaleWeight"
                        @input="scaleWeight = $event"
                        :placeholder="''"
                        :error="scaleWeightError"
                    />
                </div>
                <div class="package__size">
                    <InputDropdown
                        :id="'packageSizeWidth'"
                        :label="'Size'"
                        :type="'text'"
                        v-model="sizeWidth"
                        :inputValue="sizeWidth"
                        @input="sizeWidth = $event"
                        :placeholder="'Width'"
                        :error="sizeWidthError"
                    />
                    <InputDropdown
                        :id="'packageSizeHeight'"
                        :label="'...'"
                        :type="'text'"
                        v-model="sizeHeight"
                        :inputValue="sizeHeight"
                        @input="sizeHeight = $event"
                        :placeholder="'Height'"
                        :error="sizeHeightError"
                    />
                    <InputDropdown
                        :id="'packageSizeDepth'"
                        :label="'...'"
                        :type="'text'"
                        v-model="sizeDepth"
                        :inputValue="sizeDepth"
                        @input="sizeDepth = $event"
                        :placeholder="'Depth'"
                        :error="sizeDepthError"
                    />
                </div>
                <div class="package__size-measurement">
                    <InputDropdown
                        :id="'packageSizeMeasurement'"
                        :label="'SizeMeasurement'"
                        :type="'text'"
                        v-model="sizeMeasurement"
                        :inputValue="sizeMeasurement"
                        @input="sizeMeasurement = $event"
                        :placeholder="'CM'"
                        :error="sizeMeasurementError"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    numericWeight: {
        type: String,
        required: true,
        default: ''
    },
    numericWeightError: {
        type: String,
        required: false
    },
    scaleWeight: {
        type: String,
        required: true,
        default: ''
    },
    scaleWeightError: {
        type: String,
        required: false
    },
    sizeWidth: {
        type: String,
        required: true,
        default: ''
    },
    sizeWidthError: {
        type: String,
        required: false
    },
    sizeHeight: {
        type: String,
        required: true,
        default: ''
    },
    sizeHeightError: {
        type: String,
        required: false
    },
    sizeDepth: {
        type: String,
        required: true,
        default: ''
    },
    sizeDepthError: {
        type: String,
        required: false
    },

});
const numericWeight = ref(props.numericWeight);
const numericWeightError = ref(props.numericWeightError);
const scaleWeight = ref(props.scaleWeight);
const scaleWeightError = ref(props.scaleWeightError);
const sizeWidth = ref(props.sizeWidth);
const sizeWidthError = ref(props.sizeWidthError);
const sizeHeight = ref(props.sizeHeight);
const sizeHeightError = ref(props.sizeHeightError);
const sizeDepth = ref(props.sizeDepth);
const sizeDepthError = ref(props.sizeDepthError);
</script>


<style  scoped lang="scss">
.package__weight {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
}
.package__size {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
}
</style>
