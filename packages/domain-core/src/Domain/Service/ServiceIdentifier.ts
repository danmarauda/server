import { ValueObject } from '../Core/ValueObject'
import { Result } from '../Core/Result'
import { ServiceIdentifierProps } from './ServiceIdentifierProps'

export class ServiceIdentifier extends ValueObject<ServiceIdentifierProps> {
  static readonly NAMES = {
    AnalyticsWorker: 'AnalyticsWorker',
    ApiGateway: 'ApiGateway',
    Auth: 'Auth',
    AuthWorker: 'AuthWorker',
    SyncingServer: 'SyncingServer',
    SyncingServerWorker: 'SyncingServerWorker',
    Revisions: 'Revisions',
    RevisionsWorker: 'RevisionsWorker',
    Files: 'Files',
    FilesWorker: 'FilesWorker',
    SchedulerWorker: 'SchedulerWorker',
    Email: 'Email',
    EmailWorker: 'EmailWorker',
    Websockets: 'Websockets',
    WebsocketsWorker: 'WebsocketsWorker',
  }

  get value(): string {
    return this.props.value
  }

  private constructor(props: ServiceIdentifierProps) {
    super(props)
  }

  static create(name: string): Result<ServiceIdentifier> {
    const isValidName = Object.values(this.NAMES).includes(name)
    if (!isValidName) {
      return Result.fail<ServiceIdentifier>(`Invalid subscription plan name: ${name}`)
    } else {
      return Result.ok<ServiceIdentifier>(new ServiceIdentifier({ value: name }))
    }
  }
}
