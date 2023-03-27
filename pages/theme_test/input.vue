<template>
    <div class="arrow-grid">
        <div class="arrow-grid-child-fw">
            <!--  Track username entered on the input-->
            <InputIcon
                :id="'inputZero'"
                :label="'Name'"
                :type="'text'"
                v-model="name"
                :inputValue="name"
                @input="username = $event"
                :placeholder="'Enter Name'"
                :error="nameError"
            />
            <div>Name is {{name}}</div>
            <InputIcon
                :id="'inputZeroEr'"
                :label="'nameError'"
                :type="'text'"
                v-model="nameError"
                :inputValue="nameError"
                @input="nameError = $event"
                :placeholder="'Enter nameError'"
            />
            <div>NameError is {{nameError}}</div>
            <InputIcon
                :id="'inputOne'"
                :label="'Username'"
                :type="'text'"
                v-model="username"
                :inputValue="username"
                @input="username = $event"
                :placeholder="'Enter Username'"
                :error="usernameError"
                :leftIcon="'padlock'"
            />
            <div>Username is {{username}}</div>
            <!--  Track password entered on the input-->
            <InputPassword
                :id="'inputTwo'"
                v-model="password"
                :inputValue="password"
                @input="password = $event"
                :placeholder="'Enter Password'"
                :error="passwordError"
            />
            <div>Password is {{password}}</div>
            <InputDropdown
                :id="'inputThree'"
                :label="'Country'"
                :type="'text'"
                v-model="country"
                :inputValue="country"
                @input="country = $event"
                :placeholder="'Enter Country'"
                :error="countryError"
            />
            <div>Country is {{country}}</div>
            <InputLocation
                :id="'inputFour'"
                :inputLabel="'Location'"
                :type="'text'"
                v-model="location"
                :inputValue="location"
                @input="location = $event"
                :inputPlaceholder="'Current Location'"
                :error="locationError"
                :distance="'12 km'"
            />
            <div>Location is {{location}}</div>
        </div>
    </div>
</template>

<script>
// maintain a error variable for each input which displays a message when input length is less than 3

export default {
    data() {
        return {
            password: '',
            username: '',
            name: '',
            nameError: '',
            usernameError: '',
            passwordError: '',
            country: '',
            countryError: '',
            location: '',
            locationError: ''
        }
    },
    computed:  {
        usernameError() {
            if (this.username.length < 3) {
                return 'Input length must be greater than 3'
            } else {
                return ''
            }
        },
        passwordError() {
            if (this.password.length < 3 || this.password.length == '') {
                return 'Input length must be greater than 3'
            } else {
                return ''
            }
        },
    }

}
</script>
