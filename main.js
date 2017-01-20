/**
 * Created by marko on 20/01/2017.
 */

var Helpers = {
   sum: function(tasks) {
       var total = 0;
       for(var i=0;i<tasks.length;i++){
           total += tasks[i].counter;
       }
       return total;
   }
};

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
    template: '<li class="list-group-item" v-on:click="tasknotify" >total: {{ t.counter }} text:<span>{{ t.text }}</span>  author:<span>{{t.author}}</span></li>',
    methods : {
        tasknotify: function (t) {
            this.$emit('tasknotify');
        }
    }

});




 new Vue({
    el : '#root',
    data: {
        list: [ { id: 1, text:  'skdklsoooopoewpo', author: 'marko', counter: 0 },
                { id: 2, text:  'okdiidid', author: 'linda',  counter: 0  },
                { id: 3, text:  'tjjalalöppdppd', author: 'alex',  counter: 0 }  ],
        totalClicks: 0,
        label: ''
    },
    methods: {
        taskClick: function (item) {
         //   console.log('app taskClick', item.id, item);
            item.counter += 1;
            this.label = 'Latest clicked: ' + item.text;
            this.totalClicks = Helpers.sum(this.list);



        }
    }
});

