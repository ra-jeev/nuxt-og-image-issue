<script setup>
const props = defineProps({
  title: { type: String, required: false, default: "title: चरन् वै मधु विन्दति" },
  description: { type: String, required: false },
});
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-white p-12">
    <h1 class="text-6xl text-primary font-bold mb-4" style="font-family:  'Noto Sans Devanagari', sans-serif;">
      {{ title }}
    </h1>

     <h2 class="text-4xl text-primary font-bold mb-4" style="font-family:  'Poppins', sans-serif;">
      {{ title }}
    </h2>
    
    <!-- style="font-family: 'Oswald', sans-serif;" -->
    <p class="font-osw text-[24px] lg:text-[32px] opacity-70 max-w-160 lg:max-w-225 leading-relaxed" style="font-family: 'Oswald', sans-serif;">
      Sample text to test Oswald font.
    </p>

    <p v-if="description" class="text-2xl text-gray-400" style="font-family: 'Noto Sans Devanagari', sans-serif;">
      {{ description }}
    </p>

     <p v-if="description" class="text-2xl text-gray-400" style="font-family: 'Poppins', sans-serif;">
      {{ description }}
    </p>
  </div>
</template>
