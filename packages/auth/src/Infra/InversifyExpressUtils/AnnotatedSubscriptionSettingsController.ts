import { Request, Response } from 'express'
import { inject } from 'inversify'
import {
  controller,
  httpGet,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  results,
} from 'inversify-express-utils'
import TYPES from '../../Bootstrap/Types'
import { GetSetting } from '../../Domain/UseCase/GetSetting/GetSetting'
import { BaseSubscriptionSettingsController } from './Base/BaseSubscriptionSettingsController'

@controller('/users/:userUuid')
export class AnnotatedSubscriptionSettingsController extends BaseSubscriptionSettingsController {
  constructor(@inject(TYPES.Auth_GetSetting) override doGetSetting: GetSetting) {
    super(doGetSetting)
  }

  @httpGet('/subscription-settings/:subscriptionSettingName', TYPES.Auth_RequiredCrossServiceTokenMiddleware)
  override async getSubscriptionSetting(request: Request, response: Response): Promise<results.JsonResult> {
    return super.getSubscriptionSetting(request, response)
  }
}