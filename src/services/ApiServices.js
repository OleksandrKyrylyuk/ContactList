class ApiService {
	URL = `https://testreactwar-default-rtdb.firebaseio.com/list.json`;

	 GetList = async () => {
		 try {
			const  data = await fetch(this.URL);
			if (!data.ok) return console.log('Error:', data.status);
			const list = await data.json();
			if(!list) return []
			else return list
		 }
		 catch(err) {

		 }
		
	}

	UpdateList = async (data) => {
		try {
			const response = await fetch(this.URL, {
				method: 'PUT', 
				body: JSON.stringify(data), 
				headers: {
				'Content-Type': 'application/json'
				}
		});
		return response
		} catch (error) {
  			console.error('Ошибка:', error);
		}
	}
		
}

const Service = new ApiService();
export default Service;
