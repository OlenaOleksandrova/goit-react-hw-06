import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Використовуємо localStorage як сховище
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// Налаштування persist для контактів
const contactsPersistConfig = {
  key: "contacts",
  storage,
};

// Persisted reducer для контактів
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

// Налаштування store
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

// Persistor для використання з PersistGate
export const persistor = persistStore(store);
export default store;