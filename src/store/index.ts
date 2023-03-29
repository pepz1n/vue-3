import IEstado from "@/interfaces/IEstado";
import {createStore, Store, useStore as vuexUsestore} from "vuex";
import {InjectionKey} from "vue";
import IProjeto from "@/interfaces/IProjeto";

export  const key: InjectionKey<Store<IEstado>> = Symbol();
export const store = createStore<IEstado>({
    state: {
        projetos: [],
    },
    mutations: {
        'ADICIONA_PROJETO'(state,nomeDoProjeto : string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto,
            } as IProjeto;
            state.projetos.push(projeto);
        }
    }
});

export function useStore() : Store<IEstado> {
    return vuexUsestore(key);
}
