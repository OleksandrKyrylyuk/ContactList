class ApiService {
	URL = `https://testreactwar-default-rtdb.firebaseio.com/list.json`;

	async GetList () {
		const  data = await fetch(this.URL)
			.then( res => res.json())
			.then(res => {
				if (res === null) return [];
				else return res
			})
			.catch(error => console.log('Error', error));
		return data
	}
		
	}

const Service = new ApiService();
export default Service;
