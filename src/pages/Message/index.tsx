import React, { useEffect, useState, useRef, useContext } from 'react'
import { Button, Card, InputNumber, Input, Divider, Switch, Drawer } from 'antd';
import { Menu, Space } from 'antd';
import { EditOutlined, SettingOutlined, TeamOutlined, PlusOutlined, ArrowLeftOutlined, MessageOutlined, UnlockOutlined, SearchOutlined, CloseOutlined, SwapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { get, post } from '@/utils/request';
import { getFromLocalStorage } from "@/utils";
import dayjs from 'dayjs'
import MessageItem from './MessageItem';
import DetailItem from './DetailItem';
import HeadImg from './HeadImg';
import { UserContext } from "../../layouts/UserProvider";
import './index.less';
const { TextArea } = Input;
const DATA = [

  {
    id: '2',
    name: '鲸馆小张',
    type: 2,
    content: '...',
    header: 'https://bf.jdd001.top/cryptologos/zy.png'
  }
];
export default function Message() {
  const { token } = useContext(UserContext)!;
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
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
    setMessageList((data): any => {
      const newData = [...data, { self: true, content: message, datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
      return newData;
    });
    setMessage('');
    setLoading(true);
    post('/api/v1/chat/chatgpt', {
      "prompt": message
    }).then(response => {
      // console.log('response',response);
      if (response.code == 0) {
        getLimit();
        // 保存到数据库
        setMessageList(data => {
          const newData = [...data, { self: false, content: response.response, datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
          return newData;

        });

      }
      else {
        // 保存到数据库
        setMessageList(data => {
          const newData = [...data, { self: false, content: "请重试一次", datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
          return newData;

        });

      }
      // saveDB(response.code == 0 && response.response||response.message, 0);
      setLoading(false);
    }).catch(() => setLoading(false))
    console.log(messageList);
  }
  useEffect(() => {
    // 获取chatgpt剩余条数
    if (current == 0) {
      // /api/v1/chat/chatgpt_limit
      getLimit();
    }
    // 其他操作 获取关注人数
    else {

    }

  }, [token]);
  useEffect(() => {

    const chatgptData = getFromLocalStorage('chatgptData');
    if (chatgptData) {
      setMessageList(chatgptData);
    }

  }, [token]);
  useEffect(() => {
    localStorage.setItem('chatgptData', JSON.stringify(messageList));
    if (bottomRef.current) {
      const container = bottomRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messageList.length]);
  //  获取chatgpt次数
  const getLimit = () => {
    get('/api/v1/chat/chatgpt_limit').then((response: any) => {
      console.log('response', response);
      setLimit(response);
    })
  }
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
            members: response.data.length
          }];
        });
      }
    })
  }
  return (
    <div className='message'>
      <div className='msg_main' >
        <div className='friendlist msg_flex msg_flex_col' style={{ background: 'rgb(245, 245, 245)' }}>
          <div className='header msg_flex msg_flex_between msg_items_center msg_border_b'>
            <div style={{ background: '#ababab30', flex: 1 }}>
              <input style={{ border: '0', background: 'transparent', outline: 'none', fontSize: '14px', padding: '0 5px' }} placeholder='开始新聊天' />
            </div>
            {/* <div ><TeamOutlined />&nbsp;<EditOutlined onClick={() => setAction(0)} /></div> */}
          </div>
          <div className='msg_list'>
            <div className='msg_flex msg_flex_between msg_bg_subtle_hover' style={{ padding: '10px 18px', alignItems: 'center' }}>
              <div>
                <img style={{ borderRadius: '40px', marginRight: '10px' }} width={40} src='/icon_contact.svg' />
                <span style={{ fontSize: '16px' }}>通讯录</span>
              </div>
            </div>
            <div className='msg_flex msg_flex_between msg_bg_subtle_hover' style={{ padding: '10px 18px', alignItems: 'center' }}>
              <div>
                <img style={{ borderRadius: '40px', marginRight: '10px' }} width={40} src={sessionStorage.getItem('header')} />
                <span style={{ fontSize: '16px' }}>Doctor</span>
              </div>
              <div>
                <img width={25} src="/icon_settings.svg" />
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <MessageItem data={{
                id: '1',
                name: 'ChatGPT',
                type: 1,
                content: '...',
                route: 'ChatGpt',
                header: 'https://bf.jdd001.top/cryptologos/chatgpt.png'
              }} />
            </div>

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
                      list[current]?.type == 1 && <p style={{ fontSize: '12px', color: 'gray' }}>
                        今日已用{limit?.max_daily_call_count - limit?.daily_left_call_count}次，剩余{limit?.daily_left_call_count}次

                      </p> ||
                      <p style={{ fontSize: '12px', color: 'gray' }}>
                        {list[current]?.members} 成员

                      </p>
                    }

                  </div>
                </div>

              </div>
              <div className='msg_flex msg_flex_between' style={{ flex: 1 }}>
                <div className='msg_flex msg_flex_col'>
                  <div className='detail_list msg_flex msg-flex-col' ref={bottomRef}>

                    {messageList.map(item => <DetailItem data={item.content} self={!item.self} datetime={item.datetime} />)}
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
                        {
                          loading &&
                          <Button type="primary">生成中...</Button>

                          ||
                          <Button disabled={message == ''} type="primary" onClick={getChatGptMessage}>发送</Button>

                        }

                      </div>
                    </div>

                    {/* <Input style={{ height: twoHeight && '44px' || '30px', transition: 'all 0.1s' }} onFocus={() => settwoHeight(true)} onBlur={() => settwoHeight(false)} /> */}
                    {/* <p>0/100</p> */}
                  </div>
                </div>
                {/* info */}
                <div style={{ minWidth: '460px', background: '#F5F5F5' }}>
                  <div style={{ width: '100%', minHeight: '150px', background: 'rgb(224, 224, 224)', padding: '20px' }}>
                    <div className='msg_flex'>
                      <img style={{ borderRadius: '40px', marginRight: '10px' }} width={50} src={sessionStorage.getItem('header')} />

                      <div>
                        <p>Doctor</p>
                        <p>ID:#1234</p>
                      </div>
                    </div>
                    <div style={{margin:'20px 0 10px'}}>
                      菩提本无树，明镜亦非台
                    </div>
                    <div>
                      <div style={{background:'#FBFBFD',display:'inline-block',padding:'0 5px',borderRadius:'10px'}}>
                        <img width={20} src='/female.svg'/>
                      </div>
                      <div style={{background:'#FBFBFD',display:'inline-block',padding:'0 10px',borderRadius:'10px',marginLeft:'10px'}}>
                        1992-03
                      </div>
                      <div style={{background:'#FBFBFD',display:'inline-block',padding:'0 10px',borderRadius:'10px',marginLeft:'10px'}}>
                        清华大学
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </>
          }

        </div>

      </div>
    </div>
  )
}
