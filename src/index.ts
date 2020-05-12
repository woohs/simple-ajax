import XHR from './xhr';
export async function ajaxPost (url: string, data: Record<string, any>, type='GET'): Promise<any> {
    return new Promise((resolve, reject) => {
        XHR({
            url: url,
            type,
            data: JSON.stringify(data),
            withCredentials: false,
            header: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Accept: 'application/json,text/javascript'
            },
            success: (res: any) => {
                resolve(res);
            },
            fail: (err: any) => {
                reject(err || new Error('Ajax error'));
            }
        });
    });
}
