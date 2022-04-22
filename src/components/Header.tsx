type AppProps = {
    name: String | undefined
}

const Header = ({name}: AppProps) => {
    const date = new Intl.DateTimeFormat('en-GB', { weekday: "long", day: "numeric", month: "short" }).format(new Date())
    return (
        <header className={'w-screen h-16 p-2 flex justify-start items-center text-white'}>
            <div className="flex flex-col mb-2">
                <h1 className={'text-2xl'}>{name ?? ''}</h1>
                <p className={'text-sm text-[#727272]'}>{date}</p>
            </div>
        </header>
    )
}

export default Header