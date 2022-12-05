import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './index.less'

/**
 * @param {Number} delay 动画延迟触发时间  默认 0s
 * @param {Number} down 盒子下浮距离  默认 50px
 */

const floatDomClassName = '.FloatDiv_component .FloatDiv_component_aniBox'
let _throttleFn:any;
let doms:any = []
// HOOK写法
function FloatDiv({ children, delay = 0, down = 50 }:any) {
  // eslint-disable-next-line no-unused-vars
  const [a, as] = useState([])
  useEffect(() => {
    // 获取所有需要设置的dom，并将伪数组转化为数组
    const d = Array.prototype.slice.call(
      document.querySelectorAll(floatDomClassName)
    )
    doms = d
    init()
  }, [])

  const init = () => {
    if ('IntersectionObserver' in window) {
      const floatDomObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          // 如果元素可见
          if (entry.isIntersecting) {
            const floatDom = entry.target
            const timer = setTimeout(() => {
              floatDom.className = 'box1 FloatDiv_component_aniClass'
              clearTimeout(timer)
            }, 300)
            floatDomObserver.unobserve(floatDom)
            doms.splice(index, 1)
          }
        })
      })
      doms.forEach((floatDomItem:any) => {
        floatDomObserver.observe(floatDomItem)
      })
    } else {
      inViewShow()
      _throttleFn = throttle(inViewShow)
      document.addEventListener('scroll', _throttleFn.bind(this))
    }
  }

  const inViewShow = () => {
    let len = doms.length
    for (let i = 0; i < len; i++) {
      const targetFloatElement = doms[i]
      const { top, bottom } = targetFloatElement.getBoundingClientRect()
      // 出现在视野的时候加载图片
      if (
        top - down + 10 < document.documentElement.clientHeight &&
        bottom >= 0
      ) {
        const timer = setTimeout(() => {
          targetFloatElement.className = 'box1 FloatDiv_component_aniClass'
          clearTimeout(timer)
        }, 300)
        // 移除掉已经显示的
        doms.splice(i, 1)
        len--
        i--
        if (doms.length === 0) {
          // 如果全部都加载完 则去掉滚动事件监听
          document.removeEventListener('scroll', _throttleFn)
        }
      }
    }
  }
  const throttle = (fn: { (): void; apply?: any; }, delay = 100, mustRun = 30) => {
    let t_start:any = null
    let timer:any = null
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    return function () {
      const t_current = +new Date()
      // eslint-disable-next-line prefer-rest-params
      const args = Array.prototype.slice.call(arguments)
      clearTimeout(timer)
      if (!t_start) {
        t_start = t_current
      }
      if (t_current - t_start > mustRun) {
        fn.apply(context, args)
        t_start = t_current
      } else {
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      }
    }
  }

  return (
    <div className="FloatDiv_component">
      <div
        className="FloatDiv_component_aniBox"
        style={{
          transition: `all 1s ease ${delay}s`,
          transform: `translate(0, ${down}px)`
        }}
      >
        {/* 页面输入数据 */}
        {children}
      </div>
    </div>
  )
}

FloatDiv.propTypes = {
  children: PropTypes.element,
  delay: PropTypes.number,
  down: PropTypes.number
}

export default FloatDiv