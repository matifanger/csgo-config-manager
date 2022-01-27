<template>
<div class="bg-maintheme min-h-screen text-gray-300">
  <div class="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-24 md:px-0">
    <div class="flex flex-col items-center max-w-2xl md:px-8">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        <Title />

        <p class="text-base md:text-lg">
          Maximize your FPS improving your config file with the best commands
        </p>
      </div>

      <FileUpload />

      <p class=" mb-10 mt-3 text-xs text-gray-600 sm:text-sm md:text-center">
        We are saving your configuration file for testing and performance improvement.
      </p>
    </div>
    <img src="carbon.png" class="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md mb-5" alt="" />
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
  }
</script>
