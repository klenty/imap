describe("Connection and Parser tests", function () {
	it("Run tests", function () {
		require('fs').readdirSync(__dirname).forEach(function (f) {
			if (f.substr(0, 5).toLowerCase() === 'test-')
				require('./' + f);
		});
	});
});