import { defineComponent, ref } from "vue"
import { useButton } from "hooks"

export default defineComponent({
  name: 'Button',
  setup() {
    const count = ref(0)
    const handleClick = (a: number, b: number) => {
      count.value = useButton(a, b)
    }
    return () => <button onClick={() => handleClick(3, 2)}>{count.value}</button>
  }
})