import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Calendar, Building, Team, Plus2, Info, Dashboard } from 'components/icons'
import Chart1 from '../chart1'

interface Props { }

const DashClientes: FC<Props> = ({ }) => {

  const [customer, setCustomer] = useState({
    name: 'Cliente Teste',
  } as any)

  return (<div className=''>
    <div className='text-center text-4xl font-bold text-tertiary-2 tracking-wide'>{customer.name}</div>

    <div className='mt-2 font-semibold tracking-wide text-tertiary-2'>LOCALIDADES/CNPJs</div>

    <div className='m-4 grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-5'>

      <div className='col-span-3 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex justify-between items-center gap-4 md:gap-6 2xl:gap-7.5'>
          <div className='w-3/5'>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Building />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Unidades</div>
            </div>
            <div className='mt-5 flex flex-wrap justify-around items-center gap-5 md:gap-7.5 2xl:gap-10'>
              <div>
                <div className="stat-value">37</div>
                <div className="stat-desc">Total cadastradas</div>
              </div>
              <div>
                <div className="stat-value">14</div>
                <div className="stat-desc">Unidades atendidas</div>
              </div>
              <div>
                <div className="stat-value">38%</div>
                <div className="stat-desc">% de atendimento</div>
              </div>
            </div>
          </div>
          <div className='w-2/5'>
            <div className='font-semibold'>24/03/2024</div>
            <div className='text-xs text-accent-5'>Data da primeira unidade agendada.</div>
            <div className='mt-5 font-semibold'>12/05/2024</div>
            <div className='text-xs text-accent-5'>Data da última unidade agendada.</div>
          </div>
        </div>
      </div>

      <div className='col-span-2 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex flex-col justify-between'>
          <div className='flex gap-4 items-center'>
            <div className="stat-figure text-tertiary-2">
              <Calendar />
            </div>
            <div className="stat-title font-bold text-tertiary-2">Agendamentos</div>
          </div>
          <div className='mt-5 flex flex-wrap justify-around items-center gap-4 md:gap-6 2xl:gap-7.5'>
            <div>
              <div className="stat-value">23</div>
              <div className="stat-desc">Roterizado</div>
            </div>
            <div>
              <div className="stat-value">13</div>
              <div className="stat-desc">Confirmados</div>
            </div>
            <div>
              <div className="stat-value">10</div>
              <div className="stat-desc">À Confirmar</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className='mt-8 font-semibold tracking-wide text-tertiary-2'>POTENCIAL ELEGIVEL</div>

    <div className='m-4 grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-5'>
      <div className='col-span-3 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex flex-wrap justify-around items-center gap-5 md:gap-7.5 2xl:gap-10'>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Team />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Colaboradores</div>
            </div>
            <div className="mt-5 stat-value">1.400</div>
            <div className="stat-desc">Total cadastrados</div>
          </div>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Plus2 />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Aplicações</div>
            </div>
            <div className="mt-5 stat-value">700</div>
            <div className="stat-desc">Doses aplicadas</div>
          </div>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Info />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Adesões</div>
            </div>
            <div className="mt-5 stat-value">50,0%</div>
            <div className="stat-desc">% de adesão</div>
          </div>
        </div>
      </div>

      <div className='col-span-2 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex gap-4 items-center'>
          <div className="stat-figure text-tertiary-2">
            <Dashboard />
          </div>
          <div className="stat-title font-bold text-tertiary-2">Progressão de campanha</div>
        </div>

        <div className='mt-5'>% unidades atendidas</div>
        <progress className="w-full progress progress-warning" value={45} max="100"></progress>

        <div className='mt-2'>% doses aplicadas</div>
        <progress className="w-full progress progress-success" value={67} max="100"></progress>
      </div>
    </div>

    <div className='mt-8 mx-4'>
      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <Chart1 />
      </div>
    </div>

    <div className='mt-8 mx-4 flex justify-center'>
      <Link href="/page/ia"><Image className='rounded-lg shadow md:shadow-lg' alt="IA" src="/ia.png" width={985} height={275} /></Link>
    </div>

  </div>)
}

export default DashClientes
