import { 
    NextRequest,
    NextResponse
 } from "next/server"
 import { 
    verifyToken
 } from "./lib/jwt";

 const protectedPath = ['/dashboard','/profile']

export async function middleware(request: NextRequest) {
    // pre   中间件   next 
    // console.log('中间件一定要过')
    const {pathname} = request.nextUrl
    // console.log(pathname);
    // 非保护的
    if(!protectedPath.some(p=>pathname.startsWith(p))){
        return NextResponse.next()
    }
    
    // login?
    const accessToken = request.cookies.get('accessToken')?.value
    const refreshToken = request.cookies.get('refreshToken')?.value
    console.log(accessToken,refreshToken,'=====================')

    if(!accessToken&&!refreshToken){
        return NextResponse.redirect(new URL('/login',request.url))
    }

    if(accessToken){
        const accessPayload = await verifyToken(accessToken);
        // console.log(accessPayload,'/////////');
        if(accessPayload){
            const requestHeaders = new Headers(request.headers);
            requestHeaders.set(
                'x-user-id',
                accessPayload.userId as string  // 断言 表示确定是string 类型
            );
            return NextResponse.next({
                request:{
                    headers:requestHeaders
                }
            })
        }
    }
    // accessToken 过期了  做无感刷新
    if(refreshToken){
        const refreshPayload = await verifyToken(refreshToken);
        if(refreshPayload){
            const userId = refreshPayload.userId as string; // 断言
            const refreshUrl = new URL('/api/auth/refresh',request.url);
            refreshUrl.searchParams.set('redirect',request.url);

            return NextResponse.redirect(refreshUrl);
        }
    }
    return NextResponse.redirect(new URL('/login',request.url))
}