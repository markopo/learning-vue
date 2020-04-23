

Vue.component('modal', {
   data: function () {
      return {
          isActive: true
      };
   },
   template: `<div class="modal " v-bind:class="{ 'is-active': isActive }" >
                  <div class="modal-background"></div>
                  <div class="modal-card">
                    <header class="modal-card-head">
                      <p class="modal-card-title">
                        <slot name="header"></slot>
                      </p>
                      <button class="delete" aria-label="close" @click="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <slot name="content"></slot>
                    </section>
                    <footer class="modal-card-foot">
                      <button class="button is-success" @click="save">
                        <slot name="footerSaveButton">---</slot> 
                      </button>
                      <button class="button" @click="close" >
                         <slot name="footerCloseButton">---</slot>
                      </button>
                    </footer>
                  </div>
                </div>`,
    methods: {
       close() {
           console.log('modal: ', this);
           this.$data.isActive = false;
       },
       save() {
           alert('Thanks! Saving...');
       }
    }


});


new Vue({
    el: '#root'
});
