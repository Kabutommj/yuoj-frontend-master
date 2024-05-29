/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_List_long_ } from '../models/BaseResponse_List_long_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { CompetitionUser } from '../models/CompetitionUser';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompetitionUserControllerService {

    /**
     * addCompetitionUser
     * @param competitionUser competitionUser
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addCompetitionUserUsingPost(
competitionUser: CompetitionUser,
): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CompetitionUserController/addCompetitionUser',
            body: competitionUser,
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
userId: string,
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
     * queryUserList
     * @param gameId gameId
     * @returns BaseResponse_List_long_ OK
     * @throws ApiError
     */
    public static queryUserListUsingGet(
gameId: string,
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

}
