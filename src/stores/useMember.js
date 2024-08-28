import { defineStore } from "pinia";
import { ref, toRef, computed } from "vue";
import { useRouter } from "vue-router";

const useMember = defineStore('useMember',()=>{

    const router = useRouter()

    const userId = ref({mid:''})

    const toMid = toRef(userId.value, "mid")

    const signin = (str) => {
        userId.value.mid = str
        localStorage.setItem("mid",str)
        router.replace("/todo/list")
    }
    const signout = () => {
        userId.value.mid = ''
        localStorage.removeItem("mid")
      }

      const computedMid = computed(() => {

        if(! localStorage.getItem("mid")) {
          return ''
        }
    
        if(localStorage.getItem("mid")){
          userId.value.mid = localStorage.getItem("mid")
        }
    
        if(toMid){
          return toMid
        }
    
        return toMid
      })
    return {userId, signin, signout, computedMid}
})

export default useMember