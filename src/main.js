import Vue from 'vue'
import Intro from './components/Intro'
import Board from './components/Board'

Vue.config.productionTip = false

const NotFound = { template: '<p>Page Not Found </p>'}
const routes = { // 페이지 주소 및 컨포넌트 관리
  '': Intro,
  'board': Board
}
new Vue({
  el: '#app',
  data: { // vue 사용되는 데이터
    currentRoute: '',
    hash: null,
    hashData: {}
  },
  created: function () { // vue 생성 시 실행 되는 사항
    var vm = this
    console.log('created')
    // 페이지 첫 로드 시 해시 값 체크
    vm.hashInit();
    vm.currentRoute = vm.getHash('page');
    // 해쉬 변경 이벤트
    window.addEventListener('hashchange', function() {
      vm.hashInit();
    }, false)
  },
  methods: {
    hashInit : function () {
      var vm = this;
      vm.hash = window.location.hash.substring(1)
      if(vm.hash) {
        vm.hash.split('&').forEach(function (item) {
          var temp = item.split('=');
          vm.hashData[temp[0]] = !temp[1] ? null : temp[1]
        })
      }
    },
    getHash: function (name) {
      var vm = this;
      return !vm.hashData[name] ? '' : vm.hashData[name];
    }
  },
  computed: { // 가변적인 리턴 사항
    ViewComponent(){
      // currentRoute 값 변경에 따른 리턴
      console.log(this.currentRoute)
      return routes[this.currentRoute] || NotFound
    }	
    },
    render (h) { // el 선언 영역에 랜더링 사항
      // 컨포넌트 바인딩
      return h(this.ViewComponent)
    },
    watch: { // 선언된 값이 변경에 따른 호출하는 사항
      hash: {
      immediate: false,
      handler() {
        // vue hash 데이터 변경 시 호출
        var vm = this;
        console.log(vm.hashData);
        if(vm.hashData.page) {
          vm.currentRoute = vm.hashData.page
        } else {
          vm.currentRoute = '';
        }
      }
      }
    }
});
