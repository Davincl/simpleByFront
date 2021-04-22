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
              <tr v-for="item in list" v-bind:key="item">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
      
    }
  }
}
</script>