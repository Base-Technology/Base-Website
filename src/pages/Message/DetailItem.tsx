import React, { useEffect, useState } from 'react'
import { Button, Card, InputNumber, Input } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { get } from '@/utils/request';

export default function MessageItem(props) {

  const { self, data, datetime, sendID,type } = props;
  const [header, setHeader] = useState('');
  const getHeader = async () => {
    const res = await get(`/api/v1/user?imtp_user_id=${sendID}`);
    setHeader(res.user.avatar);
  }
  useEffect(() => {
    getHeader();
  }, [])

  return (
    <div style={{ marginBottom: '10px' }} className={`${self && 'base-hr' || ''}`}>
      <div className={`msg_flex ${!self && 'msg-justify-end'}  msg-ml-10`}>
        {self&&type!="chatgpt"&&<div>
          <img style={{width:'40px',borderRadius:'40px',marginRight:'10px'}} src={header} />
        </div>}
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
