let store = {
    user: {
        name: 'John Doe'
    }
};

Vue.component('user', {
    props: ['name'],
    template: `
        <div class="user">
            <label>Name:</label>
            <input type="text" :value="name" @input="updateName($event.target.value)" >
            <p class="wow" ref="updatedName"></p>
        </div>
    `,
    methods: {
        updateName(name) {
            console.log('updateName: ', name);
            this.$emit('input', name);

            this.$refs.updatedName.innerText = name;
        }
    }
})

new Vue({
    el: '#one',
    data: {
        foo: 'bar',
        shared: store
    }
});

new Vue({
    el: '#two',
    data: {
        foo: 'other bar',
        shared: store
    }
});
