import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function JobsHome () {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login/?callbackUrl=/find-work/jobs");
    }

    // return (
    //     <main className="mx-auto mt-4 max-w-5xl px-6">
    //       <h2>
    //         {session !== null && (
    //           <p className="text-4xl font-semibold">Hi {session?.user?.name}!</p>
    //         )}
    //       </h2>
    //     </main>
    //   );

}