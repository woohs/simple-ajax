interface XHROpts {
    url: string;
    type: string;
    success?: Function;
    fail?: Function;
    withCredentials: boolean;
    header?: any;
    data?: any;
}
export default function (opts: XHROpts): XMLHttpRequest;
export {};
