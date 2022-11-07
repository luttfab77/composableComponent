import { toRefs, ref, reactive } from 'vue';

export function useFetch(url, options) {
  //https://vuejs.org/api/reactivity-core.html#reactive
  const data = ref(null);
  const state = reactive({
    error: null,
    loading: false,
  });
  /*
  https://medium.com/nerd-for-tech/fetch-api-async-await-in-a-few-bites-6b4f19f7db9e
*/
  const fetchData = async () => {
    state.loading = true;
    try {
      const res = await fetch(url, options);
      data.value = await res.json();
      console.log(data.value);
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  fetchData();
  //https://vuejs.org/api/reactivity-utilities.html#isref
  return { data, ...toRefs(state) };
}
