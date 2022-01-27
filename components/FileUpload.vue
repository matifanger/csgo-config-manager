<template>
  <div
    x-data="{ files: null }"
    id="FileUpload"
    class="
      block
      w-full
      relative
      appearance-none
      border-dashed border-2 border-gray-400
      py-6
      rounded-md
      hover:shadow-outline-gray
    "
  >
    <input
      v-if="!loading"
      type="file"
      @change="loadTextFromFile"
      class="
        cursor-pointer
        absolute
        inset-0
        z-50
        m-0
        p-0
        w-full
        h-full
        outline-none
        opacity-0
      "
      x-on:change="files = $event.target.files; console.log($event.target.files);"
      x-on:dragover="$el.classList.add('active')"
      x-on:dragleave="$el.classList.remove('active')"
      x-on:drop="$el.classList.remove('active')"
    />

    <template x-if="files === null">
      <div
        v-if="!loading"
        class="flex flex-col space-y-2 items-center justify-center"
      >
        <i class="fas fa-cloud-upload-alt fa-3x text-currentColor"></i>
        <p class="text-gray-400">Drag your files here or click in this area.</p>
        <a
          href="javascript:void(0)"
          class="
            flex
            items-center
            mx-auto
            py-2
            px-4
            text-white text-center
            font-medium
            border border-transparent
            outline-none
            bg-red-700
          "
        >
          Select a file
        </a>
      </div>

      <div v-else class="flex justify-center my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </template>
  </div>
</template>

<script>
import editConfig from "/functions/engine.js";
export default {

  data() {
    return {
      loading: false,
    };
  },
  methods: {
    loadTextFromFile(ev) {
      this.loading = true;
      let file = ev.target.files[0];

      let fileReader = new FileReader();
      fileReader.readAsText(file);

      fileReader.onload = (event) => {
        let fileAsText = event.target.result;
        // console.log(fileAsText);
        const what = editConfig(fileAsText)
        console.log(what)
      };
    },

  },
};
</script>

<style lang="scss" scoped>
</style>
