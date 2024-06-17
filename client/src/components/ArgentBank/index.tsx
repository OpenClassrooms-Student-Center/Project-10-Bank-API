export type ArgentBankProps = {
  title: string,
  money: string,
  balance: string
}

const ArgentBank = ({title, money, balance}: ArgentBankProps) => {
  return (
    <section className="flex flex-col text-left justify-between w-4/5 mb-8 border-1 border-black bg-white text-blue-grey p-6 medium:flex-row">
      <div className='flex flex-col'>
        <h3 className="font-normal">{title}</h3>
        <p className="text-4.5xl leading-none font-bold m-0">{money}</p>
        <p className="m-0 leading-6">{balance}</p>
      </div>
      <div className="self-start medium:self-center">
        <button className="w-50 bg-blue-green text-white text-lg font-bold p-2 mt-4 border-2 border-l-blue-green border-t-blue-green border-b-blue-green-border border-r-blue-green-border leading-5">View transactions</button>
      </div>
    </section>
  )
}

export default ArgentBank