<script setup lang="ts">
import { markRaw, reactive, readonly, toRaw, ref, type Ref } from "vue";

// 1. reactive 接受一个 readonly 代理对象时，直接返回
const proxy1 = readonly({});
const proxy2 = reactive(proxy1);
console.log("验证1：", proxy1 === proxy2); // true

// 2. readonly 可以接受一个 reactive 代理过的对象
const proxy3 = reactive({});
const proxy4 = readonly(proxy3);
console.log("验证2：", proxy4 === proxy3, proxy4, proxy3); // false

// 3. reactive 可以接受一个 reactive 代理过的对象，但是并不会再次做响应式代理，而是直接返回上一次代理后的响应式对象
const proxy5 = reactive({});
const proxy6 = reactive(proxy5);
console.log("验证3：", proxy5 === proxy6); // true

// 4. reactive 处理同一个对象，返回的仍旧是上次的代理后结果对象，原因是因为有缓存记录
const obj1 = {};
const proxy7 = reactive(obj1);
const proxy8 = reactive(obj1);
console.log("验证4：", proxy7 === proxy8); // true

// 5. toRaw 直接返回代理缓存中的原始对象 target
const obj2 = {};
const proxy9 = reactive(obj2);
console.log("验证5：", toRaw(proxy9) === obj2); // true

// 6. markRaw 将一个对象标记为不可被代理
const obj3 = {};
const proxy11 = reactive(markRaw(obj3));
console.log("验证6：", proxy11 === obj3); // true

const obj4 = {};
const proxy12 = reactive(obj4);
const prox13 = readonly(proxy12);
console.log("验证7：", toRaw(prox13) === obj4); // true

// 7. reactive 嵌套 ref
const ref1 = ref("zjj");
const proxy14 = reactive({
  name: ref1,
});
console.log("验证8：", proxy14.name); // 此时会自动被拆包

const ref2 = ref("zjj");
const proxy15 = reactive([ref2, 1, 2, 3]);
console.log("验证9：", (proxy15[0] as Ref<string>).value); // 此时不会自动拆包

// 8. reactive set
const prox16 = reactive({ name: "xxx", age: ref(22) });
prox16.age = 11;
console.log("验证10：", prox16);
// @ts-ignore
prox16.name = reactive({ str: "xxxxxxxx" });
console.log("验证11：", prox16.name);
</script>

<template>
  <div>
    <h2>案例一: reactive 的使用注意事项</h2>
    <p>掌握了这几个案例，你才能说是理解了 reactive</p>
  </div>
</template>
