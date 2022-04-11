import { MockMethod } from 'vite-plugin-mock'
/*
 * MockMethod结构说明
{
  // 请求地址
  url: string;
  // 请求方式
  method?: MethodType;
  // 设置响应结果返回的延迟时间
  timeout?: number;
  // 状态吗
  statusCode?:number;
  // 响应数据（JSON）
  response?: ((opt: { [key: string]: string; body: Record<string,any>; query:  Record<string,any>, headers: Record<string, any>; }) => any) | any;
  // 响应（非JSON）
  rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
}
*/

export default [
  {
    url: '/api/get/normal',
    method: 'get',
    response: ({ query }: any) => {
      console.log('请求参数', query)
      return {
        code: 0,
        data: {
          serverSay: 'normal-服务端响应' + new Date().toLocaleDateString(),
          reqData: query
        }
      }
    }
  },
  {
    url: '/api/get/delay',
    timeout: 3000,
    method: 'get',
    response: ({ query }: any) => {
      console.log('请求参数', query)
      return {
        code: 0,
        data: {
          serverSay: 'delay-服务端响应' + new Date().toLocaleDateString(),
          reqData: query
        }
      }
    }
  },
  {
    url: '/api/post/normal',
    method: 'post',
    response: ({ body }: any) => {
      return {
        code: 0,
        data: {
          serverSay: 'normal-post-服务端响应' + new Date().toLocaleDateString(),
          reqData: body
        }
      }
    }
  },
  {
    url: '/api/post/delay',
    method: 'post',
    timeout: 2000,
    response: ({ body }: any) => {
      return {
        code: 0,
        data: {
          serverSay: 'delay-post-服务端响应' + new Date().toLocaleDateString(),
          reqData: body
        }
      }
    }
  },
  {
    url: '/api/put/normal',
    method: 'put',
    response: ({ body }: any) => {
      return {
        code: 0,
        data: {
          serverSay: 'normal-put-服务端响应' + new Date().toLocaleDateString(),
          reqData: body
        }
      }
    }
  },
  {
    url: '/api/put/delay',
    method: 'put',
    timeout: 3000,
    response: ({ body }: any) => {
      return {
        code: 0,
        data: {
          serverSay: 'delay-put-服务端响应' + new Date().toLocaleDateString(),
          reqData: body
        }
      }
    }
  },
  {
    url: '/api/del/normal',
    method: 'delete',
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {
          serverSay: 'normal-delete-服务端响应' + new Date().toLocaleDateString(),
          reqData: query
        }
      }
    }
  },
  {
    url: '/api/del/delay',
    method: 'delete',
    timeout: 3000,
    response: ({ query }: any) => {
      return {
        code: 0,
        data: {
          serverSay: 'normal-delete-服务端响应' + new Date().toLocaleDateString(),
          reqData: query
        }
      }
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    }
  }
] as MockMethod[]
