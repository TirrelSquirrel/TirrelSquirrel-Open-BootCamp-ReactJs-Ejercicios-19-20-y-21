import APIRequest from "../utils/config/axios.config";

export default function getRandomJoke() {
    return APIRequest.get('jokes/random', {
        validateStatus: function(status) {
            return status < 500;
        }
    });
    
}