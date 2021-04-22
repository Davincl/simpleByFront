<template>
	<div class="Write" >
		<h1>{{ msg }}</h1>
		<div>
			<table>
				<tbody>
				<tr>
					<th>제목</th>
					<td colspan="3"><input /></td>
				</tr>
				<tr>
					<th>제목</th>
					<td><input /></td>
					<th>제목</th>
					<td><input /></td>
				</tr>
				<tr>
					<th>제목</th>
					<td><input /></td>
					<th>제목</th>
					<td><input /></td>
				</tr>
				<tr>
					<th>제목</th>
					<td><input /></td>
					<th>제목</th>
					<td><input /></td>
				</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4">
							<button> 저장 </button> <a href="#page=Board">목록</a>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: "Write",
	data: () => {
		return {
			msg: "Write&Modify"
		}
	},
	created : () => {

	},
	methods: {
		fetchData() {

		}
	}
}
</script>