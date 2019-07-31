import axios from 'axios';

const api = axios.create({
  /**
   * Para iOS pode ser localhost
   * Para android studio é 10.0.2.2
   * Para Genymotion é 10.0.3.2
   * No dispositivo é através do IP da máquina em uso
   */
  baseURL: 'http://localhost:3333',
});

export default api;
