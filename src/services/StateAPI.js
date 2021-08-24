export default new class {
	
	async getStates(){
		const response = await fetch("http://pos.idtretailsolutions.com/countytest/states");
		const responseData = await response.json();

		// Using extra properties to set highlights & selection so I can control it display entirely through data.
		responseData.data.forEach( ( stateObject) => {
			stateObject.selected = false;
			stateObject.highlight = false;
		});

		return responseData.data;
	}

	async getCounties( stateObject ){
		const response = await fetch( stateObject.detail );
		const responseData = await response.json();
		return responseData.data;
	}
}