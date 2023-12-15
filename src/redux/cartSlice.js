import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
// eklenen ürünün zaten bulunup bulunmadığını kontrol eder. Bunun için find fonksiyonu kullanılır. Eğer ürün zaten sepette bulunuyorsa, addProductExists değişkeni bu ürünü temsil eder.
      const addProductExists = state.products.find( 
        (product) => product.id === action.payload.id
      );
// Eğer addProductExists değeri varsa, bu demektir ki ürün zaten sepette bulunuyor. Bu durumda, ürünün miktarını artırmak için addProductExists.quantity değeri, eklenen miktarla (action.payload.quantity) artırılır.
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
// Eğer addProductExists değeri yoksa, bu demektir ki ürün henüz sepette bulunmuyor. Bu durumda, yeni bir ürün nesnesi oluşturulur ve state.products dizisine eklenir. Bu ürün nesnesi, action.payload ile gelen verileri (ürün özellikleri) içerir ve aynı zamanda eklenen miktarı (action.payload.quantity) da içerir.
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
// Son olarak, state.productsNumber değeri, sepete eklenen toplam ürün sayısını temsil eder. Bu değer, eklenen ürünün miktarıyla artırılır.
      state.productsNumber =
        state.productsNumber + parseInt(action.payload.quantity);
        //burdan checkout sayfasına gıdıyoz
    },
    removeFromCart: (state, action) => {
      // kaldırılacak urunu bulcaz
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      // urun nosundan miktarı kaldır
      state.productsNumber = state.productsNumber - productToRemove.quantity;
      //kaldırılan ürünün dizinini bulun
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      //diziden kaldır
      state.products.splice(index, 1);

      // + ve _ yi tetiklemek
    },
    incrementInCart: (state, action) => {
      const itemInc = state.products.find((item) => item.id === action.payload);
      if (itemInc.quantity >= 1) {
        itemInc.quantity = itemInc.quantity + 1;
      }
      state.productsNumber = state.productsNumber + 1;
    },
    decrementInCart: (state, action) => {
      const itemDec = state.products.find((item) => item.id === action.payload);
      if (itemDec.quantity === 1) {
        const index = state.products.findIndex(
          (item) => item.id === action.payload
        );
        state.products.splice(index, 1);
      } else {
        itemDec.quantity--;
      }
      state.productsNumber = state.productsNumber - 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
