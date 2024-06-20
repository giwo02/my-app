import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
   
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-white">
    <div className="flex justify-center items-center min-h-screen">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            윤지우(Youn Jiwoo)
          </h1>
          <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
          Game Art Designer Portfolio
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50"
            href="#projects"
          >
            View Projects
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#4F46E5] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4F46E5] disabled:pointer-events-none disabled:opacity-50"
            href="#contact"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <img
  alt="Hero"
  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
  height="550"
  src="tkwls.jpg"
  width="550"
/>


    </div>
  </div>
</div>

    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
  <div className="container px-4 md:px-6 flex justify-center items-center mx-auto">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] text-center">
      <div className="flex flex-col justify-center items-center space-y-4 mx-auto">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl"> 사용 가능 툴 및 활동</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
           
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">사용 가능 툴</h3>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>3D max</li>
              <li>Maya</li>
              <li>zbrush</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">활동</h3>
            <ul className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <li>3년간 서강대 게임교육원 소료 중</li>
              <li>다양한 게임 프로젝트 참여</li>
              <li>그래픽디자인 관련 대회에서 수상경력 보유</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        alt="About"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        height="310"
        src="/media_19184c5442857c71a906c236d4d3a8063c78fb2ec.png"
        width="550"
      />
    </div>
  </div>
</section>


    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center" id="projects">
    <div className="container px-4 md:px-6 flex justify-center items-center">
  <div className="space-y-12">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">포트폴리오 작업물</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          UI, 배경, 원화 등 다양한 작업이 가능합니다.</p>
      </div>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <img
          alt="UI"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
          height="310"
          src="/모작.png"
          width="550"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">UI</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
           모 게임의 간단한 UI 모작
          </p>
        </CardContent>
      </Card>
      <Card>
        <img
          alt="Illustration"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
          height="310"
          src="/08.jpg"
          width="550"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">Illustration</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
           게임 원화, 스킬, 일러스트 등의 최종 작업물
          </p>
        </CardContent>
      </Card>
      <Card>
        <img
          alt="Project 3"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
          height="310"
          src="/16.jpg"
          width="550"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-bold">background</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
          다양한 그림체의 배경 작업물
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>

</section>
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center items-center" id="contact">
<div className="container px-4 md:px-6">
  <div className="grid items-center justify-center h-full gap-4 text-center">
    <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">연락처를 남겨주세요</h2>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        저의 작업물이 마음에 드신다면 아래에 연락처를 기제해 주세요.
      </p>
    </div>
    <div className="mx-auto w-full max-w-sm space-y-2">
      <form className="flex flex-col space-y-2">
        <Input className="max-w-lg" placeholder="Name" type="text" />
        <Input className="max-w-lg" placeholder="Email" type="email" />
        <Textarea className="max-w-lg" placeholder="Message" />
        <Button className="w-full" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  </div>
</div>

</section>


  </div>
  );

  function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  }
}


