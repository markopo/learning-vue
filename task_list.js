/**
 * Created by marko on 22/01/2017.
 */

Vue.component('task-list', {
    template: '<ul><task v-for="task in tasks" >{{ task.text }}</task></ul>',
    data: function () {
        return {
            tasks: [ { id: 1, text:  'skdklsoooopoewpo', author: 'marko', counter: 0 },
                { id: 2, text:  'okdiidid', author: 'linda',  counter: 0  },
                { id: 3, text:  'tjjalalöppdppd', author: 'alex',  counter: 0 }  ]
        };
    }
});


Vue.component('task', {

    template: '<li><slot></slot></li>'
});


Vue.component('message', {
    props : [ 'title', 'body' ],
    template: '<article class="message" v-show="isVisible" >' +
                '<div class="message-header">' +
                '<p> {{ title }}	</p>' +
                '<button v-on:click="hideModal" class="delete"></button>' +
                '</div>' +
                '<div class="message-body"> {{ body }}</div>' +
              '</article>',
    data: function () {
        return {
            isVisible : true
        };
    },
    methods : {
        hideModal: function () {
            this.isVisible = false;
        }
    }
})



new Vue({
    el: '#root'
});