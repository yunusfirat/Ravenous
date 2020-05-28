

const apiKey = 'p8BNLph_wsrjrMYcf7valwI9bhC4DyoMKDaWstrSuo4bvTNNv9m1npVMf7e3FUKxFextLoOaOCj4KBJqDeL2OqLtLLfD2H_ShayzJTBiW0zcXnz1ps5hxyZHRnHIXnYx';

const Yelp = {
    SearchBar(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                Authorization: `Bearer ${apiKey}`,

            },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) =>  {
                     return {
                         id:business.id,
                         imageSrc: business.image_url,
                         name: business.name,
                         adress: business.location.adress1,
                         city: business.location.city,
                         state: business.location.state,
                         zipCode:business.location.zip_code,
                         category:business.categories[0].title,
                         rating:business.rating,
                         reviewCount: business.review_count,
                     }
                });


            }
                


        })
    }
};

export default Yelp;