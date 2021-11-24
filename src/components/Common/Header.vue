<template>
    <div class="container mx-auto">
        <nav class="py-7 navbar text-neutral-content">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost xl:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <a href="#">
                <img src="/src/assets/images/logo.svg" alt="Yo台灣Logo" />
            </a>
            <div class="ml-auto space-x-10">
                <a href="#" class="font-bold text-gray-default">觀光景點</a>
                <div class="dropdown dropdown-hover dropdown-open">
                    <a href="#" tabindex="0" class="font-bold text-gray-default">主題旅遊</a>
                    <ul
                        tabindex="0"
                        class="w-40 px-[30px] py-6 shadow menu dropdown-content rounded-box text-gray-default space-y-4"
                    >
                        <li>
                            <a href="#" class="!p-0 hover:text-red-600">
                                <CampingIcon />觀光景點
                            </a>
                        </li>
                        <li>
                            <a href="#" class="!p-0 hover:text-red-600">
                                <TempleIcon />古蹟巡禮
                            </a>
                        </li>
                        <li>
                            <a href="#" class="!p-0 hover:text-red-600">
                                <OnsenIcon />溫泉療癒
                            </a>
                        </li>
                        <li>
                            <a href="#" class="!p-0 hover:text-red-600">
                                <DivingIcon />海洋探索
                            </a>
                        </li>
                        <li>
                            <a href="#" class="!p-0 hover:text-red-600">
                                <BookIcon />知性之旅
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="font-bold text-gray-default">特色美食</a>
                <a href="#" class="font-bold text-gray-default">交通資訊</a>
            </div>
        </nav>
    </div>
</template>

<script>
import CampingIcon from '../Icons/Camping.vue'
import BookIcon from '../Icons/Book.vue'
import DivingIcon from '../Icons/Diving.vue'
import OnsenIcon from '../Icons/Onsen.vue'
import TempleIcon from '../Icons/Temple.vue'
import VectorIcon from '../Icons/Vector.vue'
import BusIcon from '../Icons/Bus.vue'

export default {
    name: 'Header',
    components: {
        CampingIcon,
        BookIcon,
        DivingIcon,
        OnsenIcon,
        TempleIcon,
        VectorIcon,
        BusIcon
    }
}
</script>