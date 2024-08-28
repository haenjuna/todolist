<template>
    <div class="container mt-4">
        <ul class="list-group">
            <li v-for="t in result.content" :key="t.tno" @click="handleMoveRead(t.mno)"
                class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <span>{{ t.title }}</span>
                <span class="badge bg-primary rounded-pill">{{ t.writer }}</span>
            </li>
        </ul>

        <nav aria-label="Page navigation" class="mt-4">
            <ul class="pagination justify-content-center">
                <li v-for="(p, idx) in pageArr" :key="idx" class="page-item">
                    <span @click="() => handleClickPage(p.page)" class="page-link" style="cursor:pointer;">
                        {{ p.label }}
                    </span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
import { getList } from '../../apis/todoAPI';


const router = useRouter()
const route = useRoute()

const refresh = ref(false)
const result = ref({
        content:[],
        number:0,
        size:10,
        totalElements:0,
        totalPages:0
    })

const loadPageData = async (page) => {
    const data = await getList(page)
    result.value = data
}

const pageArr = computed(() => {
    const currentPage = result.value.number + 1
    let lastPage = Math.ceil(currentPage / 10.0) * 10
    const start = lastPage - 9 
    const prev = start !== 1
    const next = result.value.totalPages > lastPage

    if(result.value.totalPages < lastPage){
        lastPage = result.value.totalPages
    }

    const pageArr = []

    if(prev){
        pageArr.push({page: start - 1, label: 'Previous' })
    }

    for(let i = start; i <= lastPage ; i++){
        pageArr.push({page: i, label: i })
    }

    if(next){
        pageArr.push({page: lastPage + 1, label: 'Next' })
    }
    return pageArr
})

onMounted(() => {
    loadPageData(route.query.page || 1)
})

watch(refresh, () => {
    loadPageData(route.query.page || 1)
})

onBeforeRouteUpdate((to, from, next) => {
    loadPageData(to.query.page || 1)
    next()
})

const handleClickPage = (pageNum) => {
    router.push({ query: { page: pageNum } }).then(() => {
        refresh.value = !refresh.value
    })
}

const handleMoveRead = (mno) => {
    router.push(`/todo/read/${mno}`)
}
</script>

<style lang="scss" scoped>

</style>
