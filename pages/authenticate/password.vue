<template>
    <div class="arrow-grid">
        <div class="arrow-grid-child-fw authenticate__email">
            <BackLinkArrow/>
            <div class="arrow__logo">
                <img src="/logo/dark_combination_mark.png" alt="logo" />
            </div>
            <div class="authenticate__h1">
                <h1>{{title}}</h1>
            </div>
            <div class="authenticate__p">
                <p>{{paragraph}}</p>
            </div>
            <InputPassword
                :id="'inputPassword'"
                :label="inputFieldLabel"
                :type="'text'"
                v-model="inputFieldValueObj"
                :inputValue="inputFieldValueObj"
                @input="inputFieldValueObj.value = $event"
                :placeholder="'Type your password'"
                :error="inputFieldError"
            />
            <a href="" class="authenticate__forgot-password">Reset password</a>
            <ActionButton
                :id="'buttonSubmit'"
                :buttonText="'Login'"
                :buttonTypeClass="'primary-btn-sm'"
                :buttonBgClass="'primary-btn-light-bg'"
                :buttonAction="goNext"
            />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
    inputFieldLabel: {
        type: String,
        required: true
    },
    inputFieldValue: {
        type: String,
        required: true
    },
    inputFieldError: {
        type: String,
        required: false
    },
    buttonSubmitText: {
        type: String,
        required: true
    },
    buttonSubmitAction: {
        type: Function,
        required: true
    }
});
const title = ref('Fill in your password');
const paragraph = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non massa non neque cursus interdum in eget erat.');
const inputFieldLabel = ref('Username');
const inputFieldValueObj = ref(props.inputFieldValue);
const goNext = () => {
    window.location.href = '/home';
};
</script>

<style scoped lang="scss">
.authenticate__email {
    display: grid;
    grid-template-areas:
        "back-icon"
        "logo"
        "h1"
        "p"
        "input"
        "forgot-password"
        "button";
    gap: 5px;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.5rem 0;

    .authenticate__back-icon {
        font-size: 20px;
    }

    .arrow__logo {
        width: 80px;
        margin: 20px 0;

        img {
            width: 100%;
        }
    }

    .authenticate__forgot-password {
        text-align: center;
        padding-bottom: 16px;
    }

}
</style>
