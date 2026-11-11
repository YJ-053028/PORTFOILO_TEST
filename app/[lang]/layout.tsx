import {notFound} from 'next/navigation';
import {Header,Footer} from '@/components/site-header';
import {copy,type Lang} from '@/lib/projects';
export function generateStaticParams(){return [{lang:'ko'},{lang:'en'}]}
export default async function LangLayout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params;if(!(lang in copy))notFound();const locale=lang as Lang;return <><Header lang={locale}/>{children}<Footer lang={locale}/></>}
