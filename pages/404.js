import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
      console.log(router);
    }, 5000)
  }, [router]);

  return ( 
    <div className="not-found">
      <h1>Oooopsss</h1> 
      <h2>That page cannot be found</h2>
      <p>Go to <Link href="/"><a>Home</a></Link></p>
    </div>
   );
}
 
export default NotFound;