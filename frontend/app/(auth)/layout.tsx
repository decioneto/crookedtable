
export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="bg-[#131313] h-screen flex items-center justify-center">{children}</div>
    )
}