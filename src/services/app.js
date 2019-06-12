import service from '@/utils/request'
import qs from 'qs'

// 用户端、管理端登录
export function login (params) {
  return service({
    url: '/api/v1/site/login?access-token=',
    method: 'post',
    data: qs.stringify(params)
  })
}
// 获取下拉列表数据
export function dict () {
  const params = 'subject,professional,postLevel,education,degree,source,itemStatus,tuition,itemKind'
  return service({
    url: '/api/v1/common/dict',
    method: 'get',
    params: {
      dictField: params
    }
  })
}
// 用户端注册
export function register (params) {
  return service({
    url: '/api/v1/site/register',
    method: 'post',
    data: qs.stringify(params)
  })
}
