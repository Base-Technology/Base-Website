import React, { useEffect } from 'react'
import { Button, Card, InputNumber, Input } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ReactComponent as Group } from '@/assets/icon_group_small.svg'
export default function MessageItem(props:any) {

  const { checked,data:{header,name,type} } = props;
  // useEffect(()=>{

  // },)
  return (
    <div className='msg_overflow_hidden msg_shrink_0'>
      <div className={`msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_bg_subtle_hover ${checked && 'msg_bg_subtle_night'} msg-py-2 msg-px-4`}>
        <div className='msg_flex'>
          <div className='msg_flex msg_bg_neutral_900 msg-rounded-full msg_items_center msg-justify-center'>
            <div className='msg-text-lg'>
              <div className='msg-xs'>
                <img style={{width:'40px',borderRadius:'100%'}} src={header}/>
              </div>
            </div>
          </div>
        </div>
        <div className='msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate'>
          <div className='msg-truncate msg-flex-col msg-max-w-full'>
            <div style={{display:'flex',alignItems:'center'}}>
             {type!==1&&<Group width={20} height={20} />} <div style={{ fontSize: '16px', fontWeight: '400',marginLeft:'2px' }}>{name}</div>
            </div>
            <div className='msg-truncate'>
              {/*<div className='msg-truncate'><span style={{ display: 'inline-block', minWidth: '20px', height: '20px', borderRadius: '10px', textAlign: 'center', background: '#422DDD', padding: '0 5px', fontSize: '12px',color:'#ffffff' }}>221</span>&nbsp;you:hello</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
