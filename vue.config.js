module.exports = {
	chainWebpack: config => {
		config
		.plugin('html')
		.tap(args => {
			args[0].title = 'my Vue';
			return args;
		})
	}
}