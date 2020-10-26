import axios from 'axios'


export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID 9u3XajZ-MRyh-Iaz-VJLxKrff_l4pL75NIgwezDg1TQ'
    }

});