<script setup>
const props = defineProps({
  title: { type: String, required: false, default: "title: चरन् वै मधु विन्दति" },
  description: { type: String, required: false },
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white p-12">
    <h1 class="text-6xl text-primary font-bold mb-4 shadow-lg" style="font-family: 'Poppins', sans-serif;">
      {{ title }}
    </h1>
    
    <p class="text-[24px] lg:text-[32px] opacity-70 max-w-[650px] lg:max-w-[900px] leading-relaxed" style="font-family: 'Oswald', sans-serif;">
      Sample text to test Oswald font.
    </p>

    <p v-if="description" class="text-2xl text-gray-400" style="font-family: 'Noto Sans Devanagari', sans-serif;">
      {{ description }}
    </p>
  </div>
</template>
