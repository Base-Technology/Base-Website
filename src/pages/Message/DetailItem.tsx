import React, { useEffect } from 'react'
import { Button, Card, InputNumber, Input } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function MessageItem(props) {

  const { self, data,datetime } = props;
  // useEffect(()=>{

  // },)
  return (
    <div style={{ marginBottom: '10px' }} className={`${self && 'base-hr' || ''}`}>
      <div className={`msg_flex ${!self && 'msg-justify-end'}  msg-ml-10`}>
        <div className='msg_flex msg-flex-col' style={{ paddingRight: '20px' }}>
          <div className={`msg_flex msg-flex-col msg-justify-end msg_items_center msg-border ${self && 'msg_bg_subtle_night' || 'msg_bg_subtle_light'}`}>
            <div className='msg-py-2 msg-px-4'>
              {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}

              <div style={{ whiteSpace: 'pre-line' }}>
                {data}
              </div>
              <div className='mst-opacity-50 msg-xs-small'>{!self && 'Q' || 'A'} {datetime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
