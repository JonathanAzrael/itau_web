import PhoneIcon from '@/assets/icon-phone.svg'

import { Container } from "./Container";
import Image from 'next/image';
import SoluctionIcon from '@/assets/icon-solutions.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import CardIcon from '@/assets/icon-card.svg'

import ImagePhone from '@/assets/phone.png'

export function SectionServices() {
    return (
        <section className="w-full h-[965px] pt-32">
            <Container>
                <div className='flex-1 max-w-[594px] '>
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
                    <h1 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h1>
                    <p className="text-lg max-w-[554px] mb-16">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                    <ul className='flex flex-col items-start gap-9'>
                        <li className='flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray'>
                            <div className='w-7 h-7 flex items-center justify-center'>
                            <Image
                                src={PhoneIcon}
                                alt='Icon Phone'
                            />
                            </div>
                            <p className='flex-1 text-txt-gray pr-2'>
                                Acompanhar sua conta, fazer transferências e pagamentos de onde estiver
                            </p>
                        </li>
                        <li className='flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray'>
                            <div className='w-7 h-7 flex items-center justify-center'>
                            <Image
                                src={SoluctionIcon}
                                alt='Soluction icon'
                            />
                            </div>
                            <p className='flex-1 text-txt-gray pr-2'>
                                Soluções de empresas e renegociação para organizar suas finanças
                            </p>
                        </li>
                        <li className='flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray'>
                            <div className='w-7 h-7 flex items-center justify-center'>
                            <Image
                                src={OptionsIcon}
                                alt='Options Icon'
                            />
                            </div>
                            <p className='flex-1 text-txt-gray pr-2'>
                                Diversas opções de investimentos, de acordo com o seu perfil de investidor
                            </p>
                        </li>
                        <li className='flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray'>
                            <div className='w-7 h-7 flex items-center justify-center'>
                            <Image
                                src={CardIcon}
                                alt='Card Icon'
                            />
                            </div>
                            <p className='flex-1 text-txt-gray pr-2'>
                                Acompanhar sua conta, fazer transferências e pagamentos de onde estiver
                            </p>
                        </li>
                    </ul>
                </div>
                
            <div className=' right-0 flex items-center justify-center w-[32%] h-full'>
                <Image src={ImagePhone} alt="Phone" />
            </div>
            </Container>
        </section>
    )
}