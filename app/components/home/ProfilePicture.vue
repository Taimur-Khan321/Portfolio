<script setup lang="ts">
const { profilePicture } = useAppConfig()
</script>

<template>
  <div class="z-10 flex items-center justify-center">
    <SpotlightButton rounded>
      <div
        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <NuxtImg
          width="96"
          :src="profilePicture"
          class="size-24 rounded-full border-2 border-gray-800/30 object-cover"
          alt="Taimur khan Profile Picture"
          aria-label="Taimur khan Profile Picture"
        />
      </div>
    </SpotlightButton>
  </div>
</template>

<style scoped></style>
