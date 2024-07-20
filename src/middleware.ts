import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {

    const {pathname
        // searchParams
    } = request.nextUrl
    const authToken = request.cookies.get('authToken')?.value

    if (!authToken && pathname.startsWith('/admin')) {
        return Response.redirect(new URL('/dashboard', request.url))
    }

    // if (pathname.startsWith('/')) {
    //     return Response.redirect(new URL('/user', request.url))
    // }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
