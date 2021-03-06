import React, { Component } from 'react';
import RadioGroup from '../form/RadioGroup';
import FI from '../form/FormItem'
import Select from '../form/Select'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stageVal: 2,
      stage: 3,
      options: [{key: 1, text: '小学'}, {key: 2, text: '初中'}, {key: 3, text: '高中', disabled: true}]
    }
  }
  
  render () {
    const { stageVal, stage, options } = this.state;
    return (
      <div>
        <FI label="单选学段" labelWidth='100px' required={ true }>
          <RadioGroup
            options={ options }
            value={ stageVal }
            disabled={ false }
            onChange={ v=>{this.setState({stageVal: v}); console.log('单选学段：'+v)} }
          />
        </FI>
        <FI label="下拉学段" labelWidth='100px' required={ true }>
          <Select style={{ width: '80px' }}
            value={ stage }
            options={ options }
            all = { 1 }
            onChange={e=>{this.setState({stage: e.target.value}); console.log('下拉学段：'+e.target.value)}}
          />
        </FI>
      </div>
    )
  }
}

////////////////////////////// RadioGroup usage:

// <RadioGroup
//    options={ options }
//    value={ stageVal }
//    disabled={ false }
//    onChange={ v=>{this.setState({stageVal: v}); console.log(v)} }
// />

// //注意：

// 可以使用disabled设置是否为只读
// options 是选项数据，只能是数组里套对象的形式，如：
//   options: [
//     {key: 1, text: '小学'}, 
//     {key: 2, text: '初中'}, 
//     {key: 3, text: '高中'}
//   ]

////////////////////////////// FormItem usage:  

//注意引用的时候可以直接简写 FI

// <FormItem
//    label="学段"          左侧文字内容
//    labelWidth='80px'     左侧宽度
//    required={ true }     是否必填（是否显示 * ） 也可以是 直接 required
//    inline                行内元素
//    flex='1'              这个值自己去尝试，为1 时填满整个宽度
//    style                 用于改变此组件整体的样式，是给xkcpm-form-item的
//    className             给form-item-content类的-与之并列
// />
// content
// </FormItem>
