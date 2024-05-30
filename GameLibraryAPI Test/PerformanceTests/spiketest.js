
import http from 'k6/http'
import {sleep, check} from 'k6';

export const options = {
    stages: [
        {duration: '30s', target: 150},
        {duration: '2m', target: 150},
        {duration: '30s', target: 0},
    ]
};

export default () => {
    const res = http.get('http://localhost:5199/')
}
