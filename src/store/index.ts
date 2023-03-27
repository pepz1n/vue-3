import IEstado from "@/interfaces/IEstado";
import {createStore, Store} from "vuex";
import {InjectionKey} from "vue";

export  const key: InjectionKey<Store<IEstado>> = Symbol();
export const store = createStore<IEstado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            },
        ],
    }
});
