<template>
  <div class="Board">
    <h1>{{ msg }}</h1>
    <div class="">
        <table>
          <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록자</th>
                <th>등록일</th>
            </tr>
          </thead>
          <tbody v-if="null != list && list.length > 0">
              <tr v-for="(item, index) in list" v-bind:key="item.num" >
                  <td>{{list.length - index}}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.regId}}</td>
                  <td>{{item.regDt}}</td>
              </tr>
          </tbody>
          <tbody v-if="null == list || list.length == 0 ">
              <tr>
                  <td colspna="4">목록이 없습니다.</td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td colspna="4">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </td>
              </tr>
          </tfoot>
        </table>
    </div>
    <div>
        <a href="#page=Write">글 작성</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9090/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default {
  name: 'Board',
  data: function () {
    return { 
      msg : 'Board',
      list : []
    }
  },
  created: function () {
    var vm = this ;
    vm.fetchData();
  },
  methods: {
    fetchData: function() {
      var vm = this;
      axios.get('/api/BoardVo?page=0&size=10&sort=regDt')
      .then((res) => {
        console.log("response data : ", res);
        console.log(typeof res.data._embedded.BoardVo, typeof vm.list);
        vm.list = res.data._embedded.BoardVo;
        console.log(res.data._embedded.BoardVo[0]);
      }).catch((Err) => {
        console.log(Err);
      });
      
    }
  }
}
</script>