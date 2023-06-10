import React, { useEffect, useState, useRef } from 'react'
import { Button, Card, InputNumber, Input, Divider, Switch, Drawer } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined, SettingOutlined, TeamOutlined, PlusOutlined, ArrowLeftOutlined, MessageOutlined, UnlockOutlined, SearchOutlined, CloseOutlined, SwapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { get, post } from '@/utils/request';
import MessageItem from './MessageItem';
import DetailItem from './DetailItem';
import HeadImg from './HeadImg';
import './index.less';
const { TextArea } = Input;
const DATA = [
  {
    id: '1',
    name: 'ChatGPT',
    type: 1,
    content: '...',
    route: 'ChatGpt',
    header: 'https://bf.jdd001.top/cryptologos/chatgpt.png'
  // },
  // {
  //   id: '2',
  //   name: '鲸馆小张',
  //   type: 2,
  //   content: '...',
  //   header: 'https://bf.jdd001.top/cryptologos/zy.png'
  }
];
export default function Message() {

  const [action, setAction] = useState(1);
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [twoHeight, settwoHeight] = useState(false);
  const [iw, setIw] = useState(100);
  const inputRef = useRef(null);
  const [limit, setLimit] = useState();
  const [list, setList] = useState(DATA);
  const [openChain, setOpenChain] = useState(false);
  const chainList = [
    {
      'symbol': 'Ethereum',
      'icon': '/eth.svg'
    },
    {
      'symbol': 'BNB Chain',
      'icon': '/bnb.svg'
    },
    {
      'symbol': 'Polygon',
      'icon': '/polygon.svg'
    },
    {
      'symbol': 'Optimism',
      'icon': '/optimism.png'
    }
  ];
  const [currentChain, setCurrentChain] = useState(0);
  // chatgpt问答 
  const getChatGptMessage = () => {
    // setMessages(data => [...data, { content: 123, is_send: 0 }]);
    // saveDB(123, 0); 红烧肉怎么做
    setMessageList(data => {
      const newData = [...data, { self: true, content: message }];
      return newData;

    });
    setMessage('');
    post('/api/v1/chat/chatgpt', {
      "prompt": message
    }).then(response => {
      // console.log('response',response);
      if (response.code == 0) {
        // 保存到数据库
        setMessageList(data => {
          const newData = [...data, { self: false, content: response.response }];
          return newData;

        });

      }
      else {
        // 保存到数据库
        setMessageList(data => {
          const newData = [...data, { self: false, content: "请重试一次" }];
          return newData;

        });

      }
      // saveDB(response.code == 0 && response.response||response.message, 0);

    })
    console.log(messageList);
  }
  useEffect(() => {
    // 获取chatgpt剩余条数
    if (current == 0) {
      // /api/v1/chat/chatgpt_limit
      get('/api/v1/chat/chatgpt_limit').then(response => {
        console.log('response', response);
        setLimit(response);
      })
    }
    // 其他操作 获取关注人数
    else {

    }

  }, [current]);
  useEffect(()=>{
    // getList();
  },[]);

  // 获取
  const getList = () => {
    // /api/v1/group/user
    get('/api/v1/group/user').then(response => {
      // console.log('/api/v1/group/user', response);
      if (response.code == 0 && response.data.length > 0) {
        setList(data => {
          console.log(data);
          return [...data, {
            id: response.data[0].id,
            name: response.data[0].school,
            type: 2,
            content: '...',
            members:response.data.length
          }];
        });
      }
    })
  }
  return (
    <div>
      <div className='message'>
        <div className='msg_main' >
          <div className='friendlist msg_flex msg_flex_col'>
            <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
              <div><Input ref={inputRef} style={{ color: 'white', background: 'transparent', border: 'transparent', height: '30px' }} prefix={<SearchOutlined onClick={() => {
                inputRef.current.focus({
                  cursor: 'start',
                });
              }} style={{ color: 'var(--messagecolor)', cursor: 'pointer' }} />} /></div>
              {/* <div ><TeamOutlined />&nbsp;<EditOutlined onClick={() => setAction(0)} /></div> */}
            </div>
            <div className='msg_list'>
              {
                list.map((item, index) => <div onClick={() => {
                  setList(data => {
                    const newData = data.map(item => { item.checked = false; return item; }).map((item, index2) => {
                      if (index2 == index) {
                        item.checked = true;
                      }
                      return item;
                    })
                    return newData;
                  });
                  setCurrent(index);
                }}><MessageItem data={item} /></div>)
              }
              <p><br /></p>
            </div>
          </div>
          <div className='msgdetails msg-w-full msg_flex msg_flex_col'>
            {/* 新建聊天 */}
            {
              action == 0 && <>
                <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
                  <div onClick={() => setAction(1)}><ArrowLeftOutlined />&nbsp;&nbsp;&nbsp;&nbsp;Send Message</div>
                </div>
                {/* <div className='tokenwrap'> */}
                <div className='msg-max-w-sm tokenwrap'>
                  {/* <h1 className='msg-mt-8 msg-mb-4'>Create thread</h1> */}
                  <p style={{ marginTop: '15px' }}>Select Target Chain</p>
                  <div className='chainselect flex flex-between flex-align-center'
                    onClick={() => setOpenChain(true)}>
                    <div>
                      <img style={{ width: '30px', marginRight: '20px' }} src={chainList[currentChain].icon} />
                      <span>{chainList[currentChain].symbol}</span>
                    </div>
                    <SwapOutlined />
                  </div>
                  <p>Enter Recipient Address</p>
                  <Input style={{ color: 'white', background: '#040000', height: '50px', border: '1px solid var(--bordercolor)' }} />
                  {/* <p className='mst-opacity-50 msg-font-base'>Link twitter twitter.cardinal.so and domain naming.bonfida.org</p> */}
                  <Divider className='mst-opacity-50' style={{ background: '#ffffff' }} />
                  <div className='msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl'>
                    <span><MessageOutlined />&nbsp;&nbsp;Off-chain</span>
                    <Switch />

                  </div>
                  <br />
                  <div className='msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl'>
                    <span><UnlockOutlined />&nbsp;&nbsp;Unencrypted</span>
                    <Switch />

                  </div>
                  <br />
                  {/* </div> */}
                  <Drawer
                    bodyStyle={{
                      background: 'var(--selectbg)'
                    }}
                    headerStyle={{ display: 'none' }}
                    width="100%"
                    height="100%"
                    title="Basic Drawer"
                    placement="bottom"
                    getContainer={false}
                    open={openChain}
                    mask={false}
                  >
                    <div className='flex flex-between'>
                      <span>Select Target Chain</span>
                      <CloseOutlined onClick={() => setOpenChain(false)} />
                    </div>
                    <div className='tokenlist'>
                      {
                        chainList.map((item, index) => <div
                          className='item'
                          onClick={() => { setCurrentChain(index); setOpenChain(false); }}
                        >
                          <div>
                            <img src={item.icon} style={{ marginRight: '15px' }} />
                            <p>{item.symbol}</p>
                          </div>
                        </div>)
                      }
                    </div>
                  </Drawer>
                </div>

                <Button style={{ width: '384px', margin: '20px auto' }} type='primary' size='large' className='cardButton'>Send Message</Button>

              </>
            }
            {/* 聊天记录 */}
            {
              action == 1 && <>
                <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
                  <div className='chatgpt_limit'><HeadImg data={list[current]} />
                    <div>
                      <p>
                        {list[current]?.name}

                      </p>
                      {
                        list[current]?.type==1&& <p style={{    fontSize: '12px', color: 'gray'}}>
                        今日已用{limit?.max_daily_call_count - limit?.daily_left_call_count}次，剩余{limit?.daily_left_call_count}次

                      </p>||
                       <p style={{    fontSize: '12px', color: 'gray'}}>
                      {list[current]?.members} 成员

                     </p>
                      }
                     
                    </div>
                  </div>

                </div>
                <div className='detail_list msg_flex msg-flex-col'>

                  {messageList.map(item => <DetailItem data={item.content} self={!item.self} />)}
                  {/* <DetailItem />
                  <DetailItem self /> */}

                </div>
                <div style={{ padding: '10px 0 8px' }}>
                  <div className='baseinput'>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="说点什么吧"
                      className='baseta'

                    />
                    <div style={{ textAlign: 'right', padding: '10px' }}>
                      <Button type="primary" onClick={getChatGptMessage}>发送</Button>

                    </div>
                  </div>

                  {/* <Input style={{ height: twoHeight && '44px' || '30px', transition: 'all 0.1s' }} onFocus={() => settwoHeight(true)} onBlur={() => settwoHeight(false)} /> */}
                  {/* <p>0/100</p> */}
                </div>
              </>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
