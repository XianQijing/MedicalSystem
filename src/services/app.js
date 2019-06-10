import service from '@/utils/request'

export function login (params) {
  return service({
    url: '/api/v1/site/login',
    method: 'post',
    params: params
  })
}
