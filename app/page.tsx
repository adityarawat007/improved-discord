
import { UserButton } from "@clerk/nextjs"
import { ModeToggle
 } from "@/components/ui/mode-toggle"
export default function Home() {
  return( 
  <div className="">
    <UserButton afterSignOutUrl="/"/>
    <ModeToggle/>    
  </div>
)}
