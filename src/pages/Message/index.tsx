import React, { useEffect, useState, useRef, useContext } from 'react'
import { Button, Card, InputNumber, Input, Divider, Switch, Drawer } from 'antd';
import { Menu, Space } from 'antd';
import { connect } from 'umi';
import { EditOutlined, SettingOutlined, TeamOutlined, PlusOutlined, ArrowLeftOutlined, MessageOutlined, UnlockOutlined, SearchOutlined, CloseOutlined, SwapOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import { getSDK } from "open-im-sdk-wasm";
import { CbEvents } from "open-im-sdk-wasm/lib/constant";
// import { CbEvents } from 'open-im-sdk'
import { get, post } from '@/utils/request';
import MessageList from '@/components/BaseMessageList';
import { getFromLocalStorage } from "@/utils";
import dayjs from 'dayjs'
import MessageItem from './MessageItem';
import DetailItem from './DetailItem';
import HeadImg from './HeadImg';
import { UserContext } from "../../layouts/UserProvider";
import useWindowSize from "./useWindowSize";
import './index.less';
import axios from 'axios';
const { TextArea } = Input;
const DATA = [
  {
    id: '1',
    name: 'ChatGPT',
    type: 1,
    content: '...',
    route: 'ChatGpt',
    header: 'https://bf.jdd001.top/cryptologos/chatgpt.png'
  },
  // {
  //   id: '2',
  //   name: '鲸馆小张',
  //   type: 2,
  //   content: '...',
  //   header: 'https://bf.jdd001.top/cryptologos/zy.png'
  // }
];
const Message = (props: any) => {
  const openIM = getSDK();
  const [isGroup, setIsGroup] = useState(false);
  const windowSize = useWindowSize();
  const { user } = props;
  const { token } = useContext(UserContext)!;
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [action, setAction] = useState(1);
  const [address, setAddress] = useState('');
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [userList, setUserList] = useState([]);
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
    debugger;
    if (isGroup) {
      sendMessage();
      return;
    }
    // setMessages(data => [...data, { content: 123, is_send: 0 }]);
    // saveDB(123, 0); 红烧肉怎么做
    setMessageList((data): any => {
      const newData = [...data, {type:'chatgpt', self: true, content: message, datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
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
          const newData = [...data, {type:'chatgpt', self: false, content: response.response, datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
          return newData;

        });

      }
      else {
        // 保存到数据库
        setMessageList(data => {
          const newData = [...data, {type:'chatgpt', self: false, content: "请重试一次", datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
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
    getList();
    // const openIM = new OpenIMSDK();
    loginIMTP();


  }, [token]);
  useEffect(() => {

    const chatgptData = getFromLocalStorage('chatgptData');
    if (chatgptData) {
      setMessageList(chatgptData);
    }

  }, [token]);
  useEffect(() => {
    if (current == 0) {
      localStorage.setItem('chatgptData', JSON.stringify(messageList.filter(item=>item.type=="chatgpt")));
    }
    if (bottomRef.current) {
      const container = bottomRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [messageList.length]);
  useEffect(() => console.log('user', user))
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
            members: response.data.length,
            header: response.data[0].school == '清华大学' && '/qinghua.jpg' || ''
          }];
        });
        setUserList(response.data);
      }
    })
  }
  // 发送消息
  const sendMessage = async () => {
    //创建文本消息
    const offlinePushInfo = {
      title: 'you have a new message',
      desc: '',
      ex: '',
      iOSPushSound: '',
      iOSBadgeCount: true
    }
    const newTextMsg = await openIM.createTextMessage(message)
    console.log('消息体1', newTextMsg);
    const options = {
      recvID: "",
      groupID: sessionStorage.getItem('group_id'),
      message: newTextMsg.data,
      offlinePushInfo
    };
    // 发送消息
    openIM.sendMessageNotOss(options).then(async ({ data, errCode }) => {

      setMessageList((data) => {
        const newData = [...data, { self: true, content: message, datetime: dayjs().format('YYYY-MM-DD HH:mm:ss') }];
        return newData;
      });
      setMessage('');
    }).catch(err => {

    })
  }
  const loginIMTP = async () => {
    if (sessionStorage.getItem('private_key')) {


      const wallet = new ethers.Wallet(sessionStorage.getItem('private_key') || '');
      const address = wallet.address;
      setAddress(address);
      const signature = await wallet.signMessage("hello");
      const resLog = await axios.post("https://base.jdd001.top:9201/api/v1/login", {
        signature: signature,
        senderAddress: wallet.address,
        network: 1
      });
      wallet.signMessage("hello").then(e => {
      });
      const config = {
        userID: ('01_1_' + address).toLowerCase(),
        token: resLog.data.token,
        apiAddress: "https://base.jdd001.top:9203",
        wsAddress: "wss://base.jdd001.top:9202",
        platformID: 5,
        // apiAddress: "http://119.45.212.83:10002",
        // url:"wss://base.jdd001.top:9202",                          // 平台号

      };
      openIM.login(config).then(async res => {
        console.log("login suc...", res);
        openIM.getLoginStatus().then(res => {
          // 101:登录成功 102:登陆中 103:登录失败 201:登出
        }).catch(err => {
        })
        // debugger
        // operationID
        // openIM.getLoginUser().then(res => {
        //   debugger;
        //   // 当前登录用户ID
        // }).catch(err => {

        // })+
        //2334568202 创建的群id
        // const groupBaseInfo = {
        //   groupType:0,
        //   groupName: "",
        //   introduction: "",
        //   notification: "",
        //   faceURL: "",
        //   ex: ""
        // }
        // const memberList = [
        //   {
        //     userID:"78",
        //     roleLevel:1
        //   }
        // ]
        // const options = {
        //   groupBaseInfo,
        //   memberList
        // }
        // openIM.createGroup(options).then(({ data })=>{
        //   debugger;
        // }).catch(err=>{
        //   debugger;
        // })
        // const options = {
        //   groupID: "646258100",
        //   startClientMsgID: "",
        //   count: 10,
        //   userID: ""
        // }
        // openIM.getHistoryMessageList(options).then(({ data }) => {
        //   debugger
        // }).catch(err => {
        //   debugger
        // })
        openIM.on(CbEvents.ONRECVNEWMESSAGES, (data) => {

          debugger;
        })
      }).catch(err => {
        console.log("login failed...", err);
      })
    }
  }
  // 拉取历史记录
  const getHistoryMessageList = async () => {
    const options = {
      groupID: sessionStorage.getItem('group_id') || '',
      startClientMsgID: "",
      count: 100,
      userID: ""
    }
    openIM.getHistoryMessageList(options).then(async ({ data }) => {
      const msgs = JSON.parse(data);
      for (let i = 0; i < msgs.length; i++) {
        const element = msgs[i];
        if (element.contentType < 105) {

          setMessageList((data) => {
            const newData = [...data, { sendID: element.sendID, self: element.sendID == `01_1_${address.toLowerCase()}`, content: element.content, datetime: dayjs(element.createTime).format('YYYY-MM-DD HH:mm:ss') }];
            return newData;

          });
        }
      }
    }).catch(err => {
      debugger
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
          <div className='msg_list msg_flex msg_flex_col msg_flex_between'>

            <div>
              <div className='msg_flex msg_flex_between msg_bg_subtle_hover' style={{ padding: '10px 18px', alignItems: 'center' }}>
                <div>
                  <img style={{ borderRadius: '40px', marginRight: '10px' }} width={40} src='/icon_contact.svg' />
                  <span style={{ fontSize: '16px' }}>通讯录</span>
                </div>
              </div>
              <MessageList value='none' onSelect={(v: any) => {
                setCurrent(v);
                const chatgptData = v == 0 && getFromLocalStorage('chatgptData') || [];
                if(v==0) {
                  setMessageList([]);
                }
                if (chatgptData.length > 0) {
                  setMessageList(() => chatgptData);
                  setIsGroup(false);
                }
                if(v!=0) {
                  setMessageList([]);
                  getHistoryMessageList();
                  setIsGroup(true);
                }
              }}>
                {
                  list.map((item, index) =>

                    <MessageList.Item value={index}>
                      <MessageItem data={item} />
                    </MessageList.Item>)
                }
              </MessageList>
            </div>
            <div className='msg_flex msg_flex_between msg_bg_subtle_hover' style={{ padding: '10px 18px', alignItems: 'center' }}>
              <div>
                <img style={{ borderRadius: '40px', marginRight: '10px' }} width={40} src={user.user.avatar} />
                <span style={{ fontSize: '16px' }}>{user.user.username}</span>
              </div>
              {/* <div>
                <img width={25} src="/icon_settings.svg" />
              </div> */}
            </div>
          </div>
        </div>
        <div className='msgdetails msg-w-full msg_flex msg_flex_col'>
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
                <div>
                  <Input placeholder="搜索" prefix={<SearchOutlined />} />
                </div>
              </div>
              <div className='msg_flex msg_flex_between' style={{ flex: 1, height: '100%' }}>
                <div className='' style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)' }}>
                  <div className='detail_list msg_flex msg-flex-col' ref={bottomRef}>

                    {messageList.map(item => <DetailItem type={item.type} sendID={item.sendID} data={item.content} self={!item.self} datetime={item.datetime} />)}
                    {/* <DetailItem />
  <DetailItem self /> */}

                  </div>
                  <div style={{ padding: '10px 0 8px', minHeight: '200px' }}>
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
                {windowSize.width > 950 && <div style={{ minWidth: '460px', width: '460px', background: '#F5F5F5' }}>
                  <div style={{ width: '100%', minHeight: '150px', background: 'rgb(224, 224, 224)', padding: '20px' }}>
                    <div className='msg_flex'>
                      <img style={{ borderRadius: '40px', marginRight: '10px' }} width={50} src={list[current].header} />

                      <div>
                        <p>{list[current].name}</p>
                        <p>ID:#1234</p>
                      </div>
                    </div>
                    <div style={{ margin: '20px 0 10px' }}>
                      菩提本无树，明镜亦非台
                    </div>
                    <div>
                      <div style={{ background: '#FBFBFD', display: 'inline-block', padding: '0 5px', borderRadius: '10px' }}>
                        <img width={20} src='/female.svg' />
                      </div>
                      <div style={{ background: '#FBFBFD', display: 'inline-block', padding: '0 10px', borderRadius: '10px', marginLeft: '10px' }}>
                        1992-03
                      </div>
                      <div style={{ background: '#FBFBFD', display: 'inline-block', padding: '0 10px', borderRadius: '10px', marginLeft: '10px' }}>
                        清华大学
                      </div>
                    </div>
                  </div>
                  <div>
                    {
                      userList.map(item => <div className='userlist'>
                        <img style={{ width: '40px', borderRadius: '40px', marginRight: '10px' }} src={item.avatar} />
                        <span>{item.username}</span>
                      </div>)
                    }

                  </div>
                  <div>

                  </div>
                </div>}
              </div>

            </>
          }

        </div>

      </div>
    </div>
  )
}

export default connect(({ user }: any) => ({
  user,
}))(Message)

