window.Event = new Vue();


Vue.component('coupon', {

    template: '<input placeholder="Enter your coupon code"  @blur="onCouponApplied" >',
    data: {
        couponCode: ''
    },
    methods: {
        onCouponApplied(e) {
            const coupon = e.target.value;

            if(coupon.length < 2) {
                return;
            }

            console.log('coupon', e, this, 'onCouponApplied');
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
