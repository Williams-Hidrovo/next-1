import { Navbar } from "@/components";

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <main className='flex flex-col justify-center items-center h-screen p-5'>
      {children}
    </main>
    </>
  
  );
}