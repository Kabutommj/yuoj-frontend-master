/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_List_CompetitionQuestion_ } from '../models/BaseResponse_List_CompetitionQuestion_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompetitionQuestionControllerService {

    /**
     * addCompetitionQuestion
     * @param jsonObject jsonObject
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addCompetitionQuestionUsingPost(
jsonObject: Record<string, any>,
): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CompetitionQuestionController/addCompetitionQuestion',
            body: jsonObject,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * queryCompetitionQuestion
     * @param gameId gameId
     * @returns BaseResponse_List_CompetitionQuestion_ OK
     * @throws ApiError
     */
    public static queryCompetitionQuestionUsingGet(
gameId: string,
): CancelablePromise<BaseResponse_List_CompetitionQuestion_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CompetitionQuestionController/queryCompetitionQuestion',
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
