/**
 * GratisBrockiBackend API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: @springdoc.version@
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Item } from './item';

export interface Picture { 
    id?: number;
    createdDate?: Date;
    lastModifiedDate?: Date;
    archivedDate?: Date;
    name?: string;
    url?: string;
    item?: Item;
}