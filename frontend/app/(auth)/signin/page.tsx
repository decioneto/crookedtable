import Image from "next/image";

export default function SignInPage() {
    return (
        <div className="flex items-center-safe justify-center-safe">
            <div className="flex flex-col gap-8">
                <Image src={"/logo-md.png"} alt="Logo" width={240} height={230} />
                <form className="flex flex-col gap-6">
                    <input type="text" placeholder="email" className="bg-amber-50"/>
                    <input type="text" placeholder="password" className="bg-amber-50" />

                    <div className="flex gap-6 justify-end">
                        <button type="button" className="text-white"> Criar conta</button>
                        <button type="submit" className="text-white"> Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}