import API_ENDPOINTS from "./ApiEndpoints";
import http from "./http";

class AppServices {
    getCategories() {
        return http.get(API_ENDPOINTS.categories);
    }

    getProductsByCatPrefix(prefix: string) {
        return http.get(`${API_ENDPOINTS.products}?cat_prefix=${prefix}`);
    }
}

export default new AppServices();
