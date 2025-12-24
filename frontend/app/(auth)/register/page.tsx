import Image from "next/image";

export default function RegisterPage() {
    return (
        <div className="flex items-center-safe justify-center-safe">
            <div className="flex flex-col gap-8 items-center">
                <Image src={"/logo-md.png"} alt="Logo" width={240} height={230} />
                <h3 className="text-white">Criar novo cadastro</h3>
                <form className="flex flex-col gap-6">
                    <input type="text" placeholder="email" className="bg-amber-50" />
                    <select className="bg-amber-50">
                        <option value="1">Mestre</option>
                        <option value="2">Jogador</option>
                    </select>
                    <input type="text" placeholder="criar senha" className="bg-amber-50"/>
                    <input type="text" placeholder="confirmar senha" className="bg-amber-50"/>
                    <button type="submit" className="text-white self-end">Criar conta</button>
                </form>
            </div>
        </div>
    )
}