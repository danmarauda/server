import { DomainEventService, DailyAnalyticsReportGeneratedEvent } from '@standardnotes/domain-events'
import { TimerInterface } from '@standardnotes/time'
import { inject, injectable } from 'inversify'
import TYPES from '../../Bootstrap/Types'
import { DomainEventFactoryInterface } from './DomainEventFactoryInterface'

@injectable()
export class DomainEventFactory implements DomainEventFactoryInterface {
  constructor(@inject(TYPES.Timer) private timer: TimerInterface) {}

  createDailyAnalyticsReportGeneratedEvent(dto: {
    snjsStatistics: Array<{
      version: string
      count: number
    }>
    applicationStatistics: Array<{
      version: string
      count: number
    }>
    activityStatistics: Array<{
      name: string
      retention: number
      totalCount: number
    }>
    statisticMeasures: Array<{
      name: string
      totalValue: number
      average: number
      increments: number
      period: number
    }>
    activityStatisticsOverTime: Array<{
      name: string
      period: number
      counts: Array<{
        periodKey: string
        totalCount: number
      }>
      totalCount: number
    }>
    outOfSyncIncidents: number
    retentionStatistics: Array<{
      firstActivity: string
      secondActivity: string
      retention: {
        periodKeys: Array<string>
        values: Array<{
          firstPeriodKey: string
          secondPeriodKey: string
          value: number
        }>
      }
    }>
    churn: {
      periodKeys: Array<string>
      values: Array<{
        rate: number
        periodKey: string
      }>
    }
  }): DailyAnalyticsReportGeneratedEvent {
    return {
      type: 'DAILY_ANALYTICS_REPORT_GENERATED',
      createdAt: this.timer.getUTCDate(),
      meta: {
        correlation: {
          userIdentifier: '',
          userIdentifierType: 'uuid',
        },
        origin: DomainEventService.Analytics,
      },
      payload: dto,
    }
  }
}