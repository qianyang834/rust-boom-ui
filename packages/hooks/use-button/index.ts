// import {createMachine} from 'xstate'
const add = (a: number, b: number) => a + b
// 生成一个xstate的状态机 控制按钮的状态
// function useButton (){

// 参数	说明	类型	可选值	默认值
// size	尺寸	string	medium / small / mini	—
// type	类型	string	primary / success / warning / danger / info / text	—
// plain	是否朴素按钮	boolean	—	false
// round	是否圆角按钮	boolean	—	false
// circle	是否圆形按钮	boolean	—	false
// loading	是否加载中状态	boolean	—	false
// disabled	是否禁用状态	boolean	—	false
// icon	图标类名	string	—	—
// autofocus	是否默认聚焦	boolean	—	false
// native-type	原生 type 属性	string	button / submit / reset	
// 状态机
  // const machine = createMachine({
  //   id: 'button',
  //   // 初始状态
  //   initial:'default',
  //   context: {
  //     size: 'medium',
  //     type: 'primary',
  //     plain: false,
  //     round: false,
  //     circle: false,
  //     loading: false,
  //     disabled: false,
  //     icon: '',
  //     autofocus: false,
  //     nativeType: 'button'
  //   },
  //     states:{
  //       default: {
  //         on: {
  //           HOVER: 'hover',
  //           FOCUS: 'focus',
  //           CLICK: 'click',
  //           DISABLED: 'disabled'
  //         }
  //       },
  //       hover: {
  //         on: {
  //           LEAVE: 'default',
  //           CLICK: 'click',
  //           DISABLED: 'disabled'
  //         }
  //       },
  //       focus: {
  //         on: {
  //           LEAVE: 'default',
  //           CLICK: 'click',
  //           DISABLED: 'disabled'
  //         }
  //       },
  //       click: {
  //         on: {
  //           LEAVE: 'default',
  //           DISABLED: 'disabled'
  //         }
  //       },
  //       disabled: {
  //         on: {
  //           HOVER: 'hover',
  //           FOCUS: 'focus',
  //           CLICK: 'click'
  //         }
  //       }
  //     }
  // })
// }
export default add