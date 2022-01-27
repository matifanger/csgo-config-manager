<template>
<div>
    <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-500 uppercase">
        Beta
        </p>
    </div>
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="white" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
            <pattern id="192913ce-1f29-4abd-b545-0fbccfd2b0ec" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
            </defs>
            <rect fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)" width="52" height="24"></rect>
        </svg>
        <NuxtLink to="/" class="relative"><p class="title-gradient">CSGO CONFIG MANAGER</p></NuxtLink>
        </span>
    </h2>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap');
.title-gradient {
  background: linear-gradient(to right, hsl(83, 100%, 56%), hsl(216, 100%, 55%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>