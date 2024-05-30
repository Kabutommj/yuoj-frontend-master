/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_GameAndUserCountVO_ } from '../models/BaseResponse_List_GameAndUserCountVO_';
import type { BaseResponse_List_long_ } from '../models/BaseResponse_List_long_';
import type { BaseResponse_List_UserNameAndGameCountVO_ } from '../models/BaseResponse_List_UserNameAndGameCountVO_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompetitionUserControllerService {

    /**
     * addCompetitionUser
     * @param gameId gameId
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addCompetitionUserUsingPost(
gameId: number,
): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CompetitionUserController/addCompetitionUser',
            query: {
                'gameId': gameId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * isBaoMing
     * @param gameId gameId
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static isBaoMingUsingGet(
gameId?: number,
): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CompetitionUserController/isBaoMing',
            query: {
                'gameId': gameId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryCompetitionList
     * @param userId userId
     * @returns BaseResponse_List_long_ OK
     * @throws ApiError
     */
    public static queryCompetitionListUsingGet(
userId: number,
): CancelablePromise<BaseResponse_List_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CompetitionUserController/queryCompetitionList',
            query: {
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryGameAndUserCount
     * @returns BaseResponse_List_GameAndUserCountVO_ OK
     * @throws ApiError
     */
    public static queryGameAndUserCountUsingGet(): CancelablePromise<BaseResponse_List_GameAndUserCountVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CompetitionUserController/queryGameAndUserCount',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryUserList
     * @param gameId gameId
     * @returns BaseResponse_List_long_ OK
     * @throws ApiError
     */
    public static queryUserListUsingGet(
gameId: number,
): CancelablePromise<BaseResponse_List_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CompetitionUserController/queryUserList',
            query: {
                'gameId': gameId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryUserNameAndGameCount
     * @returns BaseResponse_List_UserNameAndGameCountVO_ OK
     * @throws ApiError
     */
    public static queryUserNameAndGameCountUsingGet(): CancelablePromise<BaseResponse_List_UserNameAndGameCountVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CompetitionUserController/queryUserNameAndGameCount',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
