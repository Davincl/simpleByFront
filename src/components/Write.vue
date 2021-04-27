<template>
	<div class="Write" >
		<h1>{{ msg }}</h1>
		<div>
			<table>
				<tbody>
				<tr>
					<th>제목</th>
					<td colspan="3"><input v-model="data.title" /></td>
				</tr>
				<tr>
					<th>내용</th>
					<td colspan="3"><input v-model="data.content" /></td>
				</tr>
				<tr>
					<th>작성자</th>
					<td colspan="3"><input v-model="data.name" /></td>
				</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4">
							<button @click="saveEvent"> 저장 </button> <a href="#page=Board">목록</a>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

axios.defaults.baseURL = 'http://localhost:9090/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default {
	name: "Write",
	data: () => {
		return {
			msg: "Write&Modify",
			data : {
				"title": "",
				"content": "",
				"name": "",
				"regDt": "",
				"regId": '',
				"updDt": "",
				"uptId": ''
			}
		}
	},
	created : () => {

	},
	methods: {
		fetchData() {

		},
		saveEvent() {
			var vm = this;
			var now = new Date();
			vm.data.regDt = moment(now).format('YYYY-MM-DD');
			vm.data.updDt = moment(now).format('YYYY-MM-DD');
			vm.data.regId = '1';
			vm.data.uptId = '1';

			axios.get('/api/BoardVo?page=0&size=10&sort=regDt')
			.then((res) => {
				console.log(res);
				vm.data.num = res.data.page.totalElements + 1;
				axios.post('/api/BoardVo', vm.data)
				.then(() => {
					vm.$root.setHash('page', 'Board')
				})
			})
		}
	}
}
</script>