<script setup lang='ts'>
</script>
<template>
    <header class='flex justify-between py-5 items-center max-w-screen-2xl mx-auto px-10 2xl:px-0'>
        <NuxtLink to="/">
            <p>
                <span class="font-bold">MANDZIUK</span> <br/>
                KACPER
            </p>
        </NuxtLink>
        
        <nav>
            <ul class='flex gap-x-10 font-medium text-sm text-gray-400'>
                <li>
                    <NuxtLink to="#about">ABOUT</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#experience">EXPERIENCE</NuxtLink>
                </li>
            </ul>
        </nav>
        <div>
            <BaseButton to="mailto:kacper.mandziuk.it@gmail.com">
                Contact me <img src="~/assets/icons/mail.svg">
            </BaseButton>
        </div>
    </header>
</template>
