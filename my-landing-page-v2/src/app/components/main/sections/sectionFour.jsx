export default function SectionFour() {
  return (
    <section className="flex flex-col flex-wrap px-5 md:px-15 lg:px-20 xl:px-25 py-15 lg:py-20 gap-10 bg-[#ded8cf] w-full" id="aziende">
        <p className="text-[9px] text-gray-400">ESPERIENZE & COLLABORAZIONI</p>
        <div className="text-2xl flex flex-col gap-4 md:flex-row md:justify-between flex-wrap font-bold text-black ">
            <a href="https://www.capgemini.com/it-it/" target="_blank" rel="noopener noreferrer">
                Capgemini
            </a>

            <a href="https://epicode.com/it/" target="_blank" rel="noopener noreferrer">
                Epicode
            </a>
            
            <a href="https://www.nicolaauriemma.com/" target="_blank" rel="noopener noreferrer">
                Nicola Auriemma
            </a>
        </div>
    </section>
  )
}
