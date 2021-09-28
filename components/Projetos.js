import React from 'react'

export default function Projetos() {
    return (
        <div className=" container lg:w-7/12 m-auto">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/projetos/wallet.png" alt="Man looking at item at a store"/>
                    </div>
                    <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Wallet</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        Aplicativo mobile de finanças pesssoais</p>
                    <p className="mt-2 text-gray-500">
                        Este aplicativo foi desenvolvido em react-native com expo, possue autenticação com firebase e duas funcionalidades básicas, cadastrar as despesa e receitas do usuário  e por fim mostrar o saldo remanescente.</p>
                    <a href="https://github.com/soluger/wallet" className="text-indigo-500 hover:underline">
                        Projeto no github</a>
                    <a href="" className="text-indigo-500 hover:underline ml-4">
                        Download do APK</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
