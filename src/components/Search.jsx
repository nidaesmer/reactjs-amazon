import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callAPI } from "../utils/CallApi";
import { createSearchParams, useNavigate } from "react-router-dom";

// buranin genel amacı arama kısmına bısı yazıldıgında alt tarafında onerılen kelımelerın cıkması için

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setsearchTerm] = useState("");
  const [category, setCategory] = useState("All"); //all kısmı ıcın
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    // bura all kısmında seceneklere bastıgında varsayılan olarak gorunmesı
    e.preventDefault();

    navigate({
      pathname: "search", //Bu, yönlendirme yapılan sayfanın yolu
      // alt kısım, sorgu parametrelerini oluşturan bir fonksiyon (createSearchParams) çağırır. Bu fonksiyon, kategori ve arama terimi bilgilerini içeren bir sorgu parametre dizgisini oluşturur. Bu dizgi, search` alanına atanarak URL üzerinde belirli bir arama durumunu temsil eder.
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });
    // Bu kısımlar, arama terimini ve kategoriyi sıfırlar. Yani, kullanıcı bir arama yaptıktan sonra, bu fonksiyon çağrıldığında arama terimi ve kategori sıfırlanır.
    setsearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border-amazonclone-yellow border-l   text-xs xl:text-sm "
        >
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%]  text-black "
          type="text"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px] pr-2">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {/* burada suggestions.json dosyasıyla birlkte ilerlicez*/}
      {suggestions && ( //suggestion var mı kontrol eder
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter((suggestion) => {
              // Bu kısım, öneri listesini filtreler. filter fonksiyonu, her bir öneriyi alır ve belirli bir koşula uyanları içeren yeni bir dizi oluşturur.
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm && //Arama terimi (currentSearchTerm) boş değilse devam eder.
                title.startsWith(currentSearchTerm) && // Öneri başlığı, arama terimiyle başlıyorsa devam eder.
                title !== currentSearchTerm //Başlık ve arama terimi tam olarak eşleşmiyorsa devam eder.
              );
            })
            //slice arrayın bellı kısmını almak ıcın yenı array doner
            .slice(0, 10) //: Bu kısım, filtrelenmiş öneri listesini ilk 10 öğe ile sınırlar. Bu, yalnızca ilk 10 eşleşen öneriyi göstermek için kullanılır.
            .map(
              (
                suggestion // bu kısım, sıralanmış ve sınırlandırılmış öneri listesini döngüye alır ve her bir öneri için bir <div> oluşturur.
              ) => (
                <div
                  key={suggestion.id}
                  onClick={() => setsearchTerm(suggestion.title)}
                >
                  {suggestion.title} {/*oneri baslgıını ekrana yazdırır*/}
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};

export default Search;
