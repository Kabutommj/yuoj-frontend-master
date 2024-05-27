/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_Competition_ } from '../models/BaseResponse_Competition_';
import type { BaseResponse_List_Competition_ } from '../models/BaseResponse_List_Competition_';
import type { Competition } from '../models/Competition';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompetitionControllerService {

    /**
     * createCompetition
     * @param competition competition
     * @returns BaseResponse_Competition_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static createCompetitionUsingPost(
competition: Competition,
): CancelablePromise<BaseResponse_Competition_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/competition/createCompetition',
            body: competition,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCompetition
     * @param id id
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteCompetitionUsingGet(
id?: number,
): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/competition/deleteCompetition',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCompetitionDetail
     * @param id id
     * @returns BaseResponse_Competition_ OK
     * @throws ApiError
     */
    public static getCompetitionDetailUsingGet(
id?: number,
): CancelablePromise<BaseResponse_Competition_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/competition/getCompetitionDetail',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCompetitionList
     * @returns BaseResponse_List_Competition_ OK
     * @throws ApiError
     */
    public static getCompetitionListUsingGet(): CancelablePromise<BaseResponse_List_Competition_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/competition/getCompetitionList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateCompetition
     * @param competition competition
     * @returns BaseResponse_Competition_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateCompetitionUsingPost(
competition: Competition,
): CancelablePromise<BaseResponse_Competition_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/competition/updateCompetition',
            body: competition,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
