window.Event = new Vue();


Vue.component('event-viewer', {
    data() {
        return {
            progressRate: 0
        }
    },
    created() {

        const timer = setInterval(() => {

            if (this.$data.progressRate < 100) {
                this.$data.progressRate += 10;
            } else {
                clearInterval(timer);
            }

        }, 500);

    },
    methods: {

    }

});


Vue.component('coupon', {

    template: '<input placeholder="Enter your coupon code" v-model="couponCode"  @blur="onCouponApplied" >',
    data: function() {
        return {
            couponCode: ''
        };
    },
    methods: {
        onCouponApplied() {
             const coupon = this.$data.couponCode;

            if(coupon.length < 2) {
                return;
            }

            console.log('coupon', this, 'onCouponApplied');
            Event.$emit('applied', { coupon });
        }
    }

})



new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },

    created() {

        Event.$on('applied', (coupon) => {
            console.log('root', this, 'onCouponApplied', coupon);
            alert('Handling it! ' + coupon.coupon);
        })
    },

    methods: {

    }
});
