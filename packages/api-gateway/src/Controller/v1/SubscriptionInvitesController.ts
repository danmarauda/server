import { Request, Response } from 'express'
import { inject } from 'inversify'
import { BaseHttpController, controller, httpDelete, httpGet, httpPost } from 'inversify-express-utils'

import TYPES from '../../Bootstrap/Types'
import { HttpServiceInterface } from '../../Service/Http/HttpServiceInterface'

@controller('/v1/subscription-invites', TYPES.StatisticsMiddleware)
export class SubscriptionInvitesController extends BaseHttpController {
  constructor(@inject(TYPES.HTTPService) private httpService: HttpServiceInterface) {
    super()
  }

  @httpPost('/', TYPES.AuthMiddleware)
  async inviteToSubscriptionSharing(request: Request, response: Response): Promise<void> {
    await this.httpService.callAuthServer(request, response, 'subscription-invites', request.body)
  }

  @httpGet('/', TYPES.AuthMiddleware)
  async listInvites(request: Request, response: Response): Promise<void> {
    await this.httpService.callAuthServer(request, response, 'subscription-invites', request.body)
  }

  @httpDelete('/:inviteUuid', TYPES.AuthMiddleware)
  async cancelSubscriptionSharing(request: Request, response: Response): Promise<void> {
    await this.httpService.callAuthServer(request, response, `subscription-invites/${request.params.inviteUuid}`)
  }

  @httpGet('/:inviteUuid/accept')
  async acceptInvite(request: Request, response: Response): Promise<void> {
    await this.httpService.callAuthServer(request, response, `subscription-invites/${request.params.inviteUuid}/accept`)
  }

  @httpGet('/:inviteUuid/decline')
  async declineInvite(request: Request, response: Response): Promise<void> {
    await this.httpService.callAuthServer(
      request,
      response,
      `subscription-invites/${request.params.inviteUuid}/decline`,
    )
  }
}
