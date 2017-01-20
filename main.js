/**
 * Created by marko on 20/01/2017.
 */

Vue.component('heading', {
    template : '<h2>{{ title }}</h2>',
    data: function () {
        return {
           title: 'Components are great!'
        };
    }
})

Vue.component('task', {
    props: [ 't' ],
    template: '<li v-on:click="tasknotify" >total: {{ counter }} text:<span>{{ t.text }}</span>  author:<span>{{t.author}}</span></li>',
    methods : {
        tasknotify: function (t) {
         //   console.log(t);
          //  console.log(this);
            this.counter += 1;
            this.$emit('tasknotify');
        }
    },
    data : function () {
        return {
            counter: 0
        }
    }

});




 new Vue({
    el : '#root',
    data: {
        list: [ { text:  'skdklsoooopoewpo', author: 'marko' },
                { text:  'okdiidid', author: 'linda' },
                { text:  'tjjalalöppdppd', author: 'alex' }  ],
        totalClicks: 0,
        label: ''
    },
    methods: {
        taskClick: function (item) {
        //    console.log('app taskClick', item);
            this.label = 'Latest clicked: ' + item.text;
            this.totalClicks += 1;
        }
    }
});

