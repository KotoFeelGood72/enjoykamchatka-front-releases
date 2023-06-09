// utils/fetchData.js
import { Api } from '../api/api';

export async function fetchDataPost(endpoint, { route, store }) {
  const response = await Api.get(`${endpoint}${route.params.id}?router=${route.path}`);

  return {
    seo: response.data.seo,
    data: response.data.data,
  };
}
