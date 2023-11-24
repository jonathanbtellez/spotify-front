<template >
    <div class="flex w-full justify-between">
        <div class="flex items-center gap-6 text-left w-1/3">
            <div class="ms-2 w-16">
                <img src="https://render.fineartamerica.com/images/rendered/default/flat/blanket/images/artworkimages/medium/3/sky-in-flames-jules-photography.jpg?&targetx=-86&targety=-5&imagewidth=1420&imageheight=800&modelwidth=952&modelheight=800&backgroundcolor=000000&orientation=1&producttype=blanket-coral-50-60"
                    alt="album">
            </div>
            <div>
                <p class="font-medium">In flames</p>
                <p class="text-xs text-neutral-400">Song</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 stroke-2 hover:stroke-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
        </div>
        <div class="w-1/3">
            <div class="flex justify-center flex-col gap-5">
                <div class="flex gap-6 justify-center">
                    <audio ref="audio" @loadeddata="get_file_data" @ended="on_ended" @timeupdate="get_file_data">
                        <source src="../../../../assets/default.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 fill-neutral-700 stroke-neutral-700 hover:fill-white hover:stroke-white">
                            <path fill-rule="evenodd"
                                d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 fill-neutral-400 stroke-neutral-400 hover:fill-white hover:stroke-white">
                            <path
                                d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                        </svg>
                    </button>
                    <button @click="on_reproduce" class="bg-white hover:bg-neutral-300 rounded-full p-2">
                        <svg v-if="!is_reproducing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2 fill-black">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 hover:stroke-green-600 stroke-2 fill-black stroke-black">
                            <path fill-rule="evenodd"
                                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 fill-neutral-400 stroke-neutral-400 hover:fill-white hover:stroke-white">
                            <path
                                d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v8.123c0 1.44 1.555 2.342 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.342 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L14.805 7.06C13.555 6.346 12 7.25 12 8.688v2.34L5.055 7.06z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-7 h-7 stroke-neutral-700 fill-neutral-700 hover:fill-white hover:stroke-white">
                            <path fill-rule="evenodd"
                                d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 013.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 00-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 00-4.392-4.392 49.422 49.422 0 00-7.436 0A4.756 4.756 0 003.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 101.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 013.01-3.01c1.19-.09 2.392-.135 3.605-.135zm-6.97 6.22a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 004.392 4.392 49.413 49.413 0 007.436 0 4.756 4.756 0 004.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 00-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 01-3.01 3.01 47.953 47.953 0 01-7.21 0 3.256 3.256 0 01-3.01-3.01 47.759 47.759 0 01-.1-1.759L6.97 15.53a.75.75 0 001.06-1.06l-3-3z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                </div>
            </div>
            <div class="flex gap-2 items-center" @mouseover="on_change_progress('time')"
                @mouseleave="on_change_progress_leave()">
                <span class="cursor-default">{{ file_current_time }}</span>
                <div class="w-full">
                    <div v-if="!can_change_time" class="h-2 w-full bg-neutral-600 rounded-lg dark:bg-neutral-600">
                        <div class="h-2 rounded-full shadow-xl shadow-neutral-400  bg-white"
                            :style="{ width: file_progress + '%' }"></div>
                    </div>
                    <div v-else>
                        <input
                            class="w-full accent-green-600 h-2 rounded-full bg-neutral-600 text-green-600 caret-green-600"
                            type="range" @click="on_change_progress_value('time', $event)" min=0 :max="duration"
                            :value="last_file_progress" />
                    </div>
                </div>
                <span class="cursor-default">{{ file_duration }}</span>
            </div>
        </div>
        <div class="w-1/3 flex flex-row items-center justify-end gap-5">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            </div>
            <div class="items-center flex gap-3">
                <button @click="on_toggle_volume(0)" v-if="volume > 0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                </button>
                <button @click="on_toggle_volume(50)" v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-7 h-7 hover:stroke-green-600 stroke-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                </button>
                <div class="items-center w-24" @mouseover="on_change_progress('volume')"
                    @mouseleave="on_change_progress_leave()">
                    <div class="w-full">
                        <div v-if="!can_change_volume" class="h-2 w-full bg-neutral-600 rounded-lg dark:bg-neutral-600">
                            <div class="h-2 w-full rounded-full shadow-xl shadow-neutral-400  bg-white"
                                :style="{ width: volume + '%' }"></div>
                        </div>
                        <div v-else>
                            <input
                                class="w-full accent-green-600 h-2 rounded-full bg-neutral-600 text-green-600 caret-green-600"
                                type="range" @click="on_change_progress_value('volume', $event)" min=0 max=100
                                :value="volume" step=1 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
    setup() {
        const audio = ref(null)
        const is_reproducing = ref(false)
        const file_duration = ref('0:00')
        const file_current_time = ref('0:00')
        const file_progress = ref(0)
        const new_progress = ref(0)
        const can_change_time = ref(false)
        const can_change_volume = ref(false)
        const currentTime = ref(0)
        const duration = ref(0)
        const volume = ref(0)

        const get_file_data = () => {
            currentTime.value = audio.value.currentTime;
            duration.value = audio.value.duration;
            volume.value = audio.value.volume * 100;

            const currentMinutes = Math.floor(currentTime.value / 60);
            const currentSeconds = Math.floor(currentTime.value % 60);
            const totalMinutes = Math.floor(duration.value / 60);
            const totalSeconds = Math.floor(duration.value % 60);

            file_current_time.value = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
            file_duration.value = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;


            file_progress.value = (currentTime.value / duration.value) * 100;
        }

        const on_change_progress = (barProgress) => {
            if (barProgress === 'volume') return can_change_volume.value = true
            if (barProgress === 'time') return can_change_time.value = true

        }

        const on_change_progress_value = (barProgress, e) => {
            if (barProgress === 'time') return audio.value.currentTime = e.target.value
            if (barProgress === 'volume') {
                audio.value.volume = (e.target.value / 100)
                get_file_data()
            }
        }

        const on_change_progress_leave = () => {
            can_change_volume.value = false
            can_change_time.value = false
        }

        const on_ended = () => {
            on_reproduce()
        }

        const on_toggle_volume = (volume) => {
            audio.value.volume = volume / 100
            get_file_data()
        }

        const on_reproduce = () => {
            is_reproducing.value = !is_reproducing.value
            if (is_reproducing.value) return audio.value.play()
            audio.value.pause()
        }

        return {
            audio,
            can_change_time,
            can_change_volume,
            currentTime,
            duration,
            file_current_time,
            file_duration,
            file_progress,
            get_file_data,
            is_reproducing,
            last_file_progress: computed(() => {
                return currentTime.value
            }),
            new_progress,
            on_change_progress,
            on_change_progress_value,
            on_change_progress_leave,
            on_ended,
            on_toggle_volume,
            on_reproduce,
            volume
        }
    }
}
</script>
<style ></style>