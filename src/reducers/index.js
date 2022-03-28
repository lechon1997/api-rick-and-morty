import { combineReducers } from "redux";

const initialState = {
  personajes: [],
  favoritos: [],
  episodios: [],
  mundos: [],
  personaje: {},
};

const rootReducer = combineReducers({
  data: (state = initialState, action) => {
    switch (action.type) {
      case "CARGAR_PERSONAJES":
        return {
          ...state,
          personajes: action.payload,
        };

      case "CARGAR_EPISODIOS":
        return {
          ...state,
          episodios: action.payload,
        };
      case "CARGAR_MUNDOS":
        return {
          ...state,
          mundos: action.payload,
        };

      case "SELECCIONAR_PERSONAJE":
        return {
          ...state,
          personaje: action.payload,
        };
      case "CARGAR_CATEGORIAS":
        return {
          ...state,
          categorias: action.paylaod,
        };
      case "AGREGAR_FAVORITO":
        return {
          ...state,
          ...state.favoritos.push(action.payload),
        };
      case "ELIMINAR_FAVORITO":
        return {
          ...state,
          favoritos: [
            ...state.favoritos.filter((p) => p.id !== action.payload.id),
          ],
        };
      default:
        return state;
    }
  },
});

export default rootReducer;
