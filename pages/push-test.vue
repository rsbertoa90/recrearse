<template>
    <div>
        <button @click="push">PUSH!</button>
    </div>
</template>

<script>
export default {
    methods:{
        push()
        {

            this.$OneSignal.push(() => {
                this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
                    if (isEnabled) {
                    console.log('Push notifications are enabled!')
                    } else {
                    console.log('Push notifications are not enabled yet.')
                    }
                })
            })
        }
    }
}
</script>
