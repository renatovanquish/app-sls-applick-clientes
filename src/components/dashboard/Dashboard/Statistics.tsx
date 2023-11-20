import { useEffect, useState } from 'react'
import { Calendar, Building, Team, Plus2, Info, Dashboard } from 'components/icons'
import { Loading } from 'components/ui'
import Chart1 from '../chart1'
import Image from 'next/image'
import Link from 'next/link'

import { Amplify, API } from 'aws-amplify';
import { GraphQLSubscription, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as subscriptions from 'graphql/subscriptions';
import { OnUpdateClientSubscription } from 'API';

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

export default function Statistics(props: any) {
  const [client, setClient] = useState<any>();

  const handleClient = (c: any) => {
    c.percentServed = c.totalUnits ? Math.round((c.unitsServed / c.totalUnits) * 100) : 0
    c.progressUnits = 0
    c.progressVaccinations = 0
    setClient(c)
  }

  useEffect(() => {
    handleClient(props.client)
  }, [props])

  useEffect(() => {
    if (client && client.id) {
      const updateSub = API.graphql<GraphQLSubscription<OnUpdateClientSubscription>>({
        query: subscriptions.onUpdateClient,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      }).subscribe({
        next: ({ provider, value }) => {
          const { data } = value as any;
          const { onUpdateClient } = data;
          if (onUpdateClient.id === client.id) {
            handleClient(onUpdateClient);
          }
        },
        error: (error) => console.warn(error)
      });
      return () => {
        console.log('unsubscribing')
        updateSub.unsubscribe();
      }
    }
  }, [client])

  return (client && client.id) ? (<div>
    {false && <pre>{JSON.stringify(client, null, 4)}</pre>}

    <div className='mt-2 font-semibold tracking-wide text-tertiary-2'>LOCALIDADES/CNPJs</div>
    <div className='m-4 grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-5'>

      <div className='col-span-3 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex justify-between items-center gap-4 md:gap-6 2xl:gap-7.5'>
          <div className={client.firstOSDate ? 'w-3/5' : 'w-5/5'}>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Building />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Unidades</div>
            </div>
            <div className='mt-5 flex flex-wrap justify-around items-center gap-5 md:gap-7.5 2xl:gap-10'>
              <div>
                <div className="stat-value">{client.totalUnits ? client.totalUnits : 0}</div>
                <div className="stat-desc">Total cadastradas</div>
              </div>
              <div>
                <div className="stat-value">{client.unitsServed ? client.unitsServed : 0}</div>
                <div className="stat-desc">Unidades atendidas</div>
              </div>
              <div>
                <div className="stat-value">{client.percentServed}%</div>
                <div className="stat-desc">% de atendimento</div>
              </div>
            </div>
          </div>
          {client.firstOSDate && <div className='w-2/5'>
            {client.firstOSDate && (<>
              <div className='font-semibold'>{Moment(client.firstOSDate).format('DD/MM/YYYY')}</div>
              <div className='text-xs text-accent-5'>Data da primeira unidade agendada.</div>
            </>)}
            {client.lastOSDate && (<>
              <div className='mt-5 font-semibold'>{Moment(client.lastOSDate).format('DD/MM/YYYY')}</div>
              <div className='text-xs text-accent-5'>Data da última unidade agendada.</div>
            </>)}
          </div>}
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
              <div className="stat-value">{client.scheduleRouted ? client.scheduleRouted : 0}</div>
              <div className="stat-desc">Roterizado</div>
            </div>
            <div>
              <div className="stat-value">{client.scheduleConfirmed ? client.scheduleConfirmed : 0}</div>
              <div className="stat-desc">Confirmados</div>
            </div>
            <div>
              <div className="stat-value">{client.schedulePending ? client.schedulePending : 0}</div>
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
            <div className="mt-5 stat-value">{client.totalEligibles ? client.totalEligibles : 0}</div>
            <div className="stat-desc">Total cadastrados</div>
          </div>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Plus2 />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Aplicações</div>
            </div>
            <div className="mt-5 stat-value">{client.totalVaccinations ? client.totalVaccinations : 0}</div>
            <div className="stat-desc">Doses aplicadas</div>
          </div>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Info />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Adesões</div>
            </div>
            <div className="mt-5 stat-value">{client.PercentAdherence ? client.PercentAdherence : 0}%</div>
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

        <div className='mt-5 flex justify-between'>
          <div>% unidades atendidas</div>
          <div>{client.progressUnits}</div>
        </div>
        <progress className="w-full progress progress-warning" value={client.progressUnits} max="100"></progress>

        <div className='mt-2 flex justify-between'>
          <div>% doses aplicadas</div>
          <div>{client.progressVaccinations}</div>
        </div>
        <progress className="w-full progress progress-success" value={client.progressVaccinations} max="100"></progress>
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

  </div>) : (<Loading />)
}
