const NOOP = function(): void {
    /* Noop */
}
interface XHROpts {
    url: string
    type: string
    success?: Function
    fail?: Function
    withCredentials: boolean
    header?: any
    data?: any
}

function isEmpty(obj: {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

export default function(opts: XHROpts): XMLHttpRequest {
    // 兼容IE8   
    const useXDomainRequest: boolean = 'XDomainRequest' in window
    const req = useXDomainRequest ? new (window as any).XDomainRequest() : new XMLHttpRequest()
    req.open(opts.type || 'GET', opts.url, true)
    req.success = opts.success || NOOP
    req.fail = opts.fail || NOOP
    req.withCredentials = !!opts.withCredentials
    if (useXDomainRequest) {
        req.onload = opts.success || NOOP
        req.onerror = opts.fail || NOOP
        req.onprogress = NOOP
    } else {
        req.onreadystatechange = function(): void {
            if (req.readyState == 4) {
                const status = req.status
                if (status >= 200) {
                    try {
                        const response = JSON.parse(req.responseText)
                        opts.success && opts.success(response)
                    } catch (e) {
                        opts.fail && opts.fail(e)
                    }
                } else {
                    opts.fail && opts.fail(req.statusText)
                }
            }
        }
    }
    
    if (req.setRequestHeader) {
      for (const key in opts.header) {
        if (opts.header.hasOwnProperty(key)) {
          req.setRequestHeader(key, opts.header[key])
        }
      }
    } else if (opts.header && !isEmpty(opts.header)) {
        throw new Error('Headers cannot be set on an XDomainRequest object')
    }

    if (opts.type === 'POST') {
        req.send(opts.data)
    } else {
        req.send()
    }
  
    return req
}
