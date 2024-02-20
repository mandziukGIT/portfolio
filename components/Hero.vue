<script setup lang='ts'>
</script>
<template>
    <section class='flex justify-between items-center mt-20 gap-14' >
        <div class="flex flex-col w-1/2">
            <p class="text-gray-500 font-semibold tracking-widest font-light">FRONTEND DEVELOPER</p>
            <h1 class="text-8xl font-bold">
                <span class='text-[#f9b34f]'>Kacper</span> 
                <br/>
                Mandziuk
            </h1>
            <p class='text-xl my-6 max-w-[600px] py-10 pl-10 border-l-4 border-gray-500 text-gray-500'> I'm a web developer who builds elegant, functional websites that engage your audience and achieve your goals.  Let's work together to take your online presence to the next level.</p>
        </div>
        <div class="w-1/2">
            <img src="~/assets/img/freelancer-illustration.svg" alt="" class='w-full min-w-[500px] max-w-[550px] mx-auto'/>
        </div>
    </section>
    <section class='flex gap-10 justify-center mt-20'>
        <BaseButton to="/resume.pdf" target="_blank">
            Resume
            <img src="~/assets/icons/download.svg">
        </BaseButton>
        <BaseButton to="#experience">
            Explore
            <img src="~/assets/icons/arrow-down.svg">
        </BaseButton>
    </section>
</template>
