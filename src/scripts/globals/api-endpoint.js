import CONFIG from './config';

const API_ENDPOINT = {
  RESTO: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  TESTIMONI: `${CONFIG.BASE_URL}testimoni`,
};

export default API_ENDPOINT;
