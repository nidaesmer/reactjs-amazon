import axios from "axios";
import { BASE_URL } from "./constants";
// Bu kısım, HTTP isteğinin başlık (headers) bilgilerini içeren bir yapılandırma nesnesi oluşturur. Bu örnekte, isteğin JSON formatında veri içerdiğini ve JSON formatında yanıt almayı beklediğini belirten iki temel başlık eklenmiştir: "Content-Type" ve "Accept".
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
//BASE-URL apinin temel URL'sini temsil eder

export const callAPI = async (resource) => {
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
  return data;
}; // resource kaynak adi aynı zamanda kaynak yoluna ihtiac var yerel veri dosyasına gitmek gerek bu da utils içinde constants.js gerektiriyor.
