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

export interface UserDto { 
    id?: number;
    username?: string;
    email?: string;
    phoneNumber?: string;
    role?: UserDto.RoleEnum;
}
export namespace UserDto {
    export type RoleEnum = 'ADMIN' | 'MODERATOR' | 'USER';
    export const RoleEnum = {
        ADMIN: 'ADMIN' as RoleEnum,
        MODERATOR: 'MODERATOR' as RoleEnum,
        USER: 'USER' as RoleEnum
    };
}