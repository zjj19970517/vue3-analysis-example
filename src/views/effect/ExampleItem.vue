<script setup lang="ts">
import { effect } from "vue";

const re = effect(() => {});
const re2 = effect(re);
console.log("验证1", re2 === re); // false
</script>

<template>
  <div>
    <h2>案例一: effect 的使用注意事项</h2>
    <p>effect 是底层的一个方法，但也是核心所在</p>
  </div>
</template>
