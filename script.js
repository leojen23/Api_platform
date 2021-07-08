import http from 'k6/http';
import { sleep } from 'k6';


export let options = {
    vus: 1000,
    duration: '10s',
  };
export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
