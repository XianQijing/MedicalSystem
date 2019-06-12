import service from '@/utils/request'
import qs from 'qs'

// 获取项目经费
export function login (params) {
  return service({
    url: '/api/v1/fund/entry-account',
    method: 'get'
  })
}
// 选择项--项目类别
export function getCid (params) {
  return service({
    url: '/api/v1/items/item-jhclass',
    method: 'get'
  })
}