import { lusitana } from "../ui/fonts";

export default async function Page() {
    return (
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
    )
}